export type AppScreen = 'gateway' | 'home' | 'comunidad' | 'rosario';

export type UserRole = 'devoto' | 'cofrade';

export type MysteryType = 'gozosos' | 'luminosos' | 'dolorosos' | 'gloriosos';

export interface MysteryItem {
  id: number;
  orderText: string;
  title: string;
  scripture: string;
  verse: string;
  reflection: string;
  prayer: string;
  durationSeconds: number;
}

export interface MysterySet {
  type: MysteryType;
  name: string;
  days: string;
  image: string;
  color: string;
  mysteries: MysteryItem[];
}

export interface CommunityDocument {
  id: string;
  badge: string;
  title: string;
  description: string;
  date: string;
  fileSize: string;
  downloadUrl?: string;
  content: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  alt: string;
}

export interface PrayerIntention {
  id: string;
  text: string;
  author: string;
  prayersCount: number;
  hasPrayed: boolean;
  date: string;
}

export interface Announcement {
  id: string;
  badge: string;
  badgeStyle: 'solemn' | 'info' | 'warning';
  timeLabel: string;
  title: string;
  description: string;
  fullDetails?: string;
  dateStr?: string;
  location?: string;
}

export interface CofradeActivity {
  id: string;
  division: string;
  title: string;
  dateTime: string;
  location: string;
  confirmed: boolean;
  duties: string[];
}
