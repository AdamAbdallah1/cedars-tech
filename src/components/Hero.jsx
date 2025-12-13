import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    
    <motion.div
      
      className="w-full flex flex-col gap-10 justify-center items-center py-30"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <motion.h1
        className="lg:text-7xl text-4xl font-inter text-center bg-linear-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Digital Solutions {" "}
        by
        Cedars Tech
      </motion.h1>

      <motion.p
        className="text-center lg:text-[20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Professional websites, digital solutions, and premium streaming services.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="bg-[#9754DE] text-white font-bold p-4 rounded-2xl hover:bg-[#F5A2D1] cursor-pointer">
          <a href="https://wa.me/message/I3EGKHRI2X5EI1">Contact Us on WhatsApp</a>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
