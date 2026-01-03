import React from 'react';
import { Check } from 'lucide-react';
import { aboutContent, coffeeImages } from '../mockData';

const About = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <div
          className="grid-two-column"
          style={{
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={coffeeImages.barista1}
              alt="Expert barista crafting coffee"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '460px',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="hero-medium" style={{ marginBottom: '24px' }}>
              {aboutContent.title}
            </h2>

            <p
              className="body-large"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '520px',
              }}
            >
              {aboutContent.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {aboutContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <Check
                    size={20}
                    color="var(--text-primary)"
                    style={{ marginTop: '2px', flexShrink: 0 }}
                  />
                  <span className="body-regular">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
