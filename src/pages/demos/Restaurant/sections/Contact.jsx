import { FiMapPin, FiClock, FiPhone } from "react-icons/fi"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading mb-6">Contact & Location</h2>

          <div className="flex items-center gap-4 mb-4">
            <FiMapPin className="text-primary w-6 h-6"/>
            <span>123 Restaurant Street, City, Country</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FiClock className="text-primary w-6 h-6"/>
            <span>Open: 10:00 AM - 10:00 PM</span>
          </div>

          <div className="flex items-center gap-4">
            <FiPhone className="text-primary w-6 h-6"/>
            <span>+961 123 456</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-80 md:h-full bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] bg-cover bg-center rounded-2xl shadow-lg"
        />
      </div>
    </section>
  )
}
