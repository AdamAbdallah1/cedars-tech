import { motion } from "framer-motion";

const coreSkills = ["React", "JavaScript (ES6+)", "HTML5", "CSS3"];
const toolsSkills = ["Tailwind CSS", "Framer Motion", "Git & GitHub", "Responsive Design"];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A modern frontend stack focused on performance, scalability,
            and clean user experience.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* CORE STACK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Core Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 6px 15px rgba(0,0,0,0.3)" }}
                  className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300 cursor-pointer transition"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* UI & TOOLING */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              UI, Styling & Tools
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 6px 15px rgba(0,0,0,0.3)" }}
                  className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300 cursor-pointer transition"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
