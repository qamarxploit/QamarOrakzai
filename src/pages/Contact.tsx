import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Sparkles, Check, Copy, MessageCircle } from "lucide-react";
import { FaTiktok, FaSnapchat, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const socials = [
  { 
    label: "TikTok", 
    icon: FaTiktok, 
    url: "https://www.tiktok.com/@qamarxploit",
    color: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-slate-300 dark:border-slate-700"
  },
  { 
    label: "Snapchat", 
    icon: FaSnapchat, 
    url: "https://www.snapchat.com/add/qamarxploit_v2",
    color: "hover:bg-[#FFFC00] hover:text-black border-amber-300/50"
  },
  { 
    label: "Instagram", 
    icon: FaInstagram, 
    url: "https://www.instagram.com/qamarxploit",
    color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white border-pink-300/50"
  },
  { 
    label: "GitHub", 
    icon: FaGithub, 
    url: "https://github.com/qamarxploit",
    color: "hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700"
  },
  { 
    label: "WhatsApp", 
    icon: FaWhatsapp, 
    url: "https://wa.me/923326001218",
    color: "hover:bg-[#25D366] hover:text-white border-emerald-300/50"
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:qamarorakzai09@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

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
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="font-poppins text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Let&apos;s <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-inter text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Whether you want to collaborate on a web project, discuss cybersecurity,
          automate your workflow, or just say hello—my inbox is always open.
        </p>
      </motion.div>

      {/* Main Grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mt-14 grid gap-10 lg:grid-cols-2"
      >
        {/* Contact Form */}
        <motion.div 
          variants={fadeInUp}
          className="relative rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all dark:border-slate-800/80 dark:bg-slate-900/50 sm:p-8"
        >
          {/* Subtle Ambient Accent */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />

          <h3 className="mb-6 font-poppins text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-cyan-500" />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Alex Mercer"
                className="w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-inter text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-inter text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                className="w-full resize-none rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-inter text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-800"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-poppins text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 focus:outline-none sm:w-auto"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Direct Contact & Socials Column */}
        <div className="flex flex-col gap-6">
          {/* Direct Contact Info Card */}
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 sm:p-8"
          >
            <h3 className="mb-6 font-poppins text-xl font-bold text-slate-900 dark:text-white">
              Direct Contact
            </h3>
            
            <div className="space-y-3">
              {/* Email */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 transition-all hover:border-cyan-500/30 hover:bg-white dark:border-slate-800/60 dark:bg-slate-800/40 dark:hover:bg-slate-800/80">
                <a
                  href="mailto:qamarorakzai09@gmail.com"
                  className="flex items-center gap-3.5"
                >
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-inter text-xs font-medium text-slate-500 dark:text-slate-400">Email Address</p>
                    <p className="font-inter font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      qamarorakzai09@gmail.com
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy("qamarorakzai09@gmail.com")}
                  title="Copy Email"
                  className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-200/60 hover:text-cyan-500 dark:hover:bg-slate-700/60 dark:hover:text-cyan-400 transition-colors"
                >
                  {copiedText === "qamarorakzai09@gmail.com" ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp 1 */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 transition-all hover:border-emerald-500/30 hover:bg-white dark:border-slate-800/60 dark:bg-slate-800/40 dark:hover:bg-slate-800/80">
                <a
                  href="https://wa.me/923326001218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5"
                >
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-inter text-xs font-medium text-slate-500 dark:text-slate-400">WhatsApp Primary</p>
                    <p className="font-inter font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      +92 332 6001218
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy("+923326001218")}
                  title="Copy Number"
                  className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-200/60 hover:text-emerald-500 dark:hover:bg-slate-700/60 dark:hover:text-emerald-400 transition-colors"
                >
                  {copiedText === "+923326001218" ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp 2 */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 transition-all hover:border-emerald-500/30 hover:bg-white dark:border-slate-800/60 dark:bg-slate-800/40 dark:hover:bg-slate-800/80">
                <a
                  href="https://wa.me/923199834303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5"
                >
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-inter text-xs font-medium text-slate-500 dark:text-slate-400">WhatsApp Secondary</p>
                    <p className="font-inter font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      +92 319 9834303
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy("+923199834303")}
                  title="Copy Number"
                  className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-200/60 hover:text-emerald-500 dark:hover:bg-slate-700/60 dark:hover:text-emerald-400 transition-colors"
                >
                  {copiedText === "+923199834303" ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 sm:p-8"
          >
            <h3 className="mb-4 font-poppins text-xl font-bold text-slate-900 dark:text-white">
              Social Profiles
            </h3>
            <p className="mb-6 font-inter text-xs text-slate-500 dark:text-slate-400">
              Follow or reach out to me across my active social platforms.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className={`group flex items-center gap-2.5 rounded-2xl border bg-white/80 px-4 py-3 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 dark:bg-slate-800/80 dark:text-slate-200 ${social.color}`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-poppins text-xs font-semibold">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
