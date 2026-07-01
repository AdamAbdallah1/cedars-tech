import React from "react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-24
        pb-16
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* Background */}
      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_70%_40%,rgba(151,84,222,0.18),transparent_35%)]
      " />

      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-purple-950/20
        via-transparent
        to-black
      " />


      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
      ">


        {/* LEFT */}
        <div>




          {/* Heading */}
          <motion.h1
            initial={{opacity:0,y:25}}
            animate={{opacity:1,y:0}}
            transition={{delay:.3}}
            className="
              text-3xl
              sm:text-5xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1.05]
            "
          >

            Build a business
            <br/>

            <span className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              via-[#9754DE]
              to-indigo-400
            ">
              that grows online.
            </span>

          </motion.h1>



          {/* Description */}
          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.5}}
            className="
              mt-6
              max-w-xl
              text-gray-400
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            We build websites, automation systems, and customer tools
            that help Lebanese businesses attract clients, increase sales,
            and operate smarter.
          </motion.p>



          {/* Buttons */}
          <motion.div
            initial={{opacity:0,y:15}}
            animate={{opacity:1,y:0}}
            transition={{delay:.7}}
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              mt-8
            "
          >

            <a
              href="https://wa.me/96181090757"
              className="
                px-8
                py-3.5
                rounded-full
                bg-white
                text-black
                font-bold
                text-sm
                hover:bg-[#9754DE]
                hover:text-white
                transition
              "
            >
              Get Free Business Audit
            </a>


            <a
              href="#offer"
              className="
                px-8
                py-3.5
                rounded-full
                border
                border-white/20
                text-white
                font-bold
                text-sm
                hover:bg-white/5
                transition
              "
            >
              Explore Solutions
            </a>

          </motion.div>



          {/* Trust row */}
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            className="
              mt-10
              flex
              flex-wrap
              gap-8
            "
          >

            <div>
              <h3 className="text-xl font-black text-white">
                7+
              </h3>
              <p className="
                text-[10px]
                uppercase
                tracking-widest
                text-gray-500
              ">
                Systems Built
              </p>
            </div>


            <div>
              <h3 className="text-xl font-black text-white">
                24/7
              </h3>
              <p className="
                text-[10px]
                uppercase
                tracking-widest
                text-gray-500
              ">
                Support
              </p>
            </div>


            <div>
              <h3 className="text-xl font-black text-white">
                🇱🇧
              </h3>
              <p className="
                text-[10px]
                uppercase
                tracking-widest
                text-gray-500
              ">
                Local Team
              </p>
            </div>


          </motion.div>


        </div>




        {/* RIGHT VISUAL */}
        <motion.div
          initial={{opacity:0,scale:.9}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.5}}
          className="
            hidden
            lg:flex
            relative
            justify-center
            items-center
          "
        >

          {/* Glow */}
          <div className="
            absolute
            w-[350px]
            h-[350px]
            rounded-full
            bg-[#9754DE]/20
            blur-[100px]
          "/>


          <div className="
            relative
            w-[430px]
            h-[430px]
            flex
            items-center
            justify-center
          ">

            <Scene3D />

          </div>


        </motion.div>


      </div>


    </motion.section>
  );
};


export default Hero;