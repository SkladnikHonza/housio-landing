import { useTranslations } from 'next-intl'

export default function Stats() {
  const t = useTranslations('stats')
  
  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <section className="px-6 py-16 lg:py-20" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('title')}
          </h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-medium tracking-tight mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
