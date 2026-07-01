import React from "react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(151,84,222,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05]"
          >
            We turn websites into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#9754DE] to-indigo-400">
              customer machines.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Cedars Tech builds conversion systems for local businesses in Lebanon — turning Instagram traffic into WhatsApp leads, bookings, and paying customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <a
              href="https://wa.me/96181090757"
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-[#9754DE] hover:text-white transition"
            >
              Get Free Audit
            </a>

            <a
              href="#solutions"
              className="px-8 py-3.5 rounded-full border border-white/15 text-white font-bold text-sm hover:bg-white/5 transition"
            >
              View Systems
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-10"
          >
            <div>
              <h3 className="text-xl font-black text-white">2–3 Days</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Delivery</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">WhatsApp</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Lead System</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Lebanon</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Local Focus</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex relative justify-center items-center"
        >
          <div className="absolute w-[380px] h-[380px] rounded-full bg-[#9754DE]/20 blur-[110px]" />
          <div className="relative w-[430px] h-[430px] flex items-center justify-center">
            <Scene3D />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;