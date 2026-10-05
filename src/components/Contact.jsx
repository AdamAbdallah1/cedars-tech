import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: heading */}
          <div data-reveal
          >
            <p className="eyebrow mb-5">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Let’s build something for your business.
            </h2>
            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Have a business that needs a better website? Tell us what you need and we’ll take it from there.
            </p>

            <a
              href="https://wa.me/96181090757"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex"
            >
              Message us on WhatsApp
            </a>
          </div>

          {/* Right: contact details */}
          <div data-reveal
            className="border-t border-white/10 lg:mt-4"
          >
            <a
              href="https://wa.me/96181090757"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 py-6 border-b border-white/10 group"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand font-bold">WhatsApp</p>
                <p className="mt-2 text-xl sm:text-2xl font-black text-white tracking-tight">+961 81 090 757</p>
              </div>
              <span className="text-gray-700 group-hover:text-brand transition duration-300" aria-hidden="true">→</span>
            </a>

            <a
              href="https://instagram.com/cedars.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 py-6 border-b border-white/10 group"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 font-bold">Instagram</p>
                <p className="mt-2 text-xl sm:text-2xl font-black text-white tracking-tight">@cedars.tech</p>
              </div>
              <span className="text-gray-700 group-hover:text-brand transition duration-300" aria-hidden="true">→</span>
            </a>

            <a
              href="mailto:contact.cedarstech@proton.me"
              className="flex items-center justify-between gap-6 py-6 border-b border-white/10 group"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 font-bold">Email</p>
                <p className="mt-2 text-lg sm:text-xl font-black text-white tracking-tight break-all">contact.cedarstech@proton.me</p>
              </div>
              <span className="text-gray-700 group-hover:text-brand transition duration-300" aria-hidden="true">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
