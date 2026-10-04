import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  layer: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  life: number;
  maxLife: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // High-DPI Canvas Scaling for Crisp rendering on Mobile & Retina displays
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isDark = theme === "dark";

    // Dynamic Color Palette for Cyberpunk Aesthetic
    const colorsDark = [
      "56, 189, 248",   // Cyan 400
      "59, 130, 246",   // Blue 500
      "168, 85, 247",   // Purple 500
      "255, 255, 255"    // Soft White
    ];

    const colorsLight = [
      "14, 165, 233",   // Sky 600
      "37, 99, 235",    // Blue 600
      "79, 70, 229"     // Indigo 600
    ];

    const palette = isDark ? colorsDark : colorsLight;

    // Responsive Star Density with 3 Parallax Layers
    const density = Math.floor((width * height) / 8500);
    const numStars = Math.max(density, 80);

    const stars: Star[] = Array.from({ length: numStars }, () => {
      const layer = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: layer === 1 ? Math.random() * 0.8 + 0.3 : layer === 2 ? Math.random() * 1.2 + 0.7 : Math.random() * 1.8 + 1.2,
        speed: layer === 1 ? Math.random() * 0.12 + 0.04 : layer === 2 ? Math.random() * 0.3 + 0.12 : Math.random() * 0.5 + 0.25,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (Math.random() * 0.012 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
        layer,
        color: palette[Math.floor(Math.random() * palette.length)],
      };
    });

    // Shooting Star Manager
    let shootingStar: ShootingStar | null = null;
    let lastShootingStarTime = Date.now();
    const shootingStarInterval = 4500; // Trigger check every 4.5s

    const createShootingStar = (): ShootingStar => {
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 deg downward trajectory
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * (height * 0.3);
      return {
        x: startX,
        y: startY,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 9 + 7,
        angle,
        opacity: 1,
        active: true,
        life: 0,
        maxLife: Math.random() * 35 + 25,
      };
    };

    const animate = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      ctx.clearRect(0, 0, currentWidth, currentHeight);

      // 1. Render Floating Stars
      stars.forEach((star) => {
        // Upward Motion
        star.y -= star.speed;
        if (star.y < -10) {
          star.y = currentHeight + 10;
          star.x = Math.random() * currentWidth;
        }

        // Twinkle Logic
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const alpha = Math.max(0.1, Math.min(1, star.opacity)) * (isDark ? 0.85 : 0.45);

        // Layer 3 Radial Glow (Dark Mode only)
        if (star.layer === 3 && isDark) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3.5
          );
          glow.addColorStop(0, `rgba(${star.color}, ${alpha * 0.8})`);
          glow.addColorStop(1, `rgba(${star.color}, 0)`);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Star Core Body
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();
      });

      // 2. Render Shooting Star (Meteor)
      const now = Date.now();
      if (!shootingStar && now - lastShootingStarTime > shootingStarInterval) {
        if (Math.random() < 0.65) {
          shootingStar = createShootingStar();
        }
        lastShootingStarTime = now;
      }

      if (shootingStar && shootingStar.active) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.life += 1;

        const progress = shootingStar.life / shootingStar.maxLife;
        shootingStar.opacity = 1 - progress;

        if (shootingStar.life >= shootingStar.maxLife || shootingStar.x > currentWidth || shootingStar.y > currentHeight) {
          shootingStar.active = false;
          shootingStar = null;
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

          const meteorGradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y,
            tailX, tailY
          );

          const headColor = isDark ? "255, 255, 255" : "6, 182, 212";
          const tailColor = isDark ? "56, 189, 248" : "59, 130, 246";

          meteorGradient.addColorStop(0, `rgba(${headColor}, ${shootingStar.opacity})`);
          meteorGradient.addColorStop(0.3, `rgba(${tailColor}, ${shootingStar.opacity * 0.6})`);
          meteorGradient.addColorStop(1, `rgba(${tailColor}, 0)`);

          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = meteorGradient;
          ctx.lineWidth = isDark ? 2 : 1.5;
          ctx.lineCap = "round";
          ctx.stroke();

          // Core Head Glow
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${headColor}, ${shootingStar.opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
