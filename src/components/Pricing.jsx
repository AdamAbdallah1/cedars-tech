import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    number: "01",
    title: "Starter",
    subtitle: "For businesses that need a professional online presence.",
    price: "$249–$349",
    period: "one-time",
    highlight: false,
    features: [
      "Custom one-page website",
      "Mobile-first responsive design",
      "WhatsApp + contact setup",
      "Google Maps + social links",
      "SEO basics + launch",
    ],
    cta: "Get Started",
  },
  {
    number: "02",
    title: "Business",
    subtitle: "For businesses that need a stronger website to support their growth.",
    price: "$449–$649",
    period: "one-time",
    highlight: true,
    features: [
      "Up to 5 custom pages",
      "Custom design & business structure",
      "WhatsApp + forms + lead capture",
      "Analytics + SEO setup",
      "Launch + priority support",
    ],
    cta: "Start Your Project",
  },
  {
    number: "03",
    title: "Custom",
    subtitle: "For businesses that need something beyond a standard website.",
    price: "Starting at $899",
    period: "Custom quote based on scope",
    highlight: false,
    features: [
      "Advanced custom website or platform",
      "Custom functionality & workflows",
      "Booking / ordering / integrations",
      "Multilingual / Arabic RTL",
      "Ongoing support available",
    ],
    cta: "Discuss Your Project",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-5">Pricing</p>
          <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
            Clear pricing. No unnecessary complexity.
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Choose the level of website your business actually needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`flex flex-col rounded-2xl bg-white/[0.02] p-6 lg:p-7 border ${
                plan.highlight
                  ? "border-brand/40 border-t-2 border-t-brand"
                  : "border-white/10"
              }`}
            >
              <p className="text-brand font-black text-sm tracking-[0.3em]">{plan.number}</p>

              <div className="mt-3 flex items-center justify-between gap-3">
                <h4 className="text-2xl font-black text-white tracking-tight uppercase">
                  {plan.title}
                </h4>
                {plan.highlight && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold whitespace-nowrap">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {plan.subtitle}
              </p>

              <div className="mt-6 pb-5 border-b border-white/10">
                <p className="text-3xl font-black text-white">{plan.price}</p>
                <p className="mt-1.5 text-[11px] uppercase tracking-widest text-gray-500">
                  {plan.period}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand" aria-hidden="true">·</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a
                  href="https://wa.me/96181090757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center ${
                    plan.highlight ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
