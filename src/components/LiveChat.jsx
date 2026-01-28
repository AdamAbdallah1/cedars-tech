import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [message, setMessage] = useState("");

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
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3"
        role="complementary"
        aria-label="Live chat"
      >
        {/* Chat Form Popup */}
        <AnimatePresence>
          {openForm && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="w-72 sm:w-80 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div className="text-white font-semibold text-base">Send us a message</div>
                <button
                  onClick={() => setOpenForm(false)}
                  className="text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#9754DE]/50"
                  aria-label="Close chat"
                  data-testid="close-chat-btn"
                >
                  <HiX size={20} />
                </button>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="resize-none w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9754DE] focus:border-transparent text-sm transition-all"
                rows={4}
                aria-label="Message input"
                data-testid="chat-message-input"
              />
              <button
                onClick={handleSend}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!message.trim()}
                aria-label="Send message"
                data-testid="send-chat-btn"
              >
                Send <FaPaperPlane />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setOpenForm(!openForm)}
          className="bg-[#25D366] hover:bg-green-600 p-4 rounded-full shadow-2xl text-white text-2xl sm:text-3xl flex justify-center items-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-green-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={openForm ? "Close chat" : "Open chat"}
          data-testid="whatsapp-chat-btn"
        >
          <FaWhatsapp />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveChat;