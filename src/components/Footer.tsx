import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, Terminal, Sparkles, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/70 py-8 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-[#0b1120]/90">
      {/* Top Cyberpunk Glow Bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 via-blue-500 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        
        {/* Brand & Animated Avatar */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-md transition-opacity group-hover:opacity-100" />
            <img
              src="/636.webp"
              alt="Zorex Logo"
              className="relative h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500/50 group-hover:ring-cyan-400"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-poppins text-base font-extrabold tracking-wide text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
              QAMAR <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">ABBAS</span>
            </span>
            <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
              <Terminal className="h-3 w-3" />QAMAR ABBAS
            </span>
          </div>
        </Link>

        {/* Cyberpunk Created & Developed Tag */}
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 backdrop-blur-md dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Designed & Developed by <strong className="text-cyan-500 dark:text-cyan-300">Qamar Abbas</strong></span>
          </div>
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved. Powered by React & Tailwind.
          </p>
        </div>

        {/* Glow Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-white/80 text-cyan-500 shadow-md backdrop-blur-md transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white dark:border-cyan-500/30 dark:bg-slate-900/80 dark:text-cyan-400 dark:hover:text-white"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>

      </div>
    </footer>
  );
}
