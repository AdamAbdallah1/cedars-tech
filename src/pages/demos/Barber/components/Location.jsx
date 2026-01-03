import { motion } from "framer-motion"

const Location = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold mb-8"
        >
          Location
        </motion.h2>

        <div className="rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            title="Barber Location"
            src="https://www.google.com/maps?q=Beirut&output=embed"
            className="w-full h-100"
            loading="lazy"
          />
        </div>

        <p className="text-gray-400 mt-6">
          Beirut • Easy access • Parking nearby
        </p>
      </div>
    </section>
  )
}

export default Location
