import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "151, 84, 222";

const MagicBento = ({
  items = [],
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (disableAnimations) return;

    const cards = containerRef.current.querySelectorAll(".magic-card");

    cards.forEach((card) => {
      const spotlight = card.querySelector(".spotlight");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (enableSpotlight && spotlight) {
          spotlight.style.background = `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(${glowColor},0.35), transparent 60%)`;
        }

        if (enableTilt) {
          gsap.to(card, {
            rotateY: (x / rect.width - 0.5) * 10,
            rotateX: -(y / rect.height - 0.5) * 10,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        if (spotlight) spotlight.style.background = "none";
      });

      if (clickEffect) {
        card.addEventListener("click", () => {
          gsap.fromTo(
            card,
            { scale: 1 },
            { scale: 0.97, yoyo: true, repeat: 1, duration: 0.12 }
          );
        });
      }
    });
  }, [
    disableAnimations,
    enableSpotlight,
    enableTilt,
    spotlightRadius,
    glowColor,
    clickEffect,
  ]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {items.map((card, i) => (
        <div
          key={i}
          className="magic-card relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-8 shadow-lg transition-all hover:border-white/30 cursor-pointer overflow-hidden"
        >
          <div className="spotlight absolute inset-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {card.icon}

            <span className="text-xs uppercase tracking-widest text-purple-300 mt-2 mb-3">
              {card.label}
            </span>

            <h3 className="text-xl font-semibold text-white mb-3">
              {card.title}
            </h3>

            <p className="text-sm text-gray-300">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;
