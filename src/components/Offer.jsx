import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

const Offer = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom-built, high-performance websites using React & Next.js.",
      icon: <FaLaptopCode size={24} />,
    },
    {
      title: "Landing Pages",
      desc: "Optimized funnels designed to convert Lebanese traffic into customers.",
      icon: <FaRocket size={24} />,
    },
    {
      title: "Security & Audits",
      desc: "Leveraging our ethical hacking expertise to keep your data safe.",
      icon: <FaShieldAlt size={24} />,
    },
    {
      title: "SEO & Growth",
      desc: "Strategic positioning to rank your business on top of search results.",
      icon: <FaChartLine size={24} />,
    },
  ];

  return (
    <section id="offer" className="py-32">
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#9754DE] font-bold mb-4">Our Services</h2>
        <h3 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl">
          Everything you need for a <span className="text-gray-500">modern digital presence.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/50 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#9754DE] mb-6 group-hover:bg-[#9754DE] group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Offer;