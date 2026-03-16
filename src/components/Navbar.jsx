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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled && !isOpen
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-around">
        <a href="/" className="flex items-center gap-2 relative z-[110]">
          <img
            src={Logo}
            alt="CedarsTech Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-lg font-black tracking-tighter text-white uppercase">
            Cedars<span className="text-[#9754DE]">Tech</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/96181090757"
            className="px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#9754DE] hover:text-white transition-all"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] p-2 text-white overflow-hidden"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center lg:hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9754DE]/20 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center gap-10">
              {links.map((item, idx) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black text-white uppercase tracking-tighter hover:text-[#9754DE] transition-colors"
                >
                  {item}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="https://wa.me/96181090757"
                  className="px-10 py-4 rounded-full bg-[#9754DE] text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-purple-500/30"
                >
                  WhatsApp Now
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                Beirut • Lebanon
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;