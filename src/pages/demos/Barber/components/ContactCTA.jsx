import { motion } from "framer-motion"

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-4xl font-bold mb-6"
        >
          Book Your Appointment
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Fast booking. No waiting. Contact us directly on WhatsApp.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/96181090757"
          className="inline-block bg-[#c8a24d] text-black px-10 py-4 rounded-full font-medium"
        >
          WhatsApp Now
        </motion.a>
      </div>
    </section>
  )
}

export default ContactCTA
