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
    description: "Learn my story, roots, and what drives me.",
    icon: User,
    to: "/about",
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "My Skills",
    description: "Explore my technical toolkit and expertise.",
    icon: Wrench,
    to: "/about#skills",
    color: "from-blue-500 to-indigo-500",
  },
  {
    label: "My Projects",
    description: "See websites, branding, and automation work.",
    icon: FolderOpen,
    to: "/projects",
    color: "from-indigo-500 to-purple-500",
  },
  {
    label: "Contact Me",
    description: "Let’s collaborate or just say hello.",
    icon: Mail,
    to: "/contact",
    color: "from-purple-500 to-pink-500",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [time, setTime] = useState("");

  // Live Local Time Widget
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Ambient background glowing blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/15"
          />
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-600/15"
          />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 flex flex-col items-start lg:order-1"
          >
            {/* Status & Badges Bar */}
            <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap items-center gap-2.5">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 backdrop-blur-md dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for Projects
              </div>

              {/* Local Time Widget */}
              {time && (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-cyan-500" />
                  <span>PKT: {time}</span>
                </div>
              )}
            </motion.div>

            {/* Role Badges */}
            <motion.div
              variants={fadeInUp}
              className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 backdrop-blur-sm dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400"
            >
              <Shield className="h-3.5 w-3.5 text-cyan-500" />
              <span>Ethical Hacker</span>
              <span className="h-1 w-1 rounded-full bg-cyan-500" />
              <Globe className="h-3.5 w-3.5 text-blue-500" />
              <span>Web Developer</span>
              <span className="h-1 w-1 rounded-full bg-cyan-500" />
              <Terminal className="h-3.5 w-3.5 text-indigo-500" />
              <span>Tech Enthusiast</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-poppins text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                QAMAR ABBAS
              </span>
              <span className="mt-2 block text-2xl font-semibold tracking-wide text-slate-600 dark:text-slate-300 sm:text-3xl">
                | ZOREX
              </span>
            </motion.h1>

            {/* Glassmorphism Intro Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="mt-6 w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all dark:border-slate-800/80 dark:bg-slate-900/50 sm:p-8"
            >
              <p className="font-inter text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                Welcome to my digital space. I am Qamar Abbas, a 17-year-old first-year student and
                tech enthusiast based in Wah. Proud of my Orakzai roots from Kohat, I blend my
                cultural heritage with a modern passion for technology. Whether it is ethical hacking,
                web development, or hands-on craftsmanship, I am always exploring and building.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 focus:outline-none"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 font-poppins text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-slate-100 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Glowing animated background ring */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 opacity-60 blur-2xl"
              />

              {/* Floating Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="/256.png"
                  alt="Qamar Abbas"
                  className="relative h-auto w-full max-w-sm rounded-2xl border border-white/20 shadow-2xl shadow-cyan-500/20 object-cover backdrop-blur-sm"
                />

                {/* Floating Glass Badge on Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-white/50 bg-white/80 p-3.5 shadow-xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80"
                >
                  <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-500">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold text-slate-900 dark:text-white">
                      Creative Builder
                    </p>
                    <p className="font-inter text-[11px] text-slate-500 dark:text-slate-400">
                      Code & UI Innovation
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
              <Code2 className="h-3.5 w-3.5" />
              <span>NAVIGATION LAB</span>
            </div>
            <h2 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Quick <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Explore</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl font-inter text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Jump into any section of my personal portfolio instantly.
            </p>
          </motion.div>

          {/* Quick Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Link
                    to={item.to}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-cyan-500/40"
                  >
                    {/* Hover Top Border Highlight */}
                    <div className={`absolute left-0 top-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-full`} />

                    <div>
                      {/* Icon */}
                      <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white dark:text-cyan-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Title */}
                      <h3 className="font-poppins text-lg font-semibold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
                        {item.label}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="mt-6 flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      <span>Explore</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
