import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '0 Kč',
    period: 'navždy zdarma',
    features: [
      '1 nemovitost',
      'Až 2 nájemníci',
      'Základní cash flow',
      'Email notifikace',
    ],
    cta: 'Začít zdarma',
    ctaUrl: 'https://housio.vercel.app/login',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '199 Kč',
    suffix: '/měs',
    period: '14 dní zdarma na zkoušku',
    features: [
      'Až 5 nemovitostí',
      'Neomezené nájemníky',
      'Pokročilý cash flow + grafy',
      'Automatické notifikace',
      'Multi-měna + multi-jazyk',
      'Prioritní podpora',
    ],
    cta: 'Vyzkoušet 14 dní zdarma',
    ctaUrl: 'https://housio.vercel.app/login',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '499 Kč',
    suffix: '/měs',
    period: '14 dní zdarma na zkoušku',
    features: [
      'Neomezené nemovitosti',
      'Vše z PRO plánu',
      'PDF výkazy + faktury',
      'Multi-user (až 5 účtů)',
      'API přístup',
    ],
    cta: 'Kontaktovat sales',
    ctaUrl: 'mailto:info@useuropegroup.cz',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="ceny" className="px-6 py-12 lg:py-16 scroll-mt-20" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            Ceny
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Férové ceny.<br/>Bez skrytých poplatků.
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--olive-dark)' }}>
            Začni zdarma. Upgraduj kdykoli. Zruš kdykoli.
          </p>
          
          <div className="inline-flex p-1 rounded-full gap-1" style={{ background: 'var(--bg-warm)' }}>
            <span className="text-sm text-white px-4 py-1.5 rounded-full font-medium" style={{ background: 'var(--teal-900)' }}>Měsíčně</span>
            <span className="text-sm px-4 py-1.5 font-medium" style={{ color: 'var(--olive-dark)' }}>Ročně <span style={{ color: 'var(--orange)' }}>-20%</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 ${tier.highlighted ? 'relative' : ''}`}
              style={{
                background: tier.highlighted ? 'var(--bg-clean)' : 'var(--bg-warm)',
                border: tier.highlighted ? '2px solid var(--orange)' : 'none',
                boxShadow: tier.highlighted ? '0 20px 50px rgba(216, 155, 95, 0.15)' : 'none',
              }}
            >
              {tier.highlighted && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 text-white text-xs font-medium px-3.5 py-1 rounded-full tracking-wide" style={{ background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)' }}>
                  Nejoblíbenější
                </div>
              )}
              
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: tier.highlighted ? 'var(--orange)' : 'var(--olive)' }}>
                {tier.name}
              </p>
              
              <p className="text-4xl font-medium tracking-tight mb-1" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {tier.price}
                {tier.suffix && <span className="text-base font-normal" style={{ color: 'var(--olive-dark)' }}>{tier.suffix}</span>}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--olive-dark)' }}>{tier.period}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: tier.highlighted ? 'var(--orange)' : 'var(--teal-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--olive-dark)' }}>{feature}</span>
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
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
