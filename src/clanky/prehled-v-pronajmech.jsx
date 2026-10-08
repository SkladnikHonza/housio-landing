import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'prehled-v-pronajmech',
  nadpis: 'Jak si udržet přehled v pronájmech, když bytů přibývá',
  perex: 'U jednoho bytu stačí hlava, u třech už ne. Co je potřeba mít pod kontrolou, kde se přehled nejčastěji ztratí, jaký minimální systém funguje i v Excelu a kdy Excel přestane stačit.',
  tema: 'provoz',
  datum: '2026-10-08',
  minut: 9,
  sekce: [
    { id: 'co-hlidat', nadpis: 'Čtyři věci, které musíš mít pod kontrolou' },
    { id: 'kde-se-ztrati', nadpis: 'Kde se přehled nejčastěji ztratí' },
    { id: 'minimum', nadpis: 'Minimální systém, který funguje i v Excelu' },
    { id: 'kdy-nestaci', nadpis: 'Kdy Excel přestane stačit' },
    { id: 'housio', nadpis: 'Jak to řeší Housio' },
    { id: 'nedela', nadpis: 'Co Housio nedělá' },
  ],
  faq: [
    {
      otazka: 'Od kolika bytů se vyplatí aplikace?',
      odpoved: 'Zlom bývá mezi třetím a pátým bytem — tam přestává stačit paměť a začíná se chybovat v termínech. U jednoho bytu je aplikace spíš pohodlí než nutnost, u deseti je Excel riziko. Rozhoduje ale i to, jestli pronajímáš sám, nebo s někým.',
    },
    {
      otazka: 'Co se nejčastěji zapomene?',
      odpoved: 'Konec nájemní smlouvy na dobu určitou a platnost revize plynu. Obojí má tříměsíční až roční dohru a obojí se pozná až ve chvíli, kdy je pozdě. Druhá nejčastější je lhůta pro doručení vyúčtování služeb — za její zmeškání vzniká nárok na pokutu padesát korun za každý den.',
    },
    {
      otazka: 'Stačí si vést evidenci v Excelu?',
      odpoved: 'U jednoho až dvou bytů ano, pokud máš jeden soubor a jednu složku na doklady. Problém nastává s více byty, s více lety a hlavně ve chvíli, kdy s tím pracuje víc lidí — tam začne verzování a nikdo neví, který soubor je ten platný.',
    },
    {
      otazka: 'Je Housio zdarma?',
      odpoved: 'Jedna nemovitost je zdarma bez časového omezení a bez karty. Placené plány začínají u patnácti bytů a přidávají smlouvy, výdaje, pojištění a doklady. Ceník je na webu.',
    },
    {
      otazka: 'Dostanu z Housia data ven, kdybych odešel?',
      odpoved: 'Ano, celé portfolio i jednotlivou nemovitost vyexportuješ do Excelu — platby, výdaje, smlouvy, nájemníky, pojištění a revize, každé ve vlastním listu. Žádná výpovědní lhůta na data.',
    },
  ],
  zdroje: ['Vlastní zkušenost z provozu Housia a z pronájmu; právní lhůty v textu odkazují na příslušné články průvodce.'],
}

export default function PrehledVPronajmech() {
  return (
    <>
      <Perex>
        Pronájem jednoho bytu je koníček. Tři byty jsou práce na částečný úvazek a deset je
        malá firma. Přechod mezi těmi stavy nikdo nevyhlásí — pozná se až podle toho, že ti
        něco uteče.
      </Perex>

      <Shrnuti>
        <li>Hlídat se musí termíny, peníze, doklady a stav bytu.</li>
        <li>Nejdráž vyjdou zapomenuté lhůty, ne nezaplacené nájmy.</li>
        <li>Minimální systém zvládneš i v Excelu — ale musí být jeden.</li>
        <li>Excel padá na více letech, více bytech a více lidech.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="co-hlidat">Čtyři věci, které musíš mít pod kontrolou</H2>
      <P>
        Ať už to vedeš kdekoli, jde pořád o totéž. Když některý ze čtyř sloupů chybí, pozná se
        to vždycky ve špatnou chvíli.
      </P>
      <Tabulka
        hlavicka={['Co', 'Konkrétně', 'Co se stane, když to nehlídáš']}
        radky={[
          ['Termíny', 'konec smlouvy, revize, pojistka, vyúčtování', 'propadlé lhůty, pokuty, prodloužený nájem'],
          ['Peníze', 'předpis, co přišlo, výdaje s doklady', 'nevíš, jestli byt vydělává, a daň platíš z víc'],
          ['Doklady', 'smlouva, protokol, faktury, revizní zprávy', 'u sporu i u kontroly stojíš s prázdnýma rukama'],
          ['Stav bytu', 'fotky při předání, stavy měřidel', 'nedokážeš odlišit opotřebení od škody'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Nejdražší položka v téhle tabulce nejsou peníze, ale termíny. Nezaplacený nájem se dá
          vymáhat; zmeškaná výpovědní lhůta u smlouvy na dobu určitou znamená, že nájem běží dál
          a ty čekáš další měsíce.
        </p>
      </Ramecek>

      <H2 id="kde-se-ztrati">Kde se přehled nejčastěji ztratí</H2>
      <Seznam>
        <Polozka>
          <strong>V hlavě.</strong> U jednoho bytu funguje skvěle. Chyba přijde v momentě, kdy
          přibude druhý — protože mozek si pamatuje <em>jeden</em> datum konce smlouvy, ne dvě.
        </Polozka>
        <Polozka>
          <strong>V e-mailu.</strong> Smlouva je v příloze někde z roku 2023, předávací protokol
          poslal nájemník přes WhatsApp a faktura za opravu leží ve fotkách. Nic z toho se
          nenajde, když to potřebuješ do hodiny.
        </Polozka>
        <Polozka>
          <strong>Ve verzích Excelu.</strong> Klasika jménem <em>byty_2026_final_opraveno_v3.xlsx</em>.
          Dokud s tím pracuješ sám a na jednom počítači, jde to. Jakmile se zapojí partner nebo
          účetní, nikdo neví, který soubor platí.
        </Polozka>
        <Polozka>
          <strong>Mezi lety.</strong> Letošní tabulku máš, loňskou někde, předloňskou nenajdeš.
          Přitom právě při prodeji bytu nebo při kontrole z finančního úřadu potřebuješ roky
          zpátky.
        </Polozka>
      </Seznam>

      <H2 id="minimum">Minimální systém, který funguje i v Excelu</H2>
      <P>
        Než začneš řešit nástroj, ujasni si systém. Tenhle funguje a dá se postavit za hodinu
        v čemkoli:
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Jedno místo, ne pět.</strong> Jeden soubor a jedna složka na doklady, rozdělená
          po nemovitostech. Ne po letech, ne po typech — po bytech. Otázky, které ti chodí, jsou
          vždycky o konkrétním bytě.
        </Polozka>
        <Polozka>
          <strong>Nájemné a zálohy odděleně.</strong> Ne jedna částka. Zálohy na služby nejsou
          tvůj příjem, jen je vybíráš a na konci roku
          <OdkazClanek slug="vyuctovani-sluzeb"> vyúčtuješ</OdkazClanek>. Sloučené se nedají
          vyúčtovat ani správně zdanit.
        </Polozka>
        <Polozka>
          <strong>Ke každému výdaji doklad.</strong> Fotka faktury hned, ne večer. Bez dokladu
          výdaj daňově neuplatníš a při kontrole ho neobhájíš.
        </Polozka>
        <Polozka>
          <strong>Seznam termínů s datem, ne s pocitem.</strong> Konec každé smlouvy, platnost
          každé <OdkazClanek slug="povinne-revize">revize</OdkazClanek> a pojistky. A připomínku
          nastav tři měsíce dopředu — u výpovědi je tříměsíční lhůta a kratší varování je
          k ničemu.
        </Polozka>
        <Polozka>
          <strong>Fotky při každém předání.</strong> Při nastěhování i při vrácení, se stavy
          měřidel. Je to nejlevnější pojistka, jakou v pronájmu máš, a rozhoduje při sporu
          o <OdkazClanek slug="jistota-kauce">kauci</OdkazClanek>.
        </Polozka>
      </Seznam>
      <P>
        Pokud tohle máš, jsi dál než většina pronajímatelů — bez ohledu na to, v čem to vedeš.
      </P>

      <H2 id="kdy-nestaci">Kdy Excel přestane stačit</H2>
      <P>
        Excel je dobrý začátek a lhal by ti každý, kdo tvrdí opak. Přestává stačit v konkrétních
        chvílích, ne „obecně“:
      </P>
      <Tabulka
        hlavicka={['Situace', 'Proč to Excel neutáhne']}
        radky={[
          ['Víc než pět bytů', 'tabulka přestane být přehledná a hledá se v ní déle než se zapisuje'],
          ['Pracuje s tím víc lidí', 'verzování souborů; nikdo neví, co je platné'],
          ['Chceš doklady u záznamů', 'Excel soubory nedrží, zůstanou ve složce vedle'],
          ['Potřebuješ hlídat termíny', 'tabulka ti sama nic nepřipomene'],
          ['Chceš vystavit potvrzení nebo fakturu', 'píše se ručně a při každém se dá udělat chyba'],
          ['Zpětné roky', 'buď máš deset souborů, nebo jeden nepřehledný'],
        ]}
      />
      <P>
        Pokud ani v jednom řádku nejsi, zůstaň u Excelu. Vážně. Měnit nástroj bez důvodu je
        jen práce navíc.
      </P>

      <H2 id="housio">Jak to řeší Housio</H2>
      <P>
        Housio je aplikace, kterou kolem tohohle problému stavíme — tady je, co z těch čtyř
        sloupů pokrývá a jak.
      </P>
      <Seznam>
        <Polozka>
          <strong>Všechno u bytu, ne u typu záznamu.</strong> Každá nemovitost má kartu
          se záložkami: nájemníci, smlouvy, platby, výdaje, energie, pojištění, revize, dokumenty.
          Na otázku „kolik mě loni stál ten byt v Michálkovicích“ se odpovídá z jednoho místa.
        </Polozka>
        <Polozka>
          <strong>Termíny jsou vidět samy.</strong> Končící smlouvy a propadlé nebo blížící se
          revize svítí v přehledu, aniž bys na ně musel kliknout.
        </Polozka>
        <Polozka>
          <strong>Nájemné a zálohy odděleně od začátku.</strong> Předpis vychází ze smlouvy
          a proti němu se zapisuje, co opravdu přišlo. Rozdíl je vidět na první pohled.
        </Polozka>
        <Polozka>
          <strong>Doklady se tisknou z dat, co už máš.</strong> Potvrzení o zaplacení nájmu,
          faktura, roční vyúčtování služeb, potvrzení o přijetí
          i vrácení <OdkazClanek slug="jistota-kauce">kauce</OdkazClanek> s rozpisem odpočtů
          a úroku. Nepřepisuje se nic, takže doklad nemůže říkat něco jiného než
          evidence.
        </Polozka>
        <Polozka>
          <strong>Export do Excelu kdykoli.</strong> Celé portfolio nebo jedna nemovitost,
          po listech. Pro účetní, pro spoluvlastníka nebo prostě proto, že chceš svoje data mít.
        </Polozka>
        <Polozka>
          <strong>Přístup pro vlastníka a pro tým.</strong> Majitel bytu, který ti ho svěřil,
          si může sám zobrazit obsazenost a výsledek — bez toho, aby viděl tvoje ostatní byty.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Nejčastější scénář, kvůli kterému si lidé Housio zakládají, není „chci moderní
          aplikaci“. Je to: v březnu sedí nad daňovým přiznáním, mají příjmy v bance, výdaje
          ve třech složkách a část faktur ve fotkách v telefonu — a slíbí si, že příští rok
          takhle ne.
        </p>
      </Ramecek>

      <H2 id="nedela">Co Housio nedělá</H2>
      <P>
        Tohle je část, kterou většina produktových textů vynechá, a přitom rozhoduje, jestli
        pro tebe nástroj dává smysl.
      </P>
      <Seznam>
        <Polozka>
          <strong>Nepáruje platby z banky.</strong> Napojení na banku nemáme, platby se zapisují.
          Dokud ho nebudeme mít doopravdy, nebudeme ho slibovat.
        </Polozka>
        <Polozka>
          <strong>Nenabízí vzory smluv.</strong> Vzor, který neprošel advokátem, je u soudu spíš
          riziko než pomoc. Housio smlouvy eviduje a pracuje s jejich čísly, právníka nenahrazuje.
        </Polozka>
        <Polozka>
          <strong>Neřídí rezervace.</strong> U krátkodobého pronájmu eviduje pobyty a umí
          načíst obsazenost z kalendáře Airbnb nebo Booking.com, ale rezervační systém to není.
        </Polozka>
        <Polozka>
          <strong>Nedělá za tebe rozhodnutí.</strong> Jestli je oprava
          <OdkazHeslo slug="technicke-zhodnoceni"> technické zhodnocení</OdkazHeslo>, jestli
          dát výpověď a jakou sazbu úroku použít u kauce — to zůstává na tobě a na tvém
          poradci. Housio dá podklad.
        </Polozka>
        <Polozka>
          <strong>Není účetní program.</strong> S DPH nepracuje a podvojné účetnictví nevede.
          Pokud pronajímáš nebytové prostory jako plátce DPH, potřebuješ něco jiného.
        </Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Jedna nemovitost je v Housiu zdarma napořád a bez karty — dost na to, abys zjistil,
          jestli ti to sedí, než do toho přepíšeš celé portfolio. A kdyby ne, všechno si
          vyexportuješ do Excelu a odejdeš.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="8. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
