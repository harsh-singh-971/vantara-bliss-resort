import React from 'react';
import { Home, Wifi, Utensils, Flame, Sparkles, Trees, ShieldCheck, HeartHandshake } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function WhyChooseUs({ onOpenBooking }) {
  const reasons = [
    {
      icon: Home,
      title: "Authentic Wooden Chalets",
      description: "Two-story pine & cedar wood construction that offers natural Himalayan warmth, private decks, and panoramic hill vistas."
    },
    {
      icon: Wifi,
      title: "Seamless Workations",
      description: "High-speed dedicated Wi-Fi, ergonomic daybeds, and serene mountain stillness designed for remote work and prolonged stays."
    },
    {
      icon: Trees,
      title: "Untouched Pine Forest Setting",
      description: "Direct access to fresh morning walking trails, crisp mountain air, and rich birdwatching away from noisy highways."
    },
    {
      icon: Flame,
      title: "Bonfires & Starlit Evenings",
      description: "Gather around crackling evening fires with gentle acoustic tunes, stargazing under unpolluted Himalayan skies."
    },
    {
      icon: Utensils,
      title: "Homely Multi-Cuisine Dining",
      description: "From steaming hot North Indian dishes to authentic Kumaoni local flavors, freshly prepared by our resort chefs."
    },
    {
      icon: HeartHandshake,
      title: "Heartfelt Personalized Care",
      description: "Warm 24/7 hospitality, early check-in assistance, sightseeing planning, and attentive service that feels like home."
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <div className="eyebrow">Why Guests Love Us</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-white)', marginBottom: '1rem' }}>
            A Stay That Truly Transcends the Ordinary
          </h2>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Every detail at Vantara Bliss Resort has been thoughtfully designed to balance raw nature with refined comfort, giving you the rejuvenation you deserve.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                style={{ 
                  background: 'var(--bg-dark-card)',
                  padding: '2.25rem 2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-glass)',
                  transition: 'var(--transition-smooth)'
                }}
                className="amenity-card"
              >
                <div className="amenity-icon-circle">
                  <IconComponent size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{ 
          marginTop: '4rem', 
          background: 'linear-gradient(90deg, rgba(197, 168, 128, 0.15) 0%, rgba(35, 63, 49, 0.4) 100%)',
          border: '1px solid rgba(197, 168, 128, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem 3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <span style={{ color: 'var(--gold-400)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700' }}>
              Special Long-Stay & Weekend Rates
            </span>
            <h4 style={{ color: 'var(--text-white)', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.2rem' }}>
              Planning a staycation or group getaway in the hills?
            </h4>
          </div>

          <button 
            onClick={() => onOpenBooking()}
            className="btn btn-gold"
          >
            <span>Inquire for Group & Long Stays</span>
          </button>
        </div>
      </div>
    </section>
  );
}
