export interface ThemeConfig {
  primaryColor: string;     // e.g. '#0284c7' or '#dc2626'
  secondaryColor: string;   // e.g. '#0f172a' or '#1e1b4b'
  accentColor: string;      // e.g. '#38bdf8' or '#f87171'
  backgroundColor?: string; // default '#090d16'
  textColor?: string;       // default '#f8fafc'
  logoUrl?: string;
  heroBgUrl?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  institution: string;
  avatar: string;
  topic: string;
  bio?: string;
}

export interface Session {
  id: string;
  time: string;
  title: string;
  speakerName?: string;
  location?: string;
  description?: string;
  category?: 'Keynote' | 'Workshop' | 'Panel' | 'Break';
}

export interface DaySchedule {
  day: number;
  date: string;
  sessions: Session[];
}

export interface RegistrationTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export interface ConferenceConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  dates: string;
  venue: string;
  location: string;
  theme: ThemeConfig;
  speakers: Speaker[];
  schedule: DaySchedule[];
  registrationTiers: RegistrationTier[];
  contactEmail?: string;
  organizerName?: string;
}
