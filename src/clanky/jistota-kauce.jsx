import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni, OdkazKalkulacka } from '@/components/clanek/Prvky'

export const META = {
  slug: 'jistota-kauce',
  nadpis: 'Kauce u nájmu bytu: kolik si smíš vzít, z čeho strhnout a kdy vrátit',
  perex: 'Jistota je nejčastější zdroj hádky na konci nájmu. Kolik smí být, jak se počítají úroky, co je běžné opotřebení a jak doložit, že škoda vznikla nájemníkovi.',
  tema: 'smlouva',
  datum: '2026-10-01',
  minut: 8,
  sekce: [
    { id: 'kolik', nadpis: 'Kolik smí jistota být' },
    { id: 'uroky', nadpis: 'Úroky z jistoty' },
    { id: 'zcoho', nadpis: 'Z čeho si smíš strhnout' },
    { id: 'opotrebeni', nadpis: 'Běžné opotřebení versus škoda' },
    { id: 'vraceni', nadpis: 'Kdy a jak jistotu vrátit' },
    { id: 'spor', nadpis: 'Když se nedohodnete' },
  ],
  faq: [
    {
      otazka: 'Kolik smí být kauce u nájmu bytu?',
      odpoved: 'Jistota spolu s případnou smluvní pokutou nesmí v souhrnu přesáhnout trojnásobek měsíčního nájemného. Do výpočtu se bere nájemné bez záloh na služby.',
    },
    {
      otazka: 'Musím z kauce platit úroky?',
      odpoved: 'Ano. Nájemce má právo na úroky z jistoty od jejího poskytnutí, a to alespoň ve výši zákonné sazby. Nárok vzniká ze zákona, i když o něm smlouva mlčí.',
    },
    {
      otazka: 'Můžu si z kauce strhnout nezaplacené nájemné během nájmu?',
      odpoved: 'Jistota slouží k zajištění dluhů a započítává se zpravidla při skončení nájmu. Pokud ji použiješ dřív, ujednej si ve smlouvě i povinnost nájemníka jistotu doplnit — jinak zůstaneš bez zajištění.',
    },
    {
      otazka: 'Do kdy musím kauci vrátit?',
      odpoved: 'Při skončení nájmu, po započtení toho, co ti nájemník dluží. V praxi se vyplatí ujednat si ve smlouvě konkrétní lhůtu — typicky do 30 dnů od předání bytu, nebo do vyúčtování služeb, když se čeká na poslední odečty.',
    },
    {
      otazka: 'Můžu si z kauce strhnout vymalování?',
      odpoved: 'Jen tehdy, jde-li nad rámec běžného opotřebení — například po kouření nebo po poškození stěn. Vymalování po několikaletém bydlení je běžná údržba a strhávat ho paušálně nelze.',
    },
  ],
  zdroje: ['§ 2254 občanského zákoníku', 'nařízení vlády č. 308/2015 Sb.'],
}

export default function JistotaKauce() {
  return (
    <>
      <Perex>
        Jistota — lidově kauce — je nejčastější zdroj hádky na konci nájmu. Zákon kolem ní má jen
        pár pravidel, zato jasných: strop, úroky a povinnost vrátit, co ti nepatří.
      </Perex>

      <Shrnuti>
        <li>Jistota a smluvní pokuta dohromady nejvýš trojnásobek měsíčního nájemného.</li>
        <li>Z jistoty hradíš dluh na nájemném, na službách a škodu nad rámec běžného opotřebení.</li>
        <li>Nájemník má ze zákona nárok na úroky od poskytnutí jistoty.</li>
        <li>Bez předávacího protokolu neprokážeš, že škoda vznikla za nájemníka.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="kolik">Kolik smí jistota být</H2>
      <P>
        Podle <Zakon>§ 2254</Zakon> smí jistota spolu s případnou smluvní pokutou dosáhnout nanejvýš
        <strong> trojnásobku měsíčního nájemného</strong>. Počítá se nájemné, ne nájemné plus zálohy
        na služby — to je rozdíl, který se v praxi často plete.
      </P>
      <Tabulka
        hlavicka={['Nájemné', 'Zálohy', 'Maximální jistota + pokuta']}
        radky={[
          ['15 000 Kč', '3 500 Kč', '45 000 Kč'],
          ['20 000 Kč', '4 000 Kč', '60 000 Kč'],
          ['28 000 Kč', '5 000 Kč', '84 000 Kč'],
        ]}
      />
      <P>
        Možnost sjednat smluvní pokutu se do zákona vrátila novelou účinnou od 1. července 2020 —
        právě s tímto společným stropem. Když si tedy vezmeš jistotu v plné výši tří nájmů,
        na smluvní pokutu už ti nezbývá prostor.
      </P>

      <H2 id="uroky">Úroky z jistoty</H2>
      <P>
        Nájemce má právo na úroky z jistoty od jejího poskytnutí, nejméně ve výši zákonné sazby.
        Nárok vzniká ze zákona — nemusí být ve smlouvě a nelze ho vyloučit.
      </P>
      <Ramecek druh="pozor">
        <p>
          Na úroky se při vracení běžně zapomíná a nájemníci je dnes umějí spočítat. Vyplatí se
          mít jistotu na odděleném účtu a při vracení poslat jednoduchý výpočet: částka, doba,
          sazba, úrok.
        </p>
      </Ramecek>

      <H2 id="zcoho">Z čeho si smíš strhnout</H2>
      <Seznam>
        <Polozka><strong>dlužné nájemné</strong> a dlužné zálohy na služby,</Polozka>
        <Polozka><strong>nedoplatek z vyúčtování</strong> služeb,</Polozka>
        <Polozka><strong>škodu na bytě a vybavení</strong> nad rámec běžného opotřebení,</Polozka>
        <Polozka><strong>náklady na odvoz věcí</strong>, které nájemník v bytě nechal,</Polozka>
        <Polozka><strong>smluvní pokutu</strong>, pokud je platně sjednaná.</Polozka>
      </Seznam>
      <P>
        Každý odpočet musíš umět doložit — fakturou, fotografií, odečtem měřidel. Prosté tvrzení
        „byt byl zdevastovaný“ u soudu neobstojí.
      </P>

      <H2 id="opotrebeni">Běžné opotřebení versus škoda</H2>
      <Tabulka
        hlavicka={['Běžné opotřebení (neseš ty)', 'Škoda (nese nájemník)']}
        radky={[
          ['Zašlá malba po několika letech', 'Díry po hmoždinkách ve velkém počtu, kouřem zažloutlé stěny'],
          ['Opotřebená podlaha v průchozí části', 'Prošlápnutá nebo prořezaná podlaha, skvrny od vody'],
          ['Vysloužilé těsnění, kapající baterie', 'Ulomená baterie, prasklé umyvadlo'],
          ['Přirozené stárnutí kuchyňské linky', 'Vytržená dvířka, propálená pracovní deska'],
        ]}
      />
      <P>
        Běžnou údržbu a drobné opravy nese nájemník ze zákona — co přesně to je, vymezuje nařízení
        vlády č. 308/2015 Sb. Velké opravy a výměny na konci životnosti jsou tvoje věc.
      </P>
      <P>
        Bez <OdkazClanek slug="predavaci-protokol">předávacího protokolu</OdkazClanek> s fotkami
        neprokážeš, v jakém stavu byl byt na začátku — a strhnout pak nemůžeš skoro nic.
      </P>

      <H2 id="vraceni">Kdy a jak jistotu vrátit</H2>
      <Seznam cislovany>
        <Polozka><strong>Převezmi byt protokolárně</strong> a zapiš stavy měřidel.</Polozka>
        <Polozka><strong>Spočítej dluhy</strong> — nájemné, zálohy, nedoplatek z vyúčtování, doložená škoda.</Polozka>
        <Polozka><strong>Spočítej úroky</strong> z jistoty za dobu, po kterou jsi ji držel.</Polozka>
        <Polozka><strong>Pošli písemné vyúčtování jistoty</strong> — co bylo, co se strhlo a proč, kolik se vrací.</Polozka>
        <Polozka><strong>Zbytek pošli na účet</strong> ve lhůtě, kterou máte ve smlouvě.</Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Jistota 50 000 Kč. Nájemník dluží poslední měsíc nájmu 20 000 Kč a nedoplatek z vyúčtování
          3 400 Kč. Rozbité umyvadlo stálo podle faktury 4 200 Kč. Úroky za tři roky činí
          podle výpočtu 2 100 Kč.
        </p>
        <p>
          Vracíš 50 000 − 20 000 − 3 400 − 4 200 + 2 100 = <strong>24 500 Kč</strong>,
          a k tomu přikládáš fakturu a vyúčtování.
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Pokud čekáš na poslední vyúčtování služeb, nedrž celou jistotu. Rozumné je vrátit část,
          která zjevně nebude potřeba, a zbytek doúčtovat po vyúčtování — a mít takový postup
          popsaný ve smlouvě.
        </p>
      </Ramecek>

      <H2 id="spor">Když se nedohodnete</H2>
      <P>
        Nájemník může zadrženou jistotu vymáhat jako každou jinou pohledávku. Důkazní pozice je
        v takovém sporu jednoduchá: vyhraje ten, kdo má papíry. Protokol při nastěhování,
        protokol při vystěhování, fotky, faktury a doručené vyúčtování jistoty.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu máš u smlouvy zapsanou výši jistoty i datum, kdy jsi ji přijal, takže se při
          skončení nájmu nedohledává ve starých e-mailech. Spolu s přehledem skutečně přijatých
          plateb z toho vyúčtování jistoty složíš za pár minut.
        </p>
      </Ramecek>

      <Ramecek druh="vzor">
        <p>
          Nechceš to počítat ručně? Použij <OdkazKalkulacka slug="urok-z-kauce">kalkulačka úroku z kauce</OdkazKalkulacka> —
          počítá přímo v prohlížeči, nic se nikam neodesílá.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
