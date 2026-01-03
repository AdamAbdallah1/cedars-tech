import Navbar from "./Barber/components/Navbar"
import ScrollProgress from "./Barber/components/ScrollProgress"
import BackToUp from "./Barber/components/BackToUp"
import Hero from "./Barber/components/Hero"
import About from "./Barber/components/About"
import Services from "./Barber/components/Services"
import Testimonials from "./Barber/components/Testimonials"
import Gallery from "./Barber/components/Gallery"
import Location from "./Barber/components/Location"
import Footer from "./Barber/components/Footer"
import ContactCTA from "./Barber/components/ContactCTA"

function Barber() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <BackToUp />
      <Location />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default Barber
