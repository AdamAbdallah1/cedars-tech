import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const LiveChat = () => {
  const whatsappLink = "https://wa.me/message/I3EGKHRI2X5EI1?text=Hi!%20I%20want%20to%20talk%20about%20my%20website%20project";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        {/* Greeting bubble */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#25D366] text-white px-4 py-2 rounded-2xl shadow-lg hidden sm:flex"
        >
          Chat with us!
        </motion.div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-green-600 p-4 rounded-full shadow-lg text-white text-3xl flex justify-center items-center transition-transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveChat;
