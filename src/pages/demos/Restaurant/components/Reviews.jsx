// Reviews.jsx
import { motion } from "framer-motion"

const reviews = [
  { name: "John Doe", review: "Best steak I've ever had! Highly recommended." },
  { name: "Sarah Smith", review: "Amazing ambiance and delicious desserts." },
  { name: "Ali Hassan", review: "Great service and authentic flavors!" },
]

export default function Reviews() {
  return (
    <section className="bg-dark text-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-heading text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-light/10 p-6 rounded-xl shadow-lg"
            >
              <p className="text-light/80 mb-4">"{r.review}"</p>
              <h4 className="font-semibold">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
