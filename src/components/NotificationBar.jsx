import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const NotificationBar = () => {
  const [show, setShow] = useState(true);

  // Optional: Auto-hide after 10 seconds to keep the UI clean
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed top-24 left-0 w-full flex justify-center items-center z-[100] px-4 pointer-events-none">
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.9 }}
            className="pointer-events-auto flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 p-1.5 pl-4 pr-2 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] max-w-fit"
            role="status"
          >
            {/* Tag/Badge */}
            <span className="hidden sm:inline-block bg-[#9754DE] text-white text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-full">
              New
            </span>

            {/* Content Link */}
            <a 
              href="https://cedarstech.info/streaming/prices" 
              className="group flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200 hover:text-white transition-colors"
            >
              <span>Explore our Streaming Services</span>
              <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform text-[#9754DE]" />
            </a>

            {/* Divider */}
            <div className="w-[1px] h-4 bg-white/10 mx-1" />

            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
              aria-label="Close notification"
            >
              <FaTimes size={14} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;