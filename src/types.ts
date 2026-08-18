export interface Category {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  popularItems: string[];
}

export interface Service {
  id: 'clinica' | 'banho-e-tosa';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
  phone?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'caes' | 'gatos' | 'passaros' | 'roedores' | 'higiene' | 'aquarismo' | 'racoes' | 'petiscos' | 'brinquedos' | 'acessorios';
  categoryLabel: string;
  image: string;
  description: string;
  highlights: string[];
  brand?: string;
}

export interface StoreUnit {
  id: string;
  name: string;
  statusBadge: string;
  address: string;
  cityState: string;
  phonePrimary: string;
  phoneSecondary?: string;
  whatsapp: string;
  hoursWeekday: string;
  hoursSunday: string;
  mapQuery: string;
  note?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  category: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BookingFormState {
  serviceType: 'banho-e-tosa' | 'clinica';
  petName: string;
  petType: 'cao' | 'gato' | 'outro';
  petBreed: string;
  preferredPeriod: 'manha' | 'tarde' | 'qualquer';
  notes: string;
}
