import { getAssetUrl } from '../utils/assets.js';

// Centralized factual business data for Vantara Bliss Resort
// Sourced from live website (https://vantarabliss.com/) and Google Drive asset library

export const propertyData = {
  name: "Vantara Bliss Resort",
  brandName: "Vantara Bliss",
  logoUrl: "/images/logo.webp",
  tagline: "A Stay That Offers Happiness, Calmness and Luxury",
  heroSubtitle: "Escape the chaos and discover a blissful mountain sanctuary where authentic wooden chalet luxury meets the untouched tranquility of Bhimtal, Uttarakhand.",
  vision: "Vantara Bliss Resort was created with one vision: to offer guests a peaceful escape where luxury feels natural and hospitality feels heartfelt. Located amidst scenic landscapes, our resort offers a refreshing environment away from the noise of city life.",
  
  contact: {
    phone: "+91 9220655933",
    phoneClean: "+919220655933",
    phoneDisplay: "+91 92206 55933",
    whatsapp: "+91 9220655933",
    whatsappNumber: "919220655933",
    email: "Vantarablissresort@gmail.com",
    address: "Gunigaon, Matial, Padampuri, Bhimtal, Uttarakhand, India",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Gunigaon%2C%20Matial%2C%20Padampuri%2C%20Bhimtal&t=m&z=11&output=embed&iwloc=near",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gunigaon,+Matial,+Padampuri,+Bhimtal,+Uttarakhand",
    socialLinks: {
      facebook: "https://www.facebook.com/vantarablissresort",
      instagram: "https://www.instagram.com/vantarablissresort?igsh=YjJxdzQzYTlqeWFi"
    }
  },

  metrics: {
    rating: "4.5",
    ratingCount: "2,400+ reviews",
    distanceToLake: "1.5 Km",
    lakeName: "Naini & Bhimtal Lakes",
    roomsCount: "30+",
    happyVisitors: "20,000+"
  },

  policies: {
    checkIn: "12:00 PM (Early Check-In available upon advance request)",
    checkOut: "11:00 AM",
    petPolicy: "Kindly inquire with property team prior to booking.",
    cancellation: "Flexible cancellation up to 48 hours prior to check-in for direct booking requests. Group bookings may have seasonal policies.",
    smoking: "Designated outdoor balcony and garden areas available."
  },

  pillars: [
    {
      title: "Handcrafted Wooden Chalets",
      description: "Authentic double-story cedar & pine wood architecture that blends natural insulation, warm wooden aromas, and panoramic mountain decks.",
      tag: "Architecture"
    },
    {
      title: "Work · Vacation · Staycation",
      description: "Equipped with high-speed Wi-Fi, ergonomic daybeds, and quiet corners for productive remote work nestled in Himalayan greenery.",
      tag: "Lifestyle"
    },
    {
      title: "Pristine Nature Sanctuary",
      description: "Breathe fresh crisp mountain air with on-site pine nature trails, vibrant flora, and breathtaking sunrise over Uttarakhand hills.",
      tag: "Environment"
    },
    {
      title: "Heartfelt Kumaoni Hospitality",
      description: "Experience round-the-clock personalized room service, bespoke bonfires, and authentic multi-cuisine dining prepared with fresh local produce.",
      tag: "Service"
    }
  ],

  rooms: [
    {
      id: "grand-wooden-duplex-chalet",
      name: "Grand Wooden Duplex Chalet",
      category: "Two-Story Private Chalet",
      badge: "Signature Stay",
      tagline: "Double-deck authentic pine wood chalet with private balcony & valley vista",
      description: "Our crown jewel accommodation featuring authentic double-story wooden architecture. Wake up to golden sunlight streaming through wooden balconies overlooking the Bhimtal mountain ridges. Includes a plush king-size master bed on the upper deck and a convertible daybed lounge on the ground tier.",
      capacity: "Up to 4 Guests",
      maxAdults: 3,
      maxChildren: 2,
      bedConfig: "1 King-Size Bed + 1 Convertible Daybed",
      size: "550 sq.ft (51 m²)",
      view: "Valley & Pine Forest Panoramic Views",
      startingPrice: 6499,
      priceNote: "Seasonal rate per night (taxes applicable)",
      images: [
        "/images/gdrive/gdrive_img_08.jpg",
        "/images/gdrive/gdrive_img_11.jpg",
        "/images/gdrive/gdrive_img_14.jpg",
        "/images/gdrive/gdrive_img_02.jpg"
      ],
      features: [
        "Two private wooden view balconies",
        "High-vaulted pine wooden ceiling",
        "Dedicated workation desk with fast Wi-Fi",
        "Custom mood drop pendant lights",
        "En-suite premium bathroom with 24/7 hot water",
        "Complimentary tea & coffee bar",
        "24/7 Room Service & Bonfire access"
      ]
    },
    {
      id: "deluxe-pine-wood-suite",
      name: "Deluxe Pine Wood Suite",
      category: "Luxury Mountain Suite",
      badge: "Most Popular",
      tagline: "Warm amber mood lighting, handcrafted boiserie, and tufted headboard luxury",
      description: "A sanctuary of calm featuring polished teak and pine interiors, deep-tufted headboard with vintage Edison pendant lamps, and an intimate seating area with an upholstered daybed. Designed for couples and solo travelers seeking peaceful restoration.",
      capacity: "Up to 3 Guests",
      maxAdults: 2,
      maxChildren: 1,
      bedConfig: "1 Plush King Bed + 1 Recliner Sofa",
      size: "420 sq.ft (39 m²)",
      view: "Lush Mountain Garden & Forest Canopy",
      startingPrice: 4799,
      priceNote: "Seasonal rate per night (taxes applicable)",
      images: [
        "/images/gdrive/gdrive_img_09.jpg",
        "/images/gdrive/gdrive_img_12.jpg",
        "/images/gdrive/gdrive_img_15.jpg",
        "/images/gdrive/gdrive_img_04.jpg"
      ],
      features: [
        "Tufted headboard with artisan boiserie paneling",
        "Warm ambient mood drop illumination",
        "Cozy reading nook and coffee table",
        "Flatscreen TV with streaming",
        "High-Speed Wi-Fi for remote work",
        "Handcrafted solid wood nightstands",
        "Luxury linen and bathrobes"
      ]
    },
    {
      id: "mountain-view-executive-room",
      name: "Mountain View Executive Room",
      category: "Executive Balcony",
      badge: "Ideal for Workation",
      tagline: "Sheer-draped floor-to-ceiling windows with convertible sleeper sofa",
      description: "Tailored for the modern remote professional and leisure seeker alike. Experience natural daytime illumination through wide-paned windows, soft linen sheers, and direct mountain air. Features a versatile multi-position sofa bed, high-speed Wi-Fi, and intercom connectivity.",
      capacity: "Up to 3 Guests",
      maxAdults: 2,
      maxChildren: 1,
      bedConfig: "1 King Bed + 1 Ergonomic Sofa Bed",
      size: "380 sq.ft (35 m²)",
      view: "Eastern Himalayan Sunrise & Mountain Ridges",
      startingPrice: 4199,
      priceNote: "Seasonal rate per night (taxes applicable)",
      images: [
        "/images/gdrive/gdrive_img_10.jpg",
        "/images/gdrive/gdrive_img_13.jpg",
        "/images/gdrive/gdrive_img_16.jpg",
        "/images/gdrive/gdrive_img_01.jpg"
      ],
      features: [
        "Ergonomic sleeper sofa bed with dual-purpose layout",
        "Panoramic picture windows with hill views",
        "High-speed dedicated Wi-Fi access point",
        "Intercom for rapid 24/7 room service",
        "Electric kettle with artisanal teas",
        "Daily housekeeping & sanitization"
      ]
    },
    {
      id: "family-forest-haven-chalet",
      name: "Family Forest Haven Chalet",
      category: "Family & Group Chalet",
      badge: "Spacious",
      tagline: "Generous expansive wooden suite for family vacations and gatherings",
      description: "Designed for families, small reunions, or celebrations. Spans an expansive wooden floor plan with separate sleeping areas, extra daybeds, direct walkway access to the garden and kids play zone, and easy access to evening bonfire grounds.",
      capacity: "Up to 5 Guests",
      maxAdults: 4,
      maxChildren: 2,
      bedConfig: "2 Large Double Beds + 1 Foldable Sofa Bed",
      size: "620 sq.ft (58 m²)",
      view: "Garden & Mountain Panorama",
      startingPrice: 7499,
      priceNote: "Seasonal rate per night (taxes applicable)",
      images: [
        "/images/gdrive/gdrive_img_17.jpg",
        "/images/gdrive/gdrive_img_18.jpg",
        "/images/gdrive/gdrive_img_20.jpg",
        "/images/gdrive/gdrive_img_06.jpg"
      ],
      features: [
        "Multiple bedding zones for families & kids",
        "Direct ground-level access to lawn & pathways",
        "Spacious private dressing and luggage corner",
        "Kids-friendly setup and baby cot on request",
        "Dedicated dining seating area",
        "Bonfire evening priority seating"
      ]
    }
  ],

  amenities: [
    {
      id: "early-checkin",
      title: "Early Check-In",
      category: "Convenience",
      description: "Flexible arrival options so you can settle into your wooden chalet as soon as you reach the hills (subject to prior notice).",
      icon: "Clock"
    },
    {
      id: "kids-play",
      title: "Kids Play Area",
      category: "Family",
      description: "Safe, scenic green lawns and open grounds where children can play games and connect with nature freely.",
      icon: "Smile"
    },
    {
      id: "restaurant",
      title: "Multi-Cuisine Restaurant",
      category: "Dining",
      description: "Freshly prepared wholesome meals ranging from authentic North Indian delicacies to local Kumaoni mountain recipes.",
      icon: "Utensils"
    },
    {
      id: "wifi",
      title: "High-Speed Wi-Fi",
      category: "Workation",
      description: "Uninterrupted connectivity across all chalets, balconies, and public spaces, enabling seamless remote work.",
      icon: "Wifi"
    },
    {
      id: "games",
      title: "Indoor & Outdoor Games",
      category: "Leisure",
      description: "Badminton, board games, carrom, and recreational activities for bonding moments with family and friends.",
      icon: "Gamepad2"
    },
    {
      id: "bonfire",
      title: "Bonfire & Music Evenings",
      category: "Experience",
      description: "Chilly Himalayan evenings brought alive with a crackling outdoor fire, acoustic melodies, and stargazing under crisp night skies.",
      icon: "Flame"
    },
    {
      id: "room-service",
      title: "24/7 In-Room Service",
      category: "Hospitality",
      description: "Attentive staff dedicated to catering to your every request, from early dawn teas to late night snacks.",
      icon: "Bell"
    },
    {
      id: "parking",
      title: "Private Secure Parking",
      category: "Security",
      description: "Spacious on-premise parking facility with 24/7 security watch for both cars and SUVs.",
      icon: "Car"
    },
    {
      id: "travel-desk",
      title: "Travel & Tour Desk",
      category: "Assistance",
      description: "Local guidance, lake boat rentals, taxi transfers to Kathgodam, and curated sightseeing itineraries.",
      icon: "Compass"
    },
    {
      id: "photo-friendly",
      title: "Photo-Friendly Viewpoints",
      category: "Scenic",
      description: "Artfully designed wooden corridors, lantern-lined pathways, and terrace viewpoints ideal for photography.",
      icon: "Camera"
    }
  ],

  gallery: [
    {
      url: "/images/gdrive/gdrive_img_08.jpg",
      title: "Authentic Wooden Chalet Facade",
      category: "Chalet",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_02.jpg",
      title: "Two-Story Wooden Balconies & Garden",
      category: "Chalet",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_09.jpg",
      title: "Deluxe Pine Suite Living Space",
      category: "Suites",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_04.jpg",
      title: "Warm Mood Bedroom & Tufted Headboard",
      category: "Suites",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_10.jpg",
      title: "Mountain Ridge Panorama & Balcony Outlook",
      category: "Surroundings",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_03.jpg",
      title: "Double Gable Roof & String Lighting",
      category: "Chalet",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_11.jpg",
      title: "Pine Wood Bedroom Interior",
      category: "Suites",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_01.jpg",
      title: "Sunlit Picture Window & Lounge Daybed",
      category: "Suites",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_12.jpg",
      title: "Stone Paved Walkway & Evening Lanterns",
      category: "Surroundings",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_05.jpg",
      title: "Workation & Staycation Suite",
      category: "Suites",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_13.jpg",
      title: "Scenic Hill View from Wooden Balcony",
      category: "Surroundings",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_06.jpg",
      title: "Family Chalet Multi-bed Suite",
      category: "Chalet",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_14.jpg",
      title: "Atmospheric Pine Chalet Architecture",
      category: "Chalet",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_07.jpg",
      title: "Serene Nature Trail Walkway",
      category: "Surroundings",
      aspect: "portrait"
    },
    {
      url: "/images/gdrive/gdrive_img_15.jpg",
      title: "Warm Interior Woodwork & Lighting",
      category: "Suites",
      aspect: "landscape"
    },
    {
      url: "/images/gdrive/gdrive_img_16.jpg",
      title: "Mountain Valley Sunset View",
      category: "Surroundings",
      aspect: "landscape"
    }
  ],

  attractions: [
    {
      name: "Bhimtal Lake & Island Aquarium",
      distance: "1.5 Km / 5 Mins",
      description: "One of the most famous and serene lakes of Uttarakhand with a scenic island right in its center, offering boating, kayaking, and waterside strolls.",
      category: "Nature & Water"
    },
    {
      name: "Pine Forest Nature Trails",
      distance: "Directly Accessible on Foot",
      description: "Quiet morning walking and jogging trails through tall pine trees, fresh crisp air, and rich Himalayan birdwatching.",
      category: "Trekking & Trails"
    },
    {
      name: "Rustic Village & Organic Farm Tours",
      distance: "10 Mins Drive",
      description: "Experience authentic rural life in Matial & Padampuri, taste farm-fresh organic vegetables, and discover traditional mud architecture.",
      category: "Culture & Living"
    },
    {
      name: "Naukuchiatal (Nine-Cornered Lake)",
      distance: "6 Km / 15 Mins",
      description: "Known for paragliding, peaceful lakeside cafes, bird diversity, and water sports in a deeply tranquil setting.",
      category: "Adventure & Sightseeing"
    },
    {
      name: "Nainital Lake & Mall Road",
      distance: "18 Km / 40 Mins",
      description: "A short scenic day trip to the queen of hill stations featuring Naini Lake boating, colonial architecture, and high mountain ropeway.",
      category: "Day Trip"
    },
    {
      name: "Local Kumaoni Dhabas & Eateries",
      distance: "Within 2 Km",
      description: "Delight your palate with authentic parathas, rustic Pahadi thalis, hot chai, and tandoori savories at nearby roadside eateries.",
      category: "Gastronomy"
    }
  ],

  faqs: [
    {
      q: "Where is Vantara Bliss Resort located?",
      a: "Vantara Bliss Resort is located in Gunigaon, Matial, Padampuri, Bhimtal in the picturesque Nainital district of Uttarakhand, India. It is easily reachable from Kathgodam Railway Station (approx. 26 km) and Pantnagar Airport (approx. 60 km)."
    },
    {
      q: "What are the standard Check-in and Check-out timings?",
      a: "Our standard check-in time is 12:00 PM and check-out is at 11:00 AM. We gladly offer Early Check-In and Late Check-Out upon prior request, subject to suite availability."
    },
    {
      q: "Is the resort suitable for remote working and staycations?",
      a: "Yes, absolutely! Vantara Bliss Resort is specially curated for workations and staycations. Every chalet and suite is equipped with high-speed Wi-Fi, comfortable convertible daybeds, work desks, and power outlets amidst serene mountain surroundings."
    },
    {
      q: "Is there private parking on the property?",
      a: "Yes, we provide secure, spacious on-site private parking with 24/7 security watch for all guest vehicles at no additional charge."
    },
    {
      q: "Do you arrange bonfires and music evenings?",
      a: "Yes! Bonfire evenings and acoustic background music are one of our signature experiences, held regularly in our open lawns under the starry night sky."
    },
    {
      q: "Can I book or inquire via WhatsApp?",
      a: "Yes! You can instantly inquire and reserve your stay by clicking our floating WhatsApp button or using our booking widget. You will connect directly with our property team at +91 9220655933."
    },
    {
      q: "What dining options are available at the resort?",
      a: "We have an in-house multi-cuisine restaurant serving freshly cooked North Indian, Continental, and local Kumaoni delicacies, along with 24/7 in-room dining service."
    }
  ],

  botKnowledge: {
    greeting: "Namaste & Welcome to Vantara Bliss Resort, Bhimtal! I'm your Virtual Concierge. How may I assist you with your stay, pricing, or experiences today?",
    quickChips: [
      "Check Availability",
      "Room Options & Rates",
      "Resort Location & Map",
      "Amenities & Bonfire",
      "Workation & Wi-Fi",
      "Speak to Host on WhatsApp"
    ],
    fallback: "I want to make sure you get the most accurate, up-to-date information. Please connect directly with our property management team at +91 9220655933 or tap below to chat on WhatsApp."
  }
};

// Automatically resolve asset paths with Vite base path for GitHub Pages and production
propertyData.logoUrl = getAssetUrl(propertyData.logoUrl);
propertyData.rooms.forEach(room => {
  room.images = room.images.map(img => getAssetUrl(img));
});
propertyData.gallery.forEach(item => {
  item.url = getAssetUrl(item.url);
});

