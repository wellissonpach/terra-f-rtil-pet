export const COMPANY_CONTACTS = {
  whatsappCentral: '(61) 99840-0010',
  whatsappCentralClean: '5561998400010',
  phoneClinica: '(61) 99572-0394',
  phoneClinicaClean: '5561995720394',
  phoneStoreLandline: '(61) 3374-9033',
  phoneStoreMobile: '(61) 9807-0030',
  instagram: '@terrafertilpet',
  instagramUrl: 'https://www.instagram.com/terrafertilpet/',
  facebook: 'Terra Fértil Pet',
  facebookUrl: 'https://www.facebook.com/terrafertilpet/',
  slogan: 'O mundo do seu Pet',
  instagramFollowers: '4.884',
  instagramPosts: '311',
};

export const OPENING_HOURS = {
  weekday: 'Segunda a sábado: 08h às 21h',
  sunday: 'Domingos e feriados: 08h às 18h',
  weekdayStart: 8,
  weekdayEnd: 21,
  weekendEnd: 18,
};

/**
 * Checks if the store is currently open based on Brasilia time (UTC-3)
 */
export function getStoreCurrentStatus(): { isOpen: boolean; text: string; nextEvent: string } {
  // Current local time
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1-6 Mon-Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentDecimalHour = hour + minute / 60;

  const isSundayOrHoliday = day === 0;
  const openingHour = 8;
  const closingHour = isSundayOrHoliday ? 18 : 21;

  const isOpen = currentDecimalHour >= openingHour && currentDecimalHour < closingHour;

  if (isOpen) {
    return {
      isOpen: true,
      text: 'Aberto agora',
      nextEvent: `Fecha hoje às ${closingHour}:00`,
    };
  } else {
    return {
      isOpen: false,
      text: 'Fechado no momento',
      nextEvent: 'Abre às 08:00',
    };
  }
}

/**
 * Builds a direct WhatsApp click-to-chat URL with a contextual message
 */
export function buildWhatsAppUrl(message?: string, number = COMPANY_CONTACTS.whatsappCentralClean): string {
  const defaultMessage = 'Olá! Vim pelo site da Terra Fértil Pet e gostaria de tirar uma dúvida.';
  const encodedText = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${number}?text=${encodedText}`;
}

export const PRESET_MESSAGES = {
  general: 'Olá! Vim pelo site da Terra Fértil Pet e gostaria de saber mais sobre os produtos disponíveis.',
  grooming: 'Olá! Vim pelo site e gostaria de informações sobre banho e tosa.',
  clinic: 'Olá! Vim pelo site da Terra Fértil Pet e gostaria de informações sobre a clínica.',
  storeLocation: 'Olá! Vim pelo site e gostaria de saber o endereço exato e como chegar na Terra Fértil Pet.',
  productInquiry: (productName: string, category: string) =>
    `Olá! Vim pelo site da Terra Fértil Pet e gostaria de consultar a disponibilidade do produto: ${productName} (Categoria: ${category}).`,
  categoryInquiry: (categoryName: string) =>
    `Olá! Vim pelo site da Terra Fértil Pet e gostaria de saber quais opções vocês têm na categoria ${categoryName}.`,
};
