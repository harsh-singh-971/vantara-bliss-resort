import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src={propertyData.logoUrl} 
                alt="Vantara Bliss Logo" 
                style={{ width: '44px', height: '44px', objectFit: 'contain' }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: '600', letterSpacing: '0.06em', display: 'block' }}>
                  VANTARA BLISS
                </span>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold-400)' }}>
                  Luxury Resort · Bhimtal
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '1.75rem', maxWidth: '360px' }}>
              Where elegant design meets complete comfort. Handcrafted wooden duplex chalets, panoramic mountain balconies, and heartfelt Kumaoni hospitality in Uttarakhand.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={propertyData.contact.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                className="btn-outline-gold"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href={propertyData.contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                className="btn-outline-gold"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I would like to inquire about booking a stay.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(37, 211, 102, 0.2)',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About the Resort</a></li>
              <li><a href="#suites" className="footer-link">Suites & Chalets</a></li>
              <li><a href="#amenities" className="footer-link">Facilities & Games</a></li>
              <li><a href="#gallery" className="footer-link">Photo Gallery</a></li>
              <li><a href="#experience" className="footer-link">Workation & Stays</a></li>
              <li><a href="#attractions" className="footer-link">Explore Bhimtal</a></li>
              <li><a href="#location" className="footer-link">Location & Map</a></li>
            </ul>
          </div>

          {/* Suites List */}
          <div>
            <h4 className="footer-heading">Accommodations</h4>
            <ul className="footer-links">
              {propertyData.rooms.map((room) => (
                <li key={room.id}>
                  <a href={`#room-${room.id}`} className="footer-link">
                    {room.name}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem' }}>
                <button
                  onClick={() => onOpenBooking()}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold-400)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  ⚡ Check Availability
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Contact & Booking</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted-light)' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{propertyData.contact.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                <a href={`tel:${propertyData.contact.phoneClean}`} style={{ color: 'var(--text-white)', textDecoration: 'none' }}>
                  {propertyData.contact.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${propertyData.contact.email}`} style={{ color: 'var(--text-white)', textDecoration: 'none' }}>
                  {propertyData.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageSquare size={18} color="#25D366" style={{ flexShrink: 0 }} />
                <a 
                  href={`https://wa.me/${propertyData.contact.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#25D366', textDecoration: 'none' }}
                >
                  WhatsApp: +91 9220655933
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Vantara Bliss Resort. All Rights Reserved. Built with precision for luxury hospitality.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-muted-light)' }}>Privacy Policy</span>
            <span style={{ color: 'var(--text-muted-light)' }}>Terms & Conditions</span>
            <span style={{ color: 'var(--text-muted-light)' }}>Cancellation Policy</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-400)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                fontSize: '0.82rem'
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
