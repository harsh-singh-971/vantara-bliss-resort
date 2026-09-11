import React from 'react';
import { MapPin, Navigation, Compass, ArrowUpRight } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function NearbyAttractions() {
  return (
    <section id="attractions" className="section section-sand">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">Explore The Area</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
            Attractions & Excursions Around Bhimtal
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            A perfect getaway combines the luxury of the resort with the charm of the surrounding Kumaon hills, lakes, and cultural heritage.
          </p>
        </div>

        {/* Attractions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {propertyData.attractions.map((spot, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.75rem',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid rgba(24, 34, 29, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)'
              }}
              className="room-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <span style={{ 
                  fontSize: '0.72rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.12em', 
                  color: 'var(--emerald-600)', 
                  fontWeight: '700',
                  background: '#EDF5F0',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  {spot.category}
                </span>

                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600', 
                  color: 'var(--gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Navigation size={13} />
                  <span>{spot.distance}</span>
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', marginBottom: '0.75rem' }}>
                {spot.name}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                {spot.description}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' Bhimtal Uttarakhand')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--emerald-800)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  borderTop: '1px solid rgba(24, 34, 29, 0.08)',
                  paddingTop: '1rem'
                }}
              >
                <span>View on Map</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Travel Desk Callout */}
        <div style={{ 
          marginTop: '3.5rem', 
          background: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem 2.5rem',
          border: '1px solid rgba(197, 168, 128, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-600)', fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              <Compass size={16} />
              <span>Resort Travel & Sightseeing Desk</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>
              Our property manager can arrange local taxis, lake boating tickets, and guided village trails upon request.
            </p>
          </div>

          <a
            href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss team, could you please assist me with sightseeing itineraries and local travel guidance?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            <span>Ask Travel Desk on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
