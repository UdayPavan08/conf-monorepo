import { ConferenceConfig } from './conference';

export const mainConferencePreset: ConferenceConfig = {
  id: 'conf-main-01',
  slug: 'main',
  name: 'Global Medical Innovation & Healthcare Summit 2026',
  shortName: 'MedInnovate 2026',
  tagline: 'Pioneering Next-Generation Clinical Care, Biotech, & Healthcare Intelligence',
  dates: 'October 14–16, 2026',
  venue: 'Metropolitan Convention Center',
  location: 'Chicago, IL, USA',
  theme: {
    primaryColor: '#2563eb',     // Royal Blue
    secondaryColor: '#0f172a',   // Dark Navy
    accentColor: '#38bdf8',      // Sky Blue
    backgroundColor: '#030712',  // Deep Dark
    textColor: '#f8fafc'
  },
  organizerName: 'Global Health Association',
  contactEmail: 'contact@medinnovate2026.org',
  speakers: [
    {
      id: 'spk-1',
      name: 'Dr. Sarah Jenkins, MD',
      title: 'Head of Clinical Research & AI',
      institution: 'Johns Hopkins Medicine',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      topic: 'Artificial Intelligence in Precision Diagnostics & Oncology',
      bio: 'Dr. Jenkins leads groundbreaking work integrating neural diagnostic models in clinical workflows.'
    },
    {
      id: 'spk-2',
      name: 'Prof. Marcus Vance, PhD',
      title: 'Director of Genomic Medicine',
      institution: 'Stanford University',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      topic: 'CRISPR & Next-Gen Targeted Gene Therapies',
      bio: 'Pioneer in gene editing technologies with over 150 peer-reviewed medical publications.'
    },
    {
      id: 'spk-3',
      name: 'Dr. Elena Rostova, MD',
      title: 'Chief of Cardiology',
      institution: 'Mayo Clinic',
      avatar: 'https://images.unsplash.com/photo-1594824813566-78a9c40db87b?auto=format&fit=crop&w=400&q=80',
      topic: 'Breakthroughs in Non-Invasive Cardiovascular Interventions',
      bio: 'Leading innovator in minimally invasive cardiac catheterization and structural heart therapies.'
    }
  ],
  schedule: [
    {
      day: 1,
      date: 'Oct 14, 2026',
      sessions: [
        {
          id: 's-1',
          time: '08:30 AM - 09:30 AM',
          title: 'Registration & Welcome Coffee',
          location: 'Grand Foyer',
          category: 'Break'
        },
        {
          id: 's-2',
          time: '09:30 AM - 11:00 AM',
          title: 'Keynote: The Future of Global Health & AI Diagnostics',
          speakerName: 'Dr. Sarah Jenkins',
          location: 'Main Auditorium',
          category: 'Keynote'
        },
        {
          id: 's-3',
          time: '11:15 AM - 12:45 PM',
          title: 'Panel Discussion: Ethical AI Deployment in Emergency Care',
          speakerName: 'Prof. Marcus Vance & Panel',
          location: 'Hall B',
          category: 'Panel'
        }
      ]
    },
    {
      day: 2,
      date: 'Oct 15, 2026',
      sessions: [
        {
          id: 's-4',
          time: '10:00 AM - 11:30 AM',
          title: 'Symposium: Targeted Gene Therapies in Oncology',
          speakerName: 'Prof. Marcus Vance',
          location: 'Main Auditorium',
          category: 'Workshop'
        },
        {
          id: 's-5',
          time: '02:00 PM - 04:00 PM',
          title: 'Cardiovascular Breakthroughs Showcase',
          speakerName: 'Dr. Elena Rostova',
          location: 'Hall A',
          category: 'Workshop'
        }
      ]
    }
  ],
  registrationTiers: [
    {
      id: 'tier-1',
      name: 'Academic / Student',
      price: '$299',
      description: 'Full access for verified students, residents, and university researchers.',
      features: ['Access to all keynote sessions', 'Conference delegate kit', 'Abstract book digital download', 'Certificate of attendance']
    },
    {
      id: 'tier-2',
      name: 'Regular Delegate',
      price: '$599',
      description: 'Standard package for practicing physicians, surgeons, and healthcare professionals.',
      isPopular: true,
      features: ['Full 3-Day Conference Access', 'CME Accreditation Credits', 'Gala Dinner & Networking Pass', 'Post-conference video recordings', 'Delegate Kit & Lunches Included']
    },
    {
      id: 'tier-3',
      name: 'Corporate / Industry',
      price: '$999',
      description: 'For pharmaceutical representatives, medtech vendors, and corporate attendees.',
      features: ['All Delegate privileges', 'VIP Front-Row Seating', 'Exhibition Area Booth Access', 'Exclusive B2B Networking Lounge', 'Featured Brand Mention in App']
    }
  ]
};

export const nursingConferencePreset: ConferenceConfig = {
  id: 'conf-nursing-02',
  slug: 'nursing',
  name: 'World Nursing Leadership & Clinical Practice Conference 2026',
  shortName: 'NursingExcellence 2026',
  tagline: 'Advancing Patient-Centered Care, Nursing Informatics, & Global Health Resilience',
  dates: 'November 18–20, 2026',
  venue: 'Pacific International Convention Hall',
  location: 'San Diego, CA, USA',
  theme: {
    primaryColor: '#059669',     // Emerald Green
    secondaryColor: '#022c22',   // Deep Forest Green
    accentColor: '#34d399',      // Bright Mint
    backgroundColor: '#021c16',
    textColor: '#f0fdf4'
  },
  organizerName: 'International Nursing Federation',
  contactEmail: 'info@nursingconference2026.org',
  speakers: [
    {
      id: 'spk-n1',
      name: 'Maria Santos, DNP, RN',
      title: 'Chief Nursing Officer & Clinical Director',
      institution: 'UCSF Medical Center',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      topic: 'Empowering Nurse Leadership in Critical Care Systems',
      bio: '30+ years in nursing leadership advocating for workforce wellness and patient safety protocols.'
    },
    {
      id: 'spk-n2',
      name: 'Dr. Robert Thorne, PhD, RN',
      title: 'Professor of Nursing Informatics',
      institution: 'University of Washington',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
      topic: 'Digital Health Tools & Bedside EHR Automation',
      bio: 'Leading researcher in reducing documentation burden for frontline nurses.'
    }
  ],
  schedule: [
    {
      day: 1,
      date: 'Nov 18, 2026',
      sessions: [
        {
          id: 'sn-1',
          time: '09:00 AM - 10:30 AM',
          title: 'Opening Ceremony & Keynote: Nurse Empowerment in Modern Care',
          speakerName: 'Maria Santos, DNP, RN',
          location: 'Grand Ballroom',
          category: 'Keynote'
        },
        {
          id: 'sn-2',
          time: '11:00 AM - 12:30 PM',
          title: 'Workshop: Nursing Informatics & AI-Assisted Charting',
          speakerName: 'Dr. Robert Thorne',
          location: 'Room 204',
          category: 'Workshop'
        }
      ]
    }
  ],
  registrationTiers: [
    {
      id: 'tier-n1',
      name: 'Nurse / Practitioner Pass',
      price: '$249',
      description: 'Tailored for registered nurses, nurse practitioners, and clinical staff.',
      isPopular: true,
      features: ['Full Access to all Nursing Track sessions', 'CEU/CNE Credit Certification', 'Networking Lunches', 'Conference Materials']
    },
    {
      id: 'tier-n2',
      name: 'Student Nurse Pass',
      price: '$149',
      description: 'Discounted access for nursing students.',
      features: ['Access to Educational Workshops', 'Mentorship Networking Session', 'Digital Certificate']
    }
  ]
};
