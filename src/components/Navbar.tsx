"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiHome, FiUser, FiLayers, FiCode, FiMail, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "skills", "projects", "about", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("light");
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "Skills", href: "#skills", icon: <FiCode /> },
    { name: "Projects", href: "#projects", icon: <FiLayers /> },
    { name: "About", href: "#about", icon: <FiUser /> },
    { name: "Contact", href: "#contact", icon: <FiMail /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/80 border-b border-white/5 py-4 backdrop-blur-md" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black font-space-grotesk tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-gradient uppercase tracking-tighter">Kamrul15</span>
          <span className="text-on-surface">.</span>
        </motion.div>

        {/* Floating Pill Nav */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className={`text-base ${isActive ? "text-primary scale-110" : "scale-100"} transition-all`}>{link.icon}</span>
                <span className="hidden lg:block">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface border border-white/10"
          >
            {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
          </motion.button>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-on-surface text-background rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all"
          >
            Hire Me
          </motion.a>
        </div>
      </div>

      {/* Scroll Progress Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};

export default Navbar;
