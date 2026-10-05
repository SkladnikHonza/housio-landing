// Stavebni prvky clanku. Zadny Markdown ani dangerouslySetInnerHTML —
// clanky jsou obycejne komponenty, takze je hlida stejny lint i build
// jako zbytek webu a daji se do nich davat odkazy na funkce aplikace.

import { Link } from '@/i18n/navigation'

export function Perex({ children }) {
  return (
    <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--olive-dark)' }}>
      {children}
    </p>
  )
}

// Shrnuti na zacatku clanku. Ctenar z nej pozna, jestli je na spravne strance,
// a vyhledavac z nej casto bere odpoved do vysledku hledani.
export function Shrnuti({ children }) {
  return (
    <div
      className="rounded-2xl px-5 py-5 mb-10"
      style={{ background: 'var(--bg-clean)', border: '1px solid var(--border-cool)' }}
    >
      <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--teal-900)', opacity: 0.7 }}>
        Co si z toho odnést
      </div>
      <ul className="space-y-2 pl-5 list-disc leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
        {children}
      </ul>
    </div>
  )
}

// Obsah clanku — kotvy na jednotlive sekce. Krome ctenare z nej tezi i Google,
// ktery z dlouheho clanku umi nabidnout odkaz rovnou na konkretni kapitolu.
export function Obsah({ sekce }) {
  if (!sekce?.length) return null
  return (
    <nav
      className="rounded-2xl px-5 py-5 mb-10"
      style={{ background: 'var(--bg-clean)', border: '1px solid var(--border-cool)' }}
      aria-label="Obsah článku"
    >
      <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--teal-900)', opacity: 0.7 }}>
        Obsah
      </div>
      <ol className="space-y-2 pl-5 list-decimal leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
        {sekce.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="hover:underline" style={{ color: 'var(--teal-900)' }}>{s.nadpis}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function H2({ children, id }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mt-12 mb-4 scroll-mt-24"
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

// Tabulka — vzdy ve vlastnim posuvniku, at na telefonu nepreteka stranka.
export function Tabulka({ hlavicka, radky }) {
  return (
    <div className="my-7 overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border-cool)' }}>
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse', minWidth: '28rem' }}>
        <thead>
          <tr style={{ background: 'var(--bg-warm)' }}>
            {hlavicka.map((b) => (
              <th key={b} className="text-left font-semibold px-4 py-3" style={{ color: 'var(--teal-900)' }}>{b}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {radky.map((r, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--border-cool)' }}>
              {r.map((b, j) => (
                <td key={j} className="px-4 py-3 align-top leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{b}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Zvyrazneny blok. Druh urcuje barvu a stitek nad obsahem.
const DRUHY = {
  priklad: { stitek: 'Spočítáno na příkladu', barva: 'var(--teal-900)', pozadi: 'var(--bg-warm)', ram: 'var(--border-warm)' },
  pozor: { stitek: 'Na tohle pozor', barva: '#A4512B', pozadi: '#FBF0E6', ram: '#EBD6BF' },
  housio: { stitek: 'V Housiu', barva: 'var(--teal-900)', pozadi: '#E9F3F0', ram: '#CFE3DC' },
  vzor: { stitek: 'Co napsat', barva: 'var(--teal-900)', pozadi: 'var(--bg-clean)', ram: 'var(--border-cool)' },
}

export function Ramecek({ druh = 'priklad', children }) {
  const d = DRUHY[druh] || DRUHY.priklad
  return (
    <div className="rounded-2xl px-5 py-5 my-7" style={{ background: d.pozadi, border: `1px solid ${d.ram}` }}>
      <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: d.barva, opacity: 0.75 }}>
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

// Odkaz na jiny clanek primo v textu. Prolinkovani drzi ctenare na webu
// a vyhledavaci z nej poznaji, ktere stranky spolu souvisi.
export function OdkazClanek({ slug, children }) {
  return (
    <Link href={`/blog/${slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
      {children}
    </Link>
  )
}

// Odkaz na kalkulacku, ktera clanek doplnuje.
export function OdkazKalkulacka({ slug, children }) {
  return (
    <Link href={`/kalkulacky/${slug}`} className="underline underline-offset-2 font-medium" style={{ color: 'var(--teal-900)' }}>
      {children}
    </Link>
  )
}

// Caste dotazy na konci clanku. Stejna data jdou do strukturovanych dat
// jako FAQPage, takze se muzou ukazat primo ve vysledku hledani.
export function CasteDotazy({ dotazy }) {
  if (!dotazy?.length) return null
  return (
    <section className="mt-14">
      <h2
        className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-5"
        style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
      >
        Časté dotazy
      </h2>
      <div className="flex flex-col gap-3">
        {dotazy.map((d) => (
          <details
            key={d.otazka}
            className="rounded-2xl px-5 py-4"
            style={{ background: 'var(--bg-clean)', border: '1px solid var(--border-cool)' }}
          >
            <summary className="font-medium cursor-pointer" style={{ color: 'var(--teal-900)' }}>{d.otazka}</summary>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{d.odpoved}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

// Patka clanku. Pravni a danove texty se meni, proto u kazdeho clanku
// stoji datum a vyslovne upozorneni, ze nejde o poradenstvi.
export function Upozorneni({ aktualizovano, zdroje = [] }) {
  return (
    <div className="mt-12 pt-5" style={{ borderTop: '1px solid var(--border-warm)' }}>
      {zdroje.length > 0 && (
        <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-light)' }}>
          <strong>Opřeno o:</strong> {zdroje.join(' · ')}
        </p>
      )}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-light)' }}>
        Stav k {aktualizovano}. Text je praktický průvodce, ne právní ani daňové poradenství —
        u konkrétní smlouvy nebo u sporu se poraď s advokátem či daňovým poradcem.
      </p>
    </div>
  )
}
