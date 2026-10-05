import React from "react";

const concepts = [
  { title: "Restaurant", link: "/demo/restaurant/" },
  { title: "Coffee Shop", link: "/demo/coffee-shop/" },
  { title: "Barber", link: "/demo/barber/" },
  { title: "Event Plan", link: "/demo/event-plan/" },
  { title: "Travel & Tourism", link: "/demo/travel-tourism/" },
  { title: "Portfolio", link: "/demo/portfolio/" },
  { title: "Dental Clinic", link: "/demo/dental-clinic/" },
];

const Work = () => {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div data-reveal
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Selected Work</p>
              <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight max-w-2xl">
                A few things we’ve built.
              </h3>
            </div>
            <p className="text-gray-400 md:max-w-sm leading-relaxed text-sm lg:text-base">
              A mix of products, client work, and concepts built by Cedars Tech.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="border-t border-white/10">

          {/* FORSA */}
          <div data-reveal
            className="py-8 border-b border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-brand font-black text-lg md:w-10 shrink-0 pt-0.5">01</span>

              <div className="flex-1">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h4 className="text-2xl font-black text-white tracking-tight transition duration-300 group-hover:text-brand">FORSA</h4>
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
          </div>

          {/* ABC QATAR */}
          <a data-reveal
            href="https://www.abcqatar.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-8 border-b border-white/10 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-brand font-black text-lg md:w-10 shrink-0 pt-0.5">02</span>

              <div className="flex-1">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h4 className="text-2xl font-black text-white tracking-tight transition duration-300 group-hover:text-brand">ABC QATAR</h4>
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
          </a>

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
