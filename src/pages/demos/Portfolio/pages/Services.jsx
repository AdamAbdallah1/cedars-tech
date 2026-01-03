import { motion } from "framer-motion";
import { FiLayers, FiBriefcase, FiUser, FiEdit } from "react-icons/fi";

const services = [
  {
    title: "Landing Pages",
    description:
      "High-conversion landing pages designed to capture leads, promote services, and drive action.",
    icon: <FiLayers size={28} />,
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for local and online businesses that build trust and showcase services clearly.",
    icon: <FiBriefcase size={28} />,
  },
  {
    title: "Portfolio Websites",
    description:
      "Clean, modern portfolios for developers, creatives, and freelancers who want to stand out.",
    icon: <FiUser size={28} />,
  },
  {
    title: "UI / UX Design",
    description:
      "User-focused interfaces with clean layouts, dark mode, and smooth interactions.",
    icon: <FiEdit size={28} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6">
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
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern web solutions built with performance, design, and business
            goals in mind.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg flex flex-col items-start gap-4 cursor-pointer transition"
            >
              <div className="text-blue-500 mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
