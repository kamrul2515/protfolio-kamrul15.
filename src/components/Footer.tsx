"use client";

import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {["About", "Projects", "Skills", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">{link}</a>
          ))}
        </div>

        <div className="flex gap-6">
          {[
            { Icon: FaGithub, href: "https://github.com/kamrul2515" },
            { Icon: FaFacebookF, href: "https://www.facebook.com/mdkamrulhasan.sujon.79" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            >
              <social.Icon size={18} />
            </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-on-surface-variant text-sm font-medium">© 2025 MD. Kamrul Hasan Sujon. Built with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

