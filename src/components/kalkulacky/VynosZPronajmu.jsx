'use client'

import { useState } from 'react'
import { vynosZPronajmu, SAZBA_DANE } from '@/lib/vypocty'
import { Pole, Vysledek, Radky, Mrizka } from './Prvky'

const procentaCZ = (n) => (n === null ? '—' : String(n).replace('.', ','))

export default function VynosZPronajmuKalkulacka() {
  const [cena, setCena] = useState('4500000')
  const [vedlejsi, setVedlejsi] = useState('200000')
  const [najemne, setNajemne] = useState('18000')
  const [naklady, setNaklady] = useState('38000')
  const [neobsazenost, setNeobsazenost] = useState('0.33')
  const [kapital, setKapital] = useState('')
  const [urok, setUrok] = useState('0')

  const v = vynosZPronajmu({
    cena: Number(cena),
    vedlejsiNaklady: Number(vedlejsi),
    najemneMesicne: Number(najemne),
    rocniNaklady: Number(naklady),
    neobsazenostMesicu: Number(neobsazenost),
    vlastniKapital: kapital === '' ? null : Number(kapital),
    urokRocne: Number(urok),
  })

  // Páka má smysl ukazovat, jen když uživatel zadal vlastní kapitál nižší
  // než pořizovací cena — jinak je to totéž číslo jako čistý výnos.
  const sPakou = v && kapital !== '' && Number(kapital) > 0 && Number(kapital) < v.porizovaci

  return (
    <div className="flex flex-col gap-6">
      <Mrizka>
        <Pole popisek="Kupní cena" hodnota={cena} onZmena={setCena} jednotka="Kč" min="0" krok="100000" />
        <Pole
          popisek="Vedlejší náklady koupě"
          hodnota={vedlejsi}
          onZmena={setVedlejsi}
          jednotka="Kč"
          min="0"
          krok="10000"
          napoveda="Vklad do katastru, odhad, právní služby, provize a hlavně uvedení bytu do pronajímatelného stavu. Bez nich vyjde výnos optimisticky."
        />
        <Pole popisek="Nájemné měsíčně" hodnota={najemne} onZmena={setNajemne} jednotka="Kč" min="0" krok="500"
          napoveda="Bez záloh na služby. Zálohy nejsou tvůj příjem — jen je vybíráš a na konci roku vyúčtuješ." />
        <Pole popisek="Roční náklady" hodnota={naklady} onZmena={setNaklady} jednotka="Kč" min="0" krok="1000"
          napoveda="Daň z nemovitých věcí, pojištění, fond oprav, revize a rezerva na opravy." />
        <Pole
          popisek="Neobsazenost"
          hodnota={neobsazenost}
          onZmena={setNeobsazenost}
          jednotka="měsíců ročně"
          min="0"
          krok="0.1"
          napoveda="Průměr, ne letošek. Když se nájemníci mění po třech letech a výměna trvá měsíc, je to 0,33 měsíce ročně."
        />
        <Pole popisek="Roční úrok z hypotéky" hodnota={urok} onZmena={setUrok} jednotka="Kč" min="0" krok="5000"
          napoveda="Jen úroková část splátky. Splátka jistiny není náklad — jen přesouvá peníze z účtu do majetku." />
        <Pole
          popisek="Vlastní peníze"
          hodnota={kapital}
          onZmena={setKapital}
          jednotka="Kč"
          min="0"
          krok="100000"
          napoveda="Kolik jsi do bytu dal ze svého. Necháš-li prázdné, počítá se nákup bez hypotéky."
        />
      </Mrizka>

      {!v && <Vysledek popisek="Doplň údaje" hodnota="Zadej cenu a nájemné" jednotka="" zvyrazneni="pozor" />}

      {v && (
        <>
          <Mrizka>
            <Vysledek
              popisek="Hrubý výnos"
              hodnota={procentaCZ(v.hruby)}
              jednotka="%"
              pod="Roční nájemné ÷ pořizovací cena. Tohle uvádějí inzeráty."
            />
            <Vysledek
              popisek="Čistý výnos"
              hodnota={procentaCZ(v.cisty)}
              jednotka="%"
              zvyrazneni={v.cisty !== null && v.cisty > 0 ? 'dobre' : 'pozor'}
              pod="Po nákladech, neobsazenosti a dani. Měří nemovitost."
            />
          </Mrizka>

          {sPakou && (
            <Vysledek
              popisek="Výnos z vlastních peněz"
              hodnota={procentaCZ(v.naKapital)}
              jednotka="%"
              zvyrazneni={v.prodelava ? 'pozor' : 'dobre'}
              pod={
                v.prodelava
                  ? 'Úroky převyšují čistý příjem — byt se na provozu prodělává a drží ho jen naděje na zhodnocení.'
                  : 'Čistý příjem po úrocích ÷ vlastní peníze. Měří tvou investici, ne nemovitost.'
              }
            />
          )}

          <Radky
            polozky={[
              { popisek: 'Pořizovací cena včetně vedlejších nákladů', hodnota: v.porizovaci },
              { popisek: 'Nájemné za rok při plné obsazenosti', hodnota: v.najemRocne },
              ...(v.ztrataNeobsazenosti > 0
                ? [{ popisek: 'Ušlé nájemné za prázdné měsíce', hodnota: -v.ztrataNeobsazenosti, barva: '#A4512B' }]
                : []),
              { popisek: 'Roční náklady', hodnota: -v.naklady, barva: '#A4512B' },
              { popisek: `Daň z příjmu (${SAZBA_DANE} %)`, hodnota: -v.dan, barva: '#A4512B' },
              { popisek: 'Čistý příjem za rok', hodnota: v.cistyPrijem },
              ...(v.urok > 0
                ? [
                    { popisek: 'Úroky z hypotéky', hodnota: -v.urok, barva: '#A4512B' },
                    { popisek: 'Zbývá po úrocích', hodnota: v.poUrocich, barva: v.prodelava ? '#A4512B' : undefined },
                  ]
                : []),
            ]}
          />
        </>
      )}
    </div>
  )
}
