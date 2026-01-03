import { motion } from "framer-motion"
import heroImg from "../assets/gallery/barber1.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#c8a24d] uppercase tracking-widest text-sm mb-4">
            Beirut Barber Studio
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Sharp Cuts.<br />Timeless Style.
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            A modern Lebanese barbershop delivering precision haircuts,
            clean fades, and confident style.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#c8a24d] text-black px-6 py-3 rounded-full text-sm font-medium"
            >
              Book Appointment
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#services"
              className="border border-gray-600 text-white px-6 py-3 rounded-full text-sm"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img
            src={heroImg}
            alt="Barber shop"
            className="w-full h-130 object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
