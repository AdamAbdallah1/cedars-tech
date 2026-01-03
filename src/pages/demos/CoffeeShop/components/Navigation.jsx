import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navigation-header">
      <a href="#" className="navigation-logo">Cedar Brew</a>
      
      <ul className="navigation-menu">
        <li><a href="#about" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#menu" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a></li>
        <li><a href="#reviews" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Reviews</a></li>
        <li><a href="#gallery" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
        <li><a href="#location" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>Location</a></li>
      </ul>
      
      <div className="navigation-utilities">
        
        <button 
          className="md:hidden" 
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-light)',
            padding: '20px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <a href="#about" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#menu" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
          <a href="#reviews" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Reviews</a>
          <a href="#gallery" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
          <a href="#location" className="navigation-link" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>Location</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;