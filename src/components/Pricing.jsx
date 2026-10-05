import React from "react";

const plans = [
  {
    number: "01",
    title: "Starter",
    subtitle: "For businesses that need a professional online presence.",
    highlight: false,
    features: [
      "Custom one-page website",
      "Mobile-first responsive design",
      "WhatsApp + contact setup",
      "Google Maps + social links",
      "SEO basics + launch",
    ],
    cta: "Get pricing →",
  },
  {
    number: "02",
    title: "Business",
    subtitle: "For businesses that need a stronger website to support their growth.",
    highlight: true,
    features: [
      "Up to 5 custom pages",
      "Custom design & business structure",
      "WhatsApp + forms + lead capture",
      "Analytics + SEO setup",
      "Launch + priority support",
    ],
    cta: "Get pricing →",
  },
  {
    number: "03",
    title: "Custom",
    subtitle: "For businesses that need something beyond a standard website.",
    highlight: false,
    features: [
      "Advanced custom website or platform",
      "Custom functionality & workflows",
      "Booking / ordering / integrations",
      "Multilingual / Arabic RTL",
      "Ongoing support available",
    ],
    cta: "Get pricing →",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div data-reveal
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Pricing</p>
              <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight max-w-2xl">
                Clear pricing. No unnecessary complexity.
              </h3>
            </div>
            <p className="text-gray-400 md:max-w-sm leading-relaxed text-sm lg:text-base">
              Choose the level of website your business actually needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div data-reveal
              data-delay={idx * 0.1}
              key={idx}
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
              </div>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {plan.subtitle}
              </p>

              <div className="mt-6 pb-5 border-b border-white/10">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Custom pricing based on your project scope.
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
