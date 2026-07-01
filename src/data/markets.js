export const markets = [
  {
    key: 'home',
    label: 'VODGate',
    flag: '🇺🇸',
    path: '/',
    lang: 'en',
    hreflang: 'x-default',
    canonicalPath: '/',
  },
  {
    key: 'us',
    label: 'United States',
    flag: '🇺🇸',
    path: '/us/',
    lang: 'en-US',
    hreflang: 'en-US',
    canonicalPath: '/us/',
  },
  {
    key: 'uk',
    label: 'United Kingdom',
    flag: '🇬🇧',
    path: '/uk/',
    lang: 'en-GB',
    hreflang: 'en-GB',
    canonicalPath: '/uk/',
  },
  {
    key: 'fr',
    label: 'France',
    flag: '🇫🇷',
    path: '/fr/',
    lang: 'fr',
    hreflang: 'fr-FR',
    canonicalPath: '/fr/',
  },
  {
    key: 'es',
    label: 'Spain',
    flag: '🇪🇸',
    path: '/es/',
    lang: 'es',
    hreflang: 'es-ES',
    canonicalPath: '/es/',
  },
  {
    key: 'ar',
    label: 'Morocco',
    flag: '🇲🇦',
    path: '/ar/',
    lang: 'ar',
    hreflang: 'ar',
    canonicalPath: '/ar/',
  },
];

const switcherMarketKeys = ['us', 'uk', 'es', 'fr', 'ar'];

export const switcherMarkets = switcherMarketKeys.map((key) =>
  markets.find((market) => market.key === key),
);
