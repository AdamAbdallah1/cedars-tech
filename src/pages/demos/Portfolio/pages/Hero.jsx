import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-linear-to-tr from-black via-gray-900 to-gray-800 overflow-hidden">
      
      <motion.div
        className="absolute top-0 left-1/2 w-200 h-200 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl animate-[float_20s_linear_infinite]"
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-150 h-150 rounded-full bg-purple-600/10 blur-3xl animate-[float_25s_linear_infinite]"
        style={{ zIndex: 0 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl space-y-6 relative z-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight"
        >
          Adam Abdallah
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-gray-400 font-medium"
        >
          Frontend Developer / Web Developer
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          I build fast, modern, and high-converting websites using React, Tailwind,
          and motion-driven UI. Helping businesses stand out online with premium websites.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-medium text-white shadow-lg"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-2xl border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition font-medium"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {["React", "Tailwind", "Framer Motion", "JavaScript"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-gray-300 text-sm cursor-pointer shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
