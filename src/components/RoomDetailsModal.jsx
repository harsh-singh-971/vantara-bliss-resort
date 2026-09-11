import React, { useState } from 'react';
import { X, Users, Bed, Maximize, Eye, Check, CalendarCheck, MessageSquare } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function RoomDetailsModal({ room, onClose, onBookRoom }) {
  if (!room) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Gallery Image Display */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ 
            height: '380px', 
            borderRadius: 'var(--radius-sm)', 
            overflow: 'hidden', 
            marginBottom: '0.75rem',
            position: 'relative'
          }}>
            <img 
              src={room.images[activeImageIdx]} 
              alt={room.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(14, 22, 18, 0.85)',
              color: 'var(--gold-400)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.12em'
            }}>
              {room.category}
            </div>
          </div>

          {/* Thumbnails row */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {room.images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                style={{
                  border: activeImageIdx === idx ? '2px solid var(--gold-500)' : '2px solid transparent',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  width: '80px',
                  height: '56px',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0
                }}
              >
                <img 
                  src={imgUrl} 
                  alt={`${room.name} ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Room Title & Specs */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--emerald-600)' }}>
            {room.badge}
          </span>
          <h2 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', margin: '0.2rem 0 0.5rem' }}>
            {room.name}
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            {room.description}
          </p>
        </div>

        {/* Specs Strip */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1rem',
          background: '#FAF8F5',
          padding: '1rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(24, 34, 29, 0.08)',
          marginBottom: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Users size={12} /> Occupancy
            </div>
            <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>
              {room.capacity}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Bed size={12} /> Bedding
            </div>
            <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>
              {room.bedConfig}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Maximize size={12} /> Size
            </div>
            <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>
              {room.size}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Eye size={12} /> Outlook
            </div>
            <div style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>
              {room.view}
            </div>
          </div>
        </div>

        {/* Features Checklist */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem', color: 'var(--text-charcoal)' }}>
            Amenities & Inclusions
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
            {room.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted-dark)' }}>
                <Check size={16} color="var(--emerald-600)" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Action Row */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          borderTop: '1px solid rgba(24, 34, 29, 0.1)',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)' }}>
              Starting Rate
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)' }}>
                ₹{room.startingPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted-dark)' }}>/ night</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted-dark)' }}>
              {room.priceNote}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to inquire about availability and pricing for the ${room.name} at Vantara Bliss Resort.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="btn btn-gold"
            >
              <CalendarCheck size={16} />
              <span>Reserve This Suite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
