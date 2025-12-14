// src/components/NotificationBar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaTimes } from 'react-icons/fa';

const NotificationBar = () => {
  const [show, setShow] = useState(true); // always visible until closed

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
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white p-4 lg:p-5 flex justify-between items-center shadow-lg z-50"
        >
          <p className="text-center lg:text-left text-sm lg:text-base font-medium">
            🚀 New! Check out our latest services and offers now!
          </p>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-300"
          >
            <FaTimes size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;
