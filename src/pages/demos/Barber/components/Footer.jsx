const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-6">
        <span className="text-gray-500 text-sm">
          © 2025 Cedars Tech. Beirut, Lebanon
        </span>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
