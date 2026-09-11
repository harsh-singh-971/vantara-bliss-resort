import React, { useState } from 'react';
import { Users, Bed, Maximize, ArrowRight, CalendarCheck, Eye } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';
import RoomDetailsModal from './RoomDetailsModal.jsx';

export default function Accommodations({ onBookRoom }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="suites" className="section section-sand">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="eyebrow">Luxury Living in Nature</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
            Rooms, Suites & Wooden Chalets
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Thoughtfully crafted with natural timber, warm illumination, and private panoramic balconies that invite the tranquility of Bhimtal indoors.
          </p>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="accommodations-grid">
          {propertyData.rooms.map((room) => (
            <article key={room.id} className="room-card" id={`room-${room.id}`}>
              <div className="room-image-container">
                <img 
                  src={room.images[0]} 
                  alt={room.name} 
                  className="room-image"
                  loading="lazy"
                />
                <span className="room-badge">{room.category}</span>
              </div>

              <div className="room-details">
                <span className="room-category">{room.badge}</span>
                <h3 className="room-title">{room.name}</h3>
                <p className="room-tagline">{room.tagline}</p>

                {/* Specs Strip */}
                <div className="room-specs-strip">
                  <div className="spec-item">
                    <Users size={16} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <Bed size={16} />
                    <span>{room.bedConfig}</span>
                  </div>
                  <div className="spec-item">
                    <Maximize size={16} />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="room-price-cta-row">
                  <div className="room-price-box">
                    <span className="price-starting">Starting from</span>
                    <div>
                      <span className="price-amount">₹{room.startingPrice.toLocaleString('en-IN')}</span>
                      <span className="price-period"> / night</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="btn btn-outline-dark btn-sm"
                      title="View room photos and specifications"
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onBookRoom(room.id)}
                      className="btn btn-gold btn-sm"
                    >
                      <CalendarCheck size={15} />
                      <span>Reserve</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Staycation & Workation Callout */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          background: '#FFFFFF',
          padding: '1.5rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px dashed rgba(197, 168, 128, 0.5)',
          color: 'var(--text-muted-dark)',
          fontSize: '0.92rem'
        }}>
          💡 <strong>Staying a week or a month?</strong> Inquire about our discounted monthly workation retreats with dedicated study desks and high-speed Wi-Fi.
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookRoom={(roomId) => onBookRoom(roomId)}
        />
      )}
    </section>
  );
}
