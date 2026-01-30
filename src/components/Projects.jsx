import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCut, FaCoffee, FaPlane, FaCalendarAlt, FaTooth, FaUtensils, FaHammer, FaPaw, FaUserTie } from "react-icons/fa";
import MagicBento from "./MagicBento";

const Projects = () => {
  const projects = [
    {
      label: "Demo",
      title: "Barber Shop",
      desc: "Premium, bold landing page for modern barbers. Masculine aesthetic with seamless booking flow.",
      link: "https://cedarstech.info/demo/barber",
      whatsappText: "I'm interested in the Barber Shop demo for my business.",
      icon: <FaCut size={42} className="text-[#C5A059] mb-3" />, // Gold
      glow: "197, 160, 89",
    },
    {
      label: "Demo",
      title: "Creative Portfolio",
      desc: "Cinematic developer portfolio. Clean, professional, and built for high-end creative impact.",
      link: "https://cedarstech.info/demo/portfolio",
      whatsappText: "I want a professional portfolio like your demo.",
      icon: <FaUserTie size={42} className="text-[#6366f1] mb-3" />, // Indigo
      glow: "99, 102, 241",
    },
    {
      label: "Demo",
      title: "Mugs Coffee",
      desc: "Cozy and stylish café experience. Warm atmosphere with elegant product showcases.",
      link: "https://cedarstech.info/demo/coffee-shop",
      whatsappText: "I'm interested in the Coffee Shop demo.",
      icon: <FaCoffee size={42} className="text-[#7C2D12] mb-3" />, // Warm Coffee
      glow: "124, 45, 18",
    },
    {
      label: "Demo",
      title: "Travel & Tourism",
      desc: "High-end travel agency site. Cinematic visuals, destination grids, and luxury booking.",
      link: "https://cedarstech.info/demo/travel-tourism",
      whatsappText: "I love the Travel & Tourism demo. Can we customize it?",
      icon: <FaPlane size={42} className="text-[#10b981] mb-3" />, // Emerald
      glow: "16, 185, 129",
    },
    {
      label: "Demo",
      title: "Event Planning",
      desc: "Elegant luxury feel for weddings and corporate events. Sophisticated gallery and services.",
      link: "https://cedarstech.info/demo/event-planner",
      whatsappText: "I'm interested in the Event Planner website.",
      icon: <FaCalendarAlt size={42} className="text-[#EC4899] mb-3" />, // Pink
      glow: "236, 72, 153",
    },
    {
      label: "Demo",
      title: "Dental Clinic",
      desc: "Clean, trustworthy medical interface. Focused on clarity, professionalism, and patient trust.",
      link: "https://cedarstech.info/demo/dental-clinic",
      whatsappText: "I need a website for a clinic like your Dental demo.",
      icon: <FaTooth size={42} className="text-[#0EA5E9] mb-3" />, // Sky Blue
      glow: "14, 165, 233",
    },
    {
      label: "Demo",
      title: "Modern Restaurant",
      desc: "Appetizing food presentation and menu layouts. Built to drive table reservations.",
      link: "https://cedarstech.info/demo/restaurant",
      whatsappText: "I'm interested in the Restaurant landing page.",
      icon: <FaUtensils size={42} className="text-[#F59E0B] mb-3" />, // Amber
      glow: "245, 158, 11",
    },
    {
      label: "Demo",
      title: "Construction & Reno",
      desc: "Strong, reliable, and premium. Showcasing craftsmanship and project management.",
      link: "https://cedarstech.info/demo/renovate",
      whatsappText: "I'm interested in the Renovation/Construction demo.",
      icon: <FaHammer size={42} className="text-[#EF4444] mb-3" />, // Red
      glow: "239, 68, 68",
    },
    {
      label: "Demo",
      title: "Pet Care & Clinic",
      desc: "Friendly and emotional grooming/vet site. Modern visuals for pet lovers.",
      link: "https://cedarstech.info/demo/pet-care",
      whatsappText: "I'm interested in the Pet Care website demo.",
      icon: <FaPaw size={42} className="text-[#8B5CF6] mb-3" />, // Violet
      glow: "139, 92, 246",
    },
    {
      label: "Client",
      title: "ABC Qatar",
      desc: "Professional enterprise business website tailored for the Qatari market.",
      link: "http://www.abcqatar.com/",
      whatsappText: "I'm interested in a business project like ABC Qatar.",
      icon: <FaLaptopCode size={42} className="text-white/50 mb-3" />,
      glow: "255, 255, 255",
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 flex flex-col items-center gap-8 lg:gap-12 text-center px-4 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
              >
                Demos & Projects
              </motion.h2>
        <p className="max-w-2xl text-gray-400 text-base lg:text-lg px-4 mt-4 font-medium">
          Premium demos and client projects crafted by <span className="text-white">Cedars Tech</span>. 
          Ready-to-deploy solutions for your business.
        </p>
      </motion.div>

      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9754DE] to-transparent rounded-full my-4" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-[1400px]"
      >
        <MagicBento
          items={projects.map(p => ({
            ...p,
            // Customizing the content inside MagicBento
            desc: (
              <div className="flex flex-col h-full">
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${p.label === 'Client' ? 'text-blue-400' : 'text-emerald-400'}`}>
                   {p.label}
                </span>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full py-3 text-white border border-white/10 bg-white/5 hover:bg-white hover:text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-500"
                  >
                    Launch Demo
                  </a>
                  <a
                    href={`https://wa.me/96181090757?text=${encodeURIComponent(p.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full py-3 text-white bg-green-600 hover:bg-green-500 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-green-900/20"
                  >
                    Get This Site
                  </a>
                </div>
              </div>
            ),
            // Override the glow color per project
            glowColor: p.glow,
            onClick: () => window.open(p.link, "_blank"),
          }))}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          particleCount={15}
          spotlightRadius={250}
        />
      </motion.div>
    </section>
  );
};

export default Projects;