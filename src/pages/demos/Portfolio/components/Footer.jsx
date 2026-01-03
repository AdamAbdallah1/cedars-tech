import { FiGithub, FiInstagram, FiPhone } from "react-icons/fi";

const Footer = () => (
  <footer className="bg-black/90 text-gray-400 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p>© 2026 Cedars Tech. All rights reserved.</p>
      <div className="flex gap-6 text-2xl">
        <FiGithub className="hover:text-blue-400 transition cursor-pointer" />
        <FiInstagram className="hover:text-pink-500 transition cursor-pointer" />
        <FiPhone className="hover:text-green-400 transition cursor-pointer" />
      </div>
    </div>
  </footer>
);
export default Footer;
