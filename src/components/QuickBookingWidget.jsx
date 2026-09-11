import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ArrowRight } from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function QuickBookingWidget({ onSearchBooking }) {
  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Tomorrow's date in YYYY-MM-DD
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const defaultCheckout = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(defaultCheckout);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [roomType, setRoomType] = useState('all');

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    // If checkOut is <= newCheckIn, automatically adjust checkOut to day after
    if (checkOut <= newCheckIn) {
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchBooking({
      checkIn,
      checkOut,
      adults: parseInt(adults, 10),
      children: parseInt(children, 10),
      roomType
    });
  };

  return (
    <div className="booking-widget-wrapper">
      <div className="container">
        <form onSubmit={handleSubmit} className="booking-widget-card" id="quick-booking-form">
          {/* Check-in Date */}
          <div className="booking-field">
            <label htmlFor="widget-checkin">
              <Calendar size={13} color="var(--gold-600)" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              id="widget-checkin"
              min={today}
              value={checkIn}
              onChange={handleCheckInChange}
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="booking-field">
            <label htmlFor="widget-checkout">
              <Calendar size={13} color="var(--gold-600)" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              id="widget-checkout"
              min={checkIn}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          {/* Guests Count */}
          <div className="booking-field">
            <label htmlFor="widget-guests">
              <Users size={13} color="var(--gold-600)" />
              <span>Guests</span>
            </label>
            <select
              id="widget-guests"
              value={`${adults}-${children}`}
              onChange={(e) => {
                const [a, c] = e.target.value.split('-');
                setAdults(a);
                setChildren(c);
              }}
            >
              <option value="1-0">1 Adult (Solo Retreat)</option>
              <option value="2-0">2 Adults (Couple Stay)</option>
              <option value="2-1">2 Adults, 1 Child</option>
              <option value="3-0">3 Adults</option>
              <option value="4-0">4 Adults (Group / Duplex)</option>
              <option value="4-2">Family (4 Adults, 2 Kids)</option>
            </select>
          </div>

          {/* Room / Chalet Type */}
          <div className="booking-field">
            <label htmlFor="widget-roomtype">
              <Home size={13} color="var(--gold-600)" />
              <span>Accommodation</span>
            </label>
            <select
              id="widget-roomtype"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="all">Any Available Chalet / Suite</option>
              {propertyData.rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-gold btn-submit-booking"
            id="widget-search-btn"
          >
            <Search size={16} />
            <span>Check Availability</span>
          </button>
        </form>

        {/* Small trust banner under widget */}
        <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted-dark)' }}>
          <span>✨ Direct Reservation Inquiry · Best Rate Guarantee · Instant WhatsApp Handoff</span>
        </div>
      </div>
    </div>
  );
}
