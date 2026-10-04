import { motion } from "framer-motion";
import {
  ShieldAlert,
  Globe,
  Smartphone,
  GraduationCap,
  Terminal,
  Cpu,
  Megaphone,
  Search,
  CheckCircle2,
  Sparkles,
  MapPin,
  Award,
  Zap,
} from "lucide-react";

const skills = [
  {
    title: "Ethical Hacker",
    description: "Uncovering vulnerabilities and securing digital landscapes.",
    icon: ShieldAlert,
    badge: "Cybersecurity",
  },
  {
    title: "Web Developer",
    description: "Crafting responsive, modern, and engaging websites.",
    icon: Globe,
    badge: "Frontend & FullStack",
  },
  {
    title: "Mobile Expert",
    description: "Mastering mobile ecosystems, automation, and app functionality.",
    icon: Smartphone,
    badge: "Termux & Android",
  },
  {
    title: "Student",
    description: "Constantly learning, adapting, and evolving every single day.",
    icon: GraduationCap,
    badge: "Class 11 CS",
  },
  {
    title: "Kali Expert",
    description: "Navigating advanced penetration testing and security tools.",
    icon: Terminal,
    badge: "PenTesting",
  },
  {
    title: "Soldering Expert",
    description: "Connecting hardware components with pinpoint accuracy.",
    icon: Cpu,
    badge: "Hardware & Tech",
  },
  {
    title: "Ads Creator",
    description: "Designing targeted campaigns that capture attention and drive results.",
    icon: Megaphone,
    badge: "Digital Marketing",
  },
  {
    title: "OSINT Analyst",
    description: "Gathering and analyzing open-source intelligence for deep research.",
    icon: Search,
    badge: "Intelligence",
  },
];

const arsenal = [
  { name: "Kali Linux & NetHunter", desc: "Penetration testing & audit" },
  { name: "Termux Ecosystem", desc: "Mobile CLI development & Git" },
  { name: "OSINT Frameworks", desc: "Deep research & threat intelligence" },
  { name: "Custom Automation", desc: "Python scripts & workflow tools" },
];

const stats = [
  { label: "Age", value: "17 Years" },
  { label: "Location", value: "Wah Cantt, PK" },
  { label: "Roots", value: "Orakzai, Kohat" },
  { label: "Focus", value: "Cyber & Web" },
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
      staggerChildren: 0.12,
    },
  },
};

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* About Me Section */}
      <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo Container with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          {/* Glowing Ambient Backdrop */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 blur-2xl dark:opacity-60"
          />

          <div className="relative rounded-3xl border border-white/40 bg-white/40 p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/40">
            <img
              src="/203.jpg"
              alt="Qamar Abbas"
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />

            {/* Floating Location Tag on Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/85 px-4 py-2.5 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/85"
            >
              <MapPin className="h-4 w-4 text-cyan-500 animate-bounce" />
              <span className="font-poppins text-xs font-bold text-slate-800 dark:text-slate-200">
                Orakzai Heritage x Wah
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Story & Background */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-500 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>MY JOURNEY & ORIGINS</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-poppins text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mt-6 space-y-4 font-inter text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg"
          >
            <p>
              My journey into technology started with curiosity. I wanted to understand how things
              work behind the screen—from the lines of code that power websites to the networks
              that connect the world.
            </p>
            <p>
              Over the years, that curiosity turned into passion. I have spent countless hours
              learning ethical hacking, building modern web applications, exploring mobile ecosystems,
              and diving into open-source intelligence (OSINT).
            </p>
            <p>
              I believe in blending traditional values with modern skills. My Orakzai roots keep me
              grounded, while my love for tech pushes me to keep evolving every single day.
            </p>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/40"
              >
                <p className="font-poppins text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 font-poppins text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-28 scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
            <Zap className="h-3.5 w-3.5" />
            <span>EXPERTISE & TOOLKIT</span>
          </div>
          <h2 className="font-poppins text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-inter text-slate-600 dark:text-slate-400 sm:text-base">
            A blend of cybersecurity, modern frontend development, hardware precision, and creative problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.title} variants={fadeInUp}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-cyan-500/40">
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white dark:text-cyan-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {skill.badge}
                      </span>
                    </div>

                    <h3 className="font-poppins text-lg font-semibold text-slate-900 transition-colors group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
                      {skill.title}
                    </h3>

                    <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Digital Arsenal */}
      <section className="mt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:from-slate-900/90 dark:via-[#0b0f19] dark:to-cyan-950/20 sm:p-12"
        >
          {/* Subtle Ambient Glow inside Card */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
              <Award className="h-3.5 w-3.5" />
              <span>POWERED TOOLS</span>
            </div>
            <h2 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              My Digital <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {arsenal.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/40 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <div className="mt-0.5 rounded-lg bg-cyan-500/10 p-2 text-cyan-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="mt-0.5 font-inter text-xs text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
