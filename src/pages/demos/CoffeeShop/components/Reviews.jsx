import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../mockData';

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="hero-medium" style={{ marginBottom: '16px' }}>What Our Customers Say</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Trusted by coffee lovers across Lebanon
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px'
        }}>
          {reviews.map((review) => (
            <div 
              key={review.id}
              style={{
                padding: '32px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--text-primary)" color="var(--text-primary)" />
                ))}
              </div>
              
              <p className="body-regular" style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                "{review.text}"
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="body-small" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  {review.author}
                </span>
                <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;