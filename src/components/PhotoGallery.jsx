import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = ['All', 'Chalet', 'Suites', 'Surroundings'];

  const filteredImages = selectedCategory === 'All'
    ? propertyData.gallery
    : propertyData.gallery.filter((img) => img.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIdx(index);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  const nextImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, filteredImages.length]);

  return (
    <section id="gallery" className="section section-sand">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="eyebrow">Visual Tour</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
            A Glimpse into Mountain Serenity
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Explore the authentic wooden architecture, handcrafted suite details, and scenic nature paths that define Vantara Bliss Resort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-bar" style={{ marginTop: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {filteredImages.map((img, idx) => (
            <div
              key={img.url}
              className={`gallery-item ${idx % 5 === 0 ? 'span-2' : ''}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              aria-label={`View photo ${img.title}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-400)', display: 'block' }}>
                    {img.category}
                  </span>
                  <div className="gallery-caption">{img.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted-dark)' }}>
            📷 All photographs shown are captured on-premise at Vantara Bliss Resort, Bhimtal.
          </span>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIdx !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button 
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>

          <button 
            className="lightbox-nav-btn prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxIdx].url}
              alt={filteredImages[lightboxIdx].title}
              className="lightbox-image"
            />
            <div style={{ 
              color: 'var(--text-ivory)', 
              marginTop: '1rem', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem'
            }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--gold-300)' }}>
                {filteredImages[lightboxIdx].title}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Photo {lightboxIdx + 1} of {filteredImages.length} · {filteredImages[lightboxIdx].category}
              </span>
            </div>
          </div>

          <button 
            className="lightbox-nav-btn next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
