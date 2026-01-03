import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  const sections = ["home", "about", "menu", "gallery", "reservation", "contact"]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      let current = "home"
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollPos) {
          current = section
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    hidden: { scaleY: 0, opacity: 0, transformOrigin: "top" },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.3 } }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-heading text-primary cursor-pointer" onClick={() => scrollTo("home")}>Restaurant</h1>

        <ul className="hidden md:flex gap-8 text-sm text-light">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer transition hover:text-primary ${
                active === sec ? "text-primary font-semibold" : ""
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>

        <button className="hidden md:block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-light transition">
          Reserve
        </button>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX className="w-6 h-6 text-light"/> : <FiMenu className="w-6 h-6 text-light"/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-dark/90 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-light text-lg">
              {sections.map((sec) => (
                <li
                  key={sec}
                  onClick={() => scrollTo(sec)}
                  className={`cursor-pointer transition hover:text-primary ${
                    active === sec ? "text-primary font-semibold" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </li>
              ))}
              <li>
                <button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-light transition">
                  Reserve
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
