'use client'

import { useState } from 'react'
import { urokZKauce, zakonnaSazba } from '@/lib/vypocty'
import { Pole, Vysledek, Radky, Mrizka } from './Prvky'

// Repo sazba ČNB ověřená k datu níž. Pole je editovatelné schválně: sazba se
// mění a nikdo nechce kalkulačku, která tvrdí loňské číslo jako fakt.
const REPO = 3.5
const REPO_OVERENO = '5. 10. 2026'

const dnes = () => new Date().toISOString().slice(0, 10)

export default function UrokZKauce() {
  const [jistota, setJistota] = useState('50000')
  const [od, setOd] = useState('2023-09-01')
  const [doData, setDoData] = useState(dnes())
  const [sazba, setSazba] = useState(String(zakonnaSazba(REPO)))

  const v = urokZKauce({ jistota: Number(jistota), od, do: doData, sazba: Number(sazba) })

  return (
    <div className="flex flex-col gap-6">
      <Mrizka>
        <Pole popisek="Složená jistota" hodnota={jistota} onZmena={setJistota} jednotka="Kč" min="0" krok="1000" />
        <Pole
          popisek="Roční sazba"
          hodnota={sazba}
          onZmena={setSazba}
          jednotka="% p. a."
          krok="0.1"
          napoveda={`Zákonná sazba = repo sazba ČNB + 8 p. b. Repo ${REPO} % ověřeno ${REPO_OVERENO}; aktuální hodnotu najdeš na webu ČNB.`}
        />
        <Pole popisek="Jistota složena" hodnota={od} onZmena={setOd} typ="date" />
        <Pole popisek="Vrácení jistoty" hodnota={doData} onZmena={setDoData} typ="date" />
      </Mrizka>

      {v?.chybaPoradi && (
        <Vysledek popisek="Zkontroluj data" hodnota="Vrácení je dřív než složení" jednotka="" zvyrazneni="pozor" />
      )}

      {v && !v.chybaPoradi && (
        <>
          <Vysledek
            popisek="Úrok, který nájemníkovi patří"
            hodnota={v.urok}
            zvyrazneni="dobre"
            pod={`Za ${v.dny} dní (${String(v.let).replace('.', ',')} roku) při sazbě ${String(sazba).replace('.', ',')} % ročně.`}
          />
          <Radky
            polozky={[
              { popisek: 'Složená jistota', hodnota: Number(jistota) },
              { popisek: 'Úrok', hodnota: v.urok },
              { popisek: 'Celkem k vrácení (bez odpočtů)', hodnota: v.celkem },
            ]}
          />
        </>
      )}
    </div>
  )
}
