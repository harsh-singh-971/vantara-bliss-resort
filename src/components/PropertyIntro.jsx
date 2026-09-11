import React from 'react';
import { Heart, Leaf, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function PropertyIntro({ onOpenBooking }) {
  return (
    <section id="about" className="section section-ivory">
      <div className="container">
        <div className="property-intro-grid">
          {/* Text Content */}
          <div>
            <div className="eyebrow">The Soul of Vantara Bliss</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem', color: 'var(--text-charcoal)' }}>
              A Private Mountain Escape Designed for Unforgettable Stays
            </h2>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted-dark)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
              <strong>Vantara Bliss Resort</strong> was created with one uncompromising vision: <em>to offer guests a peaceful Himalayan retreat where luxury feels natural and hospitality feels heartfelt.</em>
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted-dark)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Tucked quietly into the scenic hillscapes of Gunigaon, Matial, Padampuri in Bhimtal, our resort offers an invigorating haven far away from urban chaos. Every handcrafted wooden balcony, aromatic pine corridor, and curated mountain experience has been meticulously shaped to help you rest, revive, and reconnect.
            </p>

            {/* Core Values / Mission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div style={{ background: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(24, 34, 29, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', color: 'var(--emerald-800)', fontWeight: '700' }}>
                  <Heart size={18} color="var(--gold-600)" />
                  <span>Comfort & Care</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted-dark)', lineHeight: '1.5' }}>
                  We go the extra mile to provide a homely, personalized, and attentive stay experience.
                </p>
              </div>

              <div style={{ background: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(24, 34, 29, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', color: 'var(--emerald-800)', fontWeight: '700' }}>
                  <Leaf size={18} color="var(--gold-600)" />
                  <span>Nature Centric</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted-dark)', lineHeight: '1.5' }}>
                  Eco-conscious wooden construction harmonious with the surrounding pine forest.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenBooking()}
                className="btn btn-gold"
              >
                <span>Plan Your Stay</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="#suites"
                className="btn btn-outline-dark"
              >
                <span>View Accommodations</span>
              </a>
            </div>
          </div>

          {/* Image Showcase with Layered Badge */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              boxShadow: '0 20px 48px rgba(14, 22, 18, 0.18)',
              border: '1px solid rgba(197, 168, 128, 0.25)' 
            }}>
              <img 
                src="/images/gdrive/gdrive_img_02.jpg" 
                alt="Vantara Bliss Wooden Chalet Balcony" 
                style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Overlapping Luxury Badge */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-2rem', 
              left: '-2rem', 
              background: 'var(--bg-dark)', 
              color: 'var(--text-white)',
              padding: '1.5rem 1.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-glass)',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
              maxWidth: '240px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', marginBottom: '0.3rem' }}>
                <Sparkles size={16} />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700' }}>Staycation Ready</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', lineHeight: '1.3' }}>
                "A day? A week? A month? We have the perfect stay for you."
              </p>
            </div>
          </div>
        </div>

        {/* Live Metrics Counter Bar */}
        <div className="metrics-strip">
          <div>
            <div className="metric-value">{propertyData.metrics.rating}★</div>
            <div className="metric-label">Google Guest Rating</div>
          </div>
          <div>
            <div className="metric-value">{propertyData.metrics.distanceToLake}</div>
            <div className="metric-label">Proximity to Lake</div>
          </div>
          <div>
            <div className="metric-value">{propertyData.metrics.roomsCount}</div>
            <div className="metric-label">Boutique Wooden Rooms</div>
          </div>
          <div>
            <div className="metric-value">{propertyData.metrics.happyVisitors}</div>
            <div className="metric-label">Delighted Guests Hosted</div>
          </div>
        </div>
      </div>
    </section>
  );
}
