import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'dane-z-pronajmu',
  nadpis: 'Daň z pronájmu bytu: paušál 30 %, nebo skutečné výdaje?',
  perex: 'Spočítané na konkrétním bytě — kde se paušál vyplatí, kdy vyhrají odpisy a úroky z hypotéky, jaké jsou lhůty pro přiznání a co si schovávat celý rok.',
  tema: 'dane',
  datum: '2026-10-01',
  minut: 11,
  sekce: [
    { id: 'kdy', nadpis: 'Kdy musíš podat přiznání a do kdy' },
    { id: 'paragraf', nadpis: 'Nájem podle § 9, ne živnost' },
    { id: 'pausal', nadpis: 'Paušál 30 % se stropem 600 000 Kč' },
    { id: 'skutecne', nadpis: 'Skutečné výdaje: co všechno si smíš odečíst' },
    { id: 'odpisy', nadpis: 'Odpisy — položka, kterou paušál nikdy nedožene' },
    { id: 'srovnani', nadpis: 'Srovnání na jednom bytě' },
    { id: 'omyly', nadpis: 'Čtyři omyly, které stojí peníze' },
    { id: 'doklady', nadpis: 'Co si schovávat celý rok' },
  ],
  faq: [
    {
      otazka: 'Platí se z nájmu sociální a zdravotní pojištění?',
      odpoved: 'Ne. Příjmy z nájmu podle § 9 nevstupují do vyměřovacích základů pro sociální ani zdravotní pojištění. Právě proto se pronajímání obvykle nevyplatí vést jako živnost — tam by pojistné platit šlo.',
    },
    {
      otazka: 'Můžu každý rok střídat paušál a skutečné výdaje?',
      odpoved: 'Způsob volíš pro celé zdaňovací období a nelze ho uvnitř roku měnit. Mezi lety přejít můžeš, ale přechod má daňové dopady — typicky úpravu základu daně. Spočítej si ho dopředu, ideálně s daňovým poradcem.',
    },
    {
      otazka: 'Jak dlouho se odepisuje byt?',
      odpoved: 'Byt a bytový dům patří do páté odpisové skupiny, tedy 30 let. U rovnoměrného odpisování jde v prvním roce o nižší procento vstupní ceny a v dalších letech o stálou částku.',
    },
    {
      otazka: 'Daní se nájemné, které nájemník nezaplatil?',
      odpoved: 'U fyzické osoby s příjmy podle § 9 se daní to, co ti skutečně došlo v daném roce. Předepsané, ale nezaplacené nájemné nedaníš. Když ho nájemník doplatí později, zdaníš ho v roce, kdy platba přišla.',
    },
    {
      otazka: 'Potřebuju na pronájem bytu živnostenský list?',
      odpoved: 'Na běžný dlouhodobý nájem ne. Jakmile ale k bydlení přidáváš služby jako úklid, výměnu prádla nebo recepci — typicky u krátkodobého pronájmu přes platformy — jde o ubytovací službu, která živnostenské oprávnění vyžaduje.',
    },
  ],
  zdroje: ['§ 9 a § 38g zákona o daních z příjmů', 'informace Finanční správy'],
}

export default function DaneZPronajmu() {
  return (
    <>
      <Perex>
        Příjem z pronájmu bytu se daní podle <Zakon>§ 9 zákona o daních z příjmů</Zakon>. Rozhodnutí,
        které tě stojí nejvíc peněz, je jediné: jestli uplatníš paušál 30 %, nebo skutečné výdaje.
        U bytu s hypotékou je rozdíl klidně desítky tisíc ročně.
      </Perex>

      <Shrnuti>
        <li>Z nájmu podle § 9 se neplatí sociální ani zdravotní pojištění.</li>
        <li>Paušál je 30 % příjmů, nejvýše 600 000 Kč — tedy plně využitý do příjmu 2 miliony ročně.</li>
        <li>Skutečné výdaje skoro vždy vyhrají, pokud máš hypotéku nebo odepisuješ.</li>
        <li>Daní se to, co ti opravdu přišlo, ne co jsi předepsal.</li>
        <li>Lhůta je tři měsíce po konci roku, elektronicky čtyři, s poradcem šest.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="kdy">Kdy musíš podat přiznání a do kdy</H2>
      <P>
        Dvě hranice, podle kterých se to pozná:
      </P>
      <Seznam>
        <Polozka>
          <strong>Máš zaměstnání</strong> a vedle něj příjmy z nájmu nad <strong>20 000 Kč</strong> za
          rok? Přiznání podáváš a zaměstnavatel ti roční zúčtování neudělá.
        </Polozka>
        <Polozka>
          <strong>Nemáš zaměstnání</strong>? Rozhoduje celkový roční příjem — přiznání se podává,
          když přesáhne <strong>50 000 Kč</strong>.
        </Polozka>
      </Seznam>
      <Tabulka
        hlavicka={['Jak podáváš', 'Lhůta', 'Pro koho']}
        radky={[
          ['Papírově', '3 měsíce po konci roku (zpravidla 1. dubna)', 'Kdo nemá datovou schránku'],
          ['Elektronicky', '4 měsíce (zpravidla začátek května)', 'Datovou schránkou nebo přes portál'],
          ['Přes daňového poradce', '6 měsíců (zpravidla 1. července)', 'Plnou moc je potřeba uplatnit včas'],
        ]}
      />
      <P>
        Když lhůta padne na víkend nebo svátek, posouvá se na nejbližší pracovní den — proto bývá
        elektronický termín někdy 2. a jindy 4. května.
      </P>

      <H2 id="paragraf">Nájem podle § 9, ne živnost</H2>
      <P>
        Běžný dlouhodobý pronájem bytu je příjem z nájmu podle § 9. Není to podnikání, nepotřebuješ
        živnostenské oprávnění a neplatíš z toho pojistné. Hranice se posune ve chvíli, kdy
        k bydlení přidáš služby — úklid, výměnu prádla, recepci, krátké pobyty hostů. Pak už jde
        o ubytovací službu podle § 7 se vším všudy, jak rozebírám
        v článku <OdkazClanek slug="kratkodoby-pronajem">o krátkodobém pronájmu</OdkazClanek>.
      </P>

      <H2 id="pausal">Paušál 30 % se stropem 600 000 Kč</H2>
      <P>
        Od příjmů odečteš 30 %, nejvýše však 600 000 Kč za rok. Strop se naplno využije u příjmu
        2 miliony korun ročně; nad tuhle hranici už paušál neroste. Nemusíš nic dokládat
        ani schovávat účtenky a vedeš jen evidenci příjmů.
      </P>
      <P>
        Paušál dává smysl u bytu bez hypotéky, který jsi zdědil nebo dávno splatil a kde jsi
        loni nic neopravoval. Jakmile ale máš odpis nebo úroky, obvykle prohrává.
      </P>

      <H2 id="skutecne">Skutečné výdaje: co všechno si smíš odečíst</H2>
      <Seznam>
        <Polozka><strong>Odpisy</strong> bytu — největší položka, viz níž.</Polozka>
        <Polozka><strong>Úroky z hypotéky</strong> na pořízení pronajímaného bytu (jistina ne, jen úroky).</Polozka>
        <Polozka><strong>Opravy a údržba</strong> — malování, oprava kotle, výměna baterie.</Polozka>
        <Polozka><strong>Pojištění</strong> nemovitosti a odpovědnosti.</Polozka>
        <Polozka><strong>Daň z nemovitých věcí</strong> za pronajímaný byt.</Polozka>
        <Polozka><strong>Příspěvky do fondu oprav</strong> v rozsahu, v jakém jde o náklady na opravy a správu.</Polozka>
        <Polozka><strong>Odměna správci</strong>, realitní provize za zprostředkování nájmu, inzerce.</Polozka>
        <Polozka><strong>Poplatky bance</strong> za účet vedený k pronájmu, poštovné, cestovné k bytu.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          <strong>Technické zhodnocení není oprava.</strong> Nová kuchyňská linka, zateplení nebo
          přestavba koupelny se nedávají do výdajů najednou — zvyšují vstupní cenu a odepisují se.
          Hranicí je 80 000 Kč za zdaňovací období na jednom majetku.
        </p>
      </Ramecek>

      <H2 id="odpisy">Odpisy — položka, kterou paušál nikdy nedožene</H2>
      <P>
        Byt patří do páté odpisové skupiny, odepisuje se tedy 30 let. Vstupní cenou je pořizovací
        cena bytu; hodnota pozemku se neodepisuje, takže u rodinného domu je potřeba cenu rozdělit.
      </P>
      <Ramecek druh="priklad">
        <p>
          Byt pořízený za 2 400 000 Kč. Při rovnoměrném odpisování je roční odpis v dalších letech
          zhruba <strong>80 000 Kč</strong>. O tolik se ti každý rok snižuje základ daně, aniž bys
          cokoli zaplatil — peníze jsi vydal při koupi.
        </p>
      </Ramecek>
      <P>
        Pokud jsi byt pořídil výrazně dřív, než jsi ho začal pronajímat, existují zvláštní pravidla
        pro určení vstupní ceny. To je přesně otázka na účetní — rozdíl v odpisu může být
        značný a špatně určená vstupní cena se táhne celých třicet let.
      </P>

      <H2 id="srovnani">Srovnání na jednom bytě</H2>
      <Ramecek druh="priklad">
        <p>
          <strong>Nájemné 20 000 Kč měsíčně, tedy 240 000 Kč za rok.</strong>
        </p>
        <p>
          <strong>Paušál:</strong> výdaje 72 000 Kč, základ daně 168 000 Kč, daň 15 % =
          <strong> 25 200 Kč</strong>.
        </p>
        <p>
          <strong>Skutečné výdaje:</strong> odpis 80 000 + úroky z hypotéky 48 000 + opravy 25 000
          + pojištění 4 000 + daň z nemovitých věcí 1 500 = 158 500 Kč. Základ daně 81 500 Kč,
          daň 15 % = <strong>12 225 Kč</strong>.
        </p>
        <p>
          Rozdíl <strong>12 975 Kč ročně</strong>, tedy skoro sedm měsíčních nájmů za deset let.
        </p>
      </Ramecek>
      <P>
        Sazba daně je 15 % pro část základu daně do 36násobku průměrné mzdy a 23 % nad touto
        hranicí. U jednoho pronajímaného bytu se k vyšší sazbě obvykle nedostaneš, pokud k tomu
        nemáš vysoký příjem ze zaměstnání.
      </P>

      <H2 id="omyly">Čtyři omyly, které stojí peníze</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Zálohy na služby nejsou tvůj příjem</strong>, pokud je jen vybíráš, platíš z nich
          dodavatelům a na konci roku vyúčtuješ. Příjmem je nájemné.
        </Polozka>
        <Polozka>
          <strong>Jistota není příjem</strong> — je to vratná záloha. Příjmem se stane až ve chvíli,
          kdy si z ní něco oprávněně ponecháš.
        </Polozka>
        <Polozka>
          <strong>Nezaplacené nájemné nedaníš.</strong> Daní se, co ti skutečně došlo v daném roce.
        </Polozka>
        <Polozka>
          <strong>Paušál neznamená žádnou evidenci.</strong> Výši příjmů musíš umět doložit i tak —
          typicky výpisem z účtu.
        </Polozka>
      </Seznam>

      <H2 id="doklady">Co si schovávat celý rok</H2>
      <Seznam>
        <Polozka>přehled přijatých plateb po měsících a po bytech,</Polozka>
        <Polozka>faktury za opravy a údržbu s datem a dodavatelem,</Polozka>
        <Polozka>roční vyúčtování služeb a vyúčtování od společenství vlastníků,</Polozka>
        <Polozka>potvrzení banky o zaplacených úrocích,</Polozka>
        <Polozka>pojistné smlouvy a doklad o zaplacení daně z nemovitých věcí,</Polozka>
        <Polozka>kupní smlouvu a doklady k technickému zhodnocení kvůli odpisům.</Polozka>
      </Seznam>
      <P>
        Doklady se uchovávají dlouho — u plateb souvisejících s DPH jde o deset let od konce
        zdaňovacího období, ve kterém se platba uskutečnila. Prakticky to znamená nic nemazat.
      </P>

      <Ramecek druh="housio">
        <p>
          Housio umí stáhnout jeden sešit se vším, co k nemovitosti za celou dobu máš — přijaté
          platby po měsících, výdaje s dodavateli a kategoriemi, smlouvy, pojištění i revize.
          Účetní tak dostane podklad pro přiznání jedním klikem místo skládání z e-mailů
          a bankovních výpisů. A protože se eviduje, co doopravdy přišlo, sedí čísla s tím,
          co se má danit.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
