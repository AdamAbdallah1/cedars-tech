import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="w-full flex flex-col gap-6 lg:gap-10 justify-center items-center py-32 lg:py-32 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      role="banner"
    >
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-inter font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 max-w-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Digital Solutions <span className="block sm:inline font-semibold text-xl sm:text-2xl lg:text-3xl text-[#9754DE] mt-2 sm:mt-0">+ Streaming Services</span>
        <br />
        by Cedars Tech
      </motion.h1>

      <motion.p
        className="text-gray-300 text-base sm:text-lg lg:text-xl mt-2 px-4 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        Launch your business online in <span className="text-[#9754DE] font-semibold">7 days</span> – Trusted by local brands in Lebanon
      </motion.p>

      <motion.p
        className="text-center text-base lg:text-lg text-gray-400 max-w-3xl mt-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Cedars Tech is a Lebanon-based web development studio specializing in professional websites for coffee shops, restaurants, and local businesses in Beirut and across Lebanon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-6 w-full sm:w-auto justify-center px-4"
      >
        <motion.a
          href="https://wa.me/96181090757"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-green-500 shadow-lg hover:shadow-green-500/50"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          aria-label="Contact us on WhatsApp"
          data-testid="hero-whatsapp-cta-btn"
        >
          Contact Us on WhatsApp
        </motion.a>

        <a
          href="/demo/portfolio"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#9754DE] hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/50"
          aria-label="View portfolio demo"
          data-testid="hero-portfolio-btn"
        >
          View Portfolio Demo
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;