import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="w-full flex flex-col gap-6 lg:gap-10 justify-center items-center py-24 lg:py-28 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h1
        className="lg:text-7xl text-4xl font-inter font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Digital Solutions <span className="font-semibold lg:text-2xl text-lg text-[#9754DE]">+ Streaming Services</span>
        <br />
        by Cedars Tech
      </motion.h1>

      {/* Tagline / Micro Value */}
      <motion.p
        className="text-gray-300 text-lg lg:text-xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        Launch your business online in <span className="text-[#9754DE] font-semibold">7 days</span> – Trusted by local brands in Lebanon
      </motion.p>

      {/* Subtitle */}
      <motion.p
        className="text-center lg:text-[20px] text-gray-400 max-w-3xl mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Cedars Tech is a Lebanon-based web development studio specializing in professional websites for coffee shops, restaurants, and local businesses in Beirut and across Lebanon.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-6 w-full sm:w-auto justify-center"
      >
        <motion.a
          href="https://wa.me/96181090757"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Contact Us on WhatsApp
        </motion.a>

        <a
          href="/demo/portfolio"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#9754DE] hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300"
        >
          View Portfolio Demo
        </a>
      </motion.div>

      
    </motion.div>
  );
};

export default Hero;
