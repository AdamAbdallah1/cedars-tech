import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white text-center p-5 pt-20 lg:text-2xl flex flex-col gap-5">
      © {new Date().getFullYear()} Cedars Tech. All rights reserved.
    </footer>
  )
}

export default Footer