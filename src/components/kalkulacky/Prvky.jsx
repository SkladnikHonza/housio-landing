'use client'

// Sdílené prvky kalkulaček. Všechny počítají hned při psaní — žádné tlačítko
// „Spočítat", protože výsledek se mění s každou číslicí a čekání na klik
// jen přidává práci.

export const koruny = new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 0 })
export const cisloCZ = (n) => koruny.format(Math.round(Number(n) || 0))

export function Pole({ popisek, hodnota, onZmena, typ = 'number', jednotka, napoveda, min, krok }) {
  const id = `pole-${popisek.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium" style={{ color: 'var(--teal-900)' }}>{popisek}</label>
      <div className="relative">
        <input
          id={id}
          type={typ}
          value={hodnota}
          min={min}
          step={krok}
          inputMode={typ === 'number' ? 'decimal' : undefined}
          onChange={(e) => onZmena(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-base focus:outline-none transition"
          style={{ background: 'var(--bg-clean)', color: 'var(--teal-900)', border: '1px solid var(--border-cool)' }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--orange)' }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--border-cool)' }}
        />
        {jednotka && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none" style={{ color: 'var(--text-light)' }}>
            {jednotka}
          </span>
        )}
      </div>
      {napoveda && <p className="text-xs leading-relaxed" style={{ color: 'var(--text-light)' }}>{napoveda}</p>}
    </div>
  )
}

export function Vyber({ popisek, hodnota, onZmena, moznosti }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium" style={{ color: 'var(--teal-900)' }}>{popisek}</span>
      <div className="flex gap-2 flex-wrap">
        {moznosti.map((m) => {
          const vybrano = m.hodnota === hodnota
          return (
            <button
              key={m.hodnota}
              type="button"
              onClick={() => onZmena(m.hodnota)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition"
              style={{
                background: vybrano ? 'var(--teal-900)' : 'var(--bg-clean)',
                color: vybrano ? '#fff' : 'var(--teal-900)',
                border: `1px solid ${vybrano ? 'var(--teal-900)' : 'var(--border-cool)'}`,
              }}
            >
              {m.popisek}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Hlavní výsledek — jedno číslo, kvůli kterému sem člověk přišel.
export function Vysledek({ popisek, hodnota, jednotka = 'Kč', zvyrazneni = 'klid', pod }) {
  const barvy = {
    klid: { pozadi: 'var(--bg-warm)', ram: 'var(--border-warm)', text: 'var(--teal-900)' },
    dobre: { pozadi: '#E9F3F0', ram: '#CFE3DC', text: '#1F6845' },
    pozor: { pozadi: '#FBF0E6', ram: '#EBD6BF', text: '#A4512B' },
  }[zvyrazneni]
  return (
    <div className="rounded-2xl px-5 py-5" style={{ background: barvy.pozadi, border: `1px solid ${barvy.ram}` }}>
      <div className="text-[11px] font-semibold tracking-wider uppercase mb-1" style={{ color: barvy.text, opacity: 0.75 }}>
        {popisek}
      </div>
      <div className="text-3xl font-medium" style={{ color: barvy.text, fontFamily: 'var(--font-inter-tight)', fontVariantNumeric: 'tabular-nums' }}>
        {typeof hodnota === 'number' ? cisloCZ(hodnota) : hodnota}{jednotka ? ` ${jednotka}` : ''}
      </div>
      {pod && <div className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{pod}</div>}
    </div>
  )
}

export function Radky({ polozky }) {
  return (
    <dl className="flex flex-col gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-cool)' }}>
      {polozky.map((p, i) => (
        <div
          key={p.popisek}
          className="flex items-baseline justify-between gap-4 px-4 py-3"
          style={{ background: i % 2 ? 'var(--bg-clean)' : 'transparent', borderTop: i ? '1px solid var(--border-cool)' : 'none' }}
        >
          <dt className="text-sm" style={{ color: 'var(--olive-dark)' }}>{p.popisek}</dt>
          <dd className="text-sm font-semibold m-0 whitespace-nowrap" style={{ color: p.barva || 'var(--teal-900)', fontVariantNumeric: 'tabular-nums' }}>
            {typeof p.hodnota === 'number' ? `${cisloCZ(p.hodnota)} Kč` : p.hodnota}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function Mrizka({ children, sloupcu = 2 }) {
  return <div className={`grid grid-cols-1 ${sloupcu === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-4`}>{children}</div>
}
