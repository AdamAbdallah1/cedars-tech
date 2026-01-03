import React, { useState } from 'react';
import { menuItems } from '../mockData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('hotDrinks');

  const categories = [
  { id: 'hotDrinks', label: 'Hot Drinks' },
  { id: 'icedDrinks', label: 'Iced Drinks' },
  { id: 'icedTea', label: 'Iced Tea' },
  { id: 'refreshing', label: 'Refreshing' },
  { id: 'smoothies', label: 'Smoothies' },
  { id: 'gingerShots', label: 'Ginger Shots' },
  { id: 'bagels', label: 'Bagels' },
  { id: 'salads', label: 'Salads' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'croissants', label: 'Croissants' },
];


  return (
    <section id="menu" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="hero-medium" style={{ marginBottom: '16px' }}>Our Menu</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Every drink crafted with precision, every bite made with care.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '32px', 
          marginBottom: '48px',
          borderBottom: '1px solid var(--border-light)',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '16px 0',
                fontSize: '14px',
                fontWeight: activeCategory === category.id ? 700 : 400,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                position: 'relative',
                borderBottom: activeCategory === category.id ? '2px solid var(--text-primary)' : 'none',
                marginBottom: '-1px'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {menuItems[activeCategory].map((item) => (
            <div 
              key={item.id}
              style={{
                padding: '24px',
                border: '1px solid var(--border-light)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              className="hover-lift"
            >
              {item.popular && (
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  fontSize: '12px',
                  marginBottom: '16px'
                }}>
                  POPULAR
                </span>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 className="heading-3">{item.name}</h3>
                <span className="heading-3" style={{ fontWeight: 700 }}>{item.price}</span>
              </div>
              
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;