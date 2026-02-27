import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState('');

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/96181090757",
      bgColor: "bg-white",
      textColor: "text-black",
      hoverColor: "hover:bg-gray-200",
      text: "WhatsApp Us",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/cedars.tech/",
      bgColor: "bg-transparent",
      textColor: "text-white",
      hoverColor: "hover:bg-white/10",
      border: "border border-white/20",
      text: "Instagram",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert('Thank you! We will contact you soon.');
      setEmail('');
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-purple-600/10 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[#9754DE] text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
        >
          Contact Cedars Tech
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tighter"
        >
          Let’s build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">extraordinary.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-xl mb-12"
        >
          Whether you need a high-end landing page or a custom business platform, we're here to help.
        </motion.p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 flex justify-center items-center gap-3 py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-xl ${method.bgColor} ${method.textColor} ${method.hoverColor} ${method.border || ""}`}
            >
              {method.icon} {method.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;