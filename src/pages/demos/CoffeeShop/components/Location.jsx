import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { locationInfo } from '../mockData';

const branches = [
  { name: 'Kantari', hours: '7:00 a.m - 10:00 p.m' },
  { name: 'Jnah', hours: '09:00 a.m - 11:00 p.m' },
];

const Location = () => {
  return (
    <section
      id="location"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <div
          className="grid-two-column"
          style={{ gap: '48px', alignItems: 'center' }}
        >
          {/* Info Section */}
          <div>
            <h2 className="hero-medium" style={{ marginBottom: '32px' }}>
              Visit Us
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <InfoItem
                icon={<MapPin />}
                title="Location"
                text={locationInfo.address}
              />
              
              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={24} /> Hours
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {branches.map((branch) => (
                    <p
                      key={branch.name}
                      className="body-regular"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      📍 <strong>{branch.name}</strong>: {branch.hours}
                    </p>
                  ))}
                </div>
              </div>

              <InfoItem
                icon={<Phone />}
                title="Contact"
                text={`${locationInfo.phone}\n${locationInfo.email}`}
              />
            </div>
          </div>

          <div
            style={{
              border: '1px solid var(--border-light)',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '380px',
            }}
          >
            <iframe
              title="BLCK Specialty Coffee Location"
              src={`https://www.google.com/maps?q=${locationInfo.coordinates.lat},${locationInfo.coordinates.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, text }) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <div style={{ marginTop: '4px' }}>{React.cloneElement(icon, { size: 24 })}</div>
    <div>
      <h3 className="heading-3" style={{ marginBottom: '8px' }}>
        {title}
      </h3>
      <p
        className="body-regular"
        style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}
      >
        {text}
      </p>
    </div>
  </div>
);

export default Location;
