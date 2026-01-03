import { useState, useEffect } from "react"

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100
      setScroll(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-17 left-0 w-full h-1 bg-[#1a1a1a] z-40">
      <div
        className="h-1 bg-[#c8a24d]"
        style={{ width: `${scroll}%`, transition: "width 0.2s ease-out" }}
      />
    </div>
  )
}

export default ScrollProgress
