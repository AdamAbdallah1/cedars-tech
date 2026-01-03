import { motion } from "framer-motion"

const images = [
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", name: "Grilled Steak" },
  { src: "https://images.unsplash.com/photo-1617196035727-ccbe0d2680e2", name: "Seafood Pasta" },
  { src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90", name: "Classic Burger" },
  { src: "https://images.unsplash.com/photo-1571091718767-18a2aaec5d13", name: "Margherita Pizza" },
  { src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", name: "Chocolate Cake" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", name: "Orange Juice" }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-heading text-center text-dark"
        >
          Our Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-dark/70 mt-4 max-w-xl mx-auto"
        >
          A glimpse of our dishes and restaurant atmosphere
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img src={img.src} alt={img.name} className="w-full h-64 object-cover transition-transform duration-300" />
              <div className="absolute inset-0 bg-dark/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <h3 className="text-light text-lg font-semibold">{img.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
