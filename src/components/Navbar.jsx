import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck, MessageSquare, MapPin } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Curated, single-line desktop links to ensure spacious layout and zero wrapping
  const desktopNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Chalets & Suites', href: '#suites' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Explore', href: '#attractions' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  // Comprehensive mobile navigation list
  const mobileNavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About The Resort', href: '#about' },
    { name: 'Chalets & Luxury Suites', href: '#suites' },
    { name: 'Resort Amenities', href: '#amenities' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Curated Experiences', href: '#experience' },
    { name: 'Explore Bhimtal', href: '#attractions' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Contact Concierge', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Identity */}
          <a href="#hero" className="brand-logo" aria-label="Vantara Bliss Resort Home">
            <img 
              src={propertyData.logoUrl} 
              alt="Vantara Bliss Logo" 
              className="brand-emblem" 
            />
            <div className="brand-title">
              <span className="brand-name">VANTARA BLISS</span>
              <span className="brand-subtitle">Resort · Bhimtal</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu-desktop" aria-label="Main Navigation">
            <ul className="nav-links-desktop">
              {desktopNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Right Actions */}
          <div className="nav-actions">
            <a 
              href={`tel:${propertyData.contact.phoneClean}`} 
              className="nav-concierge-pill"
              title={`Call Concierge: ${propertyData.contact.phone}`}
            >
              <span className="concierge-icon-circle">
                <Phone size={13} />
              </span>
              <span className="concierge-num">{propertyData.contact.phoneDisplay}</span>
            </a>

            <button 
              onClick={() => onOpenBooking()}
              className="nav-book-btn"
              id="nav-book-btn"
              aria-label="Book your stay at Vantara Bliss"
            >
              <CalendarCheck size={15} />
              <span>Book Now</span>
            </button>

            <button 
              className="hamburger-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <div className="brand-logo" style={{ pointerEvents: 'none' }}>
            <img 
              src={propertyData.logoUrl} 
              alt="Vantara Bliss Logo" 
              className="brand-emblem" 
              style={{ width: '40px', height: '40px' }}
            />
            <div className="brand-title">
              <span className="brand-name" style={{ fontSize: '1.15rem' }}>VANTARA BLISS</span>
              <span className="brand-subtitle">Resort · Bhimtal</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="hamburger-btn"
            aria-label="Close navigation menu"
            style={{ display: 'block', padding: '0.4rem' }}
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {mobileNavLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>{link.name}</span>
                <span className="mobile-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-resort-badge">
            <MapPin size={14} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
            <span>Gunigaon, Matial, Padampuri, Bhimtal</span>
          </div>

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn btn-gold"
            style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
          >
            <CalendarCheck size={17} />
            <span>Check Availability</span>
          </button>

          <a 
            href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I would like to inquire about booking a stay.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
          >
            <MessageSquare size={17} />
            <span>WhatsApp Enquiry</span>
          </a>

          <a 
            href={`tel:${propertyData.contact.phoneClean}`} 
            className="btn btn-outline-white"
            style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
          >
            <Phone size={16} />
            <span>Direct Call: {propertyData.contact.phone}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
