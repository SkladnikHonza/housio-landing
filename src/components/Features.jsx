import { useTranslations } from 'next-intl'
import { TrendingUp, BellRing, CreditCard, Globe, FileText, Smartphone } from 'lucide-react'

export default function Features() {
  const t = useTranslations('features')
  
  const features = [
    { icon: TrendingUp, titleKey: 'f1Title', descKey: 'f1Desc', iconBg: 'var(--teal-900)' },
    { icon: BellRing, titleKey: 'f2Title', descKey: 'f2Desc', iconBg: 'var(--orange)' },
    { icon: CreditCard, titleKey: 'f3Title', descKey: 'f3Desc', iconBg: 'var(--olive)' },
    { icon: Globe, titleKey: 'f4Title', descKey: 'f4Desc', iconBg: 'var(--teal-900)' },
    { icon: FileText, titleKey: 'f5Title', descKey: 'f5Desc', iconBg: 'var(--orange)' },
    { icon: Smartphone, titleKey: 'f6Title', descKey: 'f6Desc', iconBg: 'var(--olive)' },
  ]

  return (
    <section id="funkce" className="px-6 py-12 lg:py-16 scroll-mt-32" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('title')}<br/>{t('title2')}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="p-7 rounded-2xl transition hover:scale-[1.02]" style={{ background: 'var(--bg-warm)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: feature.iconBg }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--teal-900)' }}>
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                  {t(feature.descKey)}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
