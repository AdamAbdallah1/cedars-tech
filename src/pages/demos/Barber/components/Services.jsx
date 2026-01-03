import { motion } from "framer-motion"
import { ScissorsIcon, SparklesIcon, FireIcon } from "@heroicons/react/24/solid"

const services = [
  { title: "Haircut", icon: <ScissorsIcon className="w-16 h-16 text-[#c8a24d] mb-4" /> },
  { title: "Beard Styling", icon: <SparklesIcon className="w-16 h-16 text-[#c8a24d] mb-4" /> },
  { title: "Hot Shave", icon: <FireIcon className="w-16 h-16 text-[#c8a24d] mb-4" /> },
]

const Services = () => {
  return (
    <section id="services" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              {s.icon}
              <h3 className="text-[#c8a24d] text-xl font-bold">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
