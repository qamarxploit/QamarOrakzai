import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// نئے پیج پر جانے پر اسکرول کو بالکل اوپر (Top) ری سیٹ کرنے کے لیے
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// پیج ٹرانزیشن اینیمیشنز wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown Route Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col bg-slate-50 font-inter text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-white">
          {/* Animated Background Canvas */}
          <StarBackground />

          {/* Main Content Layout */}
          <div className="relative z-10 flex min-h-screen flex-col justify-between">
            <Navbar />
            <main className="flex-1 flex flex-col">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
