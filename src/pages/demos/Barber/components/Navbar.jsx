import { useState } from "react"
import { motion } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-white text-xl font-semibold tracking-wide">
          Beirut <span className="text-[#c8a24d]">Barber</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:block border border-[#c8a24d] text-[#c8a24d] px-5 py-2 text-sm rounded-full hover:bg-[#c8a24d] hover:text-black transition"
        >
          Book Now
        </motion.a>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="w-6 h-6 text-white" /> : <HiMenu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-black/90"
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-gray-300 text-sm">
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition">About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Contact</a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-[#c8a24d] text-[#c8a24d] px-5 py-2 text-sm rounded-full hover:bg-[#c8a24d] hover:text-black transition text-center"
          >
            Book Now
          </a>
        </div>
      </motion.div>

    </nav>
  )
}

export default Navbar
