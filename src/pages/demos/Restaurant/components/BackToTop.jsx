// BackToTop.jsx
import { useState, useEffect } from "react"
import { FiArrowUp } from "react-icons/fi"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-primary text-dark rounded-full shadow-lg hover:opacity-90 transition z-50"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    )
  )
}
