import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/logo-white.png";

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

 const links = [
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" }
];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">

      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 z-[110]">
          <img
            src={Logo}
            alt="CedarsTech"
            className="w-10 h-10 object-contain"
          />

          <span className="text-white font-black tracking-tight text-lg">
            Cedars<span className="text-[#9754DE]">Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/96181090757"
            className="
              px-6 py-2
              rounded-full
              bg-white
              text-black
              font-bold
              text-xs
              uppercase
              tracking-widest
              hover:bg-[#9754DE]
              hover:text-white
              transition
            "
          >
            Free Audit
          </a>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-[110] text-white"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >

            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl font-black text-white uppercase tracking-tight hover:text-[#9754DE]"
              >
                {link.name}
              </motion.a>
            ))}

            <a
              href="https://wa.me/96181090757"
              className="mt-10 px-10 py-4 bg-[#9754DE] text-white font-black uppercase tracking-widest rounded-full"
            >
              Free Audit
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;