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
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
      <motion.div
        className="h-1 bg-[#9754DE] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scroll / 100 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{ transformOrigin: '0% 50%' }}
      />
    </div>
  );
};

export default ProgressBar;
