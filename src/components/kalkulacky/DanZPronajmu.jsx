'use client'

import { useState } from 'react'
import { danZPronajmu, PAUSAL, SAZBA_DANE } from '@/lib/vypocty'
import { Pole, Vysledek, Radky, Mrizka, cisloCZ } from './Prvky'

const POLOZKY = [
  ['odpis', 'Odpis nemovitosti', '80000'],
  ['uroky', 'Úroky z hypotéky', '48000'],
  ['opravy', 'Opravy a údržba', '25000'],
  ['pojisteni', 'Pojištění', '4000'],
  ['danNemovitost', 'Daň z nemovitých věcí', '1500'],
  ['ostatni', 'Ostatní (správa, inzerce, poplatky)', '0'],
]

export default function DanZPronajmuKalkulacka() {
  const [prijmy, setPrijmy] = useState('240000')
  const [vydaje, setVydaje] = useState(Object.fromEntries(POLOZKY.map(([k, , v]) => [k, v])))

  const v = danZPronajmu({
    prijmy: Number(prijmy),
    vydaje: Object.fromEntries(Object.entries(vydaje).map(([k, x]) => [k, Number(x || 0)])),
  })
  const skutecneLepsi = v.vyhodnejsi === 'skutecne'

  return (
    <div className="flex flex-col gap-6">
      <Pole
        popisek="Roční příjem z nájemného"
        hodnota={prijmy}
        onZmena={setPrijmy}
        jednotka="Kč"
        min="0"
        krok="10000"
        napoveda="Jen nájemné, které ti za rok doopravdy přišlo. Zálohy na služby ani jistota sem nepatří."
      />

      <div className="flex flex-col gap-3">
        <div className="text-sm font-medium" style={{ color: 'var(--teal-900)' }}>Skutečné výdaje za rok</div>
        <Mrizka>
          {POLOZKY.map(([klic, popisek]) => (
            <Pole
              key={klic}
              popisek={popisek}
              hodnota={vydaje[klic]}
              onZmena={(x) => setVydaje((s) => ({ ...s, [klic]: x }))}
              jednotka="Kč"
              min="0"
              krok="1000"
            />
          ))}
        </Mrizka>
      </div>

      <Vysledek
        popisek={skutecneLepsi ? 'Vyplatí se skutečné výdaje' : 'Vyplatí se paušál 30 %'}
        hodnota={`O ${cisloCZ(v.rozdil)} Kč ročně`}
        jednotka=""
        zvyrazneni="dobre"
        pod={skutecneLepsi
          ? 'Doklady si schovávej — u skutečných výdajů musíš umět doložit každou položku.'
          : 'U paušálu nic nedokládáš, ale výši příjmů musíš umět prokázat.'}
      />

      <Mrizka>
        <Radky
          polozky={[
            { popisek: 'Paušál — výdaje 30 %', hodnota: v.pausalniVydaje },
            { popisek: 'Základ daně', hodnota: v.zakladPausal },
            { popisek: `Daň ${SAZBA_DANE} %`, hodnota: v.danPausal, barva: skutecneLepsi ? undefined : '#1F6845' },
          ]}
        />
        <Radky
          polozky={[
            { popisek: 'Skutečné výdaje', hodnota: v.skutecneVydaje },
            { popisek: 'Základ daně', hodnota: v.zakladSkutecne },
            { popisek: `Daň ${SAZBA_DANE} %`, hodnota: v.danSkutecne, barva: skutecneLepsi ? '#1F6845' : undefined },
          ]}
        />
      </Mrizka>

      {v.stropVyuzit && (
        <Vysledek
          popisek="Paušál narazil na strop"
          hodnota={`${cisloCZ(PAUSAL.strop)} Kč`}
          jednotka=""
          zvyrazneni="pozor"
          pod="Nad roční příjem 2 miliony Kč už paušální výdaje dál nerostou."
        />
      )}

      {v.ztrata > 0 && (
        <Vysledek
          popisek="Výdaje převyšují příjmy"
          hodnota={v.ztrata}
          zvyrazneni="pozor"
          pod="Ztrátu z nájmu lze za určitých podmínek uplatnit v dalších letech — tohle je otázka na daňového poradce."
        />
      )}
    </div>
  )
}
