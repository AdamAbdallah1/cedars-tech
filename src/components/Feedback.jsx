import React, { useState, useEffect } from 'react';
import { FaStar, FaCommentDots } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showToast, setShowToast] = useState(false); // New state for notification

  useEffect(() => {
    const savedRating = localStorage.getItem('userRating');
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, []);

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem('userRating', value);
    setOpen(false);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3s
  };

  return (
    <>
      {/* Feedback Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-8 bg-[#9754DE] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 w-12 h-12 flex items-center justify-center"
        title="Give Feedback"
      >
        <FaCommentDots size={20} />
      </button>

      {/* Feedback Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl w-80 flex flex-col gap-4 relative shadow-lg">
              
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold text-center">Rate Us</h2>

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={28}
                    className={`cursor-pointer ${
                      star <= (hover || rating) ? 'text-[#9754DE]' : 'text-gray-600'
                    }`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 bg-[#9754DE] text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            Thanks for your feedback!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Feedback;
