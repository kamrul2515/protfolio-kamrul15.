"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface font-black tracking-widest text-lg uppercase"
            >
              Hi, I'm
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter"
            >
              <span className="text-gradient">KAMRUL <br /> HASAN</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-bold tracking-widest text-xl md:text-2xl uppercase h-8"
            >
              <Typewriter
                options={{
                  strings: [
                    "Professional Front-End Developer",
                    "React.js Specialist",
                    "Next.js Developer",
                    "UI/UX Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-on-surface-variant text-lg max-w-lg font-medium leading-relaxed pt-4"
            >
              Building high-performance, visually stunning websites with a focus on modern user experiences and clean code.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1giXALFShmXuOlgapyuZuts0sB0Sx3ea_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:brightness-110"
            >
              <FiDownload size={20} />
              DOWNLOAD CV
            </motion.a>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, href: "https://github.com/kamrul2515" },
                { Icon: FaFacebookF, href: "https://www.facebook.com/mdkamrulhasan.sujon.79" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-on-surface transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Circular Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Online Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-[10%] right-[-5%] z-20 bg-surface/80 backdrop-blur-md border border-border px-6 py-2 rounded-full flex items-center gap-3 shadow-2xl"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
              </div>
              <span className="text-[10px] font-black text-on-surface uppercase tracking-[0.2em]">Online</span>
            </motion.div>

            {/* Outer Glow Circle */}
            <div className="absolute inset-4 rounded-full border border-primary/20 bg-primary/5 blur-sm" />

            {/* Main image container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-[12px] border-primary/20 shadow-2xl shadow-primary/20 relative group">
              {/* Inner glow border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/50 z-10 pointer-events-none" />
              
              <img
                src="https://i.ibb.co.com/FkZB5Gpn/file-000000001de0720798996c2cb44073d2.png"
                alt="Kamrul Hasan"
                className="w-full h-full object-cover scale-110 translate-y-4 group-hover:scale-125 transition-transform duration-700"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent mix-blend-overlay" />
            </div>

            {/* Decorative stats/blobs around image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


