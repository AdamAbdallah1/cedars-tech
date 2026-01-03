import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of modern, high-quality websites built with React,
            focused on design, performance, and real business use cases.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg cursor-pointer"
            >
              {/* IMAGE */}
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-blue-400 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
