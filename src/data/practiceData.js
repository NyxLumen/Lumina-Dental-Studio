export const CLINIC_INFO = {
  name: 'Lumina Dental Studio',
  tagline: 'Modern dentistry. Naturally beautiful.',
  location: 'Indirapuram, Ghaziabad, Uttar Pradesh',
  fullAddress: 'Plot 42, Sector 14, Opposite Habitat Centre, Indirapuram, Ghaziabad, UP 201014',
  founded: 2018,
  positioning: 'Premium cosmetic, restorative & preventive dentistry',
  phone: '+91 98712 34567',
  whatsapp: '+91 98712 34567',
  email: 'care@luminadental.in',
  hours: 'Mon – Sat: 10:00 AM – 8:00 PM | Sun: By Appointment',
  emergencyLine: '+91 98712 34500 (24/7 Dental Emergency)',
  rating: 4.9,
  reviewsCount: 480
};

export const DOCTOR_INFO = {
  name: 'Dr. Arjun Mehta',
  credentials: 'BDS, MDS — Prosthodontics',
  experienceYears: 12,
  experienceLabel: '12+ Years of Clinical Experience',
  quote: '“Great dentistry isn\'t about changing who you are. It\'s about helping you smile with confidence.”',
  bio: 'Dr. Arjun Mehta is a master prosthodontist specializing in minimally invasive aesthetic smile makeovers, full-mouth rehabilitation, and digital implant surgery. Trained at premier global dental institutes, Dr. Mehta fuses art and precision digital technology to deliver long-lasting, painless, and naturally stunning dental restorations.',
  memberships: ['Indian Dental Association (IDA)', 'International College of Prosthodontists', 'Indian Society of Oral Implantology'],
  image: '/images/dr_arjun_mehta.png'
};

export const STATS = [
  { value: '12+', label: 'Years Experience', desc: 'Dedicated clinical mastery in prosthodontics & implants' },
  { value: '5,000+', label: 'Patients Treated', desc: 'Restored natural smiles across Delhi NCR & internationally' },
  { value: '4.9★', label: 'Patient Rating', desc: 'Over 480 verified 5-star reviews on Google & Practo' },
  { value: '15+', label: 'Advanced Certifications', desc: 'International fellowships in digital dentistry & implantology' }
];

export const SPECIALTIES = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    subtitle: 'Porcelain Veneers & Ultra-Thin Bonding',
    desc: 'Craft ultra-natural porcelain veneers, composite contouring, and laser whitening designed around your facial proportions.',
    badge: 'Popular',
    features: ['Ultra-thin porcelain veneers', 'Painless laser teeth whitening', 'Enamel micro-shaping', 'Stain-resistant porcelain']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    subtitle: 'Guided 3D Precision Tooth Replacement',
    desc: 'Permanent, bone-integrated titanium and ceramic implants placed with sub-millimeter computer guidance for lifetime stability.',
    badge: 'Precision',
    features: ['Single & multi-tooth implants', 'Same-day implant loading', 'Computer-guided keyhole surgery', 'Lifetime warranty crowns']
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeovers',
    subtitle: 'Comprehensive Aesthetic Transformation',
    desc: 'Custom digital smile design preview letting you see your new smile in 3D before treatment even begins.',
    badge: 'Flagship',
    features: ['3D digital smile simulation', 'Facial proportion harmony', 'Minimal tooth reduction', 'Trial smile try-in phase']
  },
  {
    id: 'full-mouth',
    title: 'Full-Mouth Rehabilitation',
    subtitle: 'Complex Occlusal & Bite Reconstruction',
    desc: 'Reconstruct severe tooth wear, collapsed bite vertical dimension, and missing teeth with harmonious jaw alignment.',
    badge: 'Advanced',
    features: ['Bite height restoration', 'TMJ pain mitigation', 'All-on-4 / All-on-6 bridges', 'Neuromuscular bite balance']
  },
  {
    id: 'digital',
    title: 'Digital Dentistry',
    subtitle: 'Zero Impression 3D Intraoral Scanning',
    desc: 'Say goodbye to messy impression pastes. Experience instant 3D optical scans with 20-micron accuracy.',
    badge: 'High-Tech',
    features: ['3D intraoral optical scanner', 'CAD/CAM same-day crowns', 'Low-dose 3D CBCT imaging', 'Virtual treatment simulation']
  }
];

export const TECHNOLOGY = [
  {
    title: '3D Intraoral Scanners',
    desc: 'Replaces uncomfortable trays with instant, painless HD 3D digital impressions in seconds.',
    icon: 'Scan',
    image: '/images/dental_3d_scanner.png'
  },
  {
    title: 'Computer-Guided Anesthesia',
    desc: 'Single-tooth anesthesia delivery ensuring completely painless numbing without facial numbness.',
    icon: 'ShieldCheck',
    image: '/images/clinic_lounge.png'
  },
  {
    title: '7-Step Hospital Sterilization',
    desc: 'Class-B Autoclaves & ultrasonic cleaners adhering to strict European EN13060 hygiene standards.',
    icon: 'Sparkles',
    image: '/images/hero_clinic.png'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    location: 'Indirapuram, Ghaziabad',
    procedure: 'Porcelain Smile Makeover',
    rating: 5,
    text: 'Dr. Arjun Mehta completely transformed my confidence! The 3D Digital Smile preview allowed me to see the exact outcome before starting. The clinic feels like a 5-star spa, and treatment was completely painless.'
  },
  {
    name: 'Vikramaditya Roy',
    location: 'Noida Sector 62',
    procedure: 'Guided Dental Implant',
    rating: 5,
    text: 'I was terrified of dental implants until I visited Lumina. Dr. Mehta placed my implant using keyhole digital guidance. I didn’t even need pain medication the next day. Truly world-class dentistry in Indirapuram.'
  },
  {
    name: 'Meera Kapoor',
    location: 'Vaishali, Ghaziabad',
    procedure: 'Cosmetic Veneers & Whitening',
    rating: 5,
    text: 'Lumina Dental Studio is easily the most beautiful and clean clinic in Ghaziabad. Honest recommendations, transparent pricing, and remarkable aesthetic craft. My smile looks 100% natural.'
  }
];

export const MAP_DETAILS = {
  address: 'Plot 42, Sector 14, Opposite Habitat Centre, Indirapuram, Ghaziabad, UP 201014',
  landmark: 'Adjacent to Swarn Jayanti Park entrance & 2 mins from Shipra Mall',
  coordinates: { lat: 28.6384, lng: 77.3688 },
  directions: [
    { from: 'From Noida Sector 62 / Electronic City', time: '8-10 mins drive via CISF Road' },
    { from: 'From East Delhi (Anand Vihar)', time: '12-15 mins drive via NH-24 / Delhi-Meerut Expressway' },
    { from: 'From Raj Nagar / Old Ghaziabad', time: '15-20 mins drive via Link Road' }
  ],
  parking: 'Free reserved private parking & valet available for all clinic patients.'
};
