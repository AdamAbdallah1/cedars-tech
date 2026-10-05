import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-white.png";

const KEY = "cedars-intro-seen";
const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";

const Intro = () => {
  const [stage, setStage] = useState(0); // 0 quiet, 1 mark, 2 reveal, 3 hold, 4 exit
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(KEY)) {
      sessionStorage.setItem(KEY, "1");
      setDone(true);
      return;
    }
    const timers = [
      setTimeout(() => setStage(1), 200),   // cedar mark settles
      setTimeout(() => setStage(2), 350),   // reveal line travels
      setTimeout(() => setStage(3), 1100),  // line gone, hold
      setTimeout(() => setStage(4), 1350),  // exit upward
      setTimeout(() => {
        sessionStorage.setItem(KEY, "1");
        setDone(true);
      }, 1750),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ${
        stage === 4 ? "-translate-y-8 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <img
        src={Logo}
        alt=""
        className={`w-14 h-14 object-contain transition-all duration-500 ${
          stage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />

      {/* wordmark + travelling reveal line */}
      <div className="relative mt-6 h-8 sm:h-9 flex items-center">
        <p
          className="whitespace-nowrap text-white font-black tracking-[0.2em] text-xl sm:text-2xl lg:text-3xl"
          style={{
            clipPath: stage >= 2 ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            transition: `clip-path 750ms ${EASE}`,
          }}
        >
          CEDARS <span className="text-brand">TECH</span>
        </p>

        <div
          className="absolute top-1/2 -translate-y-1/2 w-[2px] h-6 sm:h-7 bg-brand"
          style={{
            left: stage >= 2 ? "100%" : "0%",
            opacity: stage === 2 ? 1 : 0,
            transition: `left 750ms ${EASE}, opacity 200ms linear`,
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
