import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initReveals() {
  if (prefersReduced()) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.clipPath = "none";
    });
    return () => {};
  }

  const ctx = gsap.context(() => {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      const clip = el.hasAttribute("data-clip");

      gsap.fromTo(
        el,
        clip
          ? { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 }
          : { y: 26, opacity: 0 },
        {
          clipPath: clip ? "inset(0 0 0% 0)" : undefined,
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });
  });

  return () => ctx.revert();
}
