import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative w-full flex flex-col justify-center items-center py-40 lg:py-35 px-4 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* FIXED RESPONSIVE BACKGROUND GLOW */}
      <div 
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] 
                   bg-purple-600/20 blur-[80px] sm:blur-[120px] rounded-full -z-10 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-[#9754DE] text-xs font-bold tracking-widest uppercase"
      >
        Based in Lebanon • Shipping Worldwide
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">digital experiences</span> that scale.
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        From high-converting landing pages to custom streaming platforms. 
        Get your business online in less than <span className="text-white font-semibold">7 days</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
      >
        <a
          href="https://wa.me/96181090757"
          className="bg-white text-black font-bold px-10 py-4 rounded-full transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 text-center"
        >
          Start a Project
        </a>
        <a
          href="#projects"
          className="bg-transparent border border-white/20 text-white font-bold px-10 py-4 rounded-full transition-all hover:bg-white/5 hover:border-white/40 text-center"
        >
          View Work
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;