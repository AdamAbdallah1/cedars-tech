import React from 'react';
import { FaWhatsapp, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-50">
      
      {/* Icon */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <FaPaperPlane className='text-[#9754DE]' size={80}/>
      </motion.div>

      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-4xl text-3xl font-bold bg-linear-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Contact Us
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="lg:text-[20px] text-gray-400 max-w-xl"
      >
        Ready to grow your business online? Choose your preferred channel!
      </motion.p>

      {/* Buttons */}
      <div className="mt-6 w-full flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='flex lg:flex-row flex-col gap-6'
        >
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/message/I3EGKHRI2X5EI1" 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex justify-center items-center gap-2 bg-[#9754DE] hover:bg-red-300 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300'
          >
            Contact Us on <FaWhatsapp size={24}/>
          </a>

          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/cedars.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex justify-center items-center gap-2 bg-[#9754DE] hover:bg-red-300 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300'
          >
            Contact Us on <FaInstagram size={24}/>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
