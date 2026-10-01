// Stavebni prvky clanku. Zadny Markdown ani dangerouslySetInnerHTML —
// clanky jsou obycejne komponenty, takze je hlida stejny lint i build
// jako zbytek webu a daji se do nich davat odkazy na funkce aplikace.

export function Perex({ children }) {
  return (
    <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--olive-dark)' }}>
      {children}
    </p>
  )
}

export function H2({ children }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mt-12 mb-4"
      style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
    >
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 className="text-lg font-semibold mt-8 mb-2" style={{ color: 'var(--teal-900)' }}>
      {children}
    </h3>
  )
}

export function P({ children }) {
  return <p className="leading-relaxed mb-4" style={{ color: 'var(--olive-dark)' }}>{children}</p>
}

export function Seznam({ children, cislovany = false }) {
  const Znacka = cislovany ? 'ol' : 'ul'
  return (
    <Znacka
      className={`mb-5 pl-6 space-y-2 ${cislovany ? 'list-decimal' : 'list-disc'}`}
      style={{ color: 'var(--olive-dark)' }}
    >
      {children}
    </Znacka>
  )
}

export function Polozka({ children }) {
  return <li className="leading-relaxed pl-1">{children}</li>
}

// Zvyrazneny blok. Druh urcuje barvu a stitek nad obsahem.
const DRUHY = {
  priklad: { stitek: 'Spočítáno na příkladu', barva: 'var(--teal-900)', pozadi: 'var(--bg-warm)', ram: 'var(--border-warm)' },
  pozor: { stitek: 'Na tohle pozor', barva: '#A4512B', pozadi: '#FBF0E6', ram: '#EBD6BF' },
  housio: { stitek: 'V Housiu', barva: 'var(--teal-900)', pozadi: '#E9F3F0', ram: '#CFE3DC' },
}

export function Ramecek({ druh = 'priklad', children }) {
  const d = DRUHY[druh] || DRUHY.priklad
  return (
    <div
      className="rounded-2xl px-5 py-5 my-7"
      style={{ background: d.pozadi, border: `1px solid ${d.ram}` }}
    >
      <div
        className="text-[11px] font-semibold tracking-wider uppercase mb-2"
        style={{ color: d.barva, opacity: 0.75 }}
      >
        {d.stitek}
      </div>
      <div className="leading-relaxed space-y-3" style={{ color: 'var(--olive-dark)' }}>
        {children}
      </div>
    </div>
  )
}

// Odkaz na paragraf zakona — vizualne odlisi pravni oporu od bezneho textu.
export function Zakon({ children }) {
  return (
    <span
      className="whitespace-nowrap rounded px-1.5 py-0.5 text-[0.9em]"
      style={{ background: 'rgba(31,78,95,0.07)', color: 'var(--teal-900)' }}
    >
      {children}
    </span>
  )
}

// Patka clanku. Pravni a danove texty se meni, proto u kazdeho clanku
// stoji datum a vyslovne upozorneni, ze tohle neni poradenstvi.
export function Upozorneni({ aktualizovano }) {
  return (
    <p
      className="text-sm leading-relaxed mt-12 pt-5"
      style={{ color: 'var(--text-light)', borderTop: '1px solid var(--border-warm)' }}
    >
      Stav k {aktualizovano}. Text je praktický průvodce, ne právní ani daňové poradenství —
      u konkrétní smlouvy nebo u sporu se poraď s advokátem či daňovým poradcem.
    </p>
  )
}
