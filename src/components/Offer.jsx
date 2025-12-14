import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";
import MagicBento from "./MagicBento";

const Offer = () => {
  const services = [
    {
      label: "Service",
      title: "Website Development",
      desc: "Modern, fast, and responsive websites built to grow your business.",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Landing Pages",
      desc: "High-converting landing pages for ads, products, and promotions.",
      icon: <HiOutlineDocumentText size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Business Websites",
      desc: "Professional websites for companies, startups, and brands.",
      icon: <MdBusinessCenter size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Maintenance & Support",
      desc: "Updates, fixes, hosting help, and long-term support.",
      icon: <RiSettings3Line size={42} className="text-[#9754DE] mb-3" />,
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
        What We Offer
      </motion.h1>

      <p className="max-w-2xl text-gray-400 text-lg">
        Everything you need to build and manage a professional online presence.
      </p>

      <div className="w-24 h-0.5 bg-white/20 rounded-full my-6" />

      <MagicBento
        items={services}
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

export default Offer;
