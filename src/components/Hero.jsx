import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-8 lg:gap-10 justify-center items-center py-20 lg:py-30 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <motion.h1
        className="lg:text-7xl text-4xl font-inter font-bold bg-linear-to-r from-pink-300 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Digital Solutions <span className="font-semibold lg:text-xl text-base">+ Streaming Services</span> <br />
        by Cedars Tech
      </motion.h1>

      <motion.p
        className="text-center lg:text-[20px] text-gray-400 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Cedars Tech is a Lebanon-based web development studio specializing in professional websites for coffee shops, restaurants, and local businesses in Beirut and across Lebanon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-6"
      >
        <a
          href="https://wa.me/message/I3EGKHRI2X5EI1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300"
        >
          Contact Us on WhatsApp
        </a>

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
