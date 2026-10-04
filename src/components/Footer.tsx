import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/60 py-8 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-[#0f172a]/80">
      {/* Ambient Glow Bar at Top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        {/* Brand & Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 rounded-full bg-cyan-500/30 blur-sm opacity-0 transition-opacity group-hover:opacity-100" />
            <img
              src="/636.webp"
              alt="Zorex Logo"
              className="relative h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-cyan-500/30 group-hover:ring-cyan-500"
            />
          </motion.div>
          <span className="font-poppins text-base font-bold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
            QAMAR <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">ABBAS</span>
          </span>
        </Link>

        {/* Copyright Text */}
        <p className="flex items-center gap-1.5 text-center font-inter text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>&copy; {new Date().getFullYear()} Qamar Abbas.</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1">
            Crafted with <Heart className="h-3 w-3 text-cyan-500 fill-cyan-500/20" /> & Passion
          </span>
        </p>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-slate-600 shadow-sm transition-all hover:border-cyan-500/40 hover:bg-cyan-500 hover:text-white dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-cyan-500 dark:hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
}
