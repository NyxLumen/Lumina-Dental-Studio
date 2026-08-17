export const CLINIC_INFO = {
  name: 'Lumina Dental Studio',
  tagline: 'Modern Dentistry. Naturally Beautiful.',
  location: 'Indirapuram, Ghaziabad, Uttar Pradesh',
  fullAddress: 'Plot 42, Sector 14, Opposite Habitat Centre, Indirapuram, Ghaziabad, UP 201014',
  founded: 2018,
  positioning: 'Cosmetic, restorative & digital intraoral dentistry',
  phone: '+91 98712 34567',
  whatsapp: '+91 98712 34567',
  email: 'care@luminadental.in',
  hours: 'Mon – Sat: 10:00 AM – 8:00 PM | Sun: By Appointment',
  emergencyLine: '+91 98712 34500 (24/7 Emergency Line)',
  rating: 4.9,
  reviewsCount: 520
};

export const DOCTORS = [
  {
    id: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    credentials: 'BDS, MDS — Prosthodontist',
    experienceYears: 14,
    specialty: 'Smile Architecture & Implants',
    bio: 'Specializing in ultra-thin porcelain veneers, digital smile simulation, and minimally invasive keyhole implant surgery.',
    memberships: ['International College of Prosthodontists', 'Indian Society of Oral Implantology'],
    image: '/images/dr_arjun_mehta.png'
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    credentials: 'DDS, MS — Orthodontist',
    experienceYears: 12,
    specialty: '3D Invisible Aligners',
    bio: 'Expert in 3D digital clear aligner planning and bio-compatible facial proportion orthodontics.',
    memberships: ['World Federation of Orthodontists', 'American Association of Orthodontists'],
    image: '/images/dr_elena_rostova.png'
  },
  {
    id: 'dr-sophia-chen',
    name: 'Dr. Sophia Chen',
    credentials: 'BDS, MDS — Cosmetic Dentist',
    experienceYears: 11,
    specialty: 'Laser Sculpting & Whitening',
    bio: 'Specialist in pain-free laser crown lengthening, ceramic restoration integration, and enamel whitening.',
    memberships: ['Indian Society of Periodontology', 'European Federation of Periodontology'],
    image: '/images/dr_sophia_chen.png'
  }
];

export const DOCTOR_INFO = DOCTORS[0];

export const STATS = [
  { value: '14+', label: 'Years Experience', desc: 'Master prosthodontic & aesthetic precision' },
  { value: '6,200+', label: 'Smiles Restored', desc: 'Natural enamel aesthetics across Delhi NCR' },
  { value: '4.9★', label: 'Verified Rating', desc: 'Over 520 verified 5-star clinical reviews' },
  { value: '100%', label: 'Pain-Free Protocol', desc: 'Computer-guided laser & single-tooth anesthesia' }
];

export const SPECIALTIES = [
  {
    id: 'cosmetic',
    title: 'Porcelain Veneers & Bonding',
    subtitle: 'Ultra-thin E-max Enamel Craft',
    desc: 'Custom 0.2mm porcelain veneers designed to match natural tooth opalescence and light reflection.',
    badge: 'Signature',
    features: ['Minimal tooth reduction', 'Opalescent E-max ceramic', 'Digital shade matching', '15-year aesthetic warranty']
  },
  {
    id: 'aligners',
    title: '3D Clear Aligners',
    subtitle: 'Invisible Orthodontics',
    desc: 'Optical 3D intraoral scan tracking ensuring predictable tooth movement without metal brackets.',
    badge: 'Digital',
    features: ['Sub-millimeter 3D preview', 'Removable & invisible', 'Accelerated movement', 'Virtual check-ins']
  },
  {
    id: 'implants',
    title: 'Guided Dental Implants',
    subtitle: 'Keyhole Permanent Restoration',
    desc: 'Computer-guided titanium & ceramic implant placement with zero surgical incisions.',
    badge: 'Precision',
    features: ['Keyhole surgical guide', 'Same-day temporary crown', 'Biomimetic ceramic post', 'Lifetime warranty']
  },
  {
    id: 'laser-whitening',
    title: 'Laser Teeth Whitening',
    subtitle: 'Gentle Enamel Brightening',
    desc: 'Cold-laser whitening achieving up to 8 shades whiter without post-treatment sensitivity.',
    badge: 'Instant',
    features: ['Zero sensitivity formula', '45-minute single visit', 'Long-lasting stain barrier', 'Natural shade calibration']
  },
  {
    id: 'full-mouth',
    title: 'Full Smile Architecture',
    subtitle: 'Comprehensive Occlusal Balance',
    desc: 'Full-mouth rehabilitation harmonizing facial proportions, bite dimension, and jaw alignment.',
    badge: 'Comprehensive',
    features: ['Facial proportion scan', 'Live trial smile try-in', 'Neuromuscular TMJ balance', 'Complete smile restoration']
  }
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    title: 'Cosmetic Porcelain Veneers',
    category: 'Veneers',
    patient: 'Ananya M., 28',
    details: '10 Upper E-max Porcelain Veneers to correct enamel wear, micro-fractures, and color asymmetry.',
    shadeBefore: 'A3 (Warm Yellow)',
    shadeAfter: 'BL1 (Natural White)',
    duration: '2 Visits / 7 Days',
    beforeImage: '/images/smile_before.png',
    afterImage: '/images/smile_after.png'
  },
  {
    id: 2,
    title: '3D Clear Aligner & Whitening',
    category: 'Invisalign',
    patient: 'Rahul S., 34',
    details: '9-month invisible aligner sequence to correct lower crowding & upper midline gap, finished with laser whitening.',
    shadeBefore: 'A2 (Natural Enamel)',
    shadeAfter: 'A1 (Bright Aesthetic)',
    duration: '9 Months',
    beforeImage: '/images/smile_before.png',
    afterImage: '/images/smile_after.png'
  },
  {
    id: 3,
    title: 'Guided Ceramic Implant',
    category: 'Implants',
    patient: 'Vikram R., 42',
    details: 'Single keyhole implant replacing missing upper central incisor with natural ceramic translucency.',
    shadeBefore: 'Missing Incisor',
    shadeAfter: 'A1 Custom Match',
    duration: 'Single Visit Placement',
    beforeImage: '/images/smile_before.png',
    afterImage: '/images/smile_after.png'
  }
];

export const SHADE_PRESETS = [
  { id: 'BL1', name: 'BL1 Hollywood White', hex: '#FFFFFF', tone: 'Ultra-bright ceramic translucency for camera-ready aesthetics.' },
  { id: 'A1', name: 'A1 Natural Aesthetic', hex: '#F7F6F0', tone: 'Refined natural enamel shade with soft youthful luminescence.' },
  { id: 'A2', name: 'A2 Warm Enamel', hex: '#F0EEE4', tone: 'Warm natural shade harmonious with mature complexion tones.' }
];

export const TECHNOLOGY = [
  {
    title: '3D Intraoral Optical Scanning',
    desc: 'High-speed optical camera captures 100,000 3D data points per second with zero impression paste.',
    icon: 'Scan'
  },
  {
    title: 'Computer-Guided Anesthesia',
    desc: 'Single-tooth anesthesia delivery ensuring completely painless numbing without facial numbness.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Class-B European Sterilization',
    desc: 'Medical-grade autoclave sterilization matching strict European EN13060 clinical safety standards.',
    icon: 'Sparkles'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Indirapuram, Ghaziabad',
    procedure: 'Porcelain Smile Makeover',
    rating: 5,
    verified: true,
    text: 'Dr. Arjun Mehta and the team completely transformed my confidence. The 3D Digital Smile preview allowed me to see the exact outcome before starting. The clinic feels like a 5-star spa, and treatment was completely painless.'
  },
  {
    id: 2,
    name: 'Vikramaditya Roy',
    location: 'Noida Sector 62',
    procedure: 'Guided Dental Implant',
    rating: 5,
    verified: true,
    text: 'I was terrified of dental implants until I visited Lumina. Dr. Mehta placed my implant using keyhole digital guidance. I didn’t even need pain medication the next day. Truly world-class dentistry in Indirapuram.'
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    location: 'Vaishali, Ghaziabad',
    procedure: '3D Clear Aligners',
    rating: 5,
    verified: true,
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
