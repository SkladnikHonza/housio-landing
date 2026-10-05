import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni, OdkazKalkulacka } from '@/components/clanek/Prvky'

export const META = {
  slug: 'vyuctovani-sluzeb',
  nadpis: 'Vyúčtování služeb: lhůty, podklady a pokuta 50 Kč za den',
  perex: 'Do kdy musí být vyúčtování doručeno, co v něm musí stát, jak dlouho má nájemník na námitky a kolik stojí, když se zpozdíš. Podle zákona č. 67/2013 Sb., se spočítaným příkladem.',
  tema: 'dane',
  datum: '2026-10-01',
  minut: 9,
  sekce: [
    { id: 'co', nadpis: 'Co se vyúčtovává a co ne' },
    { id: 'lhuty', nadpis: 'Čtyři lhůty, které musíš znát' },
    { id: 'jak', nadpis: 'Jak vyúčtování sestavit krok za krokem' },
    { id: 'obsah', nadpis: 'Co musí vyúčtování obsahovat' },
    { id: 'namitky', nadpis: 'Námitky a nahlížení do podkladů' },
    { id: 'pokuta', nadpis: 'Pokuta 50 Kč za každý den' },
    { id: 'zalohy', nadpis: 'Změna záloh na příští rok' },
  ],
  faq: [
    {
      otazka: 'Co když vyúčtování nestihnu do čtyř měsíců?',
      odpoved: 'Povinnost tím nezaniká — vyúčtování musíš udělat i se zpožděním. Nájemníkovi ale vzniká nárok na pokutu 50 Kč za každý započatý den prodlení, pokud jste si ve smlouvě neujednali jinou výši. Tu si může započíst proti nedoplatku.',
    },
    {
      otazka: 'Musím nájemníkovi ukazovat faktury od dodavatelů?',
      odpoved: 'Ano, pokud o to písemně požádá do 30 dnů od doručení vyúčtování. Musíš doložit náklady na jednotlivé služby, způsob rozúčtování i stanovení záloh a umožnit pořízení kopií. Na žádost máš 30 dnů.',
    },
    {
      otazka: 'Co když nájemník nedoplatek nezaplatí?',
      odpoved: 'Nedoplatek je splatný ve lhůtě dohodnuté ve vyúčtování, nejpozději do čtyř měsíců od jeho doručení. Pak jde o dluh jako každý jiný — můžeš ho započíst proti jistotě a vymáhat. Dluh na službách se navíc počítá do posuzování, zda nájemník porušuje povinnosti zvlášť závažným způsobem.',
    },
    {
      otazka: 'Můžu zvýšit zálohy bez souhlasu nájemníka?',
      odpoved: 'Ano, při změně ceny služby, spotřeby nebo počtu osob. Změnu musíš písemně oznámit a odůvodnit — typicky posledním vyúčtováním. Dodatek ke smlouvě není potřeba, pokud smlouva stanovení záloh umožňuje.',
    },
    {
      otazka: 'Jde se domluvit na paušální platbě místo vyúčtování?',
      odpoved: 'Zákon paušální platbu za služby připouští, ale jen písemnou dohodou a s omezeními — zejména u tepla a teplé vody, které se zpravidla musí rozúčtovat podle měřidel. Než na paušál přistoupíš, nech si podmínky ověřit; chybně sjednaný paušál tě nezbaví povinnosti vyúčtovat.',
    },
  ],
  zdroje: ['zákon č. 67/2013 Sb., § 6 až § 13'],
}

export default function VyuctovaniSluzeb() {
  return (
    <>
      <Perex>
        Vyúčtování služeb má pevné lhůty a za jejich zmeškání hrozí pokuta za každý den prodlení.
        Pravidla najdeš v <Zakon>zákoně č. 67/2013 Sb.</Zakon> Spory o vyúčtování patří mezi
        nejčastější, které mezi pronajímatelem a nájemníkem vznikají — a skoro vždycky jde o to,
        že chybí podklady nebo se nestihla lhůta.
      </Perex>

      <Shrnuti>
        <li>Vyúčtování musíš doručit do 4 měsíců od konce zúčtovacího období.</li>
        <li>Nájemník má 30 dnů na námitky i na žádost o podklady; ty máš na obojí 30 dnů.</li>
        <li>Přeplatek i nedoplatek se vypořádá do 4 měsíců od doručení vyúčtování.</li>
        <li>Za prodlení vzniká nárok na 50 Kč za každý započatý den.</li>
        <li>Nájemné se nevyúčtovává — jen zálohy na služby.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="co">Co se vyúčtovává a co ne</H2>
      <P>
        Službami se rozumí plnění spojená s užíváním bytu — dodávka tepla a teplé vody, studená
        voda, odvádění odpadních vod, osvětlení a úklid společných prostor, odvoz odpadu, provoz
        výtahu, komíny, případně další, na kterých se dohodnete.
      </P>
      <Tabulka
        hlavicka={['Vyúčtovává se', 'Nevyúčtovává se']}
        radky={[
          ['Zálohy na teplo a teplou vodu', 'Nájemné — to je pevná částka'],
          ['Zálohy na studenou vodu a stočné', 'Jistota (kauce) — ta se vrací samostatně'],
          ['Úklid, výtah, osvětlení společných prostor', 'Energie psané přímo na nájemníka'],
          ['Odvoz odpadu', 'Fond oprav, pokud jde o tvůj náklad vlastníka'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Co ve smlouvě není sjednané jako služba, nemůžeš nájemníkovi naúčtovat ani ve vyúčtování.
          Proto patří výčet služeb přímo do <OdkazClanek slug="najemni-smlouva">nájemní smlouvy</OdkazClanek>,
          ne až do vyúčtování.
        </p>
      </Ramecek>

      <H2 id="lhuty">Čtyři lhůty, které musíš znát</H2>
      <Tabulka
        hlavicka={['Lhůta', 'Co se musí stihnout', 'Od čeho běží']}
        radky={[
          ['4 měsíce', 'doručit vyúčtování nájemníkovi', 'od konce zúčtovacího období'],
          ['30 dnů', 'nájemník může požádat o podklady a podat námitky', 'od doručení vyúčtování'],
          ['30 dnů', 'ty musíš doložit podklady a vyřídit námitky', 'od doručení žádosti či námitek'],
          ['4 měsíce', 'vypořádat přeplatek nebo nedoplatek', 'od doručení vyúčtování'],
        ]}
      />
      <P>
        U kalendářního roku jako zúčtovacího období to znamená: vyúčtování za rok 2026 musí být
        u nájemníka nejpozději <strong>do konce dubna 2027</strong> a peníze se vypořádají
        nejpozději do konce srpna 2027.
      </P>
      <Ramecek druh="pozor">
        <p>
          Lhůta se počítá od <strong>doručení</strong>, ne od odeslání. Pošli vyúčtování tak, abys
          doručení uměl doložit — doporučeně, datovou schránkou nebo proti podpisu. Když nájemník
          tvrdí, že nic nedostal, nese důkazní břemeno ten, kdo to měl doručit.
        </p>
      </Ramecek>

      <H2 id="jak">Jak vyúčtování sestavit krok za krokem</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Sesbírej faktury</strong> od dodavatelů za celé období a vyúčtování od společenství
          vlastníků nebo družstva, pokud byt leží v takovém domě.
        </Polozka>
        <Polozka>
          <strong>Rozúčtuj náklady.</strong> Co se měří, rozúčtuj podle měřidel. Co se neměří,
          podle ujednaného klíče — nejčastěji počtu osob nebo podlahové plochy. U tepla a společně
          připravované teplé vody má zákon vlastní pravidla pro poměr základní a spotřební složky.
        </Polozka>
        <Polozka>
          <strong>Odečti zaplacené zálohy</strong> za dané období. Pozor: ty, které nájemník
          <em> skutečně zaplatil</em>, ne které měl zaplatit.
        </Polozka>
        <Polozka>
          <strong>Vyčísli přeplatek nebo nedoplatek</strong> a napiš, do kdy a jak se vypořádá.
        </Polozka>
        <Polozka>
          <strong>Doruč to prokazatelně</strong> a datum doručení si poznamenej — od něj běží
          všechny další lhůty.
        </Polozka>
      </Seznam>

      <H2 id="obsah">Co musí vyúčtování obsahovat</H2>
      <Seznam>
        <Polozka>označení bytu, nájemníka a zúčtovacího období,</Polozka>
        <Polozka>u každé služby skutečnou výši nákladu a způsob jeho rozúčtování,</Polozka>
        <Polozka>spotřebu podle měřidel tam, kde se podle nich rozúčtovává,</Polozka>
        <Polozka>součet záloh, které nájemník za období zaplatil,</Polozka>
        <Polozka>výsledný přeplatek nebo nedoplatek,</Polozka>
        <Polozka>termín a způsob vypořádání.</Polozka>
      </Seznam>
      <P>
        Jedna souhrnná částka „služby 55 600 Kč“ není vyúčtování. Musí být vidět, kolik stálo teplo,
        kolik voda a podle čeho se to rozdělilo.
      </P>

      <Ramecek druh="priklad">
        <p>
          Zálohy 4 000 Kč měsíčně, tedy 48 000 Kč za rok. Skutečné náklady 55 600 Kč:
          teplo 31 000, studená voda 9 800, teplá voda 8 300, společné prostory a odpad 6 500.
        </p>
        <p>
          Nedoplatek je <strong>7 600 Kč</strong>. Vyúčtování doručíš 20. dubna, vypořádání tedy
          nejpozději 20. srpna. Zároveň je to signál zvednout zálohu zhruba na
          <strong> 4 650 Kč</strong>, ať se příští rok neopakuje.
        </p>
      </Ramecek>

      <H2 id="namitky">Námitky a nahlížení do podkladů</H2>
      <P>
        Do 30 dnů od doručení vyúčtování tě může nájemník písemně požádat, abys doložil náklady
        na jednotlivé služby, způsob jejich rozúčtování, způsob stanovení záloh a provedení
        vyúčtování — a abys mu umožnil pořídit si kopie podkladů. Této žádosti musíš vyhovět
        do 30 dnů od jejího doručení.
      </P>
      <P>
        Námitky ke způsobu a obsahu vyúčtování podává nájemník rovněž do 30 dnů od doručení
        vyúčtování, případně od doložení podkladů. <strong>Pokud je v této lhůtě nepodá, platí, že
        s vyúčtováním souhlasí.</strong> Včas podané námitky musíš vyřídit do 30 dnů.
      </P>

      <H2 id="pokuta">Pokuta 50 Kč za každý den</H2>
      <P>
        Když nesplníš povinnost ze zákona — typicky nedoručíš vyúčtování včas nebo nedoložíš
        podklady — vzniká druhé straně nárok na pokutu <strong>50 Kč za každý započatý den
        prodlení</strong>, ledaže jste si ve smlouvě ujednali jinou výši.
      </P>
      <Ramecek druh="priklad">
        <p>
          Vyúčtování mělo být doručeno 30. dubna, poslal jsi ho 31. července. To je 92 dnů
          prodlení, tedy <strong>4 600 Kč</strong>. Nájemník si je může započíst proti nedoplatku
          7 600 Kč — zaplatí ti tedy jen 3 000 Kč.
        </p>
      </Ramecek>
      <P>
        Pokuta funguje oběma směry: stejně tak ji platí nájemník, když neoznámí změnu počtu osob
        nebo nedoloží, co má.
      </P>

      <H2 id="zalohy">Změna záloh na příští rok</H2>
      <P>
        Vyúčtování je nejlepší chvíle zálohy srovnat s realitou. Zálohy můžeš změnit při změně ceny
        služby, spotřeby nebo počtu osob v bytě. Změnu písemně oznam a odůvodni — stačí odkaz
        na poslední vyúčtování. Novou výši zapiš
        do <OdkazClanek slug="evidencni-list">evidenčního listu</OdkazClanek>, pokud na něj smlouva
        odkazuje; pak nepotřebuješ dodatek.
      </P>
      <P>
        Nájemné je jiná věc a mění se vlastním postupem — viz
        článek <OdkazClanek slug="zvyseni-najmu">o zvýšení nájemného</OdkazClanek>.
      </P>

      <Ramecek druh="housio">
        <p>
          Housio vede u každého bytu zálohy i skutečně přijaté platby po měsících, takže podklad
          pro vyúčtování vzniká průběžně místo jednoho dubnového odpoledne. Rozdíl mezi předpisem
          a zaplaceným vidíš u každého měsíce, a když záloha dlouhodobě nestačí, všimneš si toho
          dřív než na konci roku.
        </p>
      </Ramecek>

      <Ramecek druh="vzor">
        <p>
          Nechceš to počítat ručně? Použij <OdkazKalkulacka slug="vyuctovani-sluzeb">kalkulačka vyúčtování služeb</OdkazKalkulacka> —
          počítá přímo v prohlížeči, nic se nikam neodesílá.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
