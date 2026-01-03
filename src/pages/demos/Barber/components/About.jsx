import { motion } from "framer-motion"
import aboutImg from "../assets/gallery/barber6.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-105"
        >
          <img
            src={aboutImg}
            alt="Barber at work"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl font-bold mb-6">
            Tradition Meets Modern Style
          </h2>

          <p className="text-gray-400 mb-6">
            Rooted in Lebanese barber culture, we blend classic craftsmanship
            with modern precision. Every cut is intentional. Every detail matters.
          </p>

          <p className="text-gray-400">
            This is not just grooming — it’s confidence, discipline, and identity.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About
