import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from '../assets/logo-white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Offer", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
  
  {/* Logo container */}
    <div className="relative">
      <div className="absolute inset-0 rounded-xl bg-[#9754DE]/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative w-20 h-20 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
        <img
          src={Logo}
          alt="CedarsTech Logo"
          className="w-15 h-15 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

  <span className="text-lg sm:text-xl font-black tracking-tight text-white uppercase leading-none">
    Cedars<span className="text-[#9754DE]">Tech</span>
  </span>

</a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition"
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#9754DE] transition-all group-hover:w-full" />
            </a>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/96181090757"
            className="ml-4 px-6 py-2.5 rounded-xl bg-[#9754DE] text-white text-xs font-semibold tracking-wide hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white relative z-50"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-8"
            >
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-white"
                >
                  {item}
                </a>
              ))}

              <a
                href="https://wa.me/96181090757"
                className="mt-4 w-full py-4 bg-[#9754DE] text-center rounded-xl font-semibold"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;