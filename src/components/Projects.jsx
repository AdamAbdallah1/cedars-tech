import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, FaCut, FaCoffee, FaPlane, 
  FaTooth, FaUtensils, FaUserTie, FaTruckMoving 
} from "react-icons/fa";
import MagicBento from "./MagicBento";

const Projects = () => {
  const projects = [
    {
      label: "Demo",
      title: "Logistics",
      desc: "End-to-end logistics solutions.",
      link: "https://cedarstech.info/demo/logistics",
      whatsappText: "I'm interested in the Logistics demo.",
      icon: <FaTruckMoving size={20} />,
      glow: "59, 130, 246",
    },
    {
      label: "Demo",
      title: "Barber Shop",
      desc: "Premium page for modern barbers.",
      link: "https://cedarstech.info/demo/barber",
      whatsappText: "I'm interested in the Barber Shop demo.",
      icon: <FaCut size={20} />,
      glow: "197, 160, 89",
    },
    {
      label: "Client",
      title: "ABC Qatar",
      desc: "Enterprise site for Qatari market.",
      link: "http://www.abcqatar.com/",
      whatsappText: "I'm interested in a project like ABC Qatar.",
      icon: <FaLaptopCode size={20} />,
      glow: "255, 255, 255",
    },
    {
      label: "Demo",
      title: "Portfolio",
      desc: "Cinematic high-end impact.",
      link: "https://cedarstech.info/demo/portfolio",
      whatsappText: "I want a professional portfolio.",
      icon: <FaUserTie size={20} />,
      glow: "99, 102, 241",
    },
    {
      label: "Demo",
      title: "Mugs Coffee",
      desc: "Cozy café showcase.",
      link: "https://cedarstech.info/demo/coffee-shop",
      whatsappText: "I'm interested in the Coffee Shop demo.",
      icon: <FaCoffee size={20} />,
      glow: "124, 45, 18",
    },
    {
      label: "Demo",
      title: "Travel",
      desc: "High-end agency visuals.",
      link: "https://cedarstech.info/demo/travel-tourism",
      whatsappText: "I love the Travel demo.",
      icon: <FaPlane size={20} />,
      glow: "16, 185, 129",
    },
    {
      label: "Demo",
      title: "Restaurant",
      desc: "Appetizing food presentations.",
      link: "https://cedarstech.info/demo/restaurant",
      whatsappText: "I'm interested in the Restaurant page.",
      icon: <FaUtensils size={20} />,
      glow: "245, 158, 11",
    },
    {
      label: "Demo",
      title: "Clinic",
      desc: "Clean medical interface.",
      link: "https://cedarstech.info/demo/dental-clinic",
      whatsappText: "I need a website for a clinic.",
      icon: <FaTooth size={20} />,
      glow: "14, 165, 233",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div className="flex flex-col items-start text-left mb-12">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#9754DE] font-bold mb-3">
          Portfolio
        </h2>

        <h3 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
          Selected work that{" "}
          <span className="text-gray-500">drives results.</span>
        </h3>
      </div>

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MagicBento
          items={projects.map((p) => ({
            ...p,
            desc: (
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] hover:border-[#9754DE]/40 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
              >
                {/* TOP SECTION: More compact spacing */}
                <div className="flex justify-between items-center mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#9754DE] group-hover:bg-[#9754DE] group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>

                  <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold border ${
                    p.label === "Client"
                      ? "text-blue-400 border-blue-400/20 bg-blue-400/5"
                      : "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
                  }`}>
                    {p.label}
                  </span>
                </div>

                {/* CONTENT: Tightened margins */}
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#9754DE] transition-colors duration-300">
                    {p.title}
                  </h4>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* ACTIONS: Compact buttons */}
                <div className="mt-auto flex gap-2 relative z-10">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center py-2 rounded-lg bg-white text-black font-bold text-[10px] uppercase tracking-wide hover:bg-[#9754DE] hover:text-white transition-all active:scale-95"
                  >
                    View
                  </a>

                  <a
                    href={`https://wa.me/96181090757?text=${encodeURIComponent(p.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center py-2 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-wide hover:bg-white/10 transition-all active:scale-95"
                  >
                    Order
                  </a>
                </div>
              </motion.div>
            ),
            glowColor: p.glow,
            onClick: () => window.open(p.link, "_blank"),
          }))}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt={false}
          enableMagnetism={false}
          particleCount={6}
          spotlightRadius={100}
        />
      </motion.div>
    </section>
  );
};

export default Projects;