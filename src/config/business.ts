import { scenes } from "./scenes";

/**
 * MOCK DATA — every value in this file (copy, prices, address, phone, reviews, team
 * bios, etc.) is invented placeholder content, not real J&K Salon information. It
 * exists so the site has something realistic to look at during development. Replace
 * it all with real business details before launch; nothing here should ship as-is.
 */

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceLabel: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  services: Service[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  photoSrc: string | null;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

export type DayHours = {
  day: string;
  open: string | null;
  close: string | null;
};

export const business = {
  name: "J&K Salon",
  tagline: "Modern cuts and color, in a space you can explore before you even arrive.",
  intro:
    "J&K Salon is a modern hair studio built around craft and comfort. Our two chairs specialize in precision cuts, dimensional color, and styling that holds up long after you leave the chair.",

  // MOCK — fake contact details, do not use for real client inquiries.
  phone: "(416) 555-0148",
  phoneHref: "tel:+14165550148",
  email: "hello@jksalon.com",
  address: {
    line1: "128 Ossington Avenue",
    line2: "Unit 2",
    city: "Toronto",
    region: "ON",
    postalCode: "M6J 2Z3",
    country: "CA",
  },
  // MOCK — approximate downtown Toronto coordinates, not the salon's real location.
  geo: {
    lat: 43.6453,
    lng: -79.4203,
  },
  timezone: "America/Toronto",
  hours: [
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: "10:00", close: "19:00" },
    { day: "Wednesday", open: "10:00", close: "19:00" },
    { day: "Thursday", open: "10:00", close: "20:00" },
    { day: "Friday", open: "09:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "17:00" },
    { day: "Sunday", open: null, close: null },
  ] satisfies DayHours[],

  // MOCK — these social links/handles are invented and do not resolve to real accounts.
  social: {
    instagram: "https://instagram.com/jksalon",
    instagramHandle: "@jksalon",
    facebook: "https://facebook.com/jksalon",
    googleReviewsUrl: "https://g.page/r/jksalon/review",
  },
  booking: {
    useExternalUrl: false,
    // MOCK — placeholder URL for a real booking tool (Fresha, Square, Calendly, Acuity).
    externalUrl: "https://booksy.com/jksalon",
  },
  giftCardPromo: {
    headline: "Gift cards available",
    body: "Treat someone to a new look. Gift cards can be used on any service, any time.",
    ctaLabel: "Ask in salon or email us to send one",
  },

  // MOCK — invented services and prices, not J&K Salon's real menu or pricing.
  serviceCategories: [
    {
      id: "haircuts",
      name: "Haircuts",
      services: [
        {
          id: "womens-cut",
          name: "Women's Cut",
          description: "Consultation, shampoo, cut, and style.",
          duration: "45 min",
          priceLabel: "From $65",
        },
        {
          id: "mens-cut",
          name: "Men's Cut",
          description: "Precision cut with clippers or shears, finished with a style.",
          duration: "30 min",
          priceLabel: "From $45",
        },
        {
          id: "kids-cut",
          name: "Kids' Cut",
          description: "For guests 12 and under.",
          duration: "30 min",
          priceLabel: "From $30",
        },
      ],
    },
    {
      id: "color",
      name: "Color",
      services: [
        {
          id: "full-color",
          name: "Full Color",
          description: "Single-process color, root to end.",
          duration: "90 min",
          priceLabel: "From $110",
        },
        {
          id: "balayage",
          name: "Balayage / Highlights",
          description: "Hand-painted or foiled dimension, toned and blended.",
          duration: "2.5 hr",
          priceLabel: "From $185",
        },
        {
          id: "root-touch-up",
          name: "Root Touch-Up",
          description: "Color refresh at the root for existing clients.",
          duration: "60 min",
          priceLabel: "From $75",
        },
      ],
    },
    {
      id: "styling",
      name: "Styling",
      services: [
        {
          id: "blowout",
          name: "Blowout",
          description: "Wash and professional blow-dry style.",
          duration: "40 min",
          priceLabel: "From $50",
        },
        {
          id: "updo",
          name: "Special Occasion Updo",
          description: "Event-ready styling, consultation recommended.",
          duration: "60 min",
          priceLabel: "From $95",
        },
      ],
    },
    {
      id: "treatments",
      name: "Treatments",
      services: [
        {
          id: "deep-conditioning",
          name: "Deep Conditioning Treatment",
          description: "Intensive moisture or protein treatment, add-on or standalone.",
          duration: "20 min",
          priceLabel: "From $35",
        },
        {
          id: "scalp-treatment",
          name: "Scalp Treatment",
          description: "Exfoliating scalp massage and treatment.",
          duration: "20 min",
          priceLabel: "From $40",
        },
      ],
    },
  ] satisfies ServiceCategory[],

  // MOCK — "J" and "K" are invented stand-ins for the salon's real owners/stylists.
  team: [
    {
      id: "j",
      name: "Jordan Lee",
      role: "Co-Owner / Senior Stylist",
      specialties: ["Color", "Balayage", "Precision Cuts"],
      bio: "Jordan has over a decade of experience in color correction and dimensional balayage.",
      photoSrc: null,
    },
    {
      id: "k",
      name: "Kayla Reyes",
      role: "Co-Owner / Senior Stylist",
      specialties: ["Men's Grooming", "Texture", "Styling"],
      bio: "Kayla specializes in modern men's cuts and textured, low-maintenance styling.",
      photoSrc: null,
    },
  ] satisfies TeamMember[],

  // MOCK — invented reviewers and quotes; not real client feedback. The UI labels
  // these as "Sample review" so visitors aren't misled — keep that label when
  // these are eventually replaced with real reviews pulled from Google/Yelp/etc.
  reviews: [
    {
      id: "r1",
      author: "Amanda T.",
      rating: 5,
      quote: "Best haircut I've had in years, and the salon itself is beautiful.",
    },
    {
      id: "r2",
      author: "Priya S.",
      rating: 5,
      quote: "Jordan did an amazing balayage. Exactly what I asked for.",
    },
    {
      id: "r3",
      author: "Marcus D.",
      rating: 4,
      quote: "Great experience, friendly staff, booking online was easy.",
    },
    {
      id: "r4",
      author: "Owen F.",
      rating: 5,
      quote: "Kayla gave me the best fade I've ever had. Will be back.",
    },
  ] satisfies Review[],

  faq: [
    {
      id: "cancellation",
      question: "What is your cancellation policy?",
      answer:
        "We ask for at least 24 hours' notice to cancel or reschedule. Cancellations within 24 hours may be subject to a fee.",
    },
    {
      id: "late",
      question: "What if I'm running late?",
      answer:
        "Please call us if you're running more than 10 minutes late — we may need to shorten or reschedule your service.",
    },
    {
      id: "patch-test",
      question: "Do I need a patch test before color services?",
      answer: "Yes, first-time color clients require a patch test at least 48 hours before their appointment.",
    },
    {
      id: "payment",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit, and cash. We do not accept checks.",
    },
    {
      id: "accessibility",
      question: "Is the salon accessible?",
      answer: "Yes, our entrance and styling floor are wheelchair accessible. Please let us know if you need any accommodations.",
    },
    {
      id: "parking",
      question: "Is parking available?",
      answer: "Street parking is available on Ossington Avenue, and there is a public lot one block over.",
    },
  ],
  scenes,
};

export type Business = typeof business;
