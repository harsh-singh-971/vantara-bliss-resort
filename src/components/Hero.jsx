import React, { useState, useEffect } from 'react';
import { CalendarCheck, Compass, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';
import { getAssetUrl } from '../utils/assets.js';

export default function Hero({ onOpenBooking }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      url: getAssetUrl("images/gdrive/gdrive_img_08.jpg"),
      caption: "Authentic Handcrafted Wooden Chalet"
    },
    {
      url: getAssetUrl("images/gdrive/gdrive_img_10.jpg"),
      caption: "Double-Decker Balconies with Valley Vistas"
    },
    {
      url: getAssetUrl("images/gdrive/gdrive_img_11.jpg"),
      caption: "Lantern-Lined Pine Forest Walkway"
    },
    {
      url: getAssetUrl("images/gdrive/gdrive_img_14.jpg"),
      caption: "Warm Wooden Interiors & Tufted Suites"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="hero" className="hero">
      {/* Background Slideshow */}
      <div className="hero-slider-bg">
        {heroSlides.map((slide, idx) => (
          <img
            key={slide.url}
            src={slide.url}
            alt={slide.caption}
            className={`hero-slide-image ${idx === activeSlide ? 'active' : ''}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="hero-pill-badge">
          <Star size={14} fill="var(--gold-300)" />
          <span>Work · Vacation · Staycation · Bhimtal</span>
          <Star size={14} fill="var(--gold-300)" />
        </div>

        <h1 className="hero-title">
          Where Elegant Design Meets <span>Complete Comfort</span>
        </h1>

        <p className="hero-subtitle">
          Escape to <strong>Vantara Bliss Resort</strong> — an authentic Himalayan wooden chalet retreat nestled in the peaceful pine hills of Bhimtal. Designed for unforgettable family stays, romantic getaways, and rejuvenating workations.
        </p>

        <div className="hero-ctas">
          <button 
            onClick={() => onOpenBooking()}
            className="btn btn-gold btn-lg"
            id="hero-check-availability-btn"
          >
            <CalendarCheck size={18} />
            <span>Check Availability</span>
          </button>

          <a 
            href="#suites" 
            className="btn btn-outline-white btn-lg"
          >
            <Compass size={18} />
            <span>Explore Chalets</span>
          </a>

          <a 
            href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I am looking to book a stay. Please share available dates and seasonal rates.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            id="hero-whatsapp-btn"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Host</span>
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.85 }}>
          <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-ivory)' }}>
            <ShieldCheck size={16} color="var(--gold-400)" /> 100% Verified Mountain Property
          </span>
          <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-ivory)' }}>
            <Star size={16} fill="var(--gold-400)" color="var(--gold-400)" /> 4.5/5 Guest Rating (2,400+ reviews)
          </span>
          <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-ivory)' }}>
            <Compass size={16} color="var(--gold-400)" /> 1.5 Km from Scenic Lake
          </span>
        </div>
      </div>
    </section>
  );
}
