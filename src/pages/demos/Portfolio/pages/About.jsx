import { motion } from "framer-motion";

const highlights = [
  {
    title: "Modern Stack",
    desc: "React, Tailwind, Framer Motion, modern UI systems",
  },
  { title: "Performance", desc: "Fast load times, optimized assets, clean code" },
  { title: "UI / UX", desc: "Clean layouts, dark mode, smooth interactions" },
  { title: "Client Focus", desc: "Business-ready websites built to convert" },
];

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">

        {/* LEFT — TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 leading-relaxed mb-6 text-center md:text-left"
          >
            I’m a frontend developer and the founder of{" "}
            <span className="text-white font-medium">Cedars Tech</span>, focused on building
            modern, fast, and conversion-driven websites. I specialize in clean UI/UX,
            smooth animations, and scalable React architectures.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 leading-relaxed text-center md:text-left"
          >
            My goal is simple: help businesses stand out online with websites
            that look premium, load fast, and build trust with their audience.
          </motion.p>
        </motion.div>

        {/* RIGHT — HIGHLIGHT CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
