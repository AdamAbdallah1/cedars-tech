import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CookieBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setShow(true); 
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
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 w-full bg-[#9754DE] text-white p-4 lg:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-lg z-50"
        >
          <p className="text-sm lg:text-base max-w-xl text-center lg:text-left">
            We use cookies to ensure you get the best experience on our website.
          </p>
          <div className='flex gap-5 flex-row'>
            <button
              onClick={handleAccept}
              className="bg-white text-[#9754DE] font-bold px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-indigo-500 hover:text-white transition-all duration-300"
            >
              Accept
            </button>
            <button
              onClick={handleDeny}
              className="bg-white text-[#9754DE] font-bold px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-indigo-500 hover:text-white transition-all duration-300"
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
