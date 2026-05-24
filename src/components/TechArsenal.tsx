"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs
} from "react-icons/si";

const skills = [
  { name: "HTML 5", icon: SiHtml5, color: "#E34F26", delay: 0.1 },
  { name: "CSS 3", icon: SiCss, color: "#1572B6", delay: 0.2 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", delay: 0.3 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", delay: 0.4 },
  { name: "React.js", icon: SiReact, color: "#61DAFB", delay: 0.5 },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", delay: 0.6 },
];

const TechArsenal = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl mx-auto font-medium"
          >
            I specialize in building high-performance, responsive, and visually stunning web applications using the latest front-end technologies.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.delay }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Icon Container with Floating Animation */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                  whileHover={{ rotate: 12, scale: 1.1, y: 0 }}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center border border-border group-hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <skill.icon 
                    size={40} 
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </motion.div>
              </div>
              
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: skill.delay + 0.2 }}
                className="text-on-surface font-bold tracking-wider text-sm uppercase group-hover:text-primary transition-colors duration-300"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;

