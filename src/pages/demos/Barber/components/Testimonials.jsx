import { motion } from "framer-motion"
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"

const testimonials = [
  { name: "Rami H.", text: "The haircut and beard styling were perfect! Highly recommended." },
  { name: "Karim S.", text: "Modern and traditional style combined beautifully. Loved it!" },
  { name: "Nour A.", text: "Friendly staff and amazing precision. My go-to barber now." },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <ChatBubbleLeftEllipsisIcon className="w-16 h-16 text-[#c8a24d] mb-4"/>
              <p className="text-gray-400 text-sm mb-4">"{t.text}"</p>
              <h3 className="text-[#c8a24d] text-lg font-bold">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
