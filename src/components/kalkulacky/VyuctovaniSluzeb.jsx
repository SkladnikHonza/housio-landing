'use client'

import { useState } from 'react'
import { vyuctovaniSluzeb, lhutyVyuctovani } from '@/lib/vypocty'
import { Pole, Vysledek, Radky, Mrizka, cisloCZ } from './Prvky'

const VYCHOZI = [
  { nazev: 'Teplo', castka: '31000' },
  { nazev: 'Studená voda a stočné', castka: '9800' },
  { nazev: 'Teplá voda', castka: '8300' },
  { nazev: 'Společné prostory a odpad', castka: '6500' },
]

// Lhuty pocitame v UTC (viz lhutyVyuctovani), takze je tak i vypisujeme —
// jinak by uzivateli za poledníkem vyslo datum o den driv.
const datum = (d) => d.toLocaleDateString('cs-CZ', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' })

export default function VyuctovaniSluzebKalkulacka() {
  const [zaloha, setZaloha] = useState('4000')
  const [mesicu, setMesicu] = useState('12')
  const [polozky, setPolozky] = useState(VYCHOZI)
  const [konecObdobi, setKonecObdobi] = useState(`${new Date().getFullYear() - 1}-12-31`)

  function zmenPolozku(i, castka) {
    setPolozky((p) => p.map((x, j) => (j === i ? { ...x, castka } : x)))
  }

  const v = vyuctovaniSluzeb({
    zalohaMesicne: Number(zaloha),
    mesicu: Number(mesicu),
    polozky: polozky.map((p) => ({ ...p, castka: Number(p.castka || 0) })),
  })
  const lhuty = lhutyVyuctovani(konecObdobi)

  return (
    <div className="flex flex-col gap-6">
      <Mrizka>
        <Pole popisek="Měsíční záloha na služby" hodnota={zaloha} onZmena={setZaloha} jednotka="Kč" min="0" krok="100" />
        <Pole popisek="Počet měsíců období" hodnota={mesicu} onZmena={setMesicu} jednotka="měs." min="1" max="12" />
      </Mrizka>

      <div className="flex flex-col gap-3">
        <div className="text-sm font-medium" style={{ color: 'var(--teal-900)' }}>Skutečné náklady podle faktur</div>
        <Mrizka>
          {polozky.map((p, i) => (
            <Pole key={p.nazev} popisek={p.nazev} hodnota={p.castka} onZmena={(x) => zmenPolozku(i, x)} jednotka="Kč" min="0" krok="100" />
          ))}
        </Mrizka>
      </div>

      <Vysledek
        popisek={v.nedoplatek > 0 ? 'Nájemník doplatí' : 'Vrátíš nájemníkovi'}
        hodnota={v.nedoplatek > 0 ? v.nedoplatek : v.preplatek}
        zvyrazneni={v.nedoplatek > 0 ? 'pozor' : 'dobre'}
        pod={`Zálohy ${cisloCZ(v.zaplaceno)} Kč proti skutečným nákladům ${cisloCZ(v.naklady)} Kč.`}
      />

      <Radky
        polozky={[
          { popisek: 'Zaplacené zálohy', hodnota: v.zaplaceno },
          { popisek: 'Skutečné náklady', hodnota: v.naklady },
          {
            popisek: v.nedoplatek > 0 ? 'Nedoplatek' : 'Přeplatek',
            hodnota: v.nedoplatek > 0 ? v.nedoplatek : v.preplatek,
            barva: v.nedoplatek > 0 ? '#A4512B' : '#1F6845',
          },
          {
            popisek: 'Doporučená záloha na další období',
            hodnota: `${cisloCZ(v.doporucenaZaloha)} Kč / měsíc${v.zmenaZalohy !== 0 ? ` (${v.zmenaZalohy > 0 ? '+' : ''}${cisloCZ(v.zmenaZalohy)} Kč)` : ''}`,
          },
        ]}
      />

      <div className="flex flex-col gap-3">
        <Pole
          popisek="Konec zúčtovacího období"
          hodnota={konecObdobi}
          onZmena={setKonecObdobi}
          typ="date"
          napoveda="Lhůty níž plynou ze zákona č. 67/2013 Sb."
        />
        {lhuty && (
          <Radky
            polozky={[
              { popisek: 'Doručit vyúčtování nejpozději', hodnota: datum(lhuty.doruceni) },
              { popisek: 'Vypořádat peníze nejpozději', hodnota: datum(lhuty.vyporadani) },
              { popisek: 'Pokuta za každý den prodlení', hodnota: '50 Kč' },
            ]}
          />
        )}
      </div>
    </div>
  )
}
