import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false); // Scroll-based visibility
  const [openForm, setOpenForm] = useState(false); // Form popup
  const [message, setMessage] = useState("");

  // Show chat button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowChat(true);
      else setShowChat(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const whatsappLink = `https://wa.me/96181090757?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    setMessage("");
    setOpenForm(false);
  };

  if (!showChat) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-16 right-6 z-50 flex flex-col items-end gap-2"
      >
        {/* Chat Form Popup */}
        <AnimatePresence>
          {openForm && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-64 sm:w-72 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 flex flex-col gap-2"
            >
              <div className="text-white font-medium text-sm">Send us a message</div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="resize-none w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9754DE] text-sm"
                rows={3}
              />
              <button
                onClick={handleSend}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all"
              >
                Send <FaPaperPlane />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setOpenForm(!openForm)}
          className="bg-[#25D366] hover:bg-green-600 p-3 rounded-full shadow-md text-white text-2xl sm:text-3xl flex justify-center items-center transition-transform hover:scale-110"
        >
          <FaWhatsapp />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveChat;
