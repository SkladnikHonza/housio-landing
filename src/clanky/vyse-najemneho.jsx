import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'vyse-najemneho',
  nadpis: 'Jak stanovit výši nájemného, aby byt nestál prázdný ani nevydělával málo',
  perex: 'Kde zjistit, co se v okolí platí, jak od nabídkových cen dojít k reálným, co dělá s výnosem jeden měsíc prázdna a proč se nejvyšší nájem nemusí vyplatit.',
  tema: 'najemne',
  datum: '2026-10-05',
  minut: 8,
  sekce: [
    { id: 'zdroje', nadpis: 'Kde zjistit, co se v okolí platí' },
    { id: 'srovnani', nadpis: 'Jak srovnávat, aby to dávalo smysl' },
    { id: 'vynos', nadpis: 'Spočítej si výnos, ne jen nájem' },
    { id: 'prazdno', nadpis: 'Jeden měsíc prázdna stojí víc, než si myslíš' },
    { id: 'rozhodnuti', nadpis: 'Kolik si tedy říct' },
  ],
  faq: [
    {
      otazka: 'Kde zjistím obvyklé nájemné v mé lokalitě?',
      odpoved: 'Nejblíž realitě jsou aktuální inzeráty srovnatelných bytů ve stejné čtvrti, ideálně doplněné o to, za kolik se byty opravdu pronajaly. Veřejné cenové mapy dávají hrubý rámec, ale nezohlední stav bytu ani patro.',
    },
    {
      otazka: 'Mám do nájmu započítat zálohy na služby?',
      odpoved: 'Ne. Nájemné a zálohy patří ve smlouvě odděleně a i v inzerátu je lepší uvést obojí zvlášť. Zájemce stejně počítá s celkovou částkou, ale ty potřebuješ mít položky oddělené kvůli vyúčtování i daním.',
    },
    {
      otazka: 'Co je hrubý a čistý výnos?',
      odpoved: 'Hrubý výnos je roční nájemné dělené cenou nemovitosti. Čistý počítá i s náklady — fondem oprav, pojištěním, daní, opravami a měsíci bez nájemníka. Právě ten rozdíl rozhoduje, jestli se investice vyplatí.',
    },
    {
      otazka: 'Vyplatí se dát nižší nájem spolehlivému nájemníkovi?',
      odpoved: 'Často ano. Jeden měsíc prázdna sebere zhruba osm procent ročního výnosu, výměna nájemníka k tomu přidá úklid, inzerci a čas. Stabilní nájemce o pár procent levněji bývá výhodnější než nejvyšší možná částka.',
    },
    {
      otazka: 'Můžu nájem zvýšit hned po roce?',
      odpoved: 'Zákonnou cestou nejdřív rok od posledního zvýšení a nejvýše o 20 % za poslední tři roky. S inflační doložkou ve smlouvě platí to, co je v ní.',
    },
  ],
  zdroje: ['§ 2249 občanského zákoníku', 'nařízení vlády č. 453/2013 Sb.'],
}

export default function VyseNajemneho() {
  return (
    <>
      <Perex>
        Příliš nízký nájem je vidět hned, příliš vysoký až po dvou měsících prázdného bytu. Tenhle
        návod je o tom, jak se dostat k číslu, které obstojí — a jak poznat, že se vyšší částka
        nevyplatí, i když ji někdo nabídne.
      </Perex>

      <Shrnuti>
        <li>Srovnávej se skutečně uzavřenými nájmy, ne jen s nabídkovými cenami.</li>
        <li>Nájemné a zálohy na služby drž oddělené už v inzerátu.</li>
        <li>Počítej čistý výnos po nákladech, ne jen nájem.</li>
        <li>Jeden měsíc prázdna spolkne zhruba osm procent ročního výnosu.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="zdroje">Kde zjistit, co se v okolí platí</H2>
      <Seznam>
        <Polozka>
          <strong>Aktuální inzeráty srovnatelných bytů</strong> ve stejné čtvrti. Nejpřesnější
          zdroj, ale pozor: to jsou ceny nabídkové, ne uzavřené.
        </Polozka>
        <Polozka>
          <strong>Inzeráty, které zmizely.</strong> Když si byt sleduješ a za týden je pryč, byla
          cena dobře nastavená. Když visí měsíc a postupně klesá, vidíš strop trhu.
        </Polozka>
        <Polozka>
          <strong>Veřejné cenové mapy nájemného.</strong> Dají hrubý rámec pro lokalitu, ale
          nezohlední patro, stav bytu ani výhled.
        </Polozka>
        <Polozka>
          <strong>Správce domu nebo sousedé,</strong> kteří taky pronajímají. Nejrychlejší způsob,
          jak zjistit reálně placené částky v konkrétním domě.
        </Polozka>
      </Seznam>
      <P>
        Pokud nájemné <OdkazClanek slug="zvyseni-najmu">zvyšuješ zákonnou cestou</OdkazClanek>,
        potřebuješ navíc doložit <OdkazHeslo slug="srovnatelne-najemne">srovnatelné nájemné</OdkazHeslo>.
        Tři vytištěné nabídky srovnatelných bytů jsou v praxi dostatečný podklad.
      </P>

      <H2 id="srovnani">Jak srovnávat, aby to dávalo smysl</H2>
      <P>
        Dva byty 2+kk ve stejné ulici se můžou lišit o pětinu nájmu. Při srovnávání drž pohromadě
        tyhle věci:
      </P>
      <Tabulka
        hlavicka={['Co porovnat', 'Proč na tom záleží']}
        radky={[
          ['Dispozice a plocha', 'Cena za metr klesá s velikostí bytu — garsonka vydělá na metr nejvíc'],
          ['Patro a výtah', 'Čtvrté patro bez výtahu srazí nájem i o deset procent'],
          ['Stav a vybavení', 'Zařízený byt po rekonstrukci je jiná kategorie než holobyt'],
          ['Energetická náročnost', 'Vysoké zálohy srazí nájem, protože zájemce počítá celkovou částku'],
          ['Parkování a sklep', 'V centru bývá parkovací stání samostatná položka'],
          ['Dostupnost', 'Pět minut k metru nebo zastávce je u nájmu důležitější než u prodeje'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Zájemce nerozhoduje podle nájemného, ale podle <strong>celkové částky za měsíc</strong>.
          Byt s nájmem 18 000 Kč a zálohami 5 500 Kč je pro něj dražší než byt za 20 000 Kč
          se zálohami 3 000 Kč. Proto má smysl mít zálohy nastavené realisticky, ne „pro jistotu“
          vysoko.
        </p>
      </Ramecek>

      <H2 id="vynos">Spočítej si výnos, ne jen nájem</H2>
      <P>
        Hrubý výnos je jednoduchý: roční nájemné dělené cenou nemovitosti. Čistý výnos je ten,
        podle kterého se dá rozhodovat.
      </P>
      <Ramecek druh="priklad">
        <p>
          Byt za 4 100 000 Kč, nájemné 20 000 Kč měsíčně, tedy 240 000 Kč ročně.
          <strong> Hrubý výnos 5,9 %.</strong>
        </p>
        <p>
          Roční náklady: fond oprav a správa 24 000, pojištění 4 000, daň z nemovitých věcí 1 500,
          opravy a údržba v průměru 15 000, jeden měsíc bez nájemníka 20 000. Celkem 64 500 Kč.
        </p>
        <p>
          Čistý příjem 175 500 Kč, <strong>čistý výnos 4,3 %</strong> — a to ještě před daní.
        </p>
      </Ramecek>
      <P>
        Odpis, úroky a další položky, které snižují základ daně, si spočítáš
        v <OdkazClanek slug="dane-z-pronajmu">kalkulaci daně z pronájmu</OdkazClanek>.
      </P>

      <H2 id="prazdno">Jeden měsíc prázdna stojí víc, než si myslíš</H2>
      <P>
        Prázdný byt není jen chybějící nájem. Je to i uklizení, focení, inzerce, prohlídky a čas
        strávený vybíráním — a náklady na dům běží dál.
      </P>
      <Tabulka
        hlavicka={['Nájem', 'Co stojí jeden měsíc prázdna', 'Kolik je to z ročního nájmu']}
        radky={[
          ['15 000 Kč', '15 000 Kč + náklady domu', 'přes 8 %'],
          ['20 000 Kč', '20 000 Kč + náklady domu', 'přes 8 %'],
          ['28 000 Kč', '28 000 Kč + náklady domu', 'přes 8 %'],
        ]}
      />
      <P>
        Osm procent je zhruba to, co bys získal zvýšením nájmu o 1 600 Kč měsíčně u dvacetitisícového
        bytu. Jinak řečeno: když kvůli vyšší ceně stojí byt o měsíc déle prázdný, celé zvýšení
        se ten rok smaže.
      </P>

      <H2 id="rozhodnuti">Kolik si tedy říct</H2>
      <Seznam cislovany>
        <Polozka><strong>Najdi pět srovnatelných bytů</strong> a seřaď je podle celkové měsíční částky.</Polozka>
        <Polozka><strong>Zařaď svůj byt</strong> mezi ně podle stavu, patra a dostupnosti — upřímně, ne podle toho, kolik jsi do něj dal.</Polozka>
        <Polozka><strong>Nastav cenu k mediánu</strong>, pokud chceš pronajmout rychle, nebo k horní třetině, pokud máš čas čekat.</Polozka>
        <Polozka><strong>Dej tomu dva týdny.</strong> Když nepřijde ani jedna prohlídka, je cena mimo trh — a snížit po dvou týdnech je levnější než čekat dva měsíce.</Polozka>
        <Polozka><strong>Do smlouvy dej <OdkazHeslo slug="inflacni-dolozka">inflační doložku</OdkazHeslo></strong>, ať se cena drží trhu bez vyjednávání.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio ukazuje u každé nemovitosti roční přehled výnosů a nákladů, takže čistý výnos
          nemusíš skládat z výpisů. Když do něj zapisuješ i výdaje a prázdné měsíce, máš po roce
          podklad, podle kterého se rozhoduje líp než podle pocitu.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
