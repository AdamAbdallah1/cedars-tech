import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import MagicBento from "./MagicBento";

const Projects = () => {
  const projects = [
    {
      label: "Demo / Client",
      title: "Mugs Coffee",
      desc: "A modern coffee website demo showcasing products and services.",
      link: "https://adamabdallah1.github.io/mugs-coffee-website/",
      whatsappText: "I'm interested in the Mugs Coffee website demo",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Demo",
      title: "Portfolio",
      desc: "A sleek portfolio website demo to showcase projects and skills.",
      link: "https://www.cedarstech.info/demo/portfolio/",
      whatsappText: "I'm interested in the Portfolio website demo",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Demo",
      title: "Restaurant Demo",
      desc: "A responsive restaurant website demo with menu and reservation features.",
      link: "https://www.cedarstech.info/demo/restaurant/",
      whatsappText: "I'm interested in the Restaurant website demo",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Demo",
      title: "Barber Shop Demo",
      desc: "A stylish barber shop website demo with service listings and booking options.",
      link: "https://www.cedarstech.info/demo/barber/",
      whatsappText: "I'm interested in the Barber Shop website demo",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Client",
      title: "ABC Qatar",
      desc: "Professional business website for ABC Qatar.",
      link: "http://www.abcqatar.com/",
      whatsappText: "I'm interested in ABC Qatar website project",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "IndigoFlex Movies",
      desc: "Movie listing platform with search and filtering features.",
      link: "https://adamabdallah1.github.io/indigoflix-movies/",
      whatsappText: "I'm interested in IndigoFlex Movies project",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Wise Words",
      desc: "A motivational quotes website with daily inspirations.",
      link: "https://adamabdallah1.github.io/WiseWords/",
      whatsappText: "I'm interested in Wise Words project",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Pump Plan",
      desc: "Workout and fitness app with generated exercise plans.",
      link: "https://adamabdallah1.github.io/pump-plan/",
      whatsappText: "I'm interested in Pump Plan project",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Focus Task Manager",
      desc: "A productivity app to manage tasks efficiently.",
      link: "https://adamabdallah1.github.io/focus-task-manager/",
      whatsappText: "I'm interested in Focus Task Manager project",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
  ];

  return (
    <section className="py-32 flex flex-col items-center gap-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:text-5xl text-3xl font-bold bg-linear-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
      >
        Demos & Projects
      </motion.h1>

      <p className="max-w-2xl text-gray-400 text-lg">
        Explore the projects and demos we have built for our clients and personal experiments.
      </p>

      <div className="w-24 h-0.5 bg-white/20 rounded-full my-6" />

      <MagicBento
        items={projects.map(p => ({
          ...p,
          desc: (
            <>
              {p.desc}
              <div className="mt-3 flex flex-col sm:flex-row justify-center gap-3">
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto text-center px-6 py-3 text-white bg-[#9754DE] hover:bg-[#b19eef] rounded-2xl font-semibold transition-colors"
  >
    View Demo
  </a>
  <a
    href={`https://wa.me/message/I3EGKHRI2X5EI1?text=${encodeURIComponent(p.whatsappText)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto text-center px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-2xl font-semibold transition-colors"
  >
    Get This Website
  </a>
</div>

            </>
          ),
          onClick: () => window.open(p.link, "_blank"),
        }))}
        enableStars
        enableSpotlight
        enableBorderGlow
        enableTilt
        enableMagnetism
        clickEffect
        particleCount={12}
        spotlightRadius={300}
        glowColor="151, 84, 222"
      />
    </section>
  );
};

export default Projects;
