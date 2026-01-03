import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import cut1 from "../assets/gallery/barber1.jpg"
import cut2 from "../assets/gallery/barber2.jpg"
import cut3 from "../assets/gallery/barber3.jpg"
import cut4 from "../assets/gallery/barber4.jpg"
import cut5 from "../assets/gallery/barber5.jpg"
import cut6 from "../assets/gallery/barber6.jpg"

const images = [cut1, cut2, cut3, cut4, cut5, cut6]

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="gallery" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold mb-12"
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt="Barber work"
                className="w-full h-48 md:h-60 lg:h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
