"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const About = () => {
  const info = [
    { icon: <FiMail />, label: "Email", value: "kamrulhasansujon2515@gmail.com" },
    { icon: <FiPhone />, label: "Phone", value: "01606360147" },
    { icon: <FiMapPin />, label: "Location", value: "Nilphamari Sadar" },
    { icon: <FiGlobe />, label: "Language", value: "English, Bangla" },
  ];

  return (
    <section className="py-24 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-on-surface">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                I am a CST Diploma Engineer and a passionate Front-End Developer with a strong focus on creating high-performance, visually stunning websites. My journey in web development is driven by a curiosity for new technologies and a commitment to delivering exceptional user experiences.
              </p>
              <p>
                With expertise in React, Next.js, and modern CSS frameworks, I bridge the gap between complex backend logic and elegant frontend design.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-surface transition-all">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{item.label}</h4>
                  <p className="text-on-surface font-medium break-all">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

