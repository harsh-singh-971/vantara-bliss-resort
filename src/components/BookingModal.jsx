import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Home, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function BookingModal({ initialData, onClose }) {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  // Form State
  const [checkIn, setCheckIn] = useState(initialData?.checkIn || new Date().toISOString().split('T')[0]);
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const [checkOut, setCheckOut] = useState(initialData?.checkOut || tomorrow.toISOString().split('T')[0]);

  const [selectedRoomId, setSelectedRoomId] = useState(
    initialData?.roomId || initialData?.roomType !== 'all' ? (initialData?.roomId || initialData?.roomType) : propertyData.rooms[0].id
  );
  const [adults, setAdults] = useState(initialData?.adults || 2);
  const [children, setChildren] = useState(initialData?.children || 0);

  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  // Selected Room
  const selectedRoom = propertyData.rooms.find((r) => r.id === selectedRoomId) || propertyData.rooms[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(dOut - dIn, 1000 * 60 * 60 * 24);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const estimatedTotal = selectedRoom.startingPrice * nights;

  useEffect(() => {
    // Generate reference on mount
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`VB-2026-${randomCode}`);
  }, []);

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!guestName.trim() || !guestPhone.trim() || !guestEmail.trim()) {
        alert('Please fill in your name, contact phone, and email address.');
        return;
      }
      setStep(3); // Confirmation
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Structured WhatsApp message exactly according to prompt specification
  const formattedWhatsAppMsg = `Hello,

I would like to enquire about a booking.

Property: ${propertyData.name}
Check-in: ${checkIn}
Check-out: ${checkOut} (${nights} night${nights > 1 ? 's' : ''})
Guests: ${adults} Adults${children > 0 ? `, ${children} Children` : ''}
Accommodation: ${selectedRoom.name}

Name: ${guestName}
Phone: ${guestPhone}
Email: ${guestEmail}

Special Request:
${specialRequests || 'None'}

Booking Ref: ${bookingRef}

Please confirm availability and pricing.`;

  const whatsappUrl = `https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent(formattedWhatsAppMsg)}`;

  // Mailto link
  const emailSubject = encodeURIComponent(`New Booking Enquiry — ${propertyData.name} (${bookingRef})`);
  const emailBody = encodeURIComponent(formattedWhatsAppMsg);
  const mailtoUrl = `mailto:${propertyData.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const copyVoucher = () => {
    navigator.clipboard.writeText(formattedWhatsAppMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.25rem', maxWidth: '720px' }}
      >
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {/* Multi-step Header */}
        <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(24, 34, 29, 0.08)', paddingBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-600)', fontWeight: '700' }}>
              Direct Reservation Desk
            </span>
            <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-muted-dark)' }}>
              Step {step} of 3
            </span>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)' }}>
            {step === 1 && "Select Dates & Accommodation"}
            {step === 2 && "Guest Information & Preferences"}
            {step === 3 && "Booking Request Generated"}
          </h2>

          {/* Progress Bar */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
            <div style={{ flex: 1, height: '4px', background: 'var(--gold-500)', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', background: step >= 2 ? 'var(--gold-500)' : '#E8E4DD', borderRadius: '2px', transition: 'background 0.3s' }} />
            <div style={{ flex: 1, height: '4px', background: step === 3 ? 'var(--gold-500)' : '#E8E4DD', borderRadius: '2px', transition: 'background 0.3s' }} />
          </div>
        </div>

        {/* STEP 1: DATES & ROOM */}
        {step === 1 && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-checkin">Check-in Date</label>
                <input
                  type="date"
                  id="modal-checkin"
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                  value={checkIn}
                  onChange={(e) => {
                    const newIn = e.target.value;
                    setCheckIn(newIn);
                    if (checkOut <= newIn) {
                      const next = new Date(newIn);
                      next.setDate(next.getDate() + 1);
                      setCheckOut(next.toISOString().split('T')[0]);
                    }
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-checkout">Check-out Date</label>
                <input
                  type="date"
                  id="modal-checkout"
                  className="form-input"
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-adults">Adults (Age 12+)</label>
                <select
                  id="modal-adults"
                  className="form-select"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4 Adults</option>
                  <option value={5}>5+ Adults (Multi-room)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-children">Children (Age 0-11)</label>
                <select
                  id="modal-children"
                  className="form-select"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value, 10))}
                >
                  <option value={0}>No Children</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                  <option value={3}>3+ Children</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" htmlFor="modal-suite">Preferred Suite / Chalet</label>
              <select
                id="modal-suite"
                className="form-select"
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
              >
                {propertyData.rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — from ₹{room.startingPrice.toLocaleString('en-IN')}/night ({room.capacity})
                  </option>
                ))}
              </select>
            </div>

            {/* Room Preview Card */}
            <div style={{ 
              display: 'flex', 
              gap: '1.25rem', 
              background: '#FAF8F5', 
              padding: '1.25rem', 
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(24, 34, 29, 0.08)',
              marginBottom: '1.75rem',
              alignItems: 'center'
            }}>
              <img 
                src={selectedRoom.images[0]} 
                alt={selectedRoom.name} 
                style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
              />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)' }}>
                  {selectedRoom.name}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted-dark)' }}>
                  {selectedRoom.bedConfig} · {selectedRoom.size} · {selectedRoom.view}
                </p>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--emerald-800)', marginTop: '0.2rem' }}>
                  {nights} Night{nights > 1 ? 's' : ''} Stay · Est. ₹{estimatedTotal.toLocaleString('en-IN')} (excl. seasonal taxes)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                type="button" 
                onClick={onClose} 
                className="btn btn-outline-dark"
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={handleNext} 
                className="btn btn-gold"
              >
                <span>Continue to Guest Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: GUEST DETAILS */}
        {step === 2 && (
          <form onSubmit={handleNext}>
            <div className="form-group">
              <label className="form-label" htmlFor="guest-name">Full Name *</label>
              <input
                type="text"
                id="guest-name"
                className="form-input"
                placeholder="e.g. Vikram Sharma"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="guest-phone">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  id="guest-phone"
                  className="form-input"
                  placeholder="e.g. +91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guest-email">Email Address *</label>
                <input
                  type="email"
                  id="guest-email"
                  className="form-input"
                  placeholder="e.g. vikram@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label" htmlFor="guest-requests">Special Requests / Preferences (Optional)</label>
              <textarea
                id="guest-requests"
                rows={3}
                className="form-textarea"
                placeholder="e.g. Early Check-In request, ground floor preference, evening bonfire arrangement, vegetarian meal request..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>

            {/* Price & Summary Box */}
            <div style={{ 
              background: '#FAF8F5', 
              padding: '1.25rem', 
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(24, 34, 29, 0.08)',
              marginBottom: '1.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted-dark)' }}>
                  Reservation Summary
                </span>
                <div style={{ fontWeight: '600', color: 'var(--text-charcoal)' }}>
                  {selectedRoom.name} ({nights} Nights · {adults} Adults{children > 0 ? `, ${children} Kids` : ''})
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted-dark)' }}>
                  {checkIn} to {checkOut}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted-dark)' }}>Estimated Quote</span>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)' }}>
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                type="button" 
                onClick={handleBack} 
                className="btn btn-outline-dark"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button 
                type="submit" 
                className="btn btn-gold"
              >
                <span>Submit Booking Request</span>
                <CheckCircle2 size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMATION & DIRECT ROUTING */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: 'var(--radius-full)', 
              background: 'rgba(35, 63, 49, 0.1)', 
              color: 'var(--emerald-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--gold-600)', fontWeight: '700' }}>
              Request Received · Ref: {bookingRef}
            </span>
            <h3 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', color: 'var(--text-charcoal)', margin: '0.3rem 0 0.75rem' }}>
              Thank You, {guestName}!
            </h3>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
              Your reservation enquiry for <strong>{selectedRoom.name}</strong> from <strong>{checkIn}</strong> to <strong>{checkOut}</strong> has been logged. Send this directly to our host on WhatsApp for immediate confirmation.
            </p>

            {/* Instant Actions Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%' }}
              >
                <MessageSquare size={20} />
                <span>Send Booking Details on WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
              >
                <Mail size={18} />
                <span>Send Booking Request via Email</span>
              </a>

              <button
                onClick={copyVoucher}
                className="btn btn-outline-dark btn-sm"
                style={{ alignSelf: 'center' }}
              >
                {copied ? <Check size={14} color="var(--emerald-600)" /> : <Copy size={14} />}
                <span>{copied ? 'Voucher Copied to Clipboard!' : 'Copy Enquiry Details'}</span>
              </button>
            </div>

            {/* Guarantee Note */}
            <div style={{ 
              background: '#FAF8F5', 
              padding: '1rem', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid rgba(24, 34, 29, 0.08)',
              fontSize: '0.85rem',
              color: 'var(--text-muted-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <ShieldCheck size={16} color="var(--emerald-600)" />
              <span>No immediate payment charged. The resort manager will confirm availability and seasonal offers.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
