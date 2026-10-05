import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'dodatek-ke-smlouve',
  nadpis: 'Dodatek k nájemní smlouvě: kdy ho potřebuješ a co do něj patří',
  perex: 'Co se dá změnit oznámením, co jen dodatkem a co nejde ani s podpisem obou stran. Se vzorem a se seznamem změn, u kterých se na dodatek nejčastěji zapomíná.',
  tema: 'smlouva',
  datum: '2026-10-05',
  minut: 7,
  sekce: [
    { id: 'kdy', nadpis: 'Kdy dodatek potřebuješ a kdy ne' },
    { id: 'co-patri', nadpis: 'Co do dodatku patří' },
    { id: 'vzor', nadpis: 'Jak dodatek vypadá' },
    { id: 'nejde', nadpis: 'Co dodatkem nezměníš ani s podpisem' },
    { id: 'chyby', nadpis: 'Nejčastější chyby' },
  ],
  faq: [
    {
      otazka: 'Musí být dodatek písemný?',
      odpoved: 'Ano. Nájemní smlouva na byt musí mít písemnou formu a stejnou formu má mít i její změna. Ústní dohoda o vyšším nájemném se u soudu dokazuje velmi špatně.',
    },
    {
      otazka: 'Potřebuju dodatek na změnu záloh na služby?',
      odpoved: 'Pokud smlouva odkazuje na evidenční list a umožňuje změnu záloh písemným oznámením, dodatek nepotřebuješ. Bez té věty ano.',
    },
    {
      otazka: 'Jak prodloužit nájem na dobu určitou?',
      odpoved: 'Dodatkem s novým datem konce, podepsaným před uplynutím původní doby. Když doba uplyne a nájemce bydlí dál tři měsíce bez tvé výzvy k vyklizení, nájem se obnoví sám — na stejnou dobu, nejvýše na dva roky.',
    },
    {
      otazka: 'Můžu dodatkem zvýšit nájemné?',
      odpoved: 'Dohodou obou stran ano a je to nejrychlejší cesta. Když nájemce nesouhlasí, dodatek nevznikne a zbývá zákonný postup s návrhem, dvouměsíční lhůtou a stropem dvaceti procent za tři roky.',
    },
    {
      otazka: 'Kolik dodatků může smlouva mít?',
      odpoved: 'Kolik je potřeba, ale po třetím se vyplatí uvažovat o nové smlouvě. Číslované dodatky, které se navzájem přepisují, jsou častý zdroj sporu o to, co vlastně platí.',
    },
  ],
  zdroje: ['§ 2235 a násl. občanského zákoníku', '§ 564 občanského zákoníku'],
}

export default function DodatekKeSmlouve() {
  return (
    <>
      <Perex>
        Dodatek je nejjednodušší způsob, jak změnit podepsanou smlouvu — a zároveň věc, na kterou
        se nejčastěji zapomíná. Půlka sporů mezi pronajímatelem a nájemníkem stojí na tom, že se
        strany na něčem domluvily ústně a po roce si to každá pamatuje jinak.
      </Perex>

      <Shrnuti>
        <li>Dodatek musí být písemný a podepsaný oběma stranami.</li>
        <li>Zálohy na služby lze měnit bez dodatku, pokud na to smlouva pamatuje evidenčním listem.</li>
        <li>Nájemné dodatkem zvýšíš jen dohodou; bez souhlasu platí zákonný postup.</li>
        <li>Po třetím dodatku je čistší sepsat novou smlouvu.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="kdy">Kdy dodatek potřebuješ a kdy ne</H2>
      <Tabulka
        hlavicka={['Změna', 'Stačí oznámení?', 'Potřeba dodatek?']}
        radky={[
          ['Výše záloh na služby', 'ano, pokud na to smlouva pamatuje', 'jinak ano'],
          ['Výše nájemného dohodou', 'ne', 'ano'],
          ['Prodloužení doby určité', 'ne', 'ano'],
          ['Změna počtu osob v bytě', 'oznamuje nájemce', 'ne'],
          ['Změna čísla účtu pronajímatele', 'ano, písemné oznámení', 'ne'],
          ['Přistoupení dalšího nájemce', 'ne', 'ano'],
          ['Změna výše jistoty', 'ne', 'ano'],
        ]}
      />
      <P>
        Nejvíc práce ušetří první řádek. Když smlouva obsahuje větu, že se výše záloh stanovuje
        <OdkazHeslo slug="evidencni-list"> evidenčním listem</OdkazHeslo> a pronajímatel ji může
        změnit písemným oznámením s odůvodněním, nemusíš po každém vyúčtování shánět podpis.
      </P>

      <H2 id="co-patri">Co do dodatku patří</H2>
      <Seznam>
        <Polozka><strong>Označení původní smlouvy</strong> — datum uzavření a smluvní strany, ať je jasné, co se mění.</Polozka>
        <Polozka><strong>Pořadové číslo dodatku.</strong></Polozka>
        <Polozka><strong>Přesně určený článek, který se mění</strong>, a jeho nové znění celé — ne jen „mění se částka“.</Polozka>
        <Polozka><strong>Datum účinnosti</strong> změny.</Polozka>
        <Polozka><strong>Věta, že ostatní ujednání zůstávají beze změny.</strong></Polozka>
        <Polozka><strong>Podpisy obou stran</strong> a datum podpisu.</Polozka>
      </Seznam>

      <H2 id="vzor">Jak dodatek vypadá</H2>
      <Ramecek druh="vzor">
        <p><strong>Dodatek č. 1 k nájemní smlouvě ze dne 14. 3. 2025</strong></p>
        <p>
          Smluvní strany: [pronajímatel] a [nájemce], uzavřely dne 14. 3. 2025 nájemní smlouvu
          k bytu č. 4, Opavská 3, Krnov. Dohodly se na této změně:
        </p>
        <p>
          Článek III odst. 1 smlouvy se nahrazuje tímto zněním: „Nájemné činí 21 500 Kč měsíčně
          a je splatné vždy do 15. dne příslušného kalendářního měsíce na účet pronajímatele
          č. 123456789/0800.“
        </p>
        <p>
          Tato změna nabývá účinnosti dnem 1. 1. 2027. Ostatní ujednání smlouvy zůstávají beze
          změny. Dodatek je vyhotoven ve dvou stejnopisech, každá strana obdrží jeden.
        </p>
      </Ramecek>

      <H2 id="nejde">Co dodatkem nezměníš ani s podpisem</H2>
      <P>
        Dodatek je pořád jen smlouva, takže nemůže obejít to, co zákon u nájmu bytu zakazuje:
      </P>
      <Seznam>
        <Polozka>Zkrátit zákonnou <OdkazHeslo slug="vypovedni-doba">výpovědní dobu</OdkazHeslo> nebo přidat výpovědní důvody nad rámec zákona.</Polozka>
        <Polozka>Zvýšit <OdkazHeslo slug="jistota">jistotu</OdkazHeslo> spolu se smluvní pokutou nad trojnásobek měsíčního nájemného.</Polozka>
        <Polozka>Vyloučit nájemcovo právo na úroky z jistoty.</Polozka>
        <Polozka>Zakázat přihlášení trvalého pobytu nebo přijetí osoby blízké do domácnosti.</Polozka>
      </Seznam>
      <P>
        K takovým ujednáním se nepřihlíží, i když je nájemce podepíše. Zbytek dodatku tím ale
        nepadá — platí dál.
      </P>

      <H2 id="chyby">Nejčastější chyby</H2>
      <Seznam cislovany>
        <Polozka><strong>Ústní dohoda.</strong> „Domluvili jsme se po telefonu“ se po roce dokazuje mizerně.</Polozka>
        <Polozka><strong>Dodatek bez data účinnosti.</strong> Pak se strany přou, od kdy platí nová částka.</Polozka>
        <Polozka><strong>Změna popsaná jen rozdílem.</strong> Místo „nájemné se zvyšuje o 1 500 Kč“ napiš celé nové znění článku.</Polozka>
        <Polozka><strong>Prodloužení podepsané po uplynutí doby.</strong> To už nájem často běží na dobu neurčitou z obnovení a dodatek řeší něco jiného, než si myslíš.</Polozka>
        <Polozka><strong>Dodatek, který mění článek, jenž už jiný dodatek změnil.</strong> Odkazuj vždy na aktuální znění.</Polozka>
      </Seznam>
      <P>
        U zvýšení nájemného bez souhlasu nájemce dodatek nevznikne a je potřeba jít zákonnou cestou —
        tu rozebírám v článku <OdkazClanek slug="zvyseni-najmu">Jak zvýšit nájemné</OdkazClanek>.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš smlouvu u konkrétní nemovitosti i s platností a rozpisem plateb. Když
          dodatek změní nájemné od určitého data, zapíšeš novou výši a měsíční platby se podle ní
          přepočítají — starší měsíce zůstanou na původní částce, takže evidence odpovídá tomu,
          co doopravdy platilo.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
