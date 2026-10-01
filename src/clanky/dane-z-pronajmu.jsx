import { Perex, H2, H3, P, Seznam, Polozka, Ramecek, Zakon, Upozorneni } from '@/components/clanek/Prvky'

export default function DaneZPronajmu() {
  return (
    <>
      <Perex>
        Příjem z pronájmu bytu se daní podle <Zakon>§ 9 zákona o daních z příjmů</Zakon>. Rozhodnutí,
        které tě stojí nejvíc peněz, je jediné: jestli uplatníš paušál 30 %, nebo skutečné výdaje.
        Jednou za čas se vyplatí to přepočítat znovu.
      </Perex>

      <H2>Kdy vůbec podáváš přiznání</H2>
      <P>
        Zjednodušeně: když máš vedle zaměstnání příjmy z pronájmu nad 20 000 Kč za rok, přiznání
        podáváš a zaměstnavatel ti roční zúčtování neudělá. Když jsi bez zaměstnání, rozhoduje
        celkový roční příjem.
      </P>
      <Seznam>
        <Polozka><strong>do 1. dubna</strong> — papírové přiznání</Polozka>
        <Polozka><strong>do 2. května</strong> — elektronicky (datovou schránkou nebo přes portál)</Polozka>
        <Polozka><strong>do 1. července</strong> — když ti přiznání zpracovává daňový poradce</Polozka>
      </Seznam>
      <P>
        Dobrá zpráva: z příjmu podle § 9 se neplatí sociální ani zdravotní pojištění. To je rozdíl
        oproti živnosti, kvůli kterému se pronájem obvykle nevyplatí podnikatelsky.
      </P>

      <H2>Paušál 30 %, nebo skutečné výdaje</H2>
      <H3>Paušál</H3>
      <P>
        Od příjmů odečteš 30 %, nejvýše však 600 000 Kč za rok. Nemusíš nic dokládat ani schovávat
        účtenky. Daní se rozdíl.
      </P>
      <H3>Skutečné výdaje</H3>
      <P>
        Odečteš, co jsi doopravdy vynaložil: opravy a údržbu, pojištění nemovitosti, daň
        z nemovitých věcí, úroky z hypotéky na pořízení bytu, odměnu správci, poplatky bance —
        a hlavně <strong>odpisy</strong>. Byt se odpisuje 30 let a u běžného bytu jde o desítky
        tisíc ročně, které paušál vůbec nezohledňuje.
      </P>
      <Ramecek druh="priklad">
        <p>
          <strong>Nájemné 20 000 Kč měsíčně, tedy 240 000 Kč za rok.</strong>
        </p>
        <p>
          Paušál: výdaje 72 000 Kč, základ daně 168 000 Kč, daň 15 % = <strong>25 200 Kč</strong>.
        </p>
        <p>
          Skutečné výdaje: odpis 80 000 Kč + pojištění 4 000 + daň z nemovitých věcí 1 500 +
          opravy 25 000 + úroky 48 000 = 158 500 Kč. Základ daně 81 500 Kč, daň 15 % =
          <strong> 12 225 Kč</strong>.
        </p>
        <p>
          Rozdíl je skoro 13 000 Kč ročně. U bytu s hypotékou skutečné výdaje skoro vždy vyhrají.
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Způsob se dá mezi lety měnit, ale ne libovolně: když přejdeš z paušálu na skutečné výdaje,
          musíš dodanit pohledávky a doplatit, co paušál „zahrnoval“. Přechod si napřed spočítej,
          ideálně s daňovým poradcem, a zvol způsob pro celý rok dopředu.
        </p>
      </Ramecek>

      <H2>Co si u paušálu nejčastěji lidé pletou</H2>
      <Seznam>
        <Polozka>
          <strong>Zálohy na služby nejsou tvůj příjem</strong>, pokud je jen vybíráš a přeposíláš
          dodavatelům a na konci roku vyúčtuješ. Příjmem je nájemné.
        </Polozka>
        <Polozka>
          <strong>Jistota není příjem</strong> — je to vratná záloha. Příjmem se stane až v okamžiku,
          kdy si z ní něco oprávněně ponecháš.
        </Polozka>
        <Polozka>
          <strong>Technické zhodnocení není oprava.</strong> Nová kuchyňská linka nebo zateplení se
          nedávají do výdajů najednou, zvyšují vstupní cenu a odepisují se.
        </Polozka>
        <Polozka>
          <strong>Daň se počítá z toho, co ti opravdu přišlo</strong> v daném roce — nikoli z toho,
          co bylo předepsáno. Nezaplacené nájemné nedaníš.
        </Polozka>
      </Seznam>

      <H2>Co si schovávat celý rok</H2>
      <P>
        I u paušálu musíš umět doložit výši příjmů. U skutečných výdajů potřebuješ ke každé položce
        doklad. Prakticky to znamená držet pohromadě:
      </P>
      <Seznam>
        <Polozka>přehled přijatých plateb po měsících a po bytech,</Polozka>
        <Polozka>faktury za opravy a údržbu s datem a dodavatelem,</Polozka>
        <Polozka>roční vyúčtování služeb,</Polozka>
        <Polozka>potvrzení banky o zaplacených úrocích,</Polozka>
        <Polozka>pojistné smlouvy a doklad o zaplacení daně z nemovitých věcí.</Polozka>
      </Seznam>
      <P>
        Daňové doklady se uchovávají dlouho — u plateb souvisejících s DPH jde o deset let od konce
        zdaňovacího období, ve kterém se platba uskutečnila. Pro jistotu je lepší nic nemazat.
      </P>

      <Ramecek druh="housio">
        <p>
          Housio umí stáhnout jeden sešit se vším, co k nemovitosti za celou dobu máš — přijaté
          platby po měsících, výdaje s dodavateli a kategoriemi, smlouvy, pojištění i revize.
          Účetní tak dostane podklad pro přiznání jedním klikem místo skládání z e-mailů
          a výpisů z účtu.
        </p>
      </Ramecek>

      <Upozorneni aktualizovano="1. 10. 2026" />
    </>
  )
}
