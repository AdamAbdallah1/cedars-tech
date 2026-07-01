import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      stage: "Stage 1",
      title: "Digital Visibility System",
      subtitle: "Get found. Build trust. Convert visitors.",
      price: "$149",
      period: "one-time setup",
      highlight: false,
      features: [
        "High-end mobile-first website",
        "WhatsApp click-to-chat system",
        "Google Maps setup",
        "Basic SEO optimization",
        "Fast delivery (1–3 days)"
      ],
      cta: "Build Presence"
    },
    {
      stage: "Stage 2",
      title: "Customer Conversion System",
      subtitle: "Turn messages into structured paying clients.",
      price: "$99",
      period: "/month",
      highlight: true,
      features: [
        "CRM system for all leads",
        "Automated WhatsApp replies",
        "Booking & appointment system",
        "Review automation system",
        "Lead tracking dashboard"
      ],
      cta: "Increase Conversions"
    },
    {
      stage: "Stage 3",
      title: "Business Automation Engine",
      subtitle: "Remove manual work from your operations.",
      price: "$199",
      period: "/month",
      highlight: false,
      features: [
        "Full CRM + pipeline system",
        "AI-powered invoicing system",
        "Document signing workflows",
        "Internal business dashboard",
        "Task automation system"
      ],
      cta: "Automate Business"
    }
  ];

  return (
    <section id="pricing" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#9754DE] font-bold mb-3">
            Business Systems
          </h2>

          <h3 className="text-3xl lg:text-5xl font-black text-white">
            Not pricing plans — system upgrades.
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We install structured business systems that replace chaos with predictable revenue flow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`
                relative flex flex-col justify-between
                rounded-2xl border backdrop-blur-xl
                p-6 transition-all duration-300
                min-h-[520px]

                ${plan.highlight
                  ? "bg-white/[0.06] border-[#9754DE]/60"
                  : "bg-white/[0.02] border-white/10"
                }
              `}
            >

              {/* TOP BLOCK */}
              <div>

                {/* Stage */}
                <div className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                  {plan.stage}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl font-black text-white leading-tight">
                  {plan.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-sm text-gray-400">
                  {plan.subtitle}
                </p>

                {/* Price Block */}
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">
                    {plan.period}
                  </span>
                </div>

              </div>

              {/* FEATURES (fixed middle section) */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <ul className="space-y-2 text-sm text-gray-300">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2 leading-snug">
                      <span className="text-[#9754DE] mt-1">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA (fixed bottom alignment) */}
              <div className="mt-6">
                <a
                  href="https://wa.me/96181090757"
                  className={`
                    block text-center py-3 rounded-full font-bold transition
                    ${plan.highlight
                      ? "bg-[#9754DE] text-white hover:bg-purple-600"
                      : "bg-white text-black hover:bg-gray-200"
                    }
                  `}
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