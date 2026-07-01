import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
  {
    title: "Landing Pages That Get Clients",
    desc: "High-conversion pages designed to turn visitors into WhatsApp messages or calls.",
    tag: "Core Service"
  },
  {
    title: "Industry-Based Demos",
    desc: "Pre-built websites for restaurants, barbers, cafés, clinics, events, and more.",
    tag: "Product System"
  },
  {
    title: "Fast Website Delivery",
    desc: "Your business goes live in 2–3 days with a fully responsive modern design.",
    tag: "Delivery"
  },
  {
    title: "Simple Customization",
    desc: "We adapt branding, content, and contact flows — no technical complexity needed.",
    tag: "Service"
  }
];

  return (
    <section id="solutions" className="relative py-24 overflow-hidden">

      {/* background consistency with hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(151,84,222,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">

          <h2 className="text-[10px] uppercase tracking-[0.35em] text-[#9754DE] font-bold mb-4">
            What We Fix
          </h2>

          <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.05] max-w-3xl">
            Most businesses in Lebanon are leaking revenue online
            <span className="text-gray-500"> — we fix that.</span>
          </h3>

          <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed text-base">
            Cedars Tech builds structured digital systems that turn attention into customers,
            and customers into predictable revenue.
          </p>

        </div>


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="
                group
                relative
                p-7
                rounded-2xl
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                overflow-hidden
                min-h-[180px]
              "
            >

              {/* hover glow layer */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-[radial-gradient(circle_at_30%_20%,rgba(151,84,222,0.18),transparent_60%)]
              " />

              {/* top meta row */}
              <div className="relative flex items-center justify-between mb-5">

                <span className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-gray-500
                ">
                  {item.tag}
                </span>

                <span className="w-2 h-2 rounded-full bg-[#9754DE] shadow-[0_0_14px_#9754DE]" />

              </div>

              {/* title */}
              <h4 className="
                relative
                text-lg
                lg:text-xl
                font-black
                text-white
                leading-snug
              ">
                {item.title}
              </h4>

              {/* divider */}
              <div className="relative mt-4 mb-4 w-full h-px bg-white/5" />

              {/* description */}
              <p className="
                relative
                text-gray-400
                text-sm
                leading-relaxed
              ">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>


        {/* CTA */}
        <div className="mt-16 text-center">

          <p className="text-gray-500 text-sm mb-5">
            Want this mapped to your business?
          </p>

          <a
            href="https://wa.me/96181090757"
            className="
              inline-flex
              items-center
              justify-center
              px-9
              py-3.5
              rounded-full
              bg-white
              text-black
              font-bold
              text-sm
              hover:bg-[#9754DE]
              hover:text-white
              transition
            "
          >
            Get Free Business Audit
          </a>

        </div>

      </div>
    </section>
  );
};

export default Solutions;