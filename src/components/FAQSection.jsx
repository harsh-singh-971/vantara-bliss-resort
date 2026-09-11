import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section section-sand">
      <div className="container-narrow">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <div className="eyebrow">Got Questions?</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Everything you need to know about planning your stay at Vantara Bliss Resort.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {propertyData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color="var(--gold-600)" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3.5rem', 
          background: '#FFFFFF', 
          padding: '2rem', 
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-subtle)',
          border: '1px solid rgba(24, 34, 29, 0.08)' 
        }}>
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', marginBottom: '0.5rem' }}>
            Have a custom requirement or planning an event?
          </h3>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
            Our resort reservations desk is available on WhatsApp and phone to assist you right away.
          </p>
          <a
            href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I have a specific question regarding my upcoming stay.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={16} />
            <span>Chat Directly with Resort Manager</span>
          </a>
        </div>
      </div>
    </section>
  );
}
