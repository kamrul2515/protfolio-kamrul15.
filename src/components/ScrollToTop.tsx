"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative w-14 h-14 rounded-full bg-surface-container/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary shadow-2xl overflow-hidden group-hover:border-primary/50 transition-all">
            {/* Progress Circle SVG */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="150.7"
                strokeDashoffset={150.7 - (150.7 * progress) / 100}
                className="text-primary transition-all duration-300"
              />
            </svg>
            <FiArrowUp size={24} className="group-hover:-translate-y-1 transition-transform relative z-10" />
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10 group-hover:bg-primary/30 transition-all" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
