export const SITE = {
  name: 'Schlüsseldienst München',
  title: 'Schlüsseldienst München 24Std. - Türöffnung ab 29€ Festpreis',
  description: 'Der Schlüsseldienst München ✓ Monteur in 10-40 Min. vor Ort ▷ Türöffnung ohne Schäden ✓ Günstiger 24 Std. Service ✓ EC-Zahlung ☎ Jetzt anrufen!',
  lang: 'de',
  url: 'https://www.schlüsseldienst-münchen.bayern/',
  socials: {
    twitter: '',
    instagram: '',
    linkedin: '',
    dribbble: '',
  },
} as const;

export type SiteConfig = typeof SITE;
