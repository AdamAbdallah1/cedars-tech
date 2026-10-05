import React, { useEffect, useRef, useState } from "react";

const DEFAULTS = {
  fontFamily: "'Roboto Flex', sans-serif",
  textColor: "#FFFFFF",
  stroke: false,
  strokeColor: "#5227FF",
  strokeWidth: 2,
  italic: false,
  alpha: false,
  minFontSize: 36,
};

/**
 * Subtle variable-typography pressure effect adapted for Cedars Tech.
 * Cursor proximity gently modulates wght/wdth axes; static on touch/reduced-motion.
 */
const TextPressure = ({
  text = "Websites",
  fontFamily = DEFAULTS.fontFamily,
  flex = true,
  scale = false,
  alpha = DEFAULTS.alpha,
  stroke = DEFAULTS.stroke,
  width = true,
  weight = true,
  italic = DEFAULTS.italic,
  textColor = DEFAULTS.textColor,
  strokeColor = DEFAULTS.strokeColor,
  strokeWidth = DEFAULTS.strokeWidth,
  className = "",
  minFontSize = DEFAULTS.minFontSize,
  interactive = true,
  restrained = true,
}) => {
  const containerRef = useRef(null);
  const spanRefs = useRef([]);
  const rafRef = useRef(null);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setStaticMode(reduced || coarse);
  }, []);

  const applyStatic = () => {
    spanRefs.current.forEach((span) => {
      if (!span) return;
      span.style.fontVariationSettings = `'wght' 800, 'wdth' 100, 'ital' 0`;
    });
  };

  useEffect(() => {
    if (staticMode || !interactive) {
      applyStatic();
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    // gentle ranges so the effect stays premium, not exaggerated
    const wghtRange = restrained ? [720, 860] : [100, 900];
    const wdthRange = restrained ? [85, 115] : [62, 150];

    const onMove = (e) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        spanRefs.current.forEach((span) => {
          if (!span) return;
          const r = span.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
          const t = Math.max(0, Math.min(1, 1 - dist / (restrained ? 260 : 420)));
          const w = wghtRange[0] + t * (wghtRange[1] - wghtRange[0]);
          const wd = width ? wdthRange[0] + t * (wdthRange[1] - wdthRange[0]) : 100;
          span.style.fontVariationSettings = `'wght' ${weight ? Math.round(w) : 800}, 'wdth' ${Math.round(wd)}, 'ital' ${italic ? 1 : 0}`;
        });
      });
    };

    const onLeave = () => applyStatic();

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [staticMode, interactive, restrained, width, weight, italic]);

  return (
    <span
      ref={containerRef}
      className={`inline-flex ${flex ? "w-full" : ""} ${className}`}
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <span
          key={i}
          ref={(el) => (spanRefs.current[i] = el)}
          aria-hidden="true"
          className="inline-block transition-[font-variation-settings] duration-200 ease-out"
          style={{
            fontFamily,
            fontSize: "1em",
            color: textColor,
            WebkitTextStroke: stroke ? `${strokeWidth}px ${strokeColor}` : undefined,
            opacity: alpha ? 0.9 : 1,
            fontVariationSettings: `'wght' 800, 'wdth' 100, 'ital' 0`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
};

export default TextPressure;
