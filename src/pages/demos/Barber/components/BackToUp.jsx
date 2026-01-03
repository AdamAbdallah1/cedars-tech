import { useState, useEffect } from "react"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-[#c8a24d] text-black p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
