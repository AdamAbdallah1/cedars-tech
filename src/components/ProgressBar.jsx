import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-900/50"
      role="progressbar"
      aria-valuenow={Math.round(scroll)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    >
      <motion.div
        className="h-1 bg-gradient-to-r from-[#9754DE] via-[#FF9FFC] to-[#B19EEF] origin-left shadow-lg shadow-purple-500/50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scroll / 100 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{ transformOrigin: '0% 50%' }}
      />
    </div>
  );
};

export default ProgressBar;