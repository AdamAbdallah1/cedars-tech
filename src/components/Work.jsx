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
    FaCalendarAlt
  } from "react-icons/fa";

  const Work = () => {
    const items = [
      {
        title: "Restaurant Demo",
        desc: "High-conversion restaurant landing page with menu + WhatsApp ordering flow.",
        tag: "Food Industry",
        icon: <FaUtensils />,
        link: "/demo/restaurant"
      },
      {
        title: "Barber Booking Demo",
        desc: "Appointment-based booking landing page for service businesses.",
        tag: "Service Business",
        icon: <FaCut />,
        link: "/demo/barber"
      },
      {
        title: "Coffee Shop Demo",
        desc: "Simple ordering-focused café landing page optimized for mobile conversion.",
        tag: "Retail System",
        icon: <FaCoffee />,
        link: "/demo/coffee-shop"
      },
      {
        title: "Dental Clinic Demo",
        desc: "Clinic landing page with appointment structure and trust-focused design.",
        tag: "Healthcare System",
        icon: <FaTooth />,
        link: "/demo/dental-clinic"
      },
      {
        title: "Event Planning Demo",
        desc: "Landing page for booking events, inquiries, and service requests.",
        tag: "Booking System",
        icon: <FaCalendarAlt />,
        link: "/demo/event-plan"
      },
      {
        title: "Portfolio Demo",
        desc: "Personal branding landing page designed to convert clients & recruiters.",
        tag: "Personal Brand",
        icon: <FaUserTie />,
        link: "/demo/portfolio"
      },
      {
        title: "Logistics Demo",
        desc: "Operational landing page for transport and logistics businesses.",
        tag: "Operations System",
        icon: <FaTruckMoving />,
        link: "/demo/logistics"
      },
      {
        title: "Travel Agency Demo",
        desc: "Tourism landing page optimized for booking inquiries.",
        tag: "Booking System",
        icon: <FaPlane />,
        link: "/demo/travel-tourism"
      }
    ];

    return (
      <section id="work" className="relative py-24 overflow-hidden">

        {/* background consistency */}
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-14">

            <h2 className="text-[11px] uppercase tracking-[0.35em] text-[#9754DE] font-bold mb-4">
              Demo Library
            </h2>

            <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] max-w-3xl">
              Real landing pages built for real businesses
              <span className="text-gray-500"> — click to explore.</span>
            </h3>

            <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
              These are live demos of Cedars Tech landing page systems.
              Each one is optimized for conversions, WhatsApp leads, and local business growth.
            </p>

          </div>


          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {items.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  group
                  relative
                  p-6
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  overflow-hidden
                  block
                "
              >

                {/* glow */}
                <div className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-[radial-gradient(circle_at_30%_20%,rgba(151,84,222,0.18),transparent_60%)]
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

                  <div className="text-[#9754DE] text-lg">
                    {item.icon}
                  </div>

                </div>

                {/* title */}
                <h4 className="relative text-lg font-black text-white">
                  {item.title}
                </h4>

                {/* divider */}
                <div className="relative w-full h-px bg-white/5 mt-3 mb-3" />

                {/* desc */}
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* bottom hint */}
                <div className="relative mt-5 text-xs text-gray-600 group-hover:text-gray-400 transition">
                  Click to view live demo →
                </div>

              </motion.a>
            ))}

          </div>

        </div>
      </section>
    );
  };

  export default Work;