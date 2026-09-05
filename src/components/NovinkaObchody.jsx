'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'

// Oznameni "Housio je v obchodech" — velka centrovana sekce pod Hero.
//
// Odznaky jsou oficialni a maji jazykove mutace. Google Play nedela ukrajinskou,
// Apple nedela chorvatskou ani ukrajinskou — v obou pripadech padame na anglicky,
// coz brand guidelines obou firem dovoluji.
//
// QR kody se na mobilu schovavaji: clovek by skenoval vlastni telefon.

const ODKAZ_GOOGLE = 'https://play.google.com/store/apps/details?id=online.housio.app'
const ODKAZ_APPLE = 'https://apps.apple.com/app/housio/id6794914113'

const GOOGLE_BEZ_MUTACE = new Set(['uk'])
const APPLE_BEZ_MUTACE = new Set(['hr', 'uk'])

export default function NovinkaObchody() {
  const t = useTranslations('obchody')
  const locale = useLocale()
  const odznakGoogle = GOOGLE_BEZ_MUTACE.has(locale) ? 'en' : locale
  const odznakApple = APPLE_BEZ_MUTACE.has(locale) ? 'en' : locale

  return (
    <section
      aria-labelledby="obchody-nadpis"
      className="relative overflow-hidden px-6 py-16 text-center sm:py-20"
      style={{ background: 'linear-gradient(168deg, #1F4E5F 0%, #16323D 100%)' }}
    >
      {/* jemny svit za telefonem — cistě dekorativní */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-16%] aspect-square w-[min(680px,120%)] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(45,139,95,.30) 0%, rgba(45,139,95,0) 62%)' }}
      />

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ borderColor: 'rgba(239,234,224,.30)', color: '#EFEAE0' }}>
          <span className="block h-1.5 w-1.5 rounded-full" style={{ background: '#4FD18B' }} />
          {t('stitek')}
        </span>

        <h2 id="obchody-nadpis"
            className="mx-auto mt-5 max-w-[16ch] text-[clamp(26px,4.6vw,42px)] font-bold leading-[1.12] tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
          {t('nadpis')}
        </h2>

        <p className="mx-auto mt-3 max-w-[52ch] text-[15.5px]" style={{ color: 'rgba(239,234,224,.76)' }}>
          {t('podnadpis')}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-9 sm:gap-12">
          {/* maketa telefonu se skutecnou nastenkou */}
          <div className="w-[168px] shrink-0 rounded-[30px] p-2 sm:w-[196px]"
               style={{ background: '#0D1D23', boxShadow: '0 26px 54px -18px rgba(0,0,0,.62), 0 0 0 1px rgba(239,234,224,.10)' }}>
            <div className="relative overflow-hidden rounded-[23px]">
              <span aria-hidden="true"
                    className="absolute left-1/2 top-2 z-10 h-[5px] w-[52px] -translate-x-1/2 rounded-full"
                    style={{ background: 'rgba(0,0,0,.55)' }} />
              <Image src="/google-play/nastenka.jpg" alt={t('altTelefon')}
                     width={455} height={900} className="block w-full" />
            </div>
          </div>

          {/* dva obchody vedle sebe */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
              <Obchod
                odkaz={ODKAZ_APPLE}
                qr="/app-store/qr.png"
                altQr={t('altQrApple')}
                odznak={`/app-store/badge-${odznakApple}.svg`}
                altOdznak={t('altOdznakApple')}
              />
              <Obchod
                odkaz={ODKAZ_GOOGLE}
                qr="/google-play/qr.png"
                altQr={t('altQrGoogle')}
                odznak={`/google-play/badge-${odznakGoogle}.png`}
                altOdznak={t('altOdznakGoogle')}
                odznakPng
              />
            </div>

            <p className="hidden text-[11.5px] tracking-wide sm:block" style={{ color: 'rgba(239,234,224,.62)' }}>
              {t('naskenujte')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Jeden obchod: QR nad odznakem. Cely blok je odkaz, aby se na mobilu (kde QR
// neni videt) dalo klepnout kamkoli.
function Obchod({ odkaz, qr, altQr, odznak, altOdznak, odznakPng }) {
  return (
    <a
      href={odkaz}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3.5 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      style={{ outlineColor: '#4FD18B' }}
    >
      <span className="hidden rounded-2xl bg-white p-3 sm:block"
            style={{ boxShadow: '0 16px 34px -14px rgba(0,0,0,.45)' }}>
        <Image src={qr} alt={altQr} width={118} height={118} className="block" />
      </span>

      <span className="flex h-[68px] items-center leading-[0]">
        {odznakPng ? (
          // Odznak Google Play je 646x250, ale samotne tlacitko v nem meri jen
          // 192 px na vysku — zbytek je pruhledny okraj (76,8 % vysky souboru).
          // Applovo SVG naopak vyplnuje svuj obrazek cele. Aby OBE TLACITKA
          // vypadala stejne velka, musi mit Google vetsi cislo:
          //   Apple  52 px obrazek -> 52,0 px tlacitko
          //   Google 68 px obrazek -> 52,2 px tlacitko  (68 x 0,768)
          // Nesrovnavat na stejne cislo — vypadalo by to hur, ne lip.
          <Image src={odznak} alt={altOdznak} width={646} height={250} className="h-[68px] w-auto" />
        ) : (
          // Odznak Applu je SVG. next/image by kvuli nemu potreboval
          // dangerouslyAllowSVG v konfiguraci — u vlastniho souboru od Applu
          // je bezny <img> cistsi nez povolovat SVG plosne.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={odznak} alt={altOdznak} width={156} height={52} className="h-[52px] w-auto" />
        )}
      </span>
    </a>
  )
}
