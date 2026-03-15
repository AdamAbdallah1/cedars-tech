import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactScene from "./ContactScene";

const Contact = () => {

  const contactMethods = [
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/96181090757",
      text: "WhatsApp Us",
      style: "bg-white text-black hover:bg-gray-200"
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/cedars.tech/",
      text: "Instagram",
      style: "border border-white/20 text-white hover:bg-white/10"
    }
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36 px-6 overflow-hidden">

      <ContactScene />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter"
        >
          Ready to start your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            next chapter?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg lg:text-xl max-w-2xl mb-14"
        >
          Cedars Tech combines Lebanese creativity with high-end engineering.
          Reach out directly to start building.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-lg">

          {contactMethods.map((m, i) => (
            <motion.a
              key={i}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex justify-center items-center gap-3 py-5 rounded-[1.25rem] font-black text-xs uppercase tracking-widest transition-all ${m.style}`}
            >
              {m.icon}
              {m.text}
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Contact;