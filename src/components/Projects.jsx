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
      icon: <FaTruckMoving size={18} />,
      glow: "59, 130, 246",
    },
    {
      label: "Demo",
      title: "Barber Shop",
      desc: "Premium page for modern barbers.",
      link: "https://cedarstech.info/demo/barber",
      whatsappText: "I'm interested in the Barber Shop demo.",
      icon: <FaCut size={18} />,
      glow: "197, 160, 89",
    },
    {
      label: "Client",
      title: "ABC Qatar",
      desc: "Enterprise site for Qatari market.",
      link: "http://www.abcqatar.com/",
      whatsappText: "I'm interested in a project like ABC Qatar.",
      icon: <FaLaptopCode size={18} />,
      glow: "255, 255, 255",
    },
    {
      label: "Demo",
      title: "Portfolio",
      desc: "Cinematic high-end impact.",
      link: "https://cedarstech.info/demo/portfolio",
      whatsappText: "I want a professional portfolio.",
      icon: <FaUserTie size={18} />,
      glow: "99, 102, 241",
    },
    {
      label: "Demo",
      title: "Mugs Coffee",
      desc: "Cozy café showcase.",
      link: "https://cedarstech.info/demo/coffee-shop",
      whatsappText: "I'm interested in the Coffee Shop demo.",
      icon: <FaCoffee size={18} />,
      glow: "124, 45, 18",
    },
    {
      label: "Demo",
      title: "Travel",
      desc: "High-end agency visuals.",
      link: "https://cedarstech.info/demo/travel-tourism",
      whatsappText: "I love the Travel demo.",
      icon: <FaPlane size={18} />,
      glow: "16, 185, 129",
    },
    {
      label: "Demo",
      title: "Restaurant",
      desc: "Appetizing food presentations.",
      link: "https://cedarstech.info/demo/restaurant",
      whatsappText: "I'm interested in the Restaurant page.",
      icon: <FaUtensils size={18} />,
      glow: "245, 158, 11",
    },
    {
      label: "Demo",
      title: "Clinic",
      desc: "Clean medical interface.",
      link: "https://cedarstech.info/demo/dental-clinic",
      whatsappText: "I need a website for a clinic.",
      icon: <FaTooth size={18} />,
      glow: "14, 165, 233",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div className="flex flex-col items-start text-left mb-20">
        <h2 className="text-sm uppercase tracking-[0.35em] text-[#9754DE] font-semibold mb-4">
          Portfolio
        </h2>

        <h3 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
          Selected work that{" "}
          <span className="text-gray-500">drives real results.</span>
        </h3>
      </div>

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MagicBento
          items={projects.map((p) => ({
            ...p,
            desc: (
              <motion.div
                whileHover={{ y: -4 }}
                className="relative flex flex-col h-full p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:border-white/20"
              >
                {/* subtle glow */}
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 blur-2xl"
                  style={{ background: `rgba(${p.glow},0.15)` }}
                />

                {/* TOP */}
                <div className="flex justify-between items-center mb-5 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9754DE]">
                    {p.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      p.label === "Client" ? "bg-blue-400" : "bg-emerald-400"
                    }`} />

                    <span className={`text-[10px] px-2 py-0.5 rounded-md uppercase tracking-widest font-semibold border ${
                      p.label === "Client"
                        ? "text-blue-400 border-blue-400/30 bg-blue-400/10"
                        : "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                    }`}>
                      {p.label}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {p.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="mt-auto flex gap-2 relative z-10">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wide hover:scale-[1.03] active:scale-[0.98] transition"
                  >
                    View
                  </a>

                  <a
                    href={`https://wa.me/96181090757?text=${encodeURIComponent(p.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs uppercase tracking-wide hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] transition"
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
          particleCount={8}
          spotlightRadius={120}
        />
      </motion.div>
    </section>
  );
};

export default Projects;