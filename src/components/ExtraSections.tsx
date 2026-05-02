"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiHeart, FiCode, FiZap } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Next.js Projects",
      organization: "Modern Web Solutions",
      period: "2026 - Present",
      description: "Developing high-performance, SEO-optimized applications using Next.js 14+, App Router, and Server Components.",
    },
    {
      title: "React.js Projects",
      organization: "Scalable Web Apps",
      period: "2025 - 2026",
      description: "Built interactive user interfaces and complex state management systems with React, Redux, and Tailwind CSS.",
    },
    {
      title: "Front-End Developer (Mini Projects)",
      organization: "Personal Practice",
      period: "2022 - 2023",
      description: "Mastered HTML, CSS, and JavaScript by building 50+ interactive mini-projects.",
    },
  ];

  const education = [
    {
      title: "Diploma in Computer Science & Technology (CST)",
      institution: "Polytechnic Institute",
      period: "2023 - 2027",
    },
    {
      title: "Front End developer",
      institution: "Online Certification",
      period: "2025 - 2026",
    },
  ];

  const hobbies = [
    { icon: <FiCode />, title: "Coding", desc: "Making unique websites" },
    { icon: <FiZap />, title: "Gaming", desc: "Strategy and competitive games." },
    { icon: <FiHeart />, title: "Design", desc: "Exploring UI/UX trends." },
  ];

  return (
    <div className="space-y-32 py-24 bg-background">
      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12" id="experience">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">
            Experience & <span className="text-primary">Learning</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 transition-transform">
                <FiZap />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-surface-container border border-border hover:border-primary/50 transition-all shadow-2xl">
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-xl font-bold text-on-surface uppercase tracking-tight">{exp.title}</h3>
                  <p className="text-on-surface-variant font-medium italic text-sm">{exp.organization}</p>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12" id="education">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">
            Education & <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <div key={i} className="p-8 rounded-3xl bg-surface-container border border-border flex gap-6 hover:border-primary transition-all group shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-surface transition-all shrink-0">
                <FiBookOpen size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface uppercase">{edu.title}</h3>
                <p className="text-on-surface-variant text-sm font-medium">{edu.institution}</p>
                <p className="text-primary font-bold text-xs mt-2">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12" id="hobbies">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">
            Hobbies & <span className="text-primary">Interests</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-surface-container border border-border text-center group hover:bg-gradient-to-b hover:from-primary/10 hover:to-transparent transition-all shadow-2xl">
              <div className="w-20 h-20 mx-auto rounded-[2rem] bg-background border border-border flex items-center justify-center text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold text-on-surface uppercase mb-2">{hobby.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{hobby.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
