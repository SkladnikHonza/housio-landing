import { Home, TrendingUp, Building2 } from 'lucide-react'

export default function Personae() {
  return (
    <section className="px-6 py-12 lg:py-16" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            Pro koho
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Postaveno pro tebe.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            Od jednoho bytu po stovky. Housio škáluje s tebou.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          
          {/* Hobby */}
          <div className="bg-white rounded-2xl p-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--teal-100)' }}>
              <Home className="w-7 h-7" style={{ color: 'var(--teal-900)' }} />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--olive)' }}>
              Hobby pronajímatel
            </p>
            <h3 className="text-2xl font-medium leading-tight mb-3" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              "Konečně přehled bez chaosu."
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--olive-dark)' }}>
              1-3 byty. OSVČ. Žádné Excel tabulky. Klid v hlavě.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-warm)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--teal-900)' }}>Plán FREE / PRO</span>
            </div>
          </div>

          {/* Investor - HIGHLIGHTED */}
          <div className="bg-white rounded-2xl p-8 relative" style={{ border: '2px solid var(--orange)', boxShadow: '0 20px 50px rgba(216, 155, 95, 0.15)' }}>
            <div className="absolute -top-3 right-6 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'var(--orange)' }}>
              Nejoblíbenější
            </div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(216, 155, 95, 0.15)' }}>
              <TrendingUp className="w-7 h-7" style={{ color: 'var(--orange)' }} />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--orange-dark)' }}>
              Investor
            </p>
            <h3 className="text-2xl font-medium leading-tight mb-3" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              "Sleduji výnosnost portfolia."
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--olive-dark)' }}>
              5-15 nemovitostí. Reporting, ROI, optimalizace cash flow.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>Plán PRO</span>
            </div>
          </div>

          {/* Profi */}
          <div className="bg-white rounded-2xl p-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#EAF3DE' }}>
              <Building2 className="w-7 h-7" style={{ color: 'var(--olive-dark)' }} />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--olive)' }}>
              Profi správce
            </p>
            <h3 className="text-2xl font-medium leading-tight mb-3" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              "Profi nástroje pro byznys."
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--olive-dark)' }}>
              15+ nemovitostí. Multi-user, API, PDF výkazy, white-label.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-warm)' }}>
              <span className="text-xs font-medium" style={{ color: 'var(--teal-900)' }}>Plán BUSINESS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
