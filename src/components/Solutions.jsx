import React from "react";

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
    <section id="solutions" className="relative z-10 bg-white pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div data-reveal
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">What We Do</p>
              <h3 className="text-3xl lg:text-5xl font-black text-neutral-900 leading-[1.08] tracking-tight max-w-2xl">
                A better website for every stage of your business
              </h3>
            </div>
            <p className="text-neutral-600 md:max-w-sm leading-relaxed text-sm lg:text-base">
              Cedars Tech designs and builds professional websites around how a real business needs to attract, inform and convert customers.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-200">
          {services.map((service, idx) => (
            <div data-reveal
              key={idx}
              className="py-8 sm:py-10 border-b border-neutral-200"
            >
              {/* top row: number (+ arrow on mobile) */}
              <div className="flex items-center justify-between md:hidden mb-5">
                <span className="text-brand font-black text-lg">{service.number}</span>
                <span className="text-neutral-400 text-xl" aria-hidden="true">→</span>
              </div>

              {/* desktop/tablet: 3-column editorial row */}
              <div className="hidden md:flex md:items-start gap-10 lg:gap-16 group">
                <span className="text-brand font-black text-xl w-12 shrink-0">
                  {service.number}
                </span>

                <div className="flex-1 max-w-3xl">
                  <h4 className="text-xl lg:text-2xl font-black text-neutral-900 tracking-tight uppercase transition duration-300 group-hover:text-brand">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-neutral-600 text-sm lg:text-base leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                </div>

                <span className="text-neutral-400 text-xl pt-1 shrink-0 w-6 text-right transition duration-300 group-hover:text-brand" aria-hidden="true">
                  →
                </span>
              </div>

              {/* mobile: vertical editorial block */}
              <div className="md:hidden">
                <h4 className="text-lg font-black text-neutral-900 tracking-tight uppercase">
                  {service.title}
                </h4>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed max-w-xl">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p data-reveal
          className="mt-12 text-center text-[11px] uppercase tracking-widest text-gray-500"
        >
          Mobile-first · Fast loading · WhatsApp integration · SEO basics · Custom design
        </p>

      </div>
    </section>
  );
};

export default Solutions;
