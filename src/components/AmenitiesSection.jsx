import React from 'react';
import { 
  Clock, 
  Smile, 
  Utensils, 
  Wifi, 
  Gamepad2, 
  Flame, 
  Bell, 
  Car, 
  Compass, 
  Camera 
} from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function AmenitiesSection() {
  const iconMap = {
    Clock,
    Smile,
    Utensils,
    Wifi,
    Gamepad2,
    Flame,
    Bell,
    Car,
    Compass,
    Camera
  };

  return (
    <section id="amenities" className="section section-dark">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="eyebrow">Resort Facilities</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-white)', marginBottom: '1rem' }}>
            Everything You Need for a Perfect Getaway
          </h2>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            At Vantara Bliss Resort, every facility is tailored to elevate your peace of mind, promote meaningful connection, and provide supreme comfort in nature's embrace.
          </p>
        </div>

        {/* Grid of 10 Amenities */}
        <div className="amenities-grid">
          {propertyData.amenities.map((item) => {
            const IconComp = iconMap[item.icon] || Compass;
            return (
              <div key={item.id} className="amenity-card">
                <div className="amenity-icon-circle">
                  <IconComp size={24} />
                </div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-400)', fontWeight: '700' }}>
                  {item.category}
                </span>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
