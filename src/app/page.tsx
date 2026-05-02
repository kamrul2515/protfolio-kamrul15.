"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechArsenal from "@/components/TechArsenal";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ExtraSections from "@/components/ExtraSections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import ScrollToTop from "@/components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <TechArsenal />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="extra">
        <ExtraSections />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
