import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please provide your name, phone number, and email.');
      return;
    }

    setFormSubmitted(true);

    // Open WhatsApp or mailto with formatted enquiry
    const enquiryMsg = `Hello Vantara Bliss Resort,

New General Enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Dates: ${formData.dates || 'Flexible'}
Guests: ${formData.guests}
Message: ${formData.message || 'I would like to inquire about booking/amenities.'}`;

    const waLink = `https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent(enquiryMsg)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="section section-ivory">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">Connect With Us</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
            We're Here to Help You Plan Your Stay
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Reach out directly for personalized villa bookings, event enquiries, or route assistance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'flex-start' }}>
          {/* Contact Details Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Phone Card */}
            <a
              href={`tel:${propertyData.contact.phoneClean}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: '#FAF7F2',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(24, 34, 29, 0.08)',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)'
              }}
              className="room-card"
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--emerald-900)',
                color: 'var(--gold-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', fontWeight: '700' }}>
                  Call Directly
                </span>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', fontWeight: '600' }}>
                  {propertyData.contact.phone}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--emerald-700)' }}>Available 24/7 for guest assistance</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I would like to inquire about booking a stay.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: '#FAF7F2',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(24, 34, 29, 0.08)',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)'
              }}
              className="room-card"
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                background: '#25D366',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MessageSquare size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', fontWeight: '700' }}>
                  Chat on WhatsApp
                </span>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', fontWeight: '600' }}>
                  {propertyData.contact.whatsapp}
                </div>
                <span style={{ fontSize: '0.8rem', color: '#25D366' }}>Instant responses for rates & availability</span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${propertyData.contact.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: '#FAF7F2',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(24, 34, 29, 0.08)',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)'
              }}
              className="room-card"
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--emerald-900)',
                color: 'var(--gold-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', fontWeight: '700' }}>
                  Official Email
                </span>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', color: 'var(--text-charcoal)', fontWeight: '600' }}>
                  {propertyData.contact.email}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted-dark)' }}>For corporate & bulk enquiries</span>
              </div>
            </a>

            {/* Address Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              background: '#FAF7F2',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(24, 34, 29, 0.08)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--emerald-900)',
                color: 'var(--gold-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)', fontWeight: '700' }}>
                  Resort Location
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-charcoal)', margin: 0, lineHeight: '1.5' }}>
                  {propertyData.contact.address}
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div style={{ 
            background: '#FFFFFF', 
            padding: '2.5rem', 
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid rgba(24, 34, 29, 0.08)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', marginBottom: '0.5rem' }}>
              Send an Enquiry
            </h3>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              Fill out this form and our management team will reach back with customized pricing and options.
            </p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--emerald-600)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-charcoal)', marginBottom: '0.5rem' }}>
                  Enquiry Dispatched!
                </h4>
                <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  We have forwarded your enquiry to our WhatsApp concierge. You can also chat directly with us.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-outline-dark btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-input"
                    placeholder="e.g. Ananya Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      className="form-input"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      className="form-input"
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" htmlFor="contact-dates">Preferred Dates</label>
                    <input
                      type="text"
                      id="contact-dates"
                      className="form-input"
                      placeholder="e.g. Next weekend / 15-18 Oct"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" htmlFor="contact-guests">Guests</label>
                    <select
                      id="contact-guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3-4">3-4 Guests</option>
                      <option value="5+">5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label" htmlFor="contact-message">Message / Details</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    className="form-textarea"
                    placeholder="Tell us about your trip plans, staycation needs, or special occasions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <Send size={16} />
                  <span>Send Enquiry to Property Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
