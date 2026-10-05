'use client'

import { useState } from 'react'
import { odpisyNemovitosti } from '@/lib/vypocty'
import { Pole, Vyber, Vysledek, Mrizka, cisloCZ } from './Prvky'

export default function OdpisyKalkulacka() {
  const [cena, setCena] = useState('2400000')
  const [zpusob, setZpusob] = useState('rovnomerne')
  const [rok, setRok] = useState(String(new Date().getFullYear()))

  const radky = odpisyNemovitosti({ vstupniCena: Number(cena), zpusob })
  const prvni = radky[0]
  const druhy = radky[1]

  return (
    <div className="flex flex-col gap-6">
      <Mrizka>
        <Pole
          popisek="Vstupní cena bez pozemku"
          hodnota={cena}
          onZmena={setCena}
          jednotka="Kč"
          min="0"
          krok="50000"
          napoveda="U domu je potřeba od kupní ceny odečíst hodnotu pozemku — ten se neodepisuje."
        />
        <Pole popisek="První rok odpisování" hodnota={rok} onZmena={setRok} min="1990" />
      </Mrizka>

      <Vyber
        popisek="Způsob odpisování"
        hodnota={zpusob}
        onZmena={setZpusob}
        moznosti={[
          { hodnota: 'rovnomerne', popisek: 'Rovnoměrné (1,4 % a 3,4 %)' },
          { hodnota: 'zrychlene', popisek: 'Zrychlené (koeficient 30 a 31)' },
        ]}
      />

      {prvni && (
        <Mrizka>
          <Vysledek popisek="Odpis v prvním roce" hodnota={prvni.odpis} />
          <Vysledek popisek="Odpis ve druhém roce" hodnota={druhy ? druhy.odpis : 0} zvyrazneni="dobre" />
        </Mrizka>
      )}

      {radky.length > 0 && (
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border-cool)' }}>
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse', minWidth: '30rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-warm)' }}>
                {['Rok', 'Odpis', 'Odepsáno celkem', 'Zůstatková cena'].map((h) => (
                  <th key={h} className="text-left font-semibold px-4 py-3" style={{ color: 'var(--teal-900)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ fontVariantNumeric: 'tabular-nums' }}>
              {radky.map((r) => (
                <tr key={r.rok} style={{ borderTop: '1px solid var(--border-cool)' }}>
                  <td className="px-4 py-2.5" style={{ color: 'var(--olive-dark)' }}>{Number(rok) + r.rok - 1}</td>
                  <td className="px-4 py-2.5 font-semibold" style={{ color: 'var(--teal-900)' }}>{cisloCZ(r.odpis)} Kč</td>
                  <td className="px-4 py-2.5" style={{ color: 'var(--olive-dark)' }}>{cisloCZ(r.opravky)} Kč</td>
                  <td className="px-4 py-2.5" style={{ color: 'var(--olive-dark)' }}>{cisloCZ(r.zustatkova)} Kč</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
