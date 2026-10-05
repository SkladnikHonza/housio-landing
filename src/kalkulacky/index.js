import UrokZKauce from '@/components/kalkulacky/UrokZKauce'
import VyuctovaniSluzeb from '@/components/kalkulacky/VyuctovaniSluzeb'
import Odpisy from '@/components/kalkulacky/Odpisy'
import DanZPronajmu from '@/components/kalkulacky/DanZPronajmu'

// Kalkulačky pro pronajímatele.
//
// PROC JEN CESKY: stejny duvod jako u pruvodce — stoji na ceskych sazbach,
// lhutach a paragrafech. V ostatnich jazycich vraci 404.
//
// Kazda kalkulacka ma svuj clanek, ze ktereho vychazi; odkazuji na sebe
// navzajem, aby clovek po spocitani vedel, co s vysledkem delat.
export const KALKULACKY = [
  {
    slug: 'urok-z-kauce',
    nadpis: 'Kalkulačka úroku z kauce',
    perex: 'Spočítá úrok z jistoty podle § 2254 občanského zákoníku — za přesný počet dní, od složení po vrácení.',
    uvod: 'Nájemce má ze zákona právo na úroky z jistoty od jejího poskytnutí, nejméně ve výši zákonné sazby. Na úroky se při vracení běžně zapomíná, a nájemníci je dnes umějí spočítat.',
    clanek: 'jistota-kauce',
    Komponenta: UrokZKauce,
    vysvetleni: [
      {
        nadpis: 'Jak se to počítá',
        text: 'Úrok = jistota × roční sazba × počet dní ÷ 365. Počítá se ode dne, kdy jistotu nájemník složil, do dne vrácení — ne po celých letech.',
      },
      {
        nadpis: 'Jakou sazbu dosadit',
        text: 'Zákon mluví o „zákonné sazbě", aniž by ji u jistoty přesně určil. V praxi se vychází ze sazby úroků z prodlení podle nařízení vlády č. 351/2013 Sb., tedy z repo sazby ČNB platné pro první den kalendářního pololetí zvýšené o 8 procentních bodů. Výklad ale není ustálený a smlouva může sjednat sazbu vyšší — proto je pole editovatelné.',
      },
      {
        nadpis: 'Co z jistoty smíš strhnout',
        text: 'Dlužné nájemné, dlužné zálohy, nedoplatek z vyúčtování a škodu nad rámec běžného opotřebení. Každý odpočet musíš umět doložit fakturou nebo fotografií.',
      },
    ],
    zdroje: ['§ 2254 občanského zákoníku', 'nařízení vlády č. 351/2013 Sb.'],
  },
  {
    slug: 'vyuctovani-sluzeb',
    nadpis: 'Kalkulačka vyúčtování služeb',
    perex: 'Spočítá přeplatek nebo nedoplatek, doporučí novou zálohu a ukáže zákonné lhůty podle zákona č. 67/2013 Sb.',
    uvod: 'Vyúčtování má pevné lhůty a za jejich zmeškání vzniká nárok na pokutu 50 Kč za každý započatý den. Tahle kalkulačka spočítá výsledek i termíny, do kdy musí být doručené a vypořádané.',
    clanek: 'vyuctovani-sluzeb',
    Komponenta: VyuctovaniSluzeb,
    vysvetleni: [
      {
        nadpis: 'Jak se to počítá',
        text: 'Od zaplacených záloh (měsíční záloha × počet měsíců) se odečtou skutečné náklady podle faktur. Kladný rozdíl je přeplatek nájemníkovi, záporný nedoplatek.',
      },
      {
        nadpis: 'Doporučená záloha',
        text: 'Skutečné náklady vydělené počtem měsíců a zaokrouhlené nahoru na padesátikoruny. Je to odhad pro další období — pokud čekáš zdražení energií, přidej k němu rezervu.',
      },
      {
        nadpis: 'Lhůty',
        text: 'Vyúčtování musí být doručeno do 4 měsíců od konce zúčtovacího období a peníze vypořádané do 4 měsíců od doručení. Nájemník má 30 dnů na námitky i na žádost o podklady, ty na obojí máš také 30 dnů.',
      },
    ],
    zdroje: ['zákon č. 67/2013 Sb., § 7, § 8 a § 13'],
  },
  {
    slug: 'odpisy-nemovitosti',
    nadpis: 'Kalkulačka odpisů nemovitosti',
    perex: 'Rozepíše odpisy bytu nebo domu na všech 30 let — rovnoměrně i zrychleně, s odepsanou i zůstatkovou cenou.',
    uvod: 'Odpis je největší výdajová položka, kterou paušál 30 % vůbec nezohledňuje. U bytu jde o desítky tisíc ročně, které snižují základ daně, aniž bys cokoli zaplatil.',
    clanek: 'dane-z-pronajmu',
    Komponenta: Odpisy,
    vysvetleni: [
      {
        nadpis: 'Jak se to počítá',
        text: 'Byty a budovy patří do páté odpisové skupiny, tedy 30 let. Rovnoměrně: 1,4 % vstupní ceny v prvním roce a 3,4 % v dalších. Zrychleně: v prvním roce vstupní cena dělená koeficientem 30, v dalších letech dvojnásobek zůstatkové ceny dělený rozdílem koeficientu 31 a počtu let, po které se už odepisovalo.',
      },
      {
        nadpis: 'Co patří do vstupní ceny',
        text: 'Pořizovací cena nemovitosti bez hodnoty pozemku — ten se neodepisuje. U rodinného domu je tedy potřeba cenu rozdělit. Technické zhodnocení nad 80 000 Kč za rok vstupní cenu zvyšuje.',
      },
      {
        nadpis: 'Pozor na starší nemovitost',
        text: 'Pokud jsi byt pořídil výrazně dřív, než jsi ho začal pronajímat, platí pro určení vstupní ceny zvláštní pravidla. Špatně určená vstupní cena se táhne celých třicet let — tohle je otázka na účetní.',
      },
    ],
    zdroje: ['§ 30, § 31 a § 32 zákona o daních z příjmů'],
  },
  {
    slug: 'dan-z-pronajmu',
    nadpis: 'Kalkulačka daně z pronájmu',
    perex: 'Porovná paušál 30 % se skutečnými výdaji a ukáže, která varianta tě vyjde levněji a o kolik.',
    uvod: 'Rozhodnutí mezi paušálem a skutečnými výdaji je u příjmů z nájmu podle § 9 to jediné, které opravdu rozhoduje o výši daně. U bytu s hypotékou jde o rozdíl v řádu deseti tisíc ročně.',
    clanek: 'dane-z-pronajmu',
    Komponenta: DanZPronajmu,
    vysvetleni: [
      {
        nadpis: 'Jak se to počítá',
        text: 'Paušál: od příjmů se odečte 30 %, nejvýše 600 000 Kč za rok. Skutečné výdaje: odečte se součet doložitelných nákladů. Z rozdílu se počítá daň 15 %.',
      },
      {
        nadpis: 'Co kalkulačka neřeší',
        text: 'Sazba 23 % pro část základu daně nad 36násobek průměrné mzdy — u jednoho pronajímaného bytu se k ní obvykle nedostaneš, pokud k tomu nemáš vysoký příjem ze zaměstnání. Nepočítá ani slevy na dani.',
      },
      {
        nadpis: 'Změna způsobu mezi lety',
        text: 'Způsob volíš pro celé zdaňovací období. Přejít mezi lety lze, ale přechod má daňové dopady — spočítej si ho dopředu, ideálně s daňovým poradcem.',
      },
    ],
    zdroje: ['§ 9 zákona o daních z příjmů'],
  },
]

export const SLUGY = KALKULACKY.map((k) => k.slug)

export function kalkulackaPodleSlug(slug) {
  return KALKULACKY.find((k) => k.slug === slug) || null
}
