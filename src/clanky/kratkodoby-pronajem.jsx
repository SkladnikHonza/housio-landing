import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'kratkodoby-pronajem',
  nadpis: 'Krátkodobý pronájem a Airbnb: co všechno musíš splnit',
  perex: 'Proč se krátkodobý pronájem daní jinak než klasický nájem, co znamená poplatek z pobytu, kdy se z tebe stane identifikovaná osoba k DPH a jakou evidenci musíš vést.',
  tema: 'dane',
  datum: '2026-10-01',
  minut: 10,
  sekce: [
    { id: 'rozdil', nadpis: 'Nájem, nebo ubytovací služba' },
    { id: 'zivnost', nadpis: 'Živnostenské oprávnění' },
    { id: 'dane', nadpis: 'Daně a pojistné' },
    { id: 'dph', nadpis: 'DPH a identifikovaná osoba' },
    { id: 'poplatek', nadpis: 'Poplatek z pobytu' },
    { id: 'evidence', nadpis: 'Evidence hostů a cizinci' },
    { id: 'dum', nadpis: 'Společenství vlastníků a sousedé' },
    { id: 'vyplati', nadpis: 'Vyplatí se to oproti dlouhodobému nájmu?' },
  ],
  faq: [
    {
      otazka: 'Můžu příjmy z Airbnb danit podle § 9 jako nájem?',
      odpoved: 'Zpravidla ne. Jakmile k ubytování poskytuješ služby typu úklidu, výměny prádla nebo předávání klíčů hostům, jde o ubytovací službu podle § 7, tedy o příjem ze samostatné činnosti se vším, co k tomu patří.',
    },
    {
      otazka: 'Kolik je poplatek z pobytu?',
      odpoved: 'Horní hranice sazby je 50 Kč za osobu a započatý den pobytu, kromě dne příjezdu. Konkrétní sazbu si stanoví obec vyhláškou, takže v každém městě může být jiná — a poplatek není tvůj příjem, jen ho vybíráš a odvádíš.',
    },
    {
      otazka: 'Musím být plátce DPH?',
      odpoved: 'Plátcem se stáváš až po překročení obratu. Identifikovanou osobou se ale staneš prakticky hned, jakmile přijmeš službu ze zahraničí — třeba provizi od Airbnb nebo Booking.com. Pak podáváš přiznání k DPH z přijatých služeb, aniž bys byl plátcem.',
    },
    {
      otazka: 'Musím hlásit hosty cizinecké policii?',
      odpoved: 'Ubytovatel vede domovní knihu a cizince hlásí cizinecké policii ve stanovené lhůtě. Platformy to za tebe neudělají.',
    },
    {
      otazka: 'Může mi společenství vlastníků krátkodobý pronájem zakázat?',
      odpoved: 'Samo o sobě ho zakázat nemůže, ale může přijmout pravidla pro užívání společných částí a vymáhat náhradu zvýšených nákladů. Spory o krátkodobé pronájmy v bytových domech jsou časté — podívej se do stanov dřív, než začneš.',
    },
  ],
  zdroje: ['§ 7 zákona o daních z příjmů', 'zákon č. 565/1990 Sb., o místních poplatcích', 'zákon č. 326/1999 Sb., o pobytu cizinců'],
}

export default function KratkodobyPronajem() {
  return (
    <>
      <Perex>
        Krátkodobý pronájem vypadá jako pronájem, ale právně i daňově je to něco jiného — ubytovací
        služba. Rozdíl se projeví v živnostenském rejstříku, v daňovém přiznání, u DPH i v tom, co
        musíš hlásit obci a policii.
      </Perex>

      <Shrnuti>
        <li>Krátkodobé ubytování se daní podle § 7 jako samostatná činnost, ne podle § 9 jako nájem.</li>
        <li>Platí se z něj sociální i zdravotní pojištění, na rozdíl od klasického nájmu.</li>
        <li>Poplatek z pobytu vybíráš od hostů a odvádíš obci — horní sazba je 50 Kč za osobu a noc.</li>
        <li>Provize od zahraniční platformy z tebe udělá identifikovanou osobu k DPH.</li>
        <li>Vedeš domovní knihu a cizince hlásíš cizinecké policii.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="rozdil">Nájem, nebo ubytovací služba</H2>
      <P>
        Rozhoduje účel a to, co kolem bydlení poskytuješ. Nájem je o uspokojení bytové potřeby —
        člověk tam bydlí. Ubytovací služba je přechodné ubytování se službami.
      </P>
      <Tabulka
        hlavicka={['', 'Nájem bytu', 'Ubytovací služba']}
        radky={[
          ['Účel', 'bydlení', 'přechodné ubytování'],
          ['Doba', 'měsíce a roky', 'dny a týdny'],
          ['Služby', 'jen energie a provoz domu', 'úklid, prádlo, předání klíčů, recepce'],
          ['Daní se podle', '§ 9', '§ 7'],
          ['Pojistné', 'neplatí se', 'sociální i zdravotní'],
          ['Živnost', 'není potřeba', 'je potřeba'],
        ]}
      />

      <H2 id="zivnost">Živnostenské oprávnění</H2>
      <P>
        Na ubytovací služby potřebuješ živnostenské oprávnění. Ohlašuje se na živnostenském úřadě
        a je to volná živnost, takže nepotřebuješ odbornou způsobilost — ale potřebuješ ji mít
        dřív, než začneš hostit.
      </P>

      <H2 id="dane">Daně a pojistné</H2>
      <P>
        Příjem z ubytovací služby je příjmem ze samostatné činnosti podle <Zakon>§ 7</Zakon>.
        To znamená:
      </P>
      <Seznam>
        <Polozka>daň z příjmů ze zisku, s možností paušálních výdajů podle druhu živnosti,</Polozka>
        <Polozka><strong>sociální a zdravotní pojištění</strong>, které se u nájmu podle § 9 neplatí,</Polozka>
        <Polozka>přehledy pro správu sociálního zabezpečení a zdravotní pojišťovnu,</Polozka>
        <Polozka>u některých případů i možnost paušální daně, pokud splníš podmínky.</Polozka>
      </Seznam>
      <P>
        Právě pojistné bývá to, co výnos z krátkodobého pronájmu srovná s dlouhodobým nájmem víc,
        než lidé čekají. Srovnání daňových režimů u klasického nájmu rozebírám
        v článku <OdkazClanek slug="dane-z-pronajmu">o dani z pronájmu</OdkazClanek>.
      </P>

      <H2 id="dph">DPH a identifikovaná osoba</H2>
      <P>
        Plátcem DPH se stáváš až po překročení obratu. Mnohem dřív se ale staneš
        <strong> identifikovanou osobou</strong> — stačí přijmout službu od osoby povinné k dani
        se sídlem v jiném státě. Provize Airbnb nebo Booking.com přesně taková služba je.
      </P>
      <Ramecek druh="pozor">
        <p>
          Identifikovaná osoba není plátce: z vlastního ubytování DPH neodvádí a nemá nárok
          na odpočet. Musí se ale registrovat a z přijatých zahraničních služeb přiznat
          a odvést daň. Na tohle se nejčastěji zapomíná a doměřuje se zpětně.
        </p>
      </Ramecek>
      <P>
        Platformy navíc v rámci evropských pravidel hlásí údaje o ubytovatelích daňové správě.
        Počítej s tím, že příjem z platformy je viditelný.
      </P>

      <H2 id="poplatek">Poplatek z pobytu</H2>
      <P>
        Poplatek z pobytu platí host, ty ho jen vybíráš a odvádíš obci. Horní hranice sazby je
        <strong> 50 Kč za osobu a každý započatý den pobytu</strong> s výjimkou dne příjezdu;
        konkrétní výši určuje obec vyhláškou a může být nižší.
      </P>
      <Seznam>
        <Polozka>vedeš evidenční knihu podle obecní vyhlášky,</Polozka>
        <Polozka>poplatek odvádíš ve lhůtách, které vyhláška stanoví,</Polozka>
        <Polozka>poplatek <strong>není tvůj příjem</strong> — do daňového přiznání nepatří.</Polozka>
      </Seznam>
      <P>
        Některé skupiny hostů jsou od poplatku osvobozené. Ve vyhlášce své obce si to ověř, sazby
        i osvobození se liší město od města.
      </P>

      <H2 id="evidence">Evidence hostů a cizinci</H2>
      <Seznam>
        <Polozka><strong>Domovní kniha</strong> — jméno, datum narození, doklad, doba pobytu, adresa.</Polozka>
        <Polozka><strong>Hlášení cizinců</strong> cizinecké policii ve stanovené lhůtě od ubytování.</Polozka>
        <Polozka><strong>Uchovávání záznamů</strong> po dobu, kterou předepisují předpisy.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Platforma za tebe nehlásí nic. Kontroly u krátkodobých pronájmů bývají zaměřené právě
          na evidenci hostů a na poplatek z pobytu, protože se to snadno ověřuje proti veřejnému
          kalendáři obsazenosti.
        </p>
      </Ramecek>

      <H2 id="dum">Společenství vlastníků a sousedé</H2>
      <P>
        Krátkodobý pronájem zatěžuje společné části domu víc než běžné bydlení. Společenství
        vlastníků ti ho samo o sobě zakázat nemůže, ale může přijímat pravidla užívání společných
        částí a požadovat náhradu zvýšených nákladů — a sousedé se mohou bránit proti obtěžování
        nad míru přiměřenou poměrům.
      </P>
      <P>
        Praktická rada: přečti si stanovy a domovní řád dřív, než koupíš zámek s kódem.
      </P>

      <H2 id="vyplati">Vyplatí se to oproti dlouhodobému nájmu?</H2>
      <Ramecek druh="priklad">
        <p>
          Byt v centru krajského města. <strong>Dlouhodobě</strong> 20 000 Kč měsíčně, tedy
          240 000 Kč ročně, s minimem práce a bez pojistného.
        </p>
        <p>
          <strong>Krátkodobě</strong> při 60% obsazenosti a 1 800 Kč za noc jde o zhruba
          394 000 Kč hrubého. Odečti provizi platformy, úklid mezi hosty, prádlo, spotřební
          materiál, vyšší opotřebení, pojistné a svůj čas — a rozdíl se obvykle smrskne na
          desítky tisíc, ne na dvojnásobek.
        </p>
      </Ramecek>
      <P>
        Krátkodobý pronájem dává smysl u atraktivní lokality, kde je obsazenost opravdu vysoká,
        a u člověka, který to bere jako podnikání na plný úvazek. Jako způsob, jak „trochu víc
        vydělat“ na bytě, to bývá nevýhodné.
      </P>

      <Ramecek druh="housio">
        <p>
          Housio umí u nemovitosti přepnout režim na krátkodobý pronájem a vést jednotlivé pobyty —
          příjezd, odjezd, počet hostů, cenu za noc, úklid i místní poplatek. Z toho pak vidíš
          tržbu i obsazenost a stáhneš si je jedním exportem, až bude potřeba doložit čísla.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
