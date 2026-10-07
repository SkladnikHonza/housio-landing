import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Všechny podporované locales
  locales: ['cs', 'en', 'de', 'it', 'es', 'uk', 'ru', 'fr', 'pl', 'hr', 'sk'],
  
  // Default locale (žádný prefix v URL)
  defaultLocale: 'cs',
  
  // 'as-needed' = default locale nemá prefix, ostatní ano
  // housio.app → CZ
  // housio.app/en → EN
  // housio.app/uk → UA
  // housio.app/ru → RU
  // housio.app/fr → FR
  localePrefix: 'as-needed',

  // VYPNUTO ZÁMĚRNĚ — bez toho next-intl přesměrovával KAŽDOU adresu bez
  // jazykového prefixu podle hlavičky Accept-Language. Protože průvodce,
  // encyklopedie, kalkulačky i stránky funkcí běží jen česky, končilo to
  // takhle:
  //     /blog/jistota-kauce  →  307  →  /en/blog/jistota-kauce  →  404
  // Pro návštěvníka s anglickým prohlížečem i pro Googlebota byl tedy celý
  // český obsah (100 adres) nedostupný. Search Console to 7. 10. 2026
  // nahlásila jako „Stránka s přesměrováním".
  // Volbu jazyka pro nového návštěvníka řeší src/proxy.js, a jen na „/".
  localeDetection: false
});
