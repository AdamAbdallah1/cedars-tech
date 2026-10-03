import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b0b0b_0%,#000000_45%,#060606_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#151515_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(151,84,222,0.05),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.75)_100%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
        >
          Websites that mean business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Modern websites for businesses that want to look professional, build trust, and make it easy for customers to reach them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mt-12"
        >
          <a
            href="https://wa.me/96181090757"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Get a Free Consultation
          </a>

          <a
            href="#work"
            className="btn-ghost"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 text-[11px] uppercase tracking-widest text-gray-600"
        >
          No commitment · WhatsApp support
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
