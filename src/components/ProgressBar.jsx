import React, { useState, useEffect, useRef } from 'react';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-[130] bg-white/5"
      role="progressbar"
      aria-valuenow={Math.round(scroll)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-brand origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${scroll / 100})` }}
      />
    </div>
  );
};

export default ProgressBar;
