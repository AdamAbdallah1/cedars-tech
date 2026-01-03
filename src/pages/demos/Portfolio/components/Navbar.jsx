import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiInstagram, FiPhone, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll progress for the top bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollProgress / 100 }}
        className="origin-left h-1 bg-blue-500 w-full"
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-bold text-xl cursor-pointer"
        >
          Cedars Tech
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              className="cursor-pointer transition-colors"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Social Icons */}
        <motion.div className="hidden md:flex gap-4 text-white text-lg">
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10, color: "#3B82F6" }} className="transition">
            <FiGithub />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10, color: "#EC4899" }} className="transition">
            <FiInstagram />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10, color: "#10B981" }} className="transition">
            <FiPhone />
          </motion.a>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="text-white text-lg font-medium cursor-pointer hover:text-blue-400"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
