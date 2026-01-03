import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <h1 className="text-2xl font-heading text-primary">Restaurant</h1>

        <ul className="flex gap-6 text-light/80">
          <li className="hover:text-primary transition cursor-pointer">Home</li>
          <li className="hover:text-primary transition cursor-pointer">About</li>
          <li className="hover:text-primary transition cursor-pointer">Menu</li>
          <li className="hover:text-primary transition cursor-pointer">Gallery</li>
          <li className="hover:text-primary transition cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-4 text-light/80 text-2xl">
          <FiFacebook className="hover:text-primary transition cursor-pointer"/>
          <FiInstagram className="hover:text-primary transition cursor-pointer"/>
          <FiTwitter className="hover:text-primary transition cursor-pointer"/>
        </div>
      </div>

      <div className="mt-12 text-center text-light/50 text-sm">
        © {new Date().getFullYear()} Restaurant. All rights reserved.
      </div>
    </footer>
  )
}
