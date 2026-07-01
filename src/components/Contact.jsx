import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import ContactScene from "./ContactScene";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      {/* Background Scene */}
      <ContactScene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* SECTION LABEL */}
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#9754DE] font-bold">
            System Access
          </span>
        </div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
        >
          Unlock a free
          <br />
          <span className="text-[#9754DE]">business audit</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We break down your current digital setup, identify conversion leaks,
          and map a system that turns traffic into consistent revenue.
        </p>

        {/* ACTION PANEL */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY */}
          <a
            href="https://wa.me/96181090757"
            className="
              px-9 py-4 rounded-full
              bg-white text-black font-black
              hover:bg-[#9754DE] hover:text-white
              transition flex items-center justify-center gap-2
            "
          >
            <FaWhatsapp size={18} />
            Start Audit via WhatsApp
          </a>

          {/* SECONDARY */}
          <a
            href="https://www.instagram.com/cedars.tech/"
            className="
              px-9 py-4 rounded-full
              border border-white/20 text-white font-black
              hover:bg-white/10 transition
              flex items-center justify-center gap-2
            "
          >
            <FaInstagram size={18} />
            View Instagram
          </a>

        </div>

        {/* TRUST / SYSTEM NOTE */}
        <div className="mt-8 inline-flex items-center justify-center">
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <p className="text-[11px] text-gray-500 tracking-widest uppercase">
              Free analysis • No commitment • Response within 24h
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;