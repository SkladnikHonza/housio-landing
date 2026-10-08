import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, OdkazKalkulacka, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'vynos-z-pronajmu',
  nadpis: 'Výnos z pronájmu: jak ho spočítat tak, aby nelhal',
  perex: 'Hrubý výnos ti řekne, že byt vydělává pět procent. Po odečtení toho, co se opravdu platí, z toho bývá polovina. Jak počítat čistý výnos, co do nákladů patří a proč je výnos z kapitálu jiné číslo než výnos z ceny bytu.',
  tema: 'investice',
  datum: '2026-10-07',
  minut: 9,
  sekce: [
    { id: 'hruby', nadpis: 'Hrubý výnos a proč sám o sobě nestačí' },
    { id: 'cisty', nadpis: 'Čistý výnos: co se musí odečíst' },
    { id: 'kapital', nadpis: 'Výnos z vlastního kapitálu' },
    { id: 'neobsazenost', nadpis: 'Počítej s tím, že byt bude občas prázdný' },
    { id: 'zhodnoceni', nadpis: 'Zhodnocení ceny není výnos, dokud neprodáš' },
    { id: 'srovnani', nadpis: 'S čím výnos srovnávat' },
  ],
  faq: [
    {
      otazka: 'Jaký výnos je u bytu dobrý?',
      odpoved: 'Univerzální číslo neexistuje a kdo ho tvrdí, prodává. Smysluplné srovnání je proti bezrizikové alternativě: pokud ti spořicí účet nebo státní dluhopis dává podobně jako čistý výnos bytu, nebereš za riziko a práci nic navíc. Rozdíl mezi nimi je to, co ti pronájem platí za starost.',
    },
    {
      otazka: 'Mám do výnosu počítat splátku hypotéky?',
      odpoved: 'Do čistého výnosu z ceny nemovitosti ne — ten má měřit nemovitost, ne způsob financování. Do výnosu z vlastního kapitálu ano, ale jen úrokovou část; splátka jistiny není náklad, jen přesun peněz z účtu do majetku.',
    },
    {
      otazka: 'Patří do nákladů i odpisy?',
      odpoved: 'Do daňového výpočtu ano, do peněžního ne. Odpis snižuje daň, ale žádné peníze ti z účtu neodejdou. Pro posouzení, jestli se byt vyplatí, počítej hlavně s penězi; odpis si pak připočti jako daňovou úsporu.',
    },
    {
      otazka: 'Jak počítat výnos, když byt teprve kupuju?',
      odpoved: 'Do pořizovací ceny započti i vedlejší náklady — poplatek za vklad do katastru, odhad, právní služby, provizi, a hlavně náklady na uvedení bytu do pronajímatelného stavu. Bez nich vyjde výnos optimisticky o celé procento.',
    },
    {
      otazka: 'Má smysl počítat výnos u bytu, který už roky vlastním?',
      odpoved: 'Ano, ale ne z původní kupní ceny. Počítej z dnešní tržní hodnoty: to je částka, kterou v bytě skutečně držíš. Byt koupený před deseti lety může vykazovat krásný výnos z tehdejší ceny a nic moc z té dnešní — a právě to druhé číslo rozhoduje, jestli ho držet dál.',
    },
  ],
  zdroje: ['Vlastní výpočet; použité sazby a lhůty vycházejí z českých daňových předpisů platných k datu aktualizace.'],
}

export default function VynosZPronajmu() {
  return (
    <>
      <Perex>
        „Ten byt dělá šest procent.“ Skoro vždycky je to hrubý výnos, tedy roční nájemné dělené
        cenou. Čísla, která z něj zbydou po dani, pojistce, fondu oprav a jednom prázdném měsíci,
        vypadají úplně jinak.
      </Perex>

      <Shrnuti>
        <li>Hrubý výnos = roční nájemné ÷ pořizovací cena včetně vedlejších nákladů.</li>
        <li>Čistý výnos odečítá všechno, co ti z účtu odejde.</li>
        <li>Neobsazenost není smůla, ale položka v rozpočtu.</li>
        <li>Zhodnocení ceny není příjem, dokud neprodáš.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="hruby">Hrubý výnos a proč sám o sobě nestačí</H2>
      <P>
        Hrubý výnos je nejjednodušší číslo, jaké o bytu můžeš mít:
      </P>
      <Ramecek druh="priklad">
        <p>
          Byt za 4 500 000 Kč, nájemné 18 000 Kč měsíčně bez služeb.<br />
          Roční nájemné 216 000 Kč ÷ 4 500 000 Kč = <strong>4,8 % hrubého výnosu</strong>.
        </p>
      </Ramecek>
      <P>
        Dvě věci, na kterých se tohle číslo nejčastěji nafoukne. První: do ceny se počítá jen kupní
        cena, ne to, co koupě doopravdy stála. Druhá: do nájemného se započítají i zálohy na služby,
        které ale nejsou tvůj příjem — jen je vybíráš a na konci roku
        <OdkazClanek slug="vyuctovani-sluzeb"> vyúčtuješ</OdkazClanek>.
      </P>
      <Ramecek druh="pozor">
        <p>
          Do pořizovací ceny patří i vedlejší náklady: poplatek za vklad do katastru, odhad pro
          banku, právní služby, případná provize a hlavně to, co jsi do bytu musel dát, než se
          dal pronajmout. U staršího bytu to bývají statisíce a posunou výnos o půl procenta
          i víc.
        </p>
      </Ramecek>

      <H2 id="cisty">Čistý výnos: co se musí odečíst</H2>
      <P>
        Čistý výnos počítá s tím, co ti z účtu opravdu odejde. Seznam není dlouhý, ale skoro nikdo
        ho nemá celý:
      </P>
      <Tabulka
        hlavicka={['Položka', 'Typicky ročně', 'Poznámka']}
        radky={[
          ['Daň z nemovitých věcí', 'stovky až jednotky tisíc', 'platí vlastník, sazby se od 2024 zvýšily'],
          ['Pojištění nemovitosti', 'jednotky tisíc', 'daňově uznatelný výdaj'],
          ['Příspěvek do fondu oprav', 'tisíce až desetitisíce', 'u jednotky v SVJ, nese ho vlastník'],
          ['Opravy a údržba', 'těžko odhadnout, rezervuj si', 'nejvíc podceňovaná položka'],
          ['Revize', 'stovky až tisíce', 'plyn, elektro, komín'],
          ['Neobsazenost', 'viz níže', 'počítej s ní, i když letos nebyla'],
          ['Daň z příjmu', '15 % ze základu', 'po odečtení výdajů nebo paušálu'],
        ]}
      />
      <P>
        Čistý výnos pak spočítáš jako <strong>(roční nájemné − roční náklady) ÷ pořizovací cena</strong>.
        Z příkladu výše: 216 000 Kč nájemného, 38 000 Kč nákladů, daň 26 700 Kč z rozdílu —
        zbývá 151 300 Kč, tedy <strong>3,4 % čistého výnosu</strong>. Z 4,8 % zmizela skoro
        třetina.
      </P>
      <P>
        Jakou daň přesně zaplatíš, záleží na tom, jestli uplatníš skutečné výdaje nebo
        <OdkazHeslo slug="vydajovy-pausal"> výdajový paušál</OdkazHeslo>. Obě varianty vedle sebe
        spočítá <OdkazKalkulacka slug="dan-z-pronajmu">kalkulačka daně z pronájmu</OdkazKalkulacka>,
        souvislosti rozebírá <OdkazClanek slug="dane-z-pronajmu">článek o daních z pronájmu</OdkazClanek>.
      </P>

      <H2 id="kapital">Výnos z vlastního kapitálu</H2>
      <P>
        Dvě různé otázky, dvě různá čísla:
      </P>
      <Seznam>
        <Polozka>
          <strong>Vyplatí se ten byt?</strong> → výnos z celé pořizovací ceny, bez ohledu na to,
          jak je financovaný. Měří nemovitost.
        </Polozka>
        <Polozka>
          <strong>Vyplatí se mi do něj dát svoje peníze?</strong> → výnos z vlastního kapitálu,
          tedy z toho, co jsi do bytu vložil ze svého. Měří tvou investici.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Stejný byt za 4 500 000 Kč, hypotéka 3 000 000 Kč, vlastní peníze 1 500 000 Kč.
          Úroky za rok 135 000 Kč (4,5 %). Čistý příjem po nákladech a dani byl 151 300 Kč,
          po úrocích zbývá 16 300 Kč.<br />
          Výnos z vlastního kapitálu: 16 300 ÷ 1 500 000 = <strong>1,1 %</strong>.<br />
          Zároveň ti ale nájemníci za rok umořili část jistiny — a ta ti zůstává v majetku.
        </p>
      </Ramecek>
      <P>
        Tohle je ta věc, kterou páka dělá v obou směrech. Když je úrok nižší než čistý výnos
        nemovitosti, hypotéka tvůj výnos z vlastních peněz zvedá. Když je vyšší, snižuje ho —
        a může ho stáhnout i pod nulu. Limity a podmínky
        rozebírá <OdkazClanek slug="hypoteka-na-investicni-byt">článek o hypotéce na investiční byt</OdkazClanek>.
      </P>

      <H2 id="neobsazenost">Počítej s tím, že byt bude občas prázdný</H2>
      <P>
        Mezi dvěma nájemníky je skoro vždycky mezera: výpovědní doba, úklid, malování, inzerát,
        prohlídky, podpis. Měsíc je optimistický odhad.
      </P>
      <P>
        Jeden prázdný měsíc za rok znamená, že přijde 11 nájmů místo 12 — tedy o 8,3 % nižší
        příjem. Z čistého výnosu 3,4 % to v příkladu výše udělá 3,1 %. A to je případ, kdy se
        nic nepokazí.
      </P>
      <Ramecek druh="pozor">
        <p>
          Neobsazenost nepočítej jako „letos se to nestalo, tak nula“. Počítej ji jako průměr:
          když se ti nájemníci mění po třech letech a výměna trvá měsíc, je to jeden měsíc ze
          36 — tedy asi 2,8 % ročně natrvalo.
        </p>
      </Ramecek>

      <H2 id="zhodnoceni">Zhodnocení ceny není výnos, dokud neprodáš</H2>
      <P>
        Byt, který jsi koupil za 3 000 000 Kč a dnes má hodnotu 4 500 000 Kč, ti vydělal
        1 500 000 Kč. Na papíře. Dokud neprodáš, není to příjem — nedá se z toho žít a nedá se
        z toho zaplatit oprava střechy.
      </P>
      <P>
        Navíc to není celé tvoje. Jestli příjem z prodeje nebude osvobozený, zdaníš ho —
        a tam rozhoduje, kdy jsi byt nabyl.
        Rozebírá to <OdkazClanek slug="dan-pri-prodeji-bytu">článek o dani při prodeji bytu</OdkazClanek>.
      </P>
      <P>
        Počítat zhodnocení do výnosu z pronájmu je tedy míchání dvou různých věcí. Nájem je
        pravidelný příjem s pravidelnými náklady. Zhodnocení je jednorázová a nejistá položka,
        která se projeví jednou — nebo taky ne.
      </P>

      <H2 id="srovnani">S čím výnos srovnávat</H2>
      <P>
        Číslo samo o sobě nic neříká. Smysl dává až ve srovnání — a ne s jiným bytem, ale
        s alternativou, kterou máš.
      </P>
      <Seznam>
        <Polozka>
          <strong>S bezrizikovou sazbou.</strong> Spořicí účet nebo státní dluhopis nic nestojí
          a nic nezabere. Rozdíl mezi nimi a čistým výnosem bytu je to, co ti pronájem platí
          za riziko a práci. Když je rozdíl nula, děláš to zadarmo.
        </Polozka>
        <Polozka>
          <strong>S vlastním časem.</strong> Pronájem není pasivní příjem. Prohlídky, vyúčtování,
          revize, opravy, občas spor. Když to děláš sám, je to pár desítek hodin ročně —
          a ty v tom výnosu nejsou započítané.
        </Polozka>
        <Polozka>
          <strong>Se stavem bytu.</strong> Byt, který bude za pět let potřebovat novou koupelnu
          a okna, nemá výnos, jaký ukazuje tabulka. Má ho o tu rekonstrukci nižší — jen ještě
          nezaplacenou.
        </Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          V Housiu vidíš u každého bytu příjmy i výdaje za rok vedle sebe a k tomu obsazenost —
          tedy přesně ta čísla, ze kterých se čistý výnos počítá. Nemusíš je dohledávat v bance
          a ve složce faktur a nemusíš odhadovat, kolik měsíců byl byt prázdný.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
