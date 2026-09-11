import React from 'react';
import { MapPin, Navigation, Train, Plane, Car, Phone, ArrowUpRight } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function LocationSection() {
  return (
    <section id="location" className="section section-dark">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">How To Reach</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-white)', marginBottom: '1rem' }}>
            Getting to Vantara Bliss Resort
          </h2>
          <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Conveniently nestled in the pine hills of Gunigaon, Matial, Padampuri, just a short scenic drive from Bhimtal Lake.
          </p>
        </div>

        {/* Two-Column Grid: Info & Map Embed */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
          {/* Directions & Transports */}
          <div>
            <div style={{ 
              background: 'var(--bg-dark-card)', 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-glass)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: 'var(--radius-full)', 
                  background: 'rgba(197, 168, 128, 0.15)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--text-white)', marginBottom: '0.3rem' }}>
                    Resort Address
                  </h3>
                  <p style={{ color: 'var(--text-muted-light)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {propertyData.contact.address}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={propertyData.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                  id="get-directions-btn"
                >
                  <Navigation size={15} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${propertyData.contact.phoneClean}`}
                  className="btn btn-outline-white btn-sm"
                >
                  <Phone size={15} />
                  <span>Call for Route Assistance</span>
                </a>
              </div>
            </div>

            {/* Travel Modes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                padding: '1.1rem 1.25rem', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Train size={22} color="var(--gold-400)" />
                <div>
                  <div style={{ color: 'var(--text-white)', fontSize: '0.92rem', fontWeight: '600' }}>
                    By Railway: Kathgodam Station (26 Km)
                  </div>
                  <div style={{ color: 'var(--text-muted-light)', fontSize: '0.82rem' }}>
                    Approx. 50 mins drive. Regular direct express trains from Delhi, Lucknow, and Dehradun.
                  </div>
                </div>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                padding: '1.1rem 1.25rem', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Plane size={22} color="var(--gold-400)" />
                <div>
                  <div style={{ color: 'var(--text-white)', fontSize: '0.92rem', fontWeight: '600' }}>
                    By Air: Pantnagar Airport (60 Km)
                  </div>
                  <div style={{ color: 'var(--text-muted-light)', fontSize: '0.82rem' }}>
                    Approx. 1 hour 45 mins drive. Pre-arranged taxi pickups available on request.
                  </div>
                </div>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                padding: '1.1rem 1.25rem', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Car size={22} color="var(--gold-400)" />
                <div>
                  <div style={{ color: 'var(--text-white)', fontSize: '0.92rem', fontWeight: '600' }}>
                    By Road: Delhi NCR (approx. 290 Km)
                  </div>
                  <div style={{ color: 'var(--text-muted-light)', fontSize: '0.82rem' }}>
                    Smooth 6–7 hour scenic drive via Hapur, Moradabad, Rampur, Haldwani & Bhimtal.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div style={{ 
            height: '480px', 
            borderRadius: 'var(--radius-md)', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-elevation)',
            border: '1px solid rgba(197, 168, 128, 0.35)',
            position: 'relative'
          }}>
            <iframe
              src={propertyData.contact.googleMapsEmbedUrl}
              title="Vantara Bliss Resort Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
