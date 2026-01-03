import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="h-screen relative bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9')] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-dark/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading text-light max-w-3xl"
        >
          A Taste You Will Remember
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-light/80 max-w-xl"
        >
          Experience fine dining with authentic flavors, crafted by expert chefs and served in an elegant atmosphere.
        </motion.p>

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mt-10 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
>
  <a
    href="https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20reserve%20a%20table"
    target="_blank"
    className="px-8 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition hover:bg-white hover:text-black"
  >
    Reserve via WhatsApp
  </a>

  <a
    href="#menu"
    className="px-8 py-3 border border-light text-light hover:bg-light hover:text-dark transition"
  >
    View Menu
  </a>
</motion.div>

      </div>
    </section>
  )
}
