import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaCut,
  FaPlane,
  FaTooth,
  FaCoffee,
  FaUserTie,
  FaTruckMoving,
  FaLaptopCode
} from "react-icons/fa";

const Work = () => {
  const items = [
    {
      title: "Restaurant System",
      desc: "Online menu, WhatsApp ordering, and customer tracking system.",
      tag: "Food Industry",
      icon: <FaUtensils />
    },
    {
      title: "Barber Booking System",
      desc: "Appointment scheduling, reminders, and client management system.",
      tag: "Service Business",
      icon: <FaCut />
    },
    {
      title: "Café Ordering System",
      desc: "Digital menu + ordering flow optimized for fast customer conversion.",
      tag: "Retail System",
      icon: <FaCoffee />
    },
    {
      title: "Clinic Management System",
      desc: "Patient scheduling, records, and appointment automation system.",
      tag: "Healthcare System",
      icon: <FaTooth />
    },
    {
      title: "Travel Agency System",
      desc: "High-conversion booking landing pages and inquiry automation.",
      tag: "Booking System",
      icon: <FaPlane />
    },
    {
      title: "Portfolio System",
      desc: "Premium personal branding websites designed to convert clients.",
      tag: "Personal Brand",
      icon: <FaUserTie />
    },
    {
      title: "Logistics System",
      desc: "Tracking dashboards and operational workflow management tools.",
      tag: "Operations System",
      icon: <FaTruckMoving />
    },
    {
      title: "Business Website System",
      desc: "Lead-focused company websites built to generate inquiries.",
      tag: "Core Product",
      icon: <FaLaptopCode />
    }
  ];

  return (
    <section id="work" className="relative py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">

          <h2 className="text-[11px] uppercase tracking-[0.35em] text-[#9754DE] font-bold mb-4">
            Work
          </h2>

          <h3 className="text-2xl lg:text-5xl font-black text-white leading-[1.1] max-w-3xl">
            Systems we’ve built for real businesses
            <span className="text-gray-500"> — not templates.</span>
          </h3>

          <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
            Every system is designed around conversion, automation, and operational efficiency —
            not just design.
          </p>

        </div>


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                group
                relative
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                overflow-hidden
              "
            >

              {/* hover glow */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-[radial-gradient(circle_at_30%_20%,rgba(151,84,222,0.15),transparent_60%)]
              " />

              {/* top row */}
              <div className="relative flex items-center justify-between mb-4">

                <span className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-gray-500
                ">
                  {item.tag}
                </span>

                <div className="
                  text-[#9754DE]
                  text-lg
                ">
                  {item.icon}
                </div>

              </div>


              {/* title */}
              <h4 className="relative text-lg font-black text-white">
                {item.title}
              </h4>


              {/* divider */}
              <div className="relative w-full h-px bg-white/5 mt-3 mb-3" />


              {/* description */}
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Work;