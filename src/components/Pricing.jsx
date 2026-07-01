import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      stage: "Starter",
      title: "Landing Page Setup",
      subtitle: "Perfect for businesses starting online.",
      price: "$99 - $149",
      period: "one-time",
      highlight: false,
      features: [
        "High-converting landing page",
        "Mobile-first modern design",
        "WhatsApp click-to-chat setup",
        "Google Maps integration",
        "Basic SEO setup"
      ],
      cta: "Get Started"
    },
    {
      stage: "Most Popular",
      title: "Business Growth Page",
      subtitle: "Turn visitors into real customers.",
      price: "$199 - $349",
      period: "one-time",
      highlight: true,
      features: [
        "Conversion-optimized structure",
        "Lead capture (WhatsApp / form)",
        "Custom branding & content setup",
        "Analytics integration",
        "Based on proven demo templates"
      ],
      cta: "Start Growing"
    },
    {
      stage: "Premium",
      title: "Full Business Website",
      subtitle: "Complete online presence for serious businesses.",
      price: "$399 - $699",
      period: "one-time",
      highlight: false,
      features: [
        "Multi-page website (2–5 pages)",
        "Services + contact + landing pages",
        "Booking / inquiry flow (simple)",
        "Google review funnel setup",
        "Priority delivery & customization"
      ],
      cta: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(151,84,222,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[10px] uppercase tracking-[0.35em] text-[#9754DE] font-bold mb-4">
            Pricing
          </h2>

          <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.1]">
            Simple packages. Clear results.
          </h3>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We don’t sell complexity. We build landing pages that bring customers directly to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`
                relative rounded-2xl border backdrop-blur-xl p-6 flex flex-col justify-between min-h-[520px]
                ${plan.highlight
                  ? "bg-white/[0.06] border-[#9754DE]/60"
                  : "bg-white/[0.02] border-white/10"}
              `}
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                  {plan.stage}
                </div>

                <h3 className="mt-3 text-xl font-black text-white">
                  {plan.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {plan.subtitle}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <ul className="space-y-2 text-sm text-gray-300">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#9754DE]">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/96181090757"
                  className={`
                    block text-center py-3 rounded-full font-bold transition
                    ${plan.highlight
                      ? "bg-[#9754DE] text-white hover:bg-purple-600"
                      : "bg-white text-black hover:bg-gray-200"}
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