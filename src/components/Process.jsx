import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { number: "01", title: "Discover", desc: "We understand the business, its customers, and what the website needs to accomplish." },
  { number: "02", title: "Design", desc: "We shape the structure, content and visual direction around the business." },
  { number: "03", title: "Build", desc: "We develop the website, make it responsive, connect the required tools and test the experience." },
  { number: "04", title: "Launch", desc: "We take the finished website through final checks and launch." },
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const progressRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      steps.forEach((_, idx) => {
        ScrollTrigger.create({
          trigger: `[data-step="${idx}"]`,
          start: "top 62%",
          end: "bottom 62%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div data-reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">How We Work</p>
              <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight max-w-2xl">
                A clear process, from idea to launch
              </h3>
            </div>
            <p className="text-gray-400 md:max-w-sm leading-relaxed text-sm lg:text-base">
              Simple, deliberate, and transparent — you always know what comes next.
            </p>
          </div>
        </div>

        <div ref={stepsRef} className="relative max-w-4xl mx-auto border-t border-white/10">
          {/* connector */}
          <div className="absolute left-[23px] sm:left-[27px] top-10 bottom-10 w-px bg-white/10" aria-hidden="true">
            <div
              ref={progressRef}
              className="w-full h-full bg-brand origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {steps.map((step, idx) => (
            <div
              data-reveal
              data-step={idx}
              key={idx}
              className="relative flex items-start gap-6 sm:gap-10 py-8 sm:py-10 border-b border-white/10"
            >
              <span
                className={`w-12 shrink-0 text-lg sm:text-xl font-black transition duration-500 ${
                  activeStep >= idx ? "text-brand" : "text-brand/30"
                }`}
              >
                {step.number}
              </span>
              <div className="flex-1">
                <h4
                  className={`text-xl lg:text-2xl font-black tracking-tight uppercase transition duration-500 ${
                    activeStep === idx ? "text-brand" : "text-white"
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`mt-3 text-sm lg:text-base leading-relaxed max-w-2xl transition duration-500 ${
                    activeStep === idx ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
