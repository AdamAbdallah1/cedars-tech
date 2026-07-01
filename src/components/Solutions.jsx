import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    {
      title: "Stop Losing Customers on Instagram",
      desc: "We turn Instagram + WhatsApp into a structured system that converts conversations into paying clients.",
      tag: "Revenue System"
    },
    {
      title: "Automated Customer Replies",
      desc: "WhatsApp flows, booking automation, and CRM routing so every lead is captured and followed up.",
      tag: "Automation Layer"
    },
    {
      title: "Get More Google Reviews",
      desc: "Automated post-service review requests that increase trust and improve local ranking.",
      tag: "Reputation Engine"
    },
    {
      title: "Save Time With Automation",
      desc: "We replace manual work with automated invoices, scheduling, and operational workflows.",
      tag: "Operations System"
    }
  ];

  return (
    <section id="solutions" className="relative py-24">

      {/* subtle background like hero */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">

          <h2 className="text-[10px] uppercase tracking-[0.35em] text-[#9754DE] font-bold mb-4">
            What We Fix
          </h2>

          <h3 className="text-2xl lg:text-5xl font-black text-white leading-[1.1] max-w-3xl">
            Most businesses in Lebanon are leaking revenue online
            <span className="text-gray-500"> — we fix that.</span>
          </h3>

          <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
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

                <span className="w-2 h-2 rounded-full bg-[#9754DE] shadow-[0_0_12px_#9754DE]" />

              </div>


              {/* title */}
              <h4 className="
                relative
                text-lg
                font-black
                text-white
                leading-snug
              ">
                {item.title}
              </h4>


              {/* divider line */}
              <div className="relative mt-3 mb-3 w-full h-px bg-white/5" />


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
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm mb-4">
            Want this mapped to your business?
          </p>

          <a
            href="https://wa.me/96181090757"
            className="
              inline-flex
              items-center
              justify-center
              px-8
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