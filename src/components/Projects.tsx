"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "B-Tiles",
    description: "A specialized tile management and display platform built with Next.js.",
    tags: ["Next.js", "Tailwind", "Responsive"],
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
    link: "https://b13-assignment-08.vercel.app/"
  },
  {
    title: "Dragon News",
    description: "A comprehensive news portal featuring category-based filtering and dynamic content routing.",
    tags: ["Next.js", "API Integration"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    link: "https://dragon-news-next-pink.vercel.app/"
  },
  {
    title: "Friendship Goals",
    description: "An interactive social bonding platform focused on relationship management.",
    tags: ["React.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    link: "https://keen-keeper-friendship.netlify.app/"
  },
  {
    title: "Digitools",
    description: "A professional suite of digital utility tools designed to enhance productivity.",
    tags: ["React.js", "Material UI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://b-13-a6-digitools.netlify.app/"
  },
  {
    title: "Landing Page",
    description: "A high-conversion landing page implementation focusing on clean aesthetics.",
    tags: ["JavaScript", "CSS3"],
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800",
    link: "https://tranquil-cendol-e716a6.netlify.app/"
  },
  {
    title: "Ecomars Website",
    description: "A visually stunning e-commerce landing page demonstrating advanced CSS layouts and modern UI/UX principles.",
    tags: ["HTML5", "CSS3", "Responsive"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    link: "https://guileless-kataifi-d324bc.netlify.app/"
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-background" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-2xl h-full"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                    <FiExternalLink className="text-on-surface text-4xl" />
                    <span className="text-on-surface font-bold text-xs uppercase tracking-widest">View Project</span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold text-primary tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

