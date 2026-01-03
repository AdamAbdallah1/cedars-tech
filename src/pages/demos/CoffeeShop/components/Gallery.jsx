import React from 'react';
import { coffeeImages } from '../mockData';

const Gallery = () => {
  const galleryImages = [
    { src: coffeeImages.cortado1, alt: 'Specialty cortado' },
    { src: coffeeImages.barista2, alt: 'Expert barista pouring coffee' },
    { src: coffeeImages.brewing1, alt: 'Coffee brewing process' },
    { src: coffeeImages.cortado2, alt: 'Perfect cortado with latte art' },
    { src: coffeeImages.brewing2, alt: 'Specialty coffee preparation' },
    { src: coffeeImages.brewing3, alt: 'Premium coffee experience' }
  ];

  return (
    <section id="gallery" className="section-padding-small" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="hero-medium" style={{ marginBottom: '16px' }}>Gallery</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            A glimpse into our craft
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              style={{
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                aspectRatio: '4/5',
                cursor: 'pointer'
              }}
              className="hover-lift"
            >
              <img 
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;