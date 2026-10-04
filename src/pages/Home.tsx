import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Globe,
  Shield,
  User,
  Wrench,
  FolderOpen,
  Mail,
  Clock,
  Sparkles,
  Code2,
} from "lucide-react";

const quickLinks = [
  {
    label: "About Me",
    description: "Learn my story, roots, and passion.",
    icon: User,
    to: "/about",
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "My Skills",
    description: "Technical toolkit & core expertise.",
    icon: Wrench,
    to: "/about#skills",
    color: "from-blue-500 to-indigo-500",
  },
  {
    label: "My Projects",
    description: "Websites, branding & automation.",
    icon: FolderOpen,
    to: "/projects",
    color: "from-indigo-500 to-purple-500",
  },
  {
    label: "Contact Me",
    description: "Let’s collaborate or talk tech.",
    icon: Mail,
    to: "/contact",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Optimized Static Ambient Glows (Zero Lag for Mobile GPUs) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-600/10" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 flex flex-col items-start lg:order-1"
          >
            {/* Status & Time Bar */}
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 backdrop-blur-md dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for Projects
              </div>

              {time && (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-cyan-500" />
                  <span>PKT: {time}</span>
                </div>
              )}
            </div>

            {/* Aligned Role Badges */}
            <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 backdrop-blur-md dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400">
              <div className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-cyan-500" />
                <span>Ethical Hacker</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
              <div className="flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-blue-500" />
                <span>Web Developer</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
              <div className="flex items-center gap-1">
                <Terminal className="h-3.5 w-3.5 text-indigo-500" />
                <span>Tech Enthusiast</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-poppins text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                QAMAR ABBAS
              </span>
              <span className="mt-1 block text-2xl font-bold tracking-wider text-slate-600 dark:text-slate-300 sm:text-3xl">
                | ZOREX
              </span>
            </h1>

            {/* Intro Card */}
            <div className="mt-5 w-full rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/60 sm:p-6">
              <p className="font-inter text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                Welcome to my digital space. I am Qamar Abbas, a 17-year-old first-year student and
                tech enthusiast based in Wah. Proud of my Orakzai roots from Kohat, I blend my
                cultural heritage with a modern passion for technology.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-poppins text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40"
              >
                <span>Explore Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 font-poppins text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-slate-100 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative max-w-xs sm:max-w-sm">
              {/* Soft Ambient Border Glow */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-40 blur-xl" />

              <img
                src="/256.png"
                alt="Qamar Abbas"
                className="relative h-auto w-full rounded-2xl border border-white/20 shadow-2xl object-cover"
              />

              {/* Compact Floating Glass Tag */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/80 p-2.5 shadow-lg backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/90">
                <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-500">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-poppins text-xs font-bold text-slate-900 dark:text-white">
                    Creative Builder
                  </p>
                  <p className="font-inter text-[10px] text-slate-500 dark:text-slate-400">
                    Code & UI Innovation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sleek & Modern Quick Links Section */}
      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-500">
              <Code2 className="h-3.5 w-3.5" />
              <span>NAVIGATION LAB</span>
            </div>
            <h2 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Quick <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Explore</span>
            </h2>
          </div>

          {/* Compact, Sleek Modern Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group relative flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-cyan-400/40"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Aligned Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 transition-colors group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-400/10 dark:text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-poppins text-sm font-bold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
                        {item.label}
                      </h3>
                      <p className="font-inter text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-500 dark:text-slate-600 dark:group-hover:text-cyan-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
