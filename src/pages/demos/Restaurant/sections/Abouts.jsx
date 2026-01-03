import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading text-dark">
            Crafted With Passion
          </h2>

          <p className="mt-6 text-dark/70 leading-relaxed">
            Our restaurant blends tradition and innovation to deliver unforgettable flavors.
            Every dish is prepared using fresh ingredients and inspired by culinary excellence.
          </p>

          <p className="mt-4 text-dark/70 leading-relaxed">
            From intimate dinners to family gatherings, we create moments that stay with you.
          </p>

          <button className="mt-8 px-8 py-3 bg-primary text-light hover:opacity-90 transition">
            Discover Our Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}
