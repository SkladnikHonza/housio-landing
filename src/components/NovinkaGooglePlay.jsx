'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'

// Oznameni "Housio je v Google Play" — velka centrovana sekce pod Hero.
// Odznak Google Play je oficialni a ma jazykove mutace (public/google-play/badge-<locale>.png);
// ukrajinsky Google nedela, tam padame na anglicky, coz jeho brand guidelines dovoluji.
const ODKAZ = 'https://play.google.com/store/apps/details?id=online.housio.app'
const BEZ_MUTACE = new Set(['uk'])

export default function NovinkaGooglePlay() {
  const t = useTranslations('googlePlay')
  const locale = useLocale()
  const odznak = BEZ_MUTACE.has(locale) ? 'en' : locale

  return (
    <section
      aria-labelledby="gp-nadpis"
      className="relative overflow-hidden px-6 py-16 text-center sm:py-20"
      style={{ background: 'linear-gradient(168deg, #1F4E5F 0%, #16323D 100%)' }}
    >
      {/* jemny svit za telefonem — cistě dekorativní */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-16%] aspect-square w-[min(680px,120%)] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(45,139,95,.30) 0%, rgba(45,139,95,0) 62%)' }}
      />

      <div className="relative mx-auto max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ borderColor: 'rgba(239,234,224,.30)', color: '#EFEAE0' }}>
          <span className="block h-1.5 w-1.5 rounded-full" style={{ background: '#4FD18B' }} />
          {t('stitek')}
        </span>

        <h2 id="gp-nadpis"
            className="mx-auto mt-5 max-w-[16ch] text-[clamp(26px,4.6vw,42px)] font-bold leading-[1.12] tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}>
          {t('nadpis')}
        </h2>

        <p className="mx-auto mt-3 max-w-[50ch] text-[15.5px]" style={{ color: 'rgba(239,234,224,.76)' }}>
          {t('podnadpis')}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-8 sm:gap-11">
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

          <div className="flex flex-col items-center gap-4">
            {/* QR nema smysl na mobilu — clovek by skenoval vlastni telefon */}
            <div className="hidden rounded-2xl bg-white p-3.5 sm:block"
                 style={{ boxShadow: '0 16px 34px -14px rgba(0,0,0,.45)' }}>
              <Image src="/google-play/qr.png" alt={t('altQr')} width={132} height={132} className="block" />
            </div>
            <p className="hidden text-[11.5px] tracking-wide sm:block" style={{ color: 'rgba(239,234,224,.62)' }}>
              {t('naskenujte')}
            </p>

            <a href={ODKAZ} target="_blank" rel="noopener noreferrer"
               className="inline-block leading-[0] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
               style={{ outlineColor: '#4FD18B' }}>
              <Image src={`/google-play/badge-${odznak}.png`} alt={t('altOdznak')}
                     width={646} height={250} className="h-[58px] w-auto" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-[12.5px]" style={{ color: 'rgba(239,234,224,.52)' }}>
          {t('ios')}
        </p>
      </div>
    </section>
  )
}
