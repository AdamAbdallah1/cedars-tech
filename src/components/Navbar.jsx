import React, { useState } from 'react';
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Offer", href: "#offer" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Streaming", href: "https://www.cedarstech.info/streaming/prices" },
  ];

  return (
    <nav 
      className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <motion.h1 
          className="text-xl sm:text-2xl font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Cedars Tech
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-white hover:text-[#9754DE] font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9754DE]/50 rounded px-2 py-1"
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/96181090757"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9754DE] hover:bg-[#B19EEF] text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-[#9754DE]"
            data-testid="get-website-cta-btn"
          >
            Get Your Website
          </a>

          <div className="flex gap-3 text-2xl ml-2" aria-label="Social media links">
            <a 
              href="https://www.instagram.com/cedars.tech/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF9FFC] transition-colors duration-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9FFC]/50"
              aria-label="Instagram"
              data-testid="nav-instagram-link"
            >
              <CiInstagram />
            </a>
            <a 
              href="#" 
              className="hover:text-[#FF9FFC] transition-colors duration-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9FFC]/50"
              aria-label="Facebook"
              data-testid="nav-facebook-link"
            >
              <CiFacebook />
            </a>
            <a 
              href="https://wa.me/96181090757" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#25D366] transition-colors duration-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
              aria-label="WhatsApp"
              data-testid="nav-whatsapp-link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#9754DE]/50 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white hover:text-[#9754DE] font-medium text-lg w-full text-center py-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9754DE]/50 rounded"
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://wa.me/96181090757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9754DE] hover:bg-[#B19EEF] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-[#9754DE] mt-2"
                data-testid="mobile-get-website-btn"
              >
                Get Your Website
              </a>

              <div className="flex gap-6 text-3xl mt-4" aria-label="Social media links">
                <a 
                  href="https://www.instagram.com/cedars.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FF9FFC] transition-colors duration-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9FFC]/50"
                  aria-label="Instagram"
                  data-testid="mobile-instagram-link"
                >
                  <CiInstagram />
                </a>
                <a 
                  href="#" 
                  className="hover:text-[#FF9FFC] transition-colors duration-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9FFC]/50"
                  aria-label="Facebook"
                  data-testid="mobile-facebook-link"
                >
                  <CiFacebook />
                </a>
                <a 
                  href="https://wa.me/96181090757" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#25D366] transition-colors duration-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
                  aria-label="WhatsApp"
                  data-testid="mobile-whatsapp-link"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;