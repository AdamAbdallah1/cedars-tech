import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-white.png";

const links = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#solutions" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "solutions", "process", "pricing", "faq", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "solutions" ? "solutions" : e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-black/85 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16" aria-label="Main navigation">

        {/* Wordmark */}
        <a href="#hero" className="flex items-center gap-3 text-white font-black tracking-tight text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded">
          <img src={Logo} alt="Cedars Tech" className="w-7 h-7 object-contain" />
          CEDARS<span className="text-brand"> TECH</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-widest transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded ${
                active === link.href.slice(1) ? "text-brand" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-brand text-white font-bold text-[13px] hover:bg-purple-600 transition"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-sm font-black uppercase tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black px-6 py-8 flex flex-col gap-6"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-white tracking-tight hover:text-brand transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-accent mt-4 text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
