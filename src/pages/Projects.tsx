import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Spire Schools",
    url: "https://spireschools.vercel.app",
    category: "Web Design",
    description: "A clean, modern web presence designed for an educational institution.",
  },
  {
    name: "Al Farooq Academy",
    url: "https://alfarooqacademy.carrd.co/",
    category: "Web Design",
    description: "A focused landing page for an academy with clear messaging and branding.",
  },
  {
    name: "NexGen Official",
    url: "https://nexgenofficial.netlify.app",
    category: "Web Design",
    description: "A futuristic brand website built to showcase modern digital solutions.",
  },
  {
    name: "Zorex",
    url: "https://zorex.carrd.co",
    category: "Digital Branding",
    description: "A personal brand hub that ties together my work and online identity.",
  },
];

const categories = ["All", "Web Design", "Digital Branding"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-500 border border-cyan-500/20">
          <Sparkles className="h-3.5 w-3.5" />
          <span>MY CREATIVE PORTFOLIO</span>
        </div>
        <h2 className="font-poppins text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Featured <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-inter text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          I believe in practical application. Here are a few areas I have worked on: Web Design,
          Security & Automation, and Digital Branding.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2 font-inter text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/50 sm:p-8"
            >
              {/* Top Gradient Highlight */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              
              {/* Corner Ambient Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/20" />

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <FolderGit2 className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-500" />
                </div>

                <h3 className="font-poppins text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400 sm:text-2xl">
                  {project.name}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 font-inter text-xs font-semibold text-white shadow-md transition-all group-hover:bg-cyan-500 dark:bg-white dark:text-slate-900 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950"
                >
                  <span>Visit Live Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
