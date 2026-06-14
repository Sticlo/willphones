export const SITE_CONFIG = {
  whatsappNumber: '+57 300 000 0000',
  phoneNumber: '+57 300 000 0000',
  whatsappMessage: "Hola Willphone's! Me interesa comprar accesorios al por mayor. ¿Me pueden enviar catálogo y precios mayoristas?",
  wholesaleMinUnits: 6,
  facebookUrl: 'https://facebook.com/willphones',
  instagramUrl: 'https://instagram.com/willphones',
} as const;

export function whatsappLink(message?: string): string {
  const n = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  const text = message ?? SITE_CONFIG.whatsappMessage;
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

export function phoneLink(): string {
  return `tel:${SITE_CONFIG.phoneNumber.replace(/\s/g, '')}`;
}
