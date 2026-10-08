import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'podnajem',
  nadpis: 'Podnájem: v čem se liší od nájmu a kdy k němu potřebuješ souhlas',
  perex: 'Kdy smí nájemník podnajmout byt bez tvého svolení, kdy ne, co riskuješ při podnájmu bez souhlasu a jak to ošetřit ve smlouvě.',
  tema: 'kdo-bydli',
  datum: '2026-10-05',
  minut: 7,
  sekce: [
    { id: 'rozdil', nadpis: 'Nájem a podnájem nejsou totéž' },
    { id: 'souhlas', nadpis: 'Kdy je potřeba tvůj souhlas' },
    { id: 'bez-souhlasu', nadpis: 'Co dělat, když nájemník podnajal bez svolení' },
    { id: 'rizika', nadpis: 'Čím se podnájem liší v praxi' },
    { id: 'smlouva', nadpis: 'Co napsat do nájemní smlouvy' },
  ],
  faq: [
    {
      otazka: 'Může nájemník podnajmout část bytu bez mého souhlasu?',
      odpoved: 'Ano, pokud v bytě sám trvale bydlí. Zákon mu to dovoluje — stačí, aby ti oznámil zvýšení počtu osob v bytě. Celý byt nebo byt, ve kterém sám nebydlí, podnajmout bez písemného souhlasu nesmí.',
    },
    {
      otazka: 'Můžu podnájem ve smlouvě úplně zakázat?',
      odpoved: 'Právo podnajmout část bytu, ve kterém nájemce sám bydlí, mu dává zákon a nelze ho smluvně vyloučit. Můžeš ale ujednat přiměřený maximální počet osob v bytě a povinnost změnu oznámit.',
    },
    {
      otazka: 'Mám s podnájemníkem přímý vztah?',
      odpoved: 'Ne. Smlouvu máš s nájemcem, podnájemník je jeho smluvní partner. Nájemné ti platí nájemce a za škodu v bytě odpovídá taky on — i když ji způsobil podnájemník.',
    },
    {
      otazka: 'Co se stane s podnájmem, když skončí nájem?',
      odpoved: 'Skončí automaticky s ním. Podnájem je odvozený od nájmu a nemůže ho přežít. Podnájemník pak byt užívá bez právního důvodu.',
    },
    {
      otazka: 'Je krátkodobé ubytování přes platformu podnájem?',
      odpoved: 'Zpravidla ne — jde o ubytovací službu, ne o podnájem. Pro nájemce to znamená živnost, poplatek z pobytu a evidenci hostů, a v nájemní smlouvě to bývá vyloučené.',
    },
  ],
  zdroje: ['§ 2274 až § 2278 občanského zákoníku'],
}

export default function Podnajem() {
  return (
    <>
      <Perex>
        Podnájem je pro pronajímatele nepříjemný hlavně tím, že o něm často neví. Zákon přitom
        rozlišuje dvě úplně jiné situace: nájemník, který v bytě bydlí a pronajme pokoj, a nájemník,
        který se odstěhoval a byt dál pronajímá někomu jinému.
      </Perex>

      <Shrnuti>
        <li>Část bytu, ve kterém nájemce sám bydlí, smí podnajmout i bez tvého souhlasu.</li>
        <li>Celý byt nebo byt, kde nebydlí, jen s tvým písemným souhlasem.</li>
        <li>Podnájemník s tebou nemá přímý vztah — vše řešíš s nájemcem.</li>
        <li>Podnájem bez potřebného souhlasu je hrubé porušení povinností nájemce.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="rozdil">Nájem a podnájem nejsou totéž</H2>
      <Tabulka
        hlavicka={['', 'Nájem', 'Podnájem']}
        radky={[
          ['Kdo přenechává byt', 'vlastník', 'nájemce'],
          ['Komu platí nájemné', 'nájemce vlastníkovi', 'podnájemník nájemci'],
          ['Vztah k vlastníkovi', 'přímý', 'žádný'],
          ['Ochrana podle zákona', 'silná (nájem bytu)', 'slabší, odvozená od nájmu'],
          ['Konec', 'výpovědí nebo uplynutím doby', 'automaticky se skončením nájmu'],
        ]}
      />
      <P>
        Nejdůležitější řádek je ten poslední. Podnájem nemůže přežít nájem, ze kterého vychází.
        Když <OdkazClanek slug="vypoved-z-najmu">vypovíš nájem</OdkazClanek>, končí i podnájem —
        a podnájemník, který o ničem nevěděl, se ocitne v bytě bez právního důvodu.
      </P>

      <H2 id="souhlas">Kdy je potřeba tvůj souhlas</H2>
      <P>
        Podle <Zakon>§ 2274</Zakon> může nájemce podnajmout <strong>část bytu</strong> třetí osobě
        i bez souhlasu pronajímatele, pokud v bytě sám trvale bydlí. Typicky jde o spolubydlícího
        v druhém pokoji.
      </P>
      <P>
        Chce-li podnajmout <strong>celý byt</strong>, nebo v něm sám nebydlí, potřebuje tvůj
        souhlas — a ten musí být písemný. Bez něj jde o porušení povinností.
      </P>
      <Ramecek druh="pozor">
        <p>
          I u podnájmu části bytu platí, že nájemce ti musí oznámit zvýšení počtu osob v bytě,
          a to bez zbytečného odkladu. Má to praktický dopad na
          <OdkazHeslo slug="zalohy-na-sluzby"> zálohy na služby</OdkazHeslo>, protože voda a odpad
          se rozúčtovávají podle osob.
        </p>
      </Ramecek>

      <H2 id="bez-souhlasu">Co dělat, když nájemník podnajal bez svolení</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Ověř si situaci.</strong> Bydlí nájemce v bytě dál? Pokud ano a jde o jeden pokoj,
          souhlas nepotřebuje a řešíš jen oznámení počtu osob.
        </Polozka>
        <Polozka>
          <strong>Pošli písemnou výzvu</strong> k nápravě s přiměřenou lhůtou. Bez ní nemůžeš
          postupovat dál a u soudu bys neuspěl.
        </Polozka>
        <Polozka>
          <strong>Nepřistoupí-li nájemce k nápravě</strong>, je podnájem bez souhlasu hrubým
          porušením povinností — tedy výpovědní důvod s tříměsíční výpovědní dobou.
        </Polozka>
        <Polozka>
          <strong>S podnájemníkem nejednej jako s nájemcem.</strong> Nepřijímej od něj platby
          a nedomlouvej se s ním na užívání bytu; mohl by z toho vzniknout dojem, že jsi podnájem
          schválil.
        </Polozka>
      </Seznam>

      <H2 id="rizika">Čím se podnájem liší v praxi</H2>
      <Seznam>
        <Polozka><strong>Víc lidí, vyšší spotřeba.</strong> Zálohy nastavené na jednoho člověka při třech nesedí a na konci roku z toho je nedoplatek.</Polozka>
        <Polozka><strong>Vyšší opotřebení.</strong> Co je u dvou lidí běžné opotřebení, u pěti už bývá škoda.</Polozka>
        <Polozka><strong>Horší přehled, kdo v bytě je.</strong> Při havárii nebo revizi nevíš, s kým jednat.</Polozka>
        <Polozka><strong>Jistota pokrývá dluh nájemce, ne podnájemníka.</strong> Ten ti po právu nedluží nic — dluží nájemci.</Polozka>
      </Seznam>

      <H2 id="smlouva">Co napsat do nájemní smlouvy</H2>
      <P>
        Zakázat podnájem části bytu, ve kterém nájemce bydlí, nejde. Dá se ale rozumně vymezit,
        co od sebe strany čekají:
      </P>
      <Ramecek druh="vzor">
        <p>
          „Byt je určen k bydlení nejvýše tří osob. Nájemce je povinen bez zbytečného odkladu
          písemně oznámit pronajímateli změnu počtu osob žijících v bytě. Přenechání celého bytu
          do podnájmu vyžaduje předchozí písemný souhlas pronajímatele. Poskytování ubytovacích
          služeb v bytě, včetně krátkodobého ubytování zprostředkovaného internetovými platformami,
          se nepřipouští.“
        </p>
      </Ramecek>
      <P>
        Poslední věta je dnes důležitější než ta o podnájmu. Krátkodobé ubytování je
        <OdkazHeslo slug="ubytovaci-sluzba"> ubytovací služba</OdkazHeslo>, ne podnájem, a dopady
        na dům i na sousedy jsou úplně jiné — rozebírám je v článku
        o <OdkazClanek slug="kratkodoby-pronajem">krátkodobém pronájmu</OdkazClanek>.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš u bytu počet osob a jednotlivé nájemníky včetně partnerů a dětí. Když se
          počet změní, promítne se to do záloh a do rozúčtování vody — a ty máš doloženo, odkdy
          v bytě bydlí kolik lidí.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
