import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite } from 'react-icons/fa';

const CookieBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000); // Wait 2s so it doesn't pop immediately
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
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", damping: 20 }}
          className="fixed bottom-6 left-6 z-[100] max-w-[380px] w-[calc(100%-3rem)]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-2xl">
                <FaCookieBite className="text-[#9754DE]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">Cookie Policy</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  We use cookies to enhance your experience and analyze our traffic.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-white text-black font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
                data-testid="accept-cookies-btn"
              >
                Accept
              </button>
              <button
                onClick={handleDeny}
                className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
                data-testid="deny-cookies-btn"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar;