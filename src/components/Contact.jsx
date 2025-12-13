import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"; // professional icon
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-50">
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        >
          <FaLaptopCode className='text-[#9754DE]' size={80}/>
        </motion.div>

        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-4xl text-3xl font-bold bg-linear-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          Contact us
        </motion.h1>

        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="lg:text-[20px] text-gray-400 max-w-xl"
        >
            Ready to grow your business online? Contact us now!
        </motion.p>

        <div>
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='flex lg:flex-row flex-col gap-8'
            >
                <button className='bg-[#9754DE] text-white font-bold lg:p-5 p-4 lg:text-[15px] rounded-2xl hover:bg-red-300 cursor-pointer'>
                  <a className='flex justify-center items-center gap-2' href="https://wa.me/message/I3EGKHRI2X5EI1">
                    Contact Us on <FaWhatsapp size={30}/>
                  </a>
                </button>

                <button className='bg-[#9754DE] text-white font-bold lg:p-6 p-4 lg:text-[15px] rounded-2xl hover:bg-red-300 cursor-pointer'>
                  <a className='flex justify-center items-center gap-2' href="https://www.instagram.com/cedars.tech/">
                    Contact Us on <FaInstagram size={30}/>
                  </a>
                </button>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact
