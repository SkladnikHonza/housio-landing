import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Všechny podporované locales
  locales: ['cs', 'en', 'de', 'it', 'es', 'uk', 'ru', 'fr'],
  
  // Default locale (žádný prefix v URL)
  defaultLocale: 'cs',
  
  // 'as-needed' = default locale nemá prefix, ostatní ano
  // housio.app → CZ
  // housio.app/en → EN
  // housio.app/uk → UA
  // housio.app/ru → RU
  // housio.app/fr → FR
  localePrefix: 'as-needed'
});
