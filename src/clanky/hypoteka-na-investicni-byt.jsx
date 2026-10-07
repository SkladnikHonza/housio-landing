import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'hypoteka-na-investicni-byt',
  nadpis: 'Hypotéka na investiční byt: co se od dubna 2026 změnilo',
  perex: 'ČNB doporučila bankám u investičních hypoték přísnější limity — LTV 70 % a DTI 7. Co to znamená pro třetí byt v pořadí, co se počítá jako investiční hypotéka a proč je úrok daňově něco jiného než splátka.',
  tema: 'investice',
  datum: '2026-10-07',
  minut: 8,
  sekce: [
    { id: 'limity', nadpis: 'Jaké limity dnes platí' },
    { id: 'investicni', nadpis: 'Co je investiční hypotéka' },
    { id: 'doporuceni', nadpis: 'Doporučení není zákaz' },
    { id: 'prijem', nadpis: 'Počítá banka nájemné jako příjem' },
    { id: 'dane', nadpis: 'Úrok ano, splátka ne' },
    { id: 'rizika', nadpis: 'Čeho se u páky bát' },
  ],
  faq: [
    {
      otazka: 'Jaké limity pro hypotéky teď platí závazně?',
      odpoved: 'Závazná je jen horní hranice LTV: 80 % hodnoty zastavené nemovitosti, u žadatelů mladších 36 let financujících vlastní bydlení 90 %. Ukazatele DTI a DSTI zůstávají podle rozhodnutí bankovní rady ČNB deaktivované, tedy bez závazné horní hranice.',
    },
    {
      otazka: 'Co přesně ČNB doporučila u investičních hypoték?',
      odpoved: 'V tiskové zprávě z 27. 11. 2025 doporučila poskytovatelům uplatňovat od 1. dubna 2026 u investičních hypotečních úvěrů obezřetnější úroveň LTV 70 % a DTI 7. Je to doporučení, ne závazná vyhláška — banky se jím ale v praxi řídí.',
    },
    {
      otazka: 'Kdy je hypotéka podle ČNB investiční?',
      odpoved: 'Podle definice z téže zprávy jde o úvěr poskytnutý na pořízení třetí a další obytné nemovitosti, nebo na pořízení obytné nemovitosti určené k pronájmu. Nerozhoduje tedy jen tvůj záměr, ale i to, kolik nemovitostí už máš.',
    },
    {
      otazka: 'Můžu si úroky z hypotéky odečíst od příjmu z pronájmu?',
      odpoved: 'Pokud uplatňuješ skutečné výdaje, ano — úroky z úvěru na pořízení pronajímané nemovitosti jsou daňově uznatelný výdaj. Splátka jistiny výdajem není, jen snižuje dluh. Při výdajovém paušálu si nemůžeš odečíst nic navíc, paušál pokrývá všechno.',
    },
    {
      otazka: 'Zohlední banka nájemné, které z bytu budu mít?',
      odpoved: 'Většinou částečně — banky typicky uznávají jen část očekávaného nájemného a často až po doložení podepsané nájemní smlouvy. Na plný příjem z nepronajatého bytu nespoléhej; u prvního investičního bytu počítej s tím, že úvěr musíš unést z ostatních příjmů.',
    },
    {
      otazka: 'Mám si brát hypotéku, když mám na byt celou částku?',
      odpoved: 'Je to otázka na porovnání úroku s výnosem, ne na univerzální odpověď. Když je úrok nižší než čistý výnos bytu, páka ti výnos z vlastních peněz zvedá. Když vyšší, snižuje ho. A u každé páky platí, že zvětšuje i ztrátu.',
    },
  ],
  zdroje: [
    'ČNB, tisková zpráva z 27. 11. 2025 (doporučení k investičním hypotečním úvěrům)',
    'ČNB, stanovení horní hranice úvěrových ukazatelů LTV, DTI a DSTI',
    '§ 24 zákona o daních z příjmů',
  ],
}

export default function HypotekaNaInvesticniByt() {
  return (
    <>
      <Perex>
        Od dubna 2026 banky u investičních hypoték počítají přísněji. Není to zákon ani vyhláška,
        je to doporučení ČNB — v praxi se ale podle něj úvěry schvalují.
      </Perex>

      <Shrnuti>
        <li>Závazné je jen LTV 80 % (90 % do 36 let na vlastní bydlení).</li>
        <li>DTI a DSTI zůstávají deaktivované, bez závazné hranice.</li>
        <li>U investičních hypoték ČNB doporučuje LTV 70 % a DTI 7 od 1. 4. 2026.</li>
        <li>Investiční = třetí a další byt, nebo byt určený k pronájmu.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="limity">Jaké limity dnes platí</H2>
      <Tabulka
        hlavicka={['Ukazatel', 'Co měří', 'Závazná hranice']}
        radky={[
          ['LTV', 'úvěr ÷ hodnota zastavené nemovitosti', '80 %, u žadatelů do 36 let na vlastní bydlení 90 %'],
          ['DTI', 'celkový dluh ÷ roční čistý příjem', 'deaktivováno — bez závazné hranice'],
          ['DSTI', 'měsíční splátky ÷ měsíční čistý příjem', 'deaktivováno — bez závazné hranice'],
        ]}
      />
      <P>
        To, že DTI a DSTI nemají závaznou hranici, neznamená, že je banka nepočítá. Počítá,
        jen podle vlastních pravidel. Deaktivace znamená, že ji k nim nenutí ČNB.
      </P>

      <H2 id="investicni">Co je investiční hypotéka</H2>
      <P>
        Definice z doporučení ČNB je konkrétní a stojí za přečtení, protože se netýká jen lidí,
        kteří o sobě říkají „investor“. Investiční hypotéka je úvěr poskytnutý:
      </P>
      <Seznam>
        <Polozka><strong>na pořízení třetí a další obytné nemovitosti</strong>, nebo</Polozka>
        <Polozka><strong>na pořízení obytné nemovitosti určené k pronájmu.</strong></Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          První podmínka je ta, která překvapuje. Máš byt, ve kterém bydlíš, chalupu po babičce
          a kupuješ si menší byt pro dceru na studia? Je to třetí obytná nemovitost — a banka
          podle doporučení sáhne po přísnějším limitu, i když o žádnou investici nejde.
        </p>
      </Ramecek>
      <P>
        Rozdíl v praxi: u běžné hypotéky doložíš 20 % z ceny, u investiční 30 %. U bytu za
        4 500 000 Kč je to 900 000 Kč proti 1 350 000 Kč — o 450 000 Kč vlastních peněz navíc.
      </P>

      <H2 id="doporuceni">Doporučení není zákaz</H2>
      <P>
        ČNB v téže zprávě z 27. listopadu 2025 nechala kapitálové rezervy beze změny a limity
        u investičních hypoték vydala jako <strong>doporučení</strong>, ne jako závaznou hranici.
        Sama k tomu poznamenala, že právní závaznost by byla pro rovné podmínky na trhu zásadní —
        tedy že by ji preferovala.
      </P>
      <P>
        Pro tebe z toho plyne praktická věc: <strong>banky se liší</strong>. Doporučení si každá
        implementuje po svém a některá může být vstřícnější. Má tedy smysl ptát se víc než jedné,
        a ptát se konkrétně: „Považujete tenhle úvěr za investiční podle doporučení ČNB?“
      </P>

      <H2 id="prijem">Počítá banka nájemné jako příjem</H2>
      <P>
        Částečně a opatrně. Typický postup je, že banka uzná jen část očekávaného nájemného —
        zbytek si nechává jako rezervu na neobsazenost a náklady. A často chce vidět podepsanou
        nájemní smlouvu, ne odhad z inzerátů.
      </P>
      <P>
        U prvního investičního bytu proto počítej s tím, že úvěr musíš unést ze svých ostatních
        příjmů. Teprve u dalšího ti historie plateb z prvního bytu pomůže — a tam se hodí mít
        příjmy doložené, ne jen tvrzené.
      </P>
      <Ramecek druh="priklad">
        <p>
          Byt za 4 500 000 Kč, nájemné 18 000 Kč měsíčně. Banka uzná 70 % nájemného, tedy
          12 600 Kč. Splátka hypotéky na 3 150 000 Kč (LTV 70 %) na 25 let při 4,5 % je zhruba
          17 500 Kč. Rozdíl 4 900 Kč měsíčně musíš unést z vlastních příjmů — a to je stav,
          kdy je byt pronajatý.
        </p>
      </Ramecek>

      <H2 id="dane">Úrok ano, splátka ne</H2>
      <P>
        Tohle je nejčastější chyba v daňovém přiznání z pronájmu. Splátka hypotéky má dvě části
        a daňově se chovají úplně jinak.
      </P>
      <Tabulka
        hlavicka={['Část splátky', 'Daňově', 'Proč']}
        radky={[
          ['Úrok', 'uznatelný výdaj', 'je to cena za půjčené peníze'],
          ['Jistina', 'není výdaj', 'jen splácíš dluh, majetek ti zůstává'],
          ['Poplatky za vedení úvěru', 'uznatelný výdaj', 'souvisí s dosažením příjmu'],
          ['Pojištění nemovitosti', 'uznatelný výdaj', 'souvisí s pronajímaným majetkem'],
        ]}
      />
      <P>
        Uplatnit úrok můžeš jen při <OdkazHeslo slug="skutecne-vydaje">skutečných výdajích</OdkazHeslo>.
        Při <OdkazHeslo slug="vydajovy-pausal">výdajovém paušálu</OdkazHeslo> je v paušálu
        zahrnuto všechno a nic navíc si neodečteš — což u bytu na hypotéku obvykle znamená,
        že se paušál nevyplatí. Obě varianty porovnává
        článek <OdkazClanek slug="dane-z-pronajmu">o daních z pronájmu</OdkazClanek>.
      </P>
      <Ramecek druh="pozor">
        <p>
          Nepleť si to s odpočtem úroků z úvěru na <strong>vlastní bytovou potřebu</strong>
          podle <Zakon>§ 15</Zakon>, který si lidé odečítají od základu daně za bydlení.
          U bytu, který pronajímáš, jde o jinou věc: úrok je výdajem na dosažení příjmu
          podle <Zakon>§ 24</Zakon>.
        </p>
      </Ramecek>

      <H2 id="rizika">Čeho se u páky bát</H2>
      <P>
        Hypotéka zvětšuje výsledek oběma směry. Co se stane, když se něco pokazí:
      </P>
      <Seznam>
        <Polozka>
          <strong>Prázdný byt.</strong> Nájem nechodí, splátka ano. Tři měsíce bez nájemníka
          u bytu, kde splátka převyšuje nájem, znamená vzít peníze odjinud.
        </Polozka>
        <Polozka>
          <strong>Konec fixace.</strong> Úrok se mění, splátka taky. Byt, který při 2,5 % vydělával,
          při 5,5 % prodělává — a ty s tím do konce fixace nic neuděláš.
        </Polozka>
        <Polozka>
          <strong>Neplatící nájemník.</strong> Vymáhání trvá měsíce a splátka běží celou dobu.
          Postup popisuje <OdkazClanek slug="neplatici-najemnik">článek o neplatícím nájemníkovi</OdkazClanek>,
          ale ani nejrychlejší postup ti peníze nevrátí hned.
        </Polozka>
        <Polozka>
          <strong>Pokles ceny.</strong> Při LTV 70 % stačí pokles o 30 % a dluh se rovná hodnotě.
          Při refinancování to banka uvidí.
        </Polozka>
      </Seznam>
      <P>
        Nic z toho není důvod hypotéku nebrat. Je to důvod mít rezervu — a za rozumnou se u bytu
        na úvěr považuje aspoň půlroční splátka stranou, plus rezerva na opravu.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš u bytu příjmy i výdaje včetně úroků a pojistného, takže na konci roku
          máš podklad pro skutečné výdaje pohromadě a nemusíš ho skládat z výpisů. Z ročního
          přehledu zároveň uvidíš, kolik měsíců byl byt obsazený.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
