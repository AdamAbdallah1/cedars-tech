import React from "react";
import { motion } from "framer-motion";

const concepts = [
  { title: "Restaurant", link: "/demo/restaurant" },
  { title: "Coffee Shop", link: "/demo/coffee-shop" },
  { title: "Barber", link: "/demo/barber" },
  { title: "Event Plan", link: "/demo/event-plan" },
  { title: "Travel & Tourism", link: "/demo/travel-tourism" },
  { title: "Portfolio", link: "/demo/portfolio" },
  { title: "Dental Clinic", link: "/demo/dental-clinic" },
];

const Work = () => {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-5">Selected Work</p>
          <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
            A few things we’ve built.
          </h3>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            A mix of products, client work, and concepts built by Cedars Tech.
          </p>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <div className="border-t border-white/10">

          {/* FORSA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 border-b border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-brand font-black text-lg md:w-10 shrink-0 pt-0.5">01</span>

              <div className="flex-1">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h4 className="text-2xl font-black text-white tracking-tight">FORSA</h4>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                    Opportunity Platform
                  </span>
                </div>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xl">
                  A platform connecting students, early-career talent and companies across Lebanon.
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-widest text-gray-500">
                  React · Firebase · Firestore · Tailwind
                </p>
              </div>

              <p className="text-sm font-bold text-brand md:pt-1">View Forsa →</p>
            </div>
          </motion.div>

          {/* ABC QATAR */}
          <motion.a
            href="https://www.abcqatar.co/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="block py-8 border-b border-white/10 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-brand font-black text-lg md:w-10 shrink-0 pt-0.5">02</span>

              <div className="flex-1">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h4 className="text-2xl font-black text-white tracking-tight">ABC QATAR</h4>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                    Client Website
                  </span>
                </div>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xl">
                  A professional business website built for ABC Qatar.
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-widest text-gray-500">
                  Client project · Business website
                </p>
              </div>

              <p className="text-sm font-bold text-gray-600 group-hover:text-brand transition duration-300 md:pt-1">
                Visit website →
              </p>
            </div>
          </motion.a>

        </div>

        {/* CONCEPTS */}
        <div className="mt-14">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 font-bold mb-5">
            Concepts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 border-t border-white/10">
            {concepts.map((concept, idx) => (
              <a
                key={idx}
                href={concept.link}
                className="flex items-center justify-between py-3.5 border-b border-white/10 group"
              >
                <span className="text-sm text-gray-300 group-hover:text-white transition duration-300">
                  {concept.title}
                </span>
                <span className="text-gray-700 group-hover:text-brand transition duration-300" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
