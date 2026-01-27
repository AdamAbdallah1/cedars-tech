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
      whatsappText: "I'm interested in Website Development services",
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Landing Pages",
      desc: "High-converting landing pages for ads, products, and promotions.",
      whatsappText: "I'm interested in Landing Page services",
      icon: <HiOutlineDocumentText size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Business Websites",
      desc: "Professional websites for companies, startups, and brands.",
      whatsappText: "I'm interested in Business Website services",
      icon: <MdBusinessCenter size={42} className="text-[#9754DE] mb-3" />,
    },
    {
      label: "Service",
      title: "Maintenance & Support",
      desc: "Updates, fixes, hosting help, and long-term support.",
      whatsappText: "I'm interested in Maintenance & Support services",
      icon: <RiSettings3Line size={42} className="text-[#9754DE] mb-3" />,
    },
  ];

  return (
    <section className="py-32 flex flex-col items-center gap-12 text-center px-4">
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
        items={services.map((s) => ({
          ...s,
          desc: (
            <>
              {s.desc}
              <div className="mt-3 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/message/I3EGKHRI2X5EI1?text=${encodeURIComponent(s.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-2xl transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </>
          ),
          onClick: () =>
            window.open(
              `https://wa.me/message/I3EGKHRI2X5EI1?text=${encodeURIComponent(s.whatsappText)}`,
              "_blank"
            ),
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

export default Offer;
