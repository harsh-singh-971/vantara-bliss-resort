import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import QuickBookingWidget from './components/QuickBookingWidget.jsx';
import PropertyIntro from './components/PropertyIntro.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Accommodations from './components/Accommodations.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import NearbyAttractions from './components/NearbyAttractions.jsx';
import LocationSection from './components/LocationSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import AiChatbot from './components/AiChatbot.jsx';
import FloatingCTAs from './components/FloatingCTAs.jsx';
import BookingModal from './components/BookingModal.jsx';
import { CalendarCheck, MessageSquare, Compass, Phone } from 'lucide-react';
import { propertyData } from './data/propertyData.js';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitData, setBookingInitData] = useState(null);

  const openBookingModal = (customData = null) => {
    setBookingInitData(customData);
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
    setBookingInitData(null);
  };

  const handleQuickSearch = (searchParams) => {
    openBookingModal(searchParams);
  };

  const handleBookRoom = (roomId) => {
    openBookingModal({ roomId });
  };

  return (
    <div className="app-layout">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={() => openBookingModal()} />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenBooking={() => openBookingModal()} />

        {/* Quick Booking Floating Bar */}
        <QuickBookingWidget onSearchBooking={handleQuickSearch} />

        {/* Property Introduction & Live Metrics */}
        <PropertyIntro onOpenBooking={() => openBookingModal()} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenBooking={() => openBookingModal()} />

        {/* Accommodations Showcase */}
        <Accommodations onBookRoom={handleBookRoom} />

        {/* Verified Amenities */}
        <AmenitiesSection />

        {/* Interactive Photo & Lightbox Gallery */}
        <PhotoGallery />

        {/* Stay Experiences */}
        <ExperienceSection onOpenBooking={() => openBookingModal()} />

        {/* Explore Bhimtal & Attractions */}
        <NearbyAttractions />

        {/* Final Cinematic Call-to-Action Section (#50 in prompt) */}
        <section 
          className="section" 
          style={{ 
            position: 'relative', 
            background: 'var(--bg-dark)', 
            color: 'var(--text-white)',
            textAlign: 'center',
            padding: '7rem 1.5rem',
            overflow: 'hidden'
          }}
        >
          {/* Background Image with Dark Vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/images/gdrive/gdrive_img_10.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.38,
            filter: 'brightness(0.7)'
          }} />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, rgba(14, 22, 18, 0.4) 0%, rgba(14, 22, 18, 0.92) 100%)'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold-300)' }}>Your Himalayan Haven</div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem', lineHeight: '1.15' }}>
              Your Perfect Mountain Escape Awaits
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-ivory)', marginBottom: '2.5rem', lineHeight: '1.6', fontWeight: 300 }}>
              Whether you yearn for serene mornings sipping tea overlooking pine valleys, productive remote workdays, or joyful evenings around a crackling bonfire — Vantara Bliss is ready to welcome you.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => openBookingModal()}
                className="btn btn-gold btn-lg"
              >
                <CalendarCheck size={18} />
                <span>Reserve Your Chalet</span>
              </button>

              <a
                href={`https://wa.me/${propertyData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vantara Bliss Resort, I am planning a holiday and would love to check availability for upcoming dates.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${propertyData.contact.phoneClean}`}
                className="btn btn-outline-white btn-lg"
              >
                <Phone size={18} />
                <span>Call Concierge</span>
              </a>
            </div>
          </div>
        </section>

        {/* Location & Maps Section */}
        <LocationSection />

        {/* FAQs */}
        <FAQSection />

        {/* Contact & Enquiry */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenBooking={() => openBookingModal()} />

      {/* AI Hospitality Virtual Concierge */}
      <AiChatbot onOpenBooking={() => openBookingModal()} />

      {/* Floating WhatsApp and Mobile Bottom Bar */}
      <FloatingCTAs onOpenBooking={() => openBookingModal()} />

      {/* Booking Modal Funnel */}
      {bookingModalOpen && (
        <BookingModal
          initialData={bookingInitData}
          onClose={closeBookingModal}
        />
      )}
    </div>
  );
}
