import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Skills", path: "/about#skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path.includes("#")) {
      return location.pathname === path.split("#")[0];
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/60 dark:bg-[#0b0f19]/70 shadow-sm dark:shadow-cyan-950/10">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <img
              src="/636.webp"
              alt="Qamar Abbas Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500/40 shadow-md group-hover:ring-cyan-400 transition-all duration-300"
            />
            {/* Online Status Indicator */}
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
          </motion.div>

          <span className="font-poppins text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            QAMAR{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              ABBAS
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex bg-slate-100/60 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative rounded-full px-4 py-1.5 font-inter text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                {link.label}

                {/* Animated Background Pill for Active Tab */}
                {active && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm border border-slate-200/80 dark:bg-slate-800/80 dark:border-slate-700/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Glow Underline */}
                {active && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_8px_#06b6d4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2.5 text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-cyan-400 border border-transparent hover:border-slate-300/50 dark:hover:border-slate-700/50"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-full p-2.5 text-slate-700 transition-colors hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-slate-800/60 md:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Animated Mobile Nav Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-slate-200/70 dark:border-slate-800/70 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1.5 px-4 py-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-inter text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 font-semibold border border-cyan-500/20"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <Sparkles className="h-4 w-4 text-cyan-500" />}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
