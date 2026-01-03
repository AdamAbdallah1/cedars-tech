import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { locationInfo } from '../mockData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div
          className="grid-two-column"
          style={{
            alignItems: 'center',
            gap: '48px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}
            >
              <Star
                size={20}
                fill="var(--text-primary)"
                color="var(--text-primary)"
              />
              <span
                className="body-regular"
                style={{ color: 'var(--text-primary)', fontWeight: 700 }}
              >
                {locationInfo.rating}
              </span>
              <span
                className="body-small"
                style={{ color: 'var(--text-secondary)' }}
              >
                ({locationInfo.totalReviews} reviews)
              </span>
            </div>

            <h1 className="hero-large" style={{ marginBottom: '24px' }}>
              Cedar Brew Coffee,<br />Done Right.
            </h1>

            <p
              className="body-large"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                maxWidth: '520px',
              }}
            >
              Freshly Brewed. Locally Inspired.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                className="btn-primary"
                onClick={() => scrollToSection('location')}
              >
                Visit Us
              </button>

              <button
                className="btn-icon"
                onClick={() => scrollToSection('menu')}
              >
                View Menu
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519532059956-a63a37af5deb?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Specialty cortado coffee"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
