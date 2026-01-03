import './Restaurant/App.css'

import Navbar from "./Restaurant/sections/Navbar"
import Hero from "./Restaurant/sections/Hero"
import About from "./Restaurant/sections/Abouts"
import Menu from "./Restaurant/sections/Menu"
import Gallery from "./Restaurant/sections/Gallery"
import Contact from "./Restaurant/sections/Contact"
import Footer from "./Restaurant/sections/Footer"
import Reservation from "./Restaurant/sections/Reservation"
import Preloader from "./Restaurant/components/Preloader"
import BackToTop from "./Restaurant/components/BackToTop"
import Reviews from "./Restaurant/components/Reviews"
import CookiesConsent from "./Restaurant/components/CookiesConsent"

export default function App() {
  return (
    <>
    <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Reviews />
      <Contact />
      <BackToTop />
      <CookiesConsent />
      <Footer />
    </>
  )
}
