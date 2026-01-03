import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { locationInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border-light)',
      padding: '80px 0 40px 0'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '48px',
          marginBottom: '48px'
        }}>
          <div>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Cedar Brew</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Freshly Brewed. Locally Inspired.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a 
                href="#" 
                style={{ 
                  color: 'var(--text-primary)',
                  transition: 'transform 0.2s ease'
                }}
                className="hover-lift"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                style={{ 
                  color: 'var(--text-primary)',
                  transition: 'transform 0.2s ease'
                }}
                className="hover-lift"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={`mailto:${locationInfo.email}`}
                style={{ 
                  color: 'var(--text-primary)',
                  transition: 'transform 0.2s ease'
                }}
                className="hover-lift"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#about" className="body-regular" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                About Us
              </a>
              <a href="#menu" className="body-regular" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Menu
              </a>
              <a href="#reviews" className="body-regular" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Reviews
              </a>
              <a href="#location" className="body-regular" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Location
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {locationInfo.address}
              </p>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {locationInfo.phone}
              </p>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {locationInfo.email}
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Hours</h4>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
              {locationInfo.hours.weekday}
            </p>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              {locationInfo.hours.time}
            </p>
          </div>
        </div>

        <div style={{ 
          paddingTop: '32px', 
          borderTop: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} Cedas Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;