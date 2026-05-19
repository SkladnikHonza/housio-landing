import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'

export default function Pricing() {
  const t = useTranslations('pricing')
  
  const tiers = [
    {
      key: 'free',
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      ctaUrl: 'https://housio.vercel.app/login',
      highlighted: false,
    },
    {
      key: 'pro',
      features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'],
      ctaUrl: 'https://housio.vercel.app/login',
      highlighted: true,
    },
    {
      key: 'business',
      features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'],
      ctaUrl: 'mailto:info@useuropegroup.cz',
      highlighted: false,
    },
  ]

  return (
    <section id="ceny" className="px-6 py-12 lg:py-16 scroll-mt-32" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('title')}<br/>{t('title2')}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
          
          <div className="inline-flex p-1 rounded-full gap-1" style={{ background: 'var(--bg-warm)' }}>
            <span className="text-sm text-white px-4 py-1.5 rounded-full font-medium" style={{ background: 'var(--teal-900)' }}>{t('monthly')}</span>
            <span className="text-sm px-4 py-1.5 font-medium" style={{ color: 'var(--olive-dark)' }}>
              {t('yearly')} <span style={{ color: 'var(--orange)' }}>{t('yearlyDiscount')}</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div 
              key={tier.key} 
              className={`rounded-2xl p-8 ${tier.highlighted ? 'relative' : ''}`}
              style={{
                background: tier.highlighted ? 'var(--bg-clean)' : 'var(--bg-warm)',
                border: tier.highlighted ? '2px solid var(--orange)' : 'none',
                boxShadow: tier.highlighted ? '0 20px 50px rgba(216, 155, 95, 0.15)' : 'none',
              }}
            >
              {tier.highlighted && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 text-white text-xs font-medium px-3.5 py-1 rounded-full tracking-wide" style={{ background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)' }}>
                  {t('mostPopular')}
                </div>
              )}
              
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: tier.highlighted ? 'var(--orange)' : 'var(--olive)' }}>
                {t(`${tier.key}.name`)}
              </p>
              
              <p className="text-4xl font-medium tracking-tight mb-1" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {t(`${tier.key}.price`)}
                {t.has(`${tier.key}.suffix`) && <span className="text-base font-normal" style={{ color: 'var(--olive-dark)' }}>{t(`${tier.key}.suffix`)}</span>}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--olive-dark)' }}>{t(`${tier.key}.period`)}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: tier.highlighted ? 'var(--orange)' : 'var(--teal-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t(`${tier.key}.${featureKey}`)}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={tier.ctaUrl}
                className="block w-full py-3 rounded-xl text-sm font-medium transition hover:opacity-90 text-center cursor-pointer"
                style={{
                  background: tier.highlighted ? 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)' : 'var(--bg-clean)',
                  color: tier.highlighted ? 'white' : 'var(--teal-900)',
                  border: tier.highlighted ? 'none' : '1px solid rgba(31, 78, 95, 0.15)',
                }}
              >
                {t(`${tier.key}.cta`)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
