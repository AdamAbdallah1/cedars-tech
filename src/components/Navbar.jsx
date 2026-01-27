import React, { useState } from 'react';
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

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
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20 flex justify-between items-center px-8 py-4 rounded-b-2xl">
      
      <h1 className="text-2xl font-bold text-white cursor-pointer">Cedars Tech</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, idx) => (
          <a 
            key={idx} 
            href={link.href} 
            className="text-white hover:text-[#9754DE] font-medium transition-colors"
          >
            {link.name}
          </a>
        ))}

        <a
          href="https://wa.me/96181090757"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9754DE] hover:bg-[#B19EEF] text-white font-semibold px-5 py-2 rounded-xl transition-all"
        >
          Get Your Website
        </a>

        <div className="flex gap-4 text-2xl ml-4">
          <a href="https://www.instagram.com/cedars.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9FFC]">
            <CiInstagram />
          </a>
          <a href="#" className="hover:text-[#FF9FFC]">
            <CiFacebook />
          </a>
          <a href="https://wa.me/message/I3EGKHRI2X5EI1" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} className="text-white" /> : <HiMenu size={30} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-xl flex flex-col items-center py-6 gap-6 md:hidden shadow-lg border-t border-white/20 rounded-b-2xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:text-[#9754DE] font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/message/I3EGKHRI2X5EI1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9754DE] hover:bg-[#B19EEF] text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Get Your Website
          </a>

          <div className="flex gap-6 text-3xl">
            <a href="https://www.instagram.com/cedars.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9FFC]">
              <CiInstagram />
            </a>
            <a href="#" className="hover:text-[#FF9FFC]">
              <CiFacebook />
            </a>
            <a href="https://wa.me/96181090757" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
