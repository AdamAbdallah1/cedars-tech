import React, { useState } from "react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our websites start from $249. The final price depends on the pages, functionality and requirements of the project.",
  },
  {
    q: "How long does a website take?",
    a: "Most business websites can be completed within a few days to a couple of weeks, depending on the scope and how quickly the required content is provided.",
  },
  {
    q: "Can you build a website for my business?",
    a: "Yes. We build custom websites for restaurants, cafés, barbers, clinics, services and other local businesses.",
  },
  {
    q: "Will my website work on phones?",
    a: "Yes. Every website is built mobile-first and designed to work across phones, tablets and desktops.",
  },
  {
    q: "Can you update the website after launch?",
    a: "Yes. We can handle content changes, updates, fixes and ongoing website support after launch.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: heading */}
          <div data-reveal
          >
            <p className="eyebrow mb-5">Frequently Asked Questions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
              Questions, answered.
            </h2>
            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              A few things businesses usually want to know before starting.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="border-t border-white/10">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-brand transition duration-300">
                    {item.q}
                  </span>
                  <span
                    className="text-brand text-2xl font-light leading-none transition-all duration-300"
                    aria-hidden="true"
                  >
                    {open === idx ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
