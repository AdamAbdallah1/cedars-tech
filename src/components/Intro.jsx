import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../assets/logo-white.png";

const KEY = "cedars-intro-seen";

const Intro = () => {
  const [done, setDone] = useState(false);
  const overlayRef = useRef(null);
  const markRef = useRef(null);
  const wordRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(KEY)) {
      sessionStorage.setItem(KEY, "1");
      setDone(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          sessionStorage.setItem(KEY, "1");
          setDone(true);
        },
      });

      // mark entrance
      tl.fromTo(
        markRef.current,
        { opacity: 0, y: 10, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45 },
        0.15
      );

      // wordmark reveal via clip + travelling line
      tl.fromTo(
        wordRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.55, ease: "power2.inOut" },
        0.4
      );
      tl.fromTo(
        lineRef.current,
        { left: "0%", opacity: 0 },
        { left: "100%", opacity: 1, duration: 0.55, ease: "power2.inOut" },
        0.4
      );
      tl.to(lineRef.current, { opacity: 0, duration: 0.2 }, 0.95);

      // hold
      tl.to({}, { duration: 0.2 }, 1.0);

      // brand group lifts and quiets
      tl.to([markRef.current, wordRef.current], { y: -12, opacity: 0, duration: 0.3, ease: "power2.in" }, 1.2);

      // overlay exits upward, revealing the site
      tl.to(overlayRef.current, { yPercent: -100, duration: 0.45, ease: "power3.inOut" }, 1.28);
    });

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        ref={markRef}
        src={Logo}
        alt=""
        className="w-14 h-14 object-contain opacity-0"
      />

      <div className="relative mt-6 h-8 sm:h-9 flex items-center">
        <p
          ref={wordRef}
          className="whitespace-nowrap text-white font-black tracking-[0.2em] text-xl sm:text-2xl lg:text-3xl"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          CEDARS <span className="text-brand">TECH</span>
        </p>

        <div
          ref={lineRef}
          className="absolute top-1/2 -translate-y-1/2 w-[2px] h-6 sm:h-7 bg-brand opacity-0"
          style={{ left: "0%" }}
        />
      </div>
    </div>
  );
};

export default Intro;
