import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Offer = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Modern, fast, and responsive websites built to grow your business.",
      icon: <FaLaptopCode size={40} className="text-[#9754DE] mb-4 mx-auto" />,
    },
    {
      title: "Landing Pages",
      desc: "High-converting landing pages for ads, products, and promotions.",
      icon: <HiOutlineDocumentText size={40} className="text-[#9754DE] mb-4 mx-auto" />,
    },
    {
      title: "Business Websites",
      desc: "Professional websites for companies, startups, and brands.",
      icon: <MdBusinessCenter size={40} className="text-[#9754DE] mb-4 mx-auto" />,
    },
    {
      title: "Maintenance & Support",
      desc: "Updates, fixes, hosting help, and long-term support.",
      icon: <RiSettings3Line size={40} className="text-[#9754DE] mb-4 mx-auto" />,
    },
  ];

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -80 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center text-center gap-10 py-32 "
    >
      <h1 className="lg:text-5xl text-3xl font-bold bg-linear-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent">
        What We Offer
      </h1>

      <p className="lg:text-[20px] text-gray-400 max-w-2xl">
        Everything you need to build and manage a professional online presence.
      </p>

      <div className="w-24 h-0.5 bg-white/20 my-12 rounded-full" />

      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className=" bg-transparent backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg transition-all hover:border-white/30"
            >
              {/* Icon added */}
              {service.icon}

              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Offer;
