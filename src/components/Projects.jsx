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
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Demo",
      title: "Restaurant Demo",
      desc: "A responsive restaurant website demo with menu and reservation features.",
      link: "https://adamabdallah1.github.io/restaurant-demo/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Client",
      title: "ABC Qatar",
      desc: "Professional business website for ABC Qatar.",
      link: "http://www.abcqatar.com/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "IndigoFlex Movies",
      desc: "Movie listing platform with search and filtering features.",
      link: "https://adamabdallah1.github.io/indigoflix-movies/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Wise Words",
      desc: "A motivational quotes website with daily inspirations.",
      link: "https://adamabdallah1.github.io/WiseWords/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Pump Plan",
      desc: "Workout and fitness app with generated exercise plans.",
      link: "https://adamabdallah1.github.io/pump-plan/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Project",
      title: "Focus Task Manager",
      desc: "A productivity app to manage tasks efficiently.",
      link: "https://adamabdallah1.github.io/focus-task-manager/",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
  ];

  return (
    <section className="py-32 flex flex-col items-center gap-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
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
              <div className="mt-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 mt-2 text-white bg-[#9754DE] hover:bg-[#b19eef] rounded-lg font-medium transition-colors"
                >
                  View Project
                </a>
              </div>
            </>
          ),
          onClick: () => window.open(p.link, "_blank"), // keeps the card clickable
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
