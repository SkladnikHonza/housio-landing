'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'

// ISO 3166-1 numeric → 2-letter alpha (countries-110m.json uses numeric ids)
const ISO_NUM_TO_ALPHA = {
  '203': 'CZ', '703': 'SK', '276': 'DE', '040': 'AT', '756': 'CH',
  '250': 'FR', '056': 'BE', '380': 'IT', '724': 'ES', '826': 'GB',
  '372': 'IE', '804': 'UA', '643': 'RU', '112': 'BY',
  '616': 'PL', '528': 'NL', '208': 'DK', '752': 'SE', '578': 'NO',
  '246': 'FI', '348': 'HU', '642': 'RO', '620': 'PT', '300': 'GR',
}

const HOME = 'CZ'
const ACTIVE = new Set(['SK', 'DE', 'AT', 'CH', 'FR', 'BE', 'IT', 'ES', 'GB', 'IE', 'UA', 'RU', 'BY'])
const FUTURE = new Set(['PL', 'NL', 'DK', 'SE', 'NO', 'FI', 'HU', 'RO', 'PT', 'GR'])

const COUNTRY_DATA = {
  CZ: { landlords: '1.2M', market: '24',  lang: 'Čeština',    langFlag: '🇨🇿' },
  SK: { landlords: '0.3M', market: '5',   lang: 'Čeština',    langFlag: '🇨🇿' },
  DE: { landlords: '5.8M', market: '198', lang: 'Deutsch',    langFlag: '🇩🇪' },
  AT: { landlords: '0.6M', market: '16',  lang: 'Deutsch',    langFlag: '🇩🇪' },
  CH: { landlords: '0.5M', market: '21',  lang: 'Deutsch',    langFlag: '🇩🇪' },
  FR: { landlords: '4.2M', market: '124', lang: 'Français',   langFlag: '🇫🇷' },
  BE: { landlords: '0.4M', market: '11',  lang: 'Français',   langFlag: '🇫🇷' },
  IT: { landlords: '3.6M', market: '78',  lang: 'Italiano',   langFlag: '🇮🇹' },
  ES: { landlords: '3.1M', market: '56',  lang: 'Español',    langFlag: '🇪🇸' },
  GB: { landlords: '2.8M', market: '89',  lang: 'English',    langFlag: '🇬🇧' },
  IE: { landlords: '0.3M', market: '7',   lang: 'English',    langFlag: '🇬🇧' },
  UA: { landlords: '2.1M', market: '18',  lang: 'Українська', langFlag: '🇺🇦' },
  RU: { landlords: '6.4M', market: '42',  lang: 'Русский',    langFlag: '🇷🇺' },
  BY: { landlords: '0.4M', market: '4',   lang: 'Русский',    langFlag: '🇷🇺' },
}

function statusOf(code) {
  if (code === HOME) return 'home'
  if (ACTIVE.has(code)) return 'active'
  if (FUTURE.has(code)) return 'future'
  return null
}

function flagEmoji(code) {
  if (!code || code.length !== 2) return ''
  return code.toUpperCase().replace(/./g, (c) =>
    String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0))
  )
}

const WIDTH = 800
const HEIGHT = 560

export default function EuropeMap() {
  const t = useTranslations('europeMap')
  const locale = useLocale()
  const [features, setFeatures] = useState(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    let cancelled = false
    Promise.all([
      fetch('/data/world-110m.json').then((r) => r.json()),
      import('topojson-client'),
      import('d3-geo'),
    ])
      .then(([topo, { feature }, { geoMercator, geoPath }]) => {
        if (cancelled) return
        const projection = geoMercator()
          .center([15, 54])
          .scale(720)
          .translate([WIDTH / 2, HEIGHT / 2 - 40])
        const pathGen = geoPath(projection)

        const fc = feature(topo, topo.objects.countries)
        const mapped = fc.features
          .map((f) => {
            const id = String(f.id).padStart(3, '0')
            const alpha = ISO_NUM_TO_ALPHA[id] || null
            const d = pathGen(f)
            return { id, alpha, d }
          })
          .filter((f) => f.d)
        setFeatures(mapped)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const displayNames =
    typeof Intl !== 'undefined' && Intl.DisplayNames
      ? new Intl.DisplayNames([locale], { type: 'region' })
      : null

  const activeCode = hovered || HOME
  const activeStatus = statusOf(activeCode)
  const data = COUNTRY_DATA[activeCode]
  const activeName = displayNames ? displayNames.of(activeCode) : activeCode

  const colorFor = (alpha) => {
    const s = statusOf(alpha)
    if (s === 'home') return 'var(--orange)'
    if (s === 'active') return 'var(--teal-900)'
    if (s === 'future') return '#D3D1C7'
    return '#EAE6DC'
  }

  const opacityFor = (alpha) => {
    if (!hovered) return 1
    return alpha === hovered ? 1 : 0.35
  }

  const isHoverable = (alpha) => !!statusOf(alpha)

  const badgeText =
    activeStatus === 'home'
      ? t('homeBadge')
      : activeStatus === 'active'
        ? t('activeBadge')
        : activeStatus === 'future'
          ? t('futureBadge')
          : ''

  const badgeStyle =
    activeStatus === 'home'
      ? { background: 'rgba(216, 155, 95, 0.15)', color: 'var(--orange-dark)' }
      : activeStatus === 'future'
        ? { background: '#EFEDE5', color: 'var(--olive-dark)' }
        : { background: 'rgba(31, 78, 95, 0.1)', color: 'var(--teal-900)' }

  return (
    <section className="px-6 py-16 lg:py-24" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--orange)' }}>
            {t('badge')}
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.025em' }}
          >
            {t('title')}
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div
            className="md:col-span-2 rounded-2xl p-4 md:p-6 relative overflow-hidden"
            style={{ background: 'white', border: '1px solid var(--border-warm)' }}
            onMouseLeave={() => setHovered(null)}
          >
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="w-full h-auto block"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'hidden' }}
            >
              {features ? (
                features.map((f) => (
                  <path
                    key={f.id}
                    d={f.d}
                    fill={colorFor(f.alpha)}
                    fillOpacity={opacityFor(f.alpha)}
                    stroke={f.alpha === hovered ? 'var(--orange)' : 'white'}
                    strokeWidth={f.alpha === hovered ? 2 : 0.5}
                    style={{
                      cursor: isHoverable(f.alpha) ? 'pointer' : 'default',
                      transition: 'fill-opacity 0.2s, stroke-width 0.2s',
                    }}
                    onMouseEnter={() => isHoverable(f.alpha) && setHovered(f.alpha)}
                  />
                ))
              ) : (
                <text x={WIDTH / 2} y={HEIGHT / 2} textAnchor="middle" fill="var(--olive)" fontSize="13">…</text>
              )}

              <g transform={`translate(20, ${HEIGHT - 30})`}>
                <rect width="12" height="12" fill="var(--orange)" rx="2" />
                <text x="18" y="10" fontSize="11" fill="var(--olive-dark)">{t('legendHome')}</text>
                <rect x="90" width="12" height="12" fill="var(--teal-900)" rx="2" />
                <text x="108" y="10" fontSize="11" fill="var(--olive-dark)">{t('legendActive')}</text>
                <rect x="180" width="12" height="12" fill="#D3D1C7" rx="2" />
                <text x="198" y="10" fontSize="11" fill="var(--olive-dark)">{t('legendFuture')}</text>
              </g>
            </svg>
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col"
            style={{ background: 'white', border: '1px solid var(--border-warm)' }}
          >
            <div className="text-5xl mb-3 leading-none">{flagEmoji(activeCode)}</div>
            <h3
              className="text-2xl font-medium mb-2"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              {activeName}
            </h3>
            <span
              className="inline-block self-start text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded mb-5"
              style={badgeStyle}
            >
              {badgeText}
            </span>

            {data ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--olive)' }}>{t('labelLandlords')}</p>
                  <p className="text-2xl font-medium" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>{data.landlords}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--olive)' }}>{t('labelMarket')}</p>
                  <p className="text-2xl font-medium" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>{data.market} mld €</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--olive)' }}>{t('labelLanguage')}</p>
                  <p className="text-base" style={{ color: 'var(--teal-900)' }}>
                    <span className="mr-2">{data.langFlag}</span>
                    {data.lang}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('futureLabel')}</p>
            )}
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-6 md:p-8"
          style={{ background: 'white', border: '1px solid var(--border-warm)' }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl md:text-4xl font-medium mb-1"
                style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
              >
                {t(`stat${i}Value`)}
              </p>
              <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>
                {t(`stat${i}Label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
