import React from 'react';
import { MessageSquare, Phone, CalendarCheck } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function FloatingCTAs({ onOpenBooking }) {
  const prefilledWhatsApp = `Hello, I would like to enquire about staying at ${propertyData.name}. Please share availability and pricing.`;
  const whatsappUrl = `https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWhatsApp)}`;

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        id="floating-whatsapp"
      >
        <MessageSquare size={28} />
      </a>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="mobile-bottom-bar" id="mobile-sticky-bar">
        <button
          onClick={() => onOpenBooking()}
          className="btn btn-gold btn-sm"
          style={{ flex: 1, padding: '0.75rem 0.5rem' }}
          id="mobile-bottom-book-btn"
        >
          <CalendarCheck size={16} />
          <span>Book Your Stay</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ padding: '0.75rem 1rem' }}
          aria-label="WhatsApp"
        >
          <MessageSquare size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${propertyData.contact.phoneClean}`}
          className="btn btn-outline-white btn-sm"
          style={{ padding: '0.75rem 0.85rem' }}
          aria-label="Call property"
        >
          <Phone size={16} />
        </a>
      </div>
    </>
  );
}
