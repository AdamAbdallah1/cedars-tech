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
      icon: <FaLaptopCode size={42} className="text-[#9754DE] mb-3" aria-hidden="true" />,
    },
    {
      label: "Service",
      title: "Landing Pages",
      desc: "High-converting landing pages for ads, products, and promotions.",
      whatsappText: "I'm interested in Landing Page services",
      icon: <HiOutlineDocumentText size={42} className="text-[#9754DE] mb-3" aria-hidden="true" />,
    },
    {
      label: "Service",
      title: "Business Websites",
      desc: "Professional websites for companies, startups, and brands.",
      whatsappText: "I'm interested in Business Website services",
      icon: <MdBusinessCenter size={42} className="text-[#9754DE] mb-3" aria-hidden="true" />,
    },
    {
      label: "Service",
      title: "Maintenance & Support",
      desc: "Updates, fixes, hosting help, and long-term support.",
      whatsappText: "I'm interested in Maintenance & Support services",
      icon: <RiSettings3Line size={42} className="text-[#9754DE] mb-3" aria-hidden="true" />,
    },
  ];

  return (
    <section id="offer" className="py-20 lg:py-32 flex flex-col items-center gap-8 lg:gap-12 text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
      >
        What We Offer
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-400 text-base lg:text-lg px-4"
      >
        Everything you need to build and manage a professional online presence.
      </motion.p>

      <div className="w-24 h-0.5 bg-white/20 rounded-full my-2 lg:my-6" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <MagicBento
          items={services.map((s) => ({
            ...s,
            desc: (
              <>
                {s.desc}
                <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/96181090757?text=${encodeURIComponent(s.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-green-500"
                    data-testid={`offer-contact-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Contact Us
                  </a>
                </div>
              </>
            ),
            onClick: () =>
              window.open(
                `https://wa.me/96181090757?text=${encodeURIComponent(s.whatsappText)}`,
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
      </motion.div>
    </section>
  );
};

export default Offer;