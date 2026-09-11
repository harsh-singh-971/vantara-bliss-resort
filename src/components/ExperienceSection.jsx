import React from 'react';
import { Laptop, Flame, Trees, Coffee, ArrowRight } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function ExperienceSection({ onOpenBooking }) {
  const experiences = [
    {
      title: "Himalayan Workation Sanctuary",
      tagline: "Work · Vacation · Staycation",
      description: "Fast fiber Wi-Fi, comfortable daybeds, and quiet balcony nooks that turn your workdays into an inspiring, scenic retreat without screen fatigue.",
      image: "/images/gdrive/gdrive_img_05.jpg",
      icon: Laptop
    },
    {
      title: "Evening Bonfires & Star Gazing",
      tagline: "Crackling Warmth & Acoustic Nights",
      description: "When the crisp mountain breeze settles, gather around the crackling bonfire on our lawn with gentle melodies, hot beverages, and endless stars.",
      image: "/images/gdrive/gdrive_img_14.jpg",
      icon: Flame
    },
    {
      title: "Morning Pine Forest Walks",
      tagline: "Nature's Purest Breath",
      description: "Step directly onto pine-covered paths at sunrise. Listen to Himalayan birds and feel the calm dew before returning for a hot breakfast.",
      image: "/images/gdrive/gdrive_img_03.jpg",
      icon: Trees
    }
  ];

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <div className="eyebrow">The Stay Experience</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-white)', marginBottom: '1rem' }}>
            Rest. Relax. Revive.
          </h2>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            At Vantara Bliss, time slows down. Whether you come for a peaceful weekend recharge or a prolonged creative staycation, every moment is restorative.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experiences-grid">
          {experiences.map((exp, idx) => {
            const IconComp = exp.icon;
            return (
              <div 
                key={idx}
                style={{ 
                  background: 'var(--bg-dark-card)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-smooth)'
                }}
                className="amenity-card"
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    loading="lazy"
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem',
                    background: 'rgba(14, 22, 18, 0.85)',
                    color: 'var(--gold-400)',
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComp size={20} />
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-400)', fontWeight: '700', marginBottom: '0.3rem' }}>
                    {exp.tagline}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {exp.description}
                  </p>

                  <button
                    onClick={() => onOpenBooking()}
                    style={{ 
                      marginTop: 'auto', 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--gold-300)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: 0
                    }}
                  >
                    <span>Reserve Your Experience</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
