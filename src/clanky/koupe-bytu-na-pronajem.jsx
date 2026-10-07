import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, OdkazKalkulacka, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'koupe-bytu-na-pronajem',
  nadpis: 'Koupě bytu na pronájem: na co se dívat dřív než na cenu',
  perex: 'Byt, který se dobře kupuje, se nemusí dobře pronajímat. Čím se liší investiční koupě od koupě pro sebe, co zjistit v SVJ, jaké vedlejší náklady počítat a kde se nejčastěji prodělá.',
  tema: 'investice',
  datum: '2026-10-07',
  minut: 10,
  sekce: [
    { id: 'jinak', nadpis: 'Pro nájemníka, ne pro sebe' },
    { id: 'naklady', nadpis: 'Co koupě opravdu stojí' },
    { id: 'svj', nadpis: 'Co si zjistit o domě a SVJ' },
    { id: 'pravni', nadpis: 'Právní kontrola před podpisem' },
    { id: 'stav', nadpis: 'Technický stav a co se vyplatí' },
    { id: 'vypocet', nadpis: 'Spočítej si to dřív, než podepíšeš' },
  ],
  faq: [
    {
      otazka: 'Jaký byt se nejlépe pronajímá?',
      odpoved: 'Menší byty v dosahu dopravy a práce mívají nejvyšší výnos na korunu ceny a nejkratší dobu hledání nájemníka. Velké byty se pronajímají hůř a déle, protože rodin, které si je mohou dovolit, je míň — zato se v nich nájemníci drží dlouho.',
    },
    {
      otazka: 'Kolik počítat na vedlejší náklady koupě?',
      odpoved: 'Daň z nabytí už neplatíš, ale zbytek zůstává: správní poplatek za vklad do katastru, odhad pro banku, právní služby a úschova, případná provize a hlavně uvedení bytu do pronajímatelného stavu. U staršího bytu to bývají desítky až stovky tisíc.',
    },
    {
      otazka: 'Co je nejdůležitější zjistit o SVJ?',
      odpoved: 'Stav fondu oprav, plánované velké investice a dluhy ostatních vlastníků. Chystaná výměna výtahu nebo zateplení znamená buď jednorázový příspěvek, nebo zvýšení měsíční platby — a to jde z tvého výnosu, ne z nájemníkova.',
    },
    {
      otazka: 'Vyplatí se byt před pronájmem rekonstruovat?',
      odpoved: 'Záleží, jestli se tím zvýší nájemné nebo zkrátí doba hledání nájemníka. Vymalovat a opravit, co nefunguje, se vyplatí skoro vždy. Luxusní kuchyň v panelovém bytě se na nájemném zpravidla nevrátí — nájemník za ni víc nezaplatí.',
    },
    {
      otazka: 'Mám kupovat byt v místě, kde bydlím?',
      odpoved: 'Pokud byt chceš spravovat sám, je to velká výhoda — prohlídky, havárie i předání jsou otázka dvaceti minut, ne dne. U bytu přes republiku počítej buď s cestováním, nebo se správcovskou firmou, a tu zahrň do nákladů.',
    },
  ],
  zdroje: [
    '§ 1166 a násl. občanského zákoníku (bytové spoluvlastnictví)',
    'zákon č. 256/2013 Sb., o katastru nemovitostí',
    'zákon č. 634/2004 Sb., o správních poplatcích',
  ],
}

export default function KoupeBytuNaPronajem() {
  return (
    <>
      <Perex>
        U bytu pro sebe rozhoduje, jestli se ti v něm bude líbit. U bytu na pronájem rozhoduje,
        jestli se bude líbit někomu, koho ještě neznáš — a jestli ti po všech nákladech něco
        zbyde.
      </Perex>

      <Shrnuti>
        <li>Rozhoduje poptávka po nájmu, ne tvůj vkus.</li>
        <li>Vedlejší náklady koupě umí ukrojit půl procenta z výnosu.</li>
        <li>Fond oprav a plánované investice SVJ zjisti před podpisem.</li>
        <li>Spočítej čistý výnos, ne hrubý — a to před rezervační smlouvou.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="jinak">Pro nájemníka, ne pro sebe</H2>
      <P>
        Nejčastější chyba u první investiční koupě je, že člověk kupuje byt, ve kterém by chtěl
        bydlet. Nájemník má ale jiné priority — a hlavně jich má míň, protože v bytě nebude
        dvacet let.
      </P>
      <Tabulka
        hlavicka={['Co řeší kupující pro sebe', 'Co řeší nájemník']}
        radky={[
          ['Orientace oken, výhled', 'cena a dojezd do práce'],
          ['Sousedé a klid na roky', 'jestli je byt hned volný'],
          ['Vlastní vkus v kuchyni', 'jestli kuchyň funguje'],
          ['Potenciál zhodnocení', 'nic, ten ho nezajímá'],
          ['Balkon jako plus', 'parkování jako plus'],
        ]}
      />
      <Seznam>
        <Polozka>
          <strong>Dostupnost rozhoduje nejvíc.</strong> Zastávka do deseti minut pěšky zkracuje
          dobu hledání nájemníka víc než nová koupelna.
        </Polozka>
        <Polozka>
          <strong>Menší byty se pronajímají rychleji.</strong> Lidí, kteří hledají 2+kk, je
          mnohonásobně víc než těch, kdo hledají 4+1. Zato se v malém bytě nájemníci střídají
          častěji — a každá výměna je prázdný měsíc.
        </Polozka>
        <Polozka>
          <strong>Dívej se, kdo bydlí v okolí.</strong> Studentská čtvrť, rodiny, senioři —
          z toho plyne, jak dlouhé nájmy čekat a jak často budeš hledat.
        </Polozka>
      </Seznam>

      <H2 id="naklady">Co koupě opravdu stojí</H2>
      <P>
        Kupní cena není cena koupě. Dobrá zpráva je, že
        <strong> daň z nabytí nemovitých věcí už neexistuje</strong> — byla zrušena a kupující
        z ní neplatí nic. Zbytek ale zůstává.
      </P>
      <Tabulka
        hlavicka={['Položka', 'Kdo platí', 'Poznámka']}
        radky={[
          ['Správní poplatek za vklad do katastru', 'obvykle kupující', 'podle sazebníku správních poplatků'],
          ['Právní služby a úschova', 'bývá dělené', 'advokátní, notářská nebo bankovní úschova'],
          ['Odhad nemovitosti pro banku', 'kupující', 'u hypotéky vždy'],
          ['Provize realitní kanceláře', 'podle smlouvy', 'ověř si, kdo ji platí, dřív než podepíšeš rezervaci'],
          ['Uvedení do pronajímatelného stavu', 'kupující', 'nejvíc podceňovaná položka'],
          ['Vybavení', 'kupující', 'pračka, lednice, postele u zařízeného bytu'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Poslední dvě položky rozhodují. Byt, který je „hned k nastěhování“, ho podle inzerátu
          bývá vždycky — a po převzetí zjistíš, že je potřeba vymalovat, vyměnit baterie
          a koupit spotřebiče. U staršího bytu počítej spíš se stovkami tisíc než s desítkami.
        </p>
      </Ramecek>

      <H2 id="svj">Co si zjistit o domě a SVJ</H2>
      <P>
        U jednotky v domě nekupuješ jen byt, ale i podíl na společných částech — a s ním podíl
        na tom, co dům čeká. Tohle je část, kterou lidé při koupi pro sebe odbydou a u investice
        se jim to vrátí.
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Stav fondu oprav.</strong> Kolik v něm je a kolik se ročně vybere. Prázdný fond
          u domu z šedesátých let znamená, že platit bude někdo — a ten někdo budeš ty.
        </Polozka>
        <Polozka>
          <strong>Plánované investice.</strong> Zápisy ze shromáždění za poslední dva tři roky.
          Chystaná výměna výtahu, střecha, zateplení, rozvody. Zvýšení příspěvku do
          <OdkazHeslo slug="fond-oprav"> fondu oprav</OdkazHeslo> jde z tvého výnosu, nájemníkovi
          ho nepřeúčtuješ.
        </Polozka>
        <Polozka>
          <strong>Dluhy vlastníků.</strong> Dům, kde třetina vlastníků neplatí, nemá na opravy
          a zbytek to doplácí. Ptej se výboru přímo.
        </Polozka>
        <Polozka>
          <strong>Úvěr SVJ.</strong> Mnoho domů má na rekonstrukci úvěr. Splátka je součástí
          měsíční platby a poběží ještě roky.
        </Polozka>
        <Polozka>
          <strong>Pravidla pro pronájem.</strong> <OdkazHeslo slug="svj">SVJ</OdkazHeslo> ti nemůže
          zakázat byt pronajímat, ale domovní řád může omezovat krátkodobé ubytování nebo
          užívání společných prostor. Přečti si ho.
        </Polozka>
      </Seznam>

      <H2 id="pravni">Právní kontrola před podpisem</H2>
      <P>
        Výpis z katastru nemovitostí si stáhni sám a přečti si ho celý — zvlášť list vlastnictví
        část C a D.
      </P>
      <Tabulka
        hlavicka={['Co hledat', 'Proč']}
        radky={[
          ['Zástavní právo', 'musí být vymazáno nebo ošetřeno v úschově'],
          ['Exekuce, insolvence', 'prodej může být neplatný'],
          ['Věcné břemeno', 'právo dožití někoho cizího v bytě'],
          ['Předkupní právo', 'spoluvlastník může mít přednost'],
          ['Poznámka o zahájeném řízení', 'něco se děje a ještě to není dokončené'],
          ['Soulad výměry a dispozice', 'to, co je v inzerátu, nemusí být v katastru'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Kupní cenu posílej jen do <strong>úschovy</strong> — advokátní, notářské nebo bankovní.
          Nikdy přímo prodávajícímu před zápisem do katastru. Poplatek za úschovu je zlomek ceny
          bytu a řeší přesně tu situaci, kdy se mezi podpisem a vkladem něco pokazí.
        </p>
      </Ramecek>

      <H2 id="stav">Technický stav a co se vyplatí</H2>
      <P>
        U pronájmu platí jiná logika než u vlastního bydlení: investice se musí vrátit v nájemném
        nebo v kratší době hledání nájemníka. Jinak je to útrata, ne investice.
      </P>
      <Tabulka
        hlavicka={['Zásah', 'Vrátí se?']}
        radky={[
          ['Vymalovat', 'téměř vždy — byt vypadá na fotkách i při prohlídce jinak'],
          ['Opravit, co nefunguje', 'vždy — jinak to vyřešíš při první havárii dráž'],
          ['Vyměnit staré spotřebiče', 'obvykle ano, hlavně v úsporách za reklamace'],
          ['Nová koupelna ve starém bytě', 'někdy — zvedne nájemné i okruh zájemců'],
          ['Luxusní kuchyň v paneláku', 'spíš ne — nájemník za ni víc nezaplatí'],
          ['Podlahové vytápění, chytrá domácnost', 'ne — nájemník to neocení'],
        ]}
      />
      <P>
        Nezapomeň na <OdkazClanek slug="povinne-revize">povinné revize</OdkazClanek>. U bytu
        s plynem potřebuješ platné revizní zprávy ještě před nastěhováním nájemníka a staré
        rozvody můžou znamenat nečekaný výdaj hned v prvním roce.
      </P>

      <H2 id="vypocet">Spočítej si to dřív, než podepíšeš</H2>
      <P>
        Rezervační smlouva se podepisuje rychle a často pod tlakem. Jedna tabulka před ní ti
        ušetří roky vysvětlování, proč to nevychází.
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Zjisti reálné nájemné</strong>, ne to z inzerátů. Inzerát je nabídka, ne
          uzavřený obchod. Jak se určuje, rozebírá
          článek <OdkazClanek slug="vyse-najemneho">o výši nájemného</OdkazClanek>.
        </Polozka>
        <Polozka>
          <strong>Sečti pořizovací cenu včetně všeho</strong> z kapitoly o nákladech.
        </Polozka>
        <Polozka>
          <strong>Sečti roční náklady</strong>: daň z nemovitých věcí, pojistka, fond oprav,
          revize, rezerva na opravy, a připočti neobsazenost.
        </Polozka>
        <Polozka>
          <strong>Spočítej čistý výnos</strong> a porovnej ho s tím, co ti dá spořicí účet.
          Postup i vzorce jsou v článku
          o <OdkazClanek slug="vynos-z-pronajmu">výnosu z pronájmu</OdkazClanek>.
        </Polozka>
        <Polozka>
          <strong>Spočítej daň.</strong> Skutečné výdaje versus paušál spočítá
          <OdkazKalkulacka slug="dan-z-pronajmu"> kalkulačka daně z pronájmu</OdkazKalkulacka>,
          odpisy <OdkazKalkulacka slug="odpisy-nemovitosti">kalkulačka odpisů</OdkazKalkulacka>.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Byt 2+kk za 4 200 000 Kč, nájemné 16 000 Kč. Hrubý výnos vypadá na 4,6 %.<br />
          Po připočtení 280 000 Kč vedlejších nákladů a vybavení je pořizovací cena 4 480 000 Kč.
          Po odečtení 36 000 Kč ročních nákladů, jednoho prázdného měsíce ze tří let a daně
          zbývá zhruba 142 000 Kč.<br />
          Čistý výnos <strong>3,2 %</strong> — pořád se může vyplatit, ale je to jiné číslo
          než 4,6 %, se kterým jsi do toho šel.
        </p>
      </Ramecek>

      <Ramecek druh="housio">
        <p>
          Jakmile byt koupíš, založ si ho v Housiu i s kupní cenou a cenou rekonstrukce. Zní to
          jako detail, ale jsou to přesně ty údaje, které budeš potřebovat při odpisech
          a jednou při prodeji — a za pět let už je nikde nenajdeš.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
