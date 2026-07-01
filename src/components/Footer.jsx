import React from 'react';
import { motion } from 'motion/react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/cedars.tech/', color: 'hover:text-pink-400' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/96181090757', color: 'hover:text-green-400' },
    { name: 'Facebook', icon: FaFacebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'TikTok', icon: FaTiktok, href: '#', color: 'hover:text-purple-400' },
  ];

  return (
    <footer className="text-white text-center py-12 lg:py-16 px-4" role="contentinfo">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        {/* Social Links */}
        <div className="flex gap-6 text-3xl" aria-label="Social media links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ${social.color} p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#9754DE]/50`}
              aria-label={social.name}
              data-testid={`footer-${social.name.toLowerCase()}-link`}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <p>Digital systems for Lebanese businesses</p>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-white/10 my-2" />

        {/* Copyright */}
        <p className="text-gray-400 text-sm lg:text-base">
          © {currentYear} Cedars Tech. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;