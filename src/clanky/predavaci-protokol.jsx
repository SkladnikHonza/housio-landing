import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'predavaci-protokol',
  nadpis: 'Předávací protokol k bytu: co do něj napsat, ať ho nepotřebuješ',
  perex: 'Nepovinný papír, který rozhoduje spory o kauci. Co zapsat, jak fotit, proč jsou stavy měřidel důležitější než popis stavu stěn a jak vypadá protokol při vracení bytu.',
  tema: 'smlouva',
  datum: '2026-10-01',
  minut: 7,
  sekce: [
    { id: 'proc', nadpis: 'Proč ho dělat, když není povinný' },
    { id: 'co', nadpis: 'Co do protokolu patří' },
    { id: 'meridla', nadpis: 'Měřidla: nejdůležitější řádek protokolu' },
    { id: 'fotky', nadpis: 'Jak fotit, aby to k něčemu bylo' },
    { id: 'konec', nadpis: 'Protokol při vracení bytu' },
    { id: 'chyby', nadpis: 'Čeho se vyvarovat' },
  ],
  faq: [
    {
      otazka: 'Je předávací protokol povinný?',
      odpoved: 'Ne, zákon ho nevyžaduje. V praxi ale rozhoduje spory o kauci a o vyúčtování — bez něj neprokážeš, v jakém stavu byl byt na začátku a jaké byly stavy měřidel.',
    },
    {
      otazka: 'Co když nájemník protokol odmítne podepsat?',
      odpoved: 'Bez podpisu má protokol slabší váhu, ale ne nulovou — pořiď fotodokumentaci s datem a pozvi svědka. Odmítnutí podpisu je samo o sobě signál, že do nájmu jít nemusíš.',
    },
    {
      otazka: 'Musí být protokol součástí smlouvy?',
      odpoved: 'Nemusí, ale je to praktické. Jako příloha smlouvy je jasné, k čemu se vztahuje, a nájemník ho podepisuje spolu se smlouvou.',
    },
    {
      otazka: 'Jak dlouho protokol a fotky schovávat?',
      odpoved: 'Minimálně do vypořádání jistoty a vyúčtování po skončení nájmu, raději déle. Spory o škodu se mohou objevit i s odstupem, a digitální archiv nic nestojí.',
    },
  ],
  zdroje: ['praxe podle § 2235 a násl. občanského zákoníku'],
}

export default function PredavaciProtokol() {
  return (
    <>
      <Perex>
        Předávací protokol je nepovinný papír, který rozhodne většinu sporů o kauci. Když ho máš,
        skoro nikdy ho nepotřebuješ — protože se není o čem hádat. Když ho nemáš, platíš.
      </Perex>

      <Shrnuti>
        <li>Bez protokolu neprokážeš, že škoda vznikla za nájemníka, a z jistoty strhnout nemůžeš.</li>
        <li>Stavy měřidel jsou důležitější než popis stěn — bez nich je první vyúčtování odhad.</li>
        <li>Foť s datem, celek i detail, a fotky přilož k protokolu.</li>
        <li>Stejný protokol udělej i při vracení bytu.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="proc">Proč ho dělat, když není povinný</H2>
      <P>
        Na konci nájmu se řeší dvě otázky: kolik vody a tepla nájemník spotřeboval a co v bytě
        rozbil. Na obojí odpovídá protokol z prvního dne. Bez něj stojí tvrzení proti tvrzení —
        a protože břemeno nese ten, kdo si chce něco strhnout z jistoty, prohraješ ty.
      </P>
      <P>
        Je to patnáct minut práce při předání bytu. Není to formalita pro právníky, je to doklad,
        ze kterého se počítají peníze.
      </P>

      <H2 id="co">Co do protokolu patří</H2>
      <Seznam>
        <Polozka><strong>Datum a čas předání</strong> a kdo byl přítomen.</Polozka>
        <Polozka><strong>Označení bytu</strong> a smlouvy, ke které se protokol vztahuje.</Polozka>
        <Polozka><strong>Stavy všech měřidel</strong> včetně výrobních čísel.</Polozka>
        <Polozka><strong>Počet předaných klíčů</strong> od bytu, domu, schránky, sklepa a případných čipů.</Polozka>
        <Polozka><strong>Soupis vybavení</strong> — spotřebiče včetně typu, nábytek, osvětlení.</Polozka>
        <Polozka><strong>Stav místností</strong> stručně a konkrétně, včetně již existujících závad.</Polozka>
        <Polozka><strong>Odečet čistoty</strong> — kdy byl byt naposledy vymalován, stav podlah.</Polozka>
        <Polozka><strong>Podpisy obou stran</strong> a poznámka, že fotky tvoří přílohu.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Existující závady do protokolu patří taky. Když zapíšeš „prasklina na dlaždici v koupelně“,
          chráníš tím sebe i nájemníka — a na konci nájmu se o ni nebudete přetahovat.
        </p>
      </Ramecek>

      <H2 id="meridla">Měřidla: nejdůležitější řádek protokolu</H2>
      <Tabulka
        hlavicka={['Měřidlo', 'Co zapsat', 'Proč']}
        radky={[
          ['Studená voda', 'stav v m³ + výrobní číslo', 'rozúčtování vody a stočného'],
          ['Teplá voda', 'stav v m³ + výrobní číslo', 'teplá voda se rozúčtovává zvlášť'],
          ['Elektřina', 'stav + číslo elektroměru + EAN', 'přepis odběrného místa'],
          ['Plyn', 'stav + číslo plynoměru + EIC', 'přepis odběrného místa'],
          ['Teplo / indikátory', 'stav na indikátorech', 'poměrové rozdělení nákladů na teplo'],
        ]}
      />
      <P>
        Když je odběrné místo psané přímo na nájemníka, přepis u dodavatele řeš ve stejný den jako
        předání — jinak ti přijde faktura za energie, které spotřeboval někdo jiný.
      </P>

      <H2 id="fotky">Jak fotit, aby to k něčemu bylo</H2>
      <Seznam>
        <Polozka><strong>Každou místnost z rohu</strong>, aby byl vidět celek.</Polozka>
        <Polozka><strong>Detail každé zapsané závady</strong> — a jednu fotku odstupu, ať je jasné, kde je.</Polozka>
        <Polozka><strong>Displeje měřidel</strong> tak, aby byla čitelná čísla i výrobní číslo.</Polozka>
        <Polozka><strong>Spotřebiče včetně typových štítků.</strong></Polozka>
        <Polozka><strong>Nefiltrovat a needitovat</strong> — originály s datem pořízení.</Polozka>
      </Seznam>
      <P>
        Fotky ulož tam, kde je najdeš i za tři roky. Telefon se ztratí, e-mail se smaže.
      </P>

      <H2 id="konec">Protokol při vracení bytu</H2>
      <P>
        Stejný postup, jen obráceně. Byt převezmi osobně a protokolárně, zapiš stavy měřidel
        a stav bytu, převezmi všechny klíče a doplň, co je potřeba opravit nebo doúčtovat.
      </P>
      <Seznam cislovany>
        <Polozka>Projdi byt podle protokolu z nastěhování, položku po položce.</Polozka>
        <Polozka>Vyfoť stejná místa jako na začátku.</Polozka>
        <Polozka>Zapiš konečné stavy měřidel a nahlas je dodavatelům.</Polozka>
        <Polozka>Sepiš, co je nad rámec běžného opotřebení, a nech to nájemníka podepsat.</Polozka>
        <Polozka>Do protokolu uveď, kdy a jak vypořádáš <OdkazClanek slug="jistota-kauce">jistotu</OdkazClanek>.</Polozka>
      </Seznam>

      <H2 id="chyby">Čeho se vyvarovat</H2>
      <Seznam>
        <Polozka><strong>Obecné formulace.</strong> „Byt je v dobrém stavu“ nedokazuje nic.</Polozka>
        <Polozka><strong>Chybějící výrobní čísla měřidel.</strong> Bez nich se nepozná, že se měřidlo vyměnilo.</Polozka>
        <Polozka><strong>Protokol bez podpisů.</strong> Nepodepsaný papír má u soudu poloviční váhu.</Polozka>
        <Polozka><strong>Fotky bez data.</strong> Vždycky se dá namítnout, že vznikly až později.</Polozka>
        <Polozka><strong>Jeden výtisk.</strong> Oba ho podepíšete, oba si ho odnesete.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Protokol i fotky si v Housiu nahraješ k té konkrétní nemovitosti, takže se nehledají
          v e-mailu z předloňska. Stavy měřidel se zapisují jako odečty, ze kterých se pak
          počítá <OdkazClanek slug="vyuctovani-sluzeb">vyúčtování</OdkazClanek> — a všechno to
          vyjede v jednom exportu, když se bude něco dokládat.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
