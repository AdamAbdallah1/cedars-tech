import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState('');

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/96181090757",
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-green-600",
      text: "Contact Us on WhatsApp",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/cedars.tech/",
      bgColor: "bg-[#9754DE]",
      hoverColor: "hover:bg-purple-600",
      text: "Contact Us on Instagram",
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
    <section id='contact' className="flex flex-col items-center text-center gap-6 lg:gap-8 py-20 lg:py-32 px-4">
      
      {/* Icon */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FaPaperPlane className='text-[#9754DE]' size={64} aria-hidden="true" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight"
      >
        Get in Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-base lg:text-lg text-gray-400 max-w-xl px-4"
      >
        Ready to grow your business online? Choose your preferred channel and start a conversation with us now.
      </motion.p>

      {/* Buttons */}
      <div className="mt-4 lg:mt-6 w-full flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-3 lg:gap-4 w-full max-w-xl justify-center px-4'
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto text-center flex justify-center items-center gap-2 ${method.bgColor} ${method.hoverColor} text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-purple-500`}
              aria-label={method.text}
              data-testid={`contact-${method.name.toLowerCase()}-btn`}
            >
              {method.text} {method.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 lg:mt-12 w-full max-w-md text-center px-4"
      >
        <p className="text-gray-400 mb-4 text-sm lg:text-base">
          Or leave your email and we will get back to you with a free consultation.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#9754DE] focus:ring-2 focus:ring-[#9754DE]/50 transition-all"
            aria-label="Email address"
            data-testid="email-input"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#9754DE] hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-purple-500"
            aria-label="Send email"
            data-testid="send-email-btn"
          >
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;