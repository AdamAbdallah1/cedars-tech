// CookiesConsent.jsx
import { useState, useEffect } from "react"

export default function CookiesConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted")
    if (!accepted) setShow(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-dark text-light p-4 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience. By using our website you agree to our cookie policy.
      </p>
    <div>
              <button
        onClick={acceptCookies}
        className="px-4 py-2 bg-primary text-dark font-semibold hover:bg-primary/90 transition rounded-full"
      >
        Accept
      </button>      <button
        onClick={acceptCookies}
        className="px-4 py-2 bg-primary text-dark font-semibold hover:bg-primary/90 transition rounded-full"
      >
        Denid
      </button>
    </div>
    </div>
  )
}
