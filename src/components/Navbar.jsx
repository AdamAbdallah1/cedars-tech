import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-full p-10 flex gap-30 justify-center text-3xl items-center'>
        <h1 className='text-1xl'>Cedars Tech</h1>
        <div className='flex gap-5 text-4xl'>
            <a className='hover:text-gray-400' href="https://www.instagram.com/cedars.tech/"><CiInstagram /></a>
            <a className='hover:text-gray-400' href="#"><CiFacebook /></a>
            <a className='hover:text-gray-400' href="https://wa.me/message/I3EGKHRI2X5EI1"><FaWhatsapp /></a>
        </div>
    </nav>
  )
}

export default Navbar