import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CookieBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShow(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookiesAccepted', 'denied');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#9754DE] via-purple-600 to-indigo-600 text-white p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xl z-50 border-t border-white/20"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="flex-1 max-w-3xl">
            <p className="text-sm lg:text-base text-center lg:text-left">
              🍪 We use cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our use of cookies.
            </p>
          </div>
          <div className='flex gap-3 lg:gap-4 flex-row flex-shrink-0'>
            <button
              onClick={handleAccept}
              className="bg-white text-[#9754DE] font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-600"
              aria-label="Accept cookies"
              data-testid="accept-cookies-btn"
            >
              Accept
            </button>
            <button
              onClick={handleDeny}
              className="bg-white/10 backdrop-blur-sm text-white font-bold px-6 py-2.5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-600 border border-white/30"
              aria-label="Deny cookies"
              data-testid="deny-cookies-btn"
            >
              Deny
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar;