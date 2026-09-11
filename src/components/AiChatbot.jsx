import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  CalendarCheck, 
  Phone, 
  MapPin, 
  Wifi, 
  Flame, 
  Home, 
  ArrowRight 
} from 'lucide-react';
import { propertyData } from '../data/propertyData.js';

export default function AiChatbot({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: propertyData.botKnowledge.greeting,
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Zero-hallucination intelligent knowledge retrieval
  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // 1. Booking intent
    if (q.includes('book') || q.includes('reserve') || q.includes('availability') || q.includes('dates')) {
      return {
        text: `I'd love to help you reserve your stay at Vantara Bliss! We offer Grand Wooden Duplex Chalets, Deluxe Pine Suites, and Mountain View Executive rooms. You can choose your dates and view instant pricing directly in our booking engine:`,
        action: 'booking'
      };
    }

    // 2. Price / Rates
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('tariff') || q.includes('how much')) {
      return {
        text: `Our accommodations start from ₹4,199/night for Mountain View Executive Rooms, ₹4,799/night for Deluxe Pine Wood Suites, and ₹6,499/night for the signature Grand Wooden Duplex Chalet. Would you like to check availability for your specific dates?`,
        action: 'booking'
      };
    }

    // 3. Location / Address / Directions
    if (q.includes('location') || q.includes('where') || q.includes('reach') || q.includes('address') || q.includes('station') || q.includes('airport') || q.includes('direction') || q.includes('how to get')) {
      return {
        text: `Vantara Bliss Resort is located in Gunigaon, Matial, Padampuri, Bhimtal (Uttarakhand). It is just 1.5 km from the lake, approx. 26 km from Kathgodam Railway Station, and approx. 60 km from Pantnagar Airport. We also offer on-premise private parking for your vehicle.`,
        action: 'location'
      };
    }

    // 4. Wi-Fi / Workation / Remote Work
    if (q.includes('wifi') || q.includes('wi-fi') || q.includes('internet') || q.includes('work') || q.includes('workation') || q.includes('staycation') || q.includes('laptop')) {
      return {
        text: `Yes! Vantara Bliss Resort is fully optimized for remote work and staycations with high-speed Wi-Fi across all chalets, balconies, and lawns. Each suite features ergonomic seating, daybeds, and power access amidst peaceful mountain air.`,
        action: null
      };
    }

    // 5. Bonfire / Music / Evenings
    if (q.includes('bonfire') || q.includes('fire') || q.includes('music') || q.includes('night') || q.includes('evening')) {
      return {
        text: `Yes, we regularly host evening bonfires and acoustic music sessions on our open lawn under the starry skies. It is one of our guests' favorite Himalayan experiences!`,
        action: null
      };
    }

    // 6. Amenities / Facilities / Restaurant
    if (q.includes('amenity') || q.includes('amenities') || q.includes('food') || q.includes('restaurant') || q.includes('dining') || q.includes('eat') || q.includes('parking') || q.includes('games')) {
      return {
        text: `Our verified resort amenities include: in-house Multi-Cuisine Restaurant with 24/7 room service, High-Speed Wi-Fi, Private Secure Parking, Kids Play Area, Indoor & Outdoor Games, Evening Bonfires, Early Check-In assistance, and Travel Desk support.`,
        action: null
      };
    }

    // 7. Check-in / Check-out
    if (q.includes('check-in') || q.includes('checkin') || q.includes('checkout') || q.includes('check out') || q.includes('timings')) {
      return {
        text: `Standard check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be accommodated upon advance request based on availability.`,
        action: null
      };
    }

    // 8. Contact / Host / Phone / WhatsApp
    if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp') || q.includes('call') || q.includes('number') || q.includes('email') || q.includes('talk')) {
      return {
        text: `You can reach our resort team directly anytime: Phone & WhatsApp: +91 9220655933, Email: Vantarablissresort@gmail.com. We're happy to assist with custom requests!`,
        action: 'whatsapp'
      };
    }

    // 9. Fallback without hallucination (strictly adhering to prompt instruction)
    return {
      text: `I'm not able to confirm that specific detail from our verified database. Please contact our property management team directly on WhatsApp or phone at +91 9220655933 for the most accurate answer.`,
      action: 'whatsapp'
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    // Append user message
    const userMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Process Bot reply after slight natural delay
    setTimeout(() => {
      const response = processQuery(query);
      const botMsg = {
        sender: 'bot',
        text: response.text,
        action: response.action,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="chatbot-toggle-btn"
        aria-label={isOpen ? "Close Virtual Concierge" : "Open Virtual Concierge"}
        id="chatbot-toggle"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <aside className="chatbot-window" aria-label="Virtual Concierge Chat">
          {/* Header */}
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: 'var(--radius-full)', 
                background: 'rgba(197, 168, 128, 0.15)',
                border: '1px solid rgba(197, 168, 128, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-400)'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-white)' }}>
                  Virtual Concierge
                </div>
                <div style={{ fontSize: '0.72rem', color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                  <span>Vantara Bliss Resort</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-ivory)', cursor: 'pointer' }}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="chatbot-messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-bubble ${m.sender}`}>
                <p style={{ margin: 0 }}>{m.text}</p>
                
                {/* Embedded action button if relevant */}
                {m.action === 'booking' && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking();
                    }}
                    className="btn btn-gold btn-sm"
                    style={{ marginTop: '0.75rem', width: '100%' }}
                  >
                    <CalendarCheck size={14} />
                    <span>Open Booking Panel</span>
                  </button>
                )}

                {m.action === 'whatsapp' && (
                  <a
                    href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort team, I have a query regarding stay options.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ marginTop: '0.75rem', width: '100%' }}
                  >
                    <MessageSquare size={14} />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}

                {m.action === 'location' && (
                  <a
                    href={propertyData.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                    style={{ marginTop: '0.75rem', width: '100%' }}
                  >
                    <MapPin size={14} />
                    <span>Get Directions on Google Maps</span>
                  </a>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestion Chips */}
          <div className="chatbot-chips">
            {propertyData.botKnowledge.quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="chip-btn"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="chatbot-input-bar"
          >
            <input
              type="text"
              placeholder="Ask about rooms, rates, location..."
              className="chatbot-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button 
              type="submit" 
              className="chatbot-send-btn"
              aria-label="Send query"
            >
              <Send size={15} />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
