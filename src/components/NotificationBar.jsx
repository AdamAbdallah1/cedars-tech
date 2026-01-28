import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaTimes } from 'react-icons/fa';

const NotificationBar = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white p-3 lg:p-4 flex justify-between items-center shadow-lg z-40"
          role="banner"
          aria-label="Notification banner"
        >
          <a 
            href="https://cedarstech.info/streaming/prices" 
            className="text-center lg:text-left text-sm lg:text-base font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1"
            data-testid="notification-link"
          >
            🚀 New! Check out our latest services and offers now!
          </a>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close notification"
            data-testid="close-notification-btn"
          >
            <FaTimes size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;