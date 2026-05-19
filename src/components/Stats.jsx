export default function Stats() {
  return (
    <section className="px-6 py-16 lg:py-20" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest mb-10" style={{ color: 'var(--text-light)' }}>
          Pro pronajímatele z celé EU
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-medium tracking-tight mb-1" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              500+
            </p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>aktivních uživatelů</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-medium tracking-tight mb-1" style={{ fontFamily: 'var(--font-inter-tight)', background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              €2.3M
            </p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>spravovaných ročně</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-medium tracking-tight mb-1" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              5h+
            </p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>uspořeno měsíčně</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-medium tracking-tight mb-1" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              4.9★
            </p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>průměrné hodnocení</p>
          </div>
        </div>
      </div>
    </section>
  )
}
