import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'evidencni-list',
  nadpis: 'Evidenční list nájemného: k čemu je dobrý a co v něm má být',
  perex: 'Jediná příloha smlouvy, kterou změníš bez dodatku — pokud na ni smlouva správně odkazuje. Co do ní patří, kdy ji vystavit znovu a jaká věta ve smlouvě o tom rozhoduje.',
  tema: 'najemne',
  datum: '2026-10-01',
  minut: 6,
  sekce: [
    { id: 'co', nadpis: 'Co to je a proč ho vést' },
    { id: 'veta', nadpis: 'Věta ve smlouvě, bez které je to jen papír' },
    { id: 'obsah', nadpis: 'Co v evidenčním listu má být' },
    { id: 'kdy', nadpis: 'Kdy ho vystavit znovu' },
    { id: 'doruceni', nadpis: 'Jak ho doručit' },
  ],
  faq: [
    {
      otazka: 'Je evidenční list povinný?',
      odpoved: 'Ne. U nájmu podle občanského zákoníku nemá oporu v zákoně — pochází z dob regulovaného nájemného. Je to dobrovolná příloha smlouvy, která se ale v praxi hodí.',
    },
    {
      otazka: 'Můžu jím zvýšit nájemné?',
      odpoved: 'Evidenční list jen zapisuje výši, kterou jsi platně sjednal nebo prosadil. Zvýšení nájemného má vlastní pravidla a samotným vystavením nového listu ho nezvýšíš.',
    },
    {
      otazka: 'Musí ho nájemník podepsat?',
      odpoved: 'U prvního listu se podpis obou stran hodí, protože je součástí smlouvy. U pozdějších změn záloh stačí písemné oznámení s odůvodněním, pokud to smlouva umožňuje.',
    },
    {
      otazka: 'Jaký je rozdíl mezi evidenčním listem a předpisem plateb?',
      odpoved: 'Evidenční list je dokument sjednaný k bytu. Předpis plateb je to, co z něj vyplývá pro konkrétní měsíc. V evidenci je praktické mít obojí — list jako dokument a předpis jako číslo, ke kterému se porovnávají skutečné platby.',
    },
  ],
  zdroje: ['praxe podle zákona č. 67/2013 Sb. a § 2235 a násl. občanského zákoníku'],
}

export default function EvidencniList() {
  return (
    <>
      <Perex>
        Evidenční list nájemného dnes nemá oporu v zákoně — pochází z dob regulovaného nájemného.
        Přesto ho spousta pronajímatelů používá dál a má to dobrý důvod: je to jediná příloha
        smlouvy, kterou změníš bez dodatku.
      </Perex>

      <Shrnuti>
        <li>Není povinný, ale ušetří ti dodatky ke smlouvě při každé změně záloh.</li>
        <li>Funguje jen tehdy, když na něj smlouva výslovně odkazuje.</li>
        <li>Zálohy v něm musí být rozepsané po službách, ne jednou částkou.</li>
        <li>Nájemné jím nezvýšíš — to má vlastní postup.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="co">Co to je a proč ho vést</H2>
      <P>
        Evidenční list je jednostránkový přehled, kde je u konkrétního bytu rozepsané nájemné,
        jednotlivé zálohy na služby a počet osob, podle kterých se zálohy počítají. Nájemní smlouva
        na něj odkazuje a tím se stává její součástí.
      </P>
      <P>
        Výhoda je ryze praktická. Když se změní cena vody nebo se do bytu nastěhuje další osoba,
        nemusíš podepisovat dodatek ke smlouvě — vystavíš nový evidenční list s datem účinnosti,
        pošleš ho nájemníkovi a máš doloženo, odkdy platí jaké zálohy.
      </P>

      <H2 id="veta">Věta ve smlouvě, bez které je to jen papír</H2>
      <Ramecek druh="vzor">
        <p>
          „Výše nájemného a záloh na služby je uvedena v evidenčním listu, který tvoří přílohu
          této smlouvy. Pronajímatel je oprávněn výši záloh na služby změnit při změně ceny služby,
          rozsahu spotřeby nebo počtu osob užívajících byt; novou výši sdělí nájemci písemně
          s uvedením důvodu, a to nejméně jeden kalendářní měsíc před její účinností.“
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Bez takové věty je nový evidenční list jen papír a změnu záloh musíš udělat dodatkem,
          který nájemník podepíše. Když ho podepsat odmítne, platí původní zálohy dál.
        </p>
      </Ramecek>

      <H2 id="obsah">Co v evidenčním listu má být</H2>
      <Tabulka
        hlavicka={['Položka', 'Proč tam je']}
        radky={[
          ['Označení bytu', 'Adresa, číslo jednotky, podlahová plocha — kvůli rozúčtování podle plochy'],
          ['Nájemník a počet osob', 'Podle počtu osob se rozúčtovává voda a odpad'],
          ['Nájemné samostatně', 'Odděleně od záloh, kvůli daním i vyúčtování'],
          ['Zálohy po jednotlivých službách', 'Jedna souhrnná částka neumožní vyúčtovat'],
          ['Celková měsíční platba', 'To, co má nájemník poslat'],
          ['Datum účinnosti', 'Od kdy nové částky platí'],
        ]}
      />
      <Ramecek druh="priklad">
        <p><strong>Evidenční list k 1. 1. 2026 — byt 2+kk, Opavská 3, Krnov, 2 osoby, 54 m²</strong></p>
        <p>
          Nájemné 20 000 · teplo 1 800 · teplá voda 800 · studená voda 600 · elektřina společných
          prostor 150 · odpad 200 · výtah a úklid 450
        </p>
        <p>
          Celkem měsíčně <strong>24 000 Kč</strong>, splatné k 15. dni měsíce.
          Zálohy odpovídají vyúčtování za rok 2025 navýšenému o 8 %.
        </p>
      </Ramecek>
      <P>
        Rozepsané zálohy jsou důležitější, než se zdá. Když je v listu jen „zálohy 4 000 Kč“,
        nemáš z čeho vyjít při <OdkazClanek slug="vyuctovani-sluzeb">vyúčtování</OdkazClanek> a
        nájemník má plné právo se ptát, kolik z toho šlo na teplo.
      </P>

      <H2 id="kdy">Kdy ho vystavit znovu</H2>
      <Seznam>
        <Polozka>po ročním vyúčtování, když zálohy zjevně nestačí nebo jsou zbytečně vysoké,</Polozka>
        <Polozka>při změně počtu osob v bytě,</Polozka>
        <Polozka>při změně ceny od dodavatele nebo změně záloh předepsaných společenstvím vlastníků,</Polozka>
        <Polozka>při změně nájemného — tam ale pozor, <OdkazClanek slug="zvyseni-najmu">zvýšení má vlastní pravidla</OdkazClanek> a evidenční list je jen zapisuje.</Polozka>
      </Seznam>

      <H2 id="doruceni">Jak ho doručit</H2>
      <P>
        Písemně a tak, abys doručení uměl doložit — doporučeně, datovou schránkou nebo proti podpisu
        na druhém výtisku. Dej nájemníkovi rozumný čas, typicky od začátku dalšího měsíce,
        ne zpětně. A vždy napiš důvod změny; „protože“ není důvod, „podle vyúčtování za rok 2025
        vznikl nedoplatek 7 600 Kč“ ano.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu zapisuješ nájemné a jednotlivé zálohy u nemovitosti jako šablonu nájmu. Z té se
          skládá předpis pro každý měsíc, takže evidenční list i vyúčtování stojí na stejných
          číslech jako měsíční platby. Když zálohy změníš, platí nové od data, které zadáš —
          starší měsíce zůstanou tak, jak byly doopravdy.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
