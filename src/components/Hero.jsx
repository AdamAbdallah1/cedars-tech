import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextPressure from "./TextPressure";
import Topography from "./Topography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const [tpReady, setTpReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("cedars-intro-seen");
    const t = setTimeout(() => setTpReady(true), seen ? 1400 : 3200);
    return () => clearTimeout(t);
  }, []);

  // restrained scroll choreography into the white section
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-content]", {
        y: -30,
        opacity: 0.94,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-atmosphere]", {
        opacity: 0.6,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-28 pb-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />

      {/* React Bits Topography — background layer */}
      <div data-hero-atmosphere className="absolute inset-0 z-0" aria-hidden="true" style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}>
        <Topography
          lowColor="#050505"
          midColor="#9754DE"
          highColor="#C9A6EE"
          speed={0.16}
          morphAmount={2.2}
          morphSpeed={0.035}
          bands={2}
          thickness={0.008}
          scale={2.4}
          pixelSize={1}
          glow={0.08}
          colorMode="elevation"
          contrast={2.8}
          brightness={0.7}
          fillBands={false}
          opacity={0.22}
          grain={false}
          grainIntensity={0}
          mouseInteraction={true}
          mouseRadius={0.24}
          mouseStrength={0.16}
        />
      </div>

      <div data-hero-content className="relative z-10 flex-1 flex items-center w-full max-w-6xl mx-auto pointer-events-none">
        <div className="w-full">

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.98] text-white">
          <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: (sessionStorage.getItem("cedars-intro-seen") ? 0.2 : 1.55),
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <TextPressure
                text="Websites"
                textColor="#FFFFFF"
                interactive={tpReady}
                minFontSize={36}
                className="font-black tracking-tight pointer-events-auto"
              />
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: (sessionStorage.getItem("cedars-intro-seen") ? 0.32 : 1.67),
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              that mean business.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (sessionStorage.getItem("cedars-intro-seen") ? 0.45 : 1.8), duration: 0.7 }}
          className="mt-10 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          Modern websites for businesses that want to look professional, build trust, and make it easy for customers to reach them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (sessionStorage.getItem("cedars-intro-seen") ? 0.6 : 1.95), duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-3 pointer-events-auto"
        >
          <a href="https://wa.me/96181090757" target="_blank" rel="noopener noreferrer" className="btn-accent">
            Get a Free Consultation
          </a>
          <a href="#work" className="btn-ghost">See Our Work</a>
        </motion.div>
        </div>
      </div>

      {/* marquee belt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (sessionStorage.getItem("cedars-intro-seen") ? 0.8 : 2.15), duration: 0.7 }}
        className="relative z-10 mt-20 border-y border-white/10 py-4 overflow-hidden pointer-events-auto"
      >
        <div className="flex whitespace-nowrap animate-marquee text-[11px] uppercase tracking-[0.35em] text-gray-600">
          {[0, 1].map((n) => (
            <span key={n} className="pr-10">
              Business Websites · Local Business · Landing Pages · Website Care · Mobile First · SEO Ready · WhatsApp Integration · Custom Design ·{" "}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
