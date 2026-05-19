import { TrendingUp, BellRing, CreditCard, Globe, FileText, Smartphone } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Cash flow přehledně',
    description: 'Měsíční výnosy, výdaje a cash flow v reálném čase. Nikdy víc než 5 minut měsíčně.',
    iconBg: 'var(--teal-900)',
  },
  {
    icon: BellRing,
    title: 'Notifikace končících smluv',
    description: 'Housio tě upozorní 30, 14 a 7 dní předem. Nikdy nezapomeneš prodloužit.',
    iconBg: 'var(--orange)',
  },
  {
    icon: CreditCard,
    title: 'Měsíční platby na 1 klik',
    description: 'Označ platby přijaté, sleduj dluhy, generuj předpisy automaticky.',
    iconBg: 'var(--olive)',
  },
  {
    icon: Globe,
    title: 'Multi-jazyk + multi-měna',
    description: 'CZK, EUR, PLN, CHF. Čeština, angličtina, němčina. Pro celou EU.',
    iconBg: 'var(--teal-900)',
  },
  {
    icon: FileText,
    title: 'Profi výkazy',
    description: 'PDF reporty pro účetní, banku nebo daňového poradce. Za 10 sekund.',
    iconBg: 'var(--orange)',
  },
  {
    icon: Smartphone,
    title: 'Funguje všude',
    description: 'Mobil, tablet, desktop. Bez instalace, vše synchronizované v reálném čase.',
    iconBg: 'var(--olive)',
  },
]

export default function Features() {
  return (
    <section className="px-6 py-20 lg:py-28" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            Funkce
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Vše co potřebuješ.<br/>Nic navíc.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            Šest pilířů, na kterých Housio stojí. Postaveno pro reálné pronajímatele, ne enterprise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="p-7 rounded-2xl transition hover:scale-[1.02]" style={{ background: 'var(--bg-warm)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: feature.iconBg }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--teal-900)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
