import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Business Websites",
    desc: "A professional website that clearly explains what the business offers, builds trust, and gives customers an easy way to contact them.",
  },
  {
    number: "02",
    title: "Local Business Websites",
    desc: "Mobile-first websites for restaurants, cafés, barbers, clinics and other local businesses, built around menus, services, locations, bookings and WhatsApp.",
  },
  {
    number: "03",
    title: "Landing Pages",
    desc: "Focused pages for a product, service, campaign or new business, designed around one clear goal and a strong call to action.",
  },
  {
    number: "04",
    title: "Website Care",
    desc: "Ongoing updates, content changes, fixes and support after launch.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-5">What We Do</p>
          <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
            A better website for every stage of your business
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Cedars Tech designs and builds professional websites around how a real business needs to attract, inform and convert customers.
          </p>
        </motion.div>

        <div className="border-t border-white/10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-8 sm:py-10 border-b border-white/10"
            >
              {/* top row: number (+ arrow on mobile) */}
              <div className="flex items-center justify-between md:hidden mb-5">
                <span className="text-brand font-black text-lg">{service.number}</span>
                <span className="text-gray-700 text-xl" aria-hidden="true">→</span>
              </div>

              {/* desktop/tablet: 3-column editorial row */}
              <div className="hidden md:flex md:items-start gap-10 lg:gap-16">
                <span className="text-brand font-black text-xl w-12 shrink-0">
                  {service.number}
                </span>

                <div className="flex-1 max-w-3xl">
                  <h4 className="text-xl lg:text-2xl font-black text-white tracking-tight uppercase">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-gray-400 text-sm lg:text-base leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                </div>

                <span className="text-gray-700 text-xl pt-1 shrink-0 w-6 text-right" aria-hidden="true">
                  →
                </span>
              </div>

              {/* mobile: vertical editorial block */}
              <div className="md:hidden">
                <h4 className="text-lg font-black text-white tracking-tight uppercase">
                  {service.title}
                </h4>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xl">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-[11px] uppercase tracking-widest text-gray-500"
        >
          Mobile-first · Fast loading · WhatsApp integration · SEO basics · Custom design
        </motion.p>

      </div>
    </section>
  );
};

export default Solutions;
