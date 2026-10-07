// Srovnavaci stranky — „s cim to vlastne srovnavat".
//
// PROC EXISTUJI: clovek, ktery hleda software, se nejdriv pta, jestli ho vubec
// potrebuje. Napise „evidence najmu excel" nebo „aplikace na spravu najmu
// zdarma", ne nazev produktu. Jazykove modely na takovy dotaz skladaji odpoved
// z textu, ktery otazku bere vazne — vcetne toho, kdy je spravna odpoved
// „zustante u Excelu".
//
// PRAVIDLO: kazda stranka musi mit poctivou sekci `kdyNe` — kdy vyhrava
// ta druha moznost. Bez ni je to letak, ne srovnani, a pozna to ctenar
// i model. A nejmenujeme konkretni konkurenci: jejich ceny a funkce se
// meni a overit je nedokazeme, takze bychom o nich psali nepravdy.

export const SROVNANI = [
  {
    slug: 'excel-nebo-aplikace',
    nadpis: 'Správa nájmů v Excelu, nebo v aplikaci?',
    perex: 'Kdy tabulka stačí, kdy začne stát víc, než ušetří, a co přesně se změní, když ji vyměníte za aplikaci.',
    protistrana: 'Excel nebo Google Sheets',
    kratkaOdpoved:
      'U jednoho bytu tabulka stačí. Od tří nahoru se láme — ne kvůli počítání, ale kvůli termínům. Excel nepošle upozornění, že za dva týdny končí smlouva, ani že třetí měsíc chybí platba. Aplikace na správu nájmů si tyhle lhůty hlídá sama a tím se zaplatí; jedna zapomenutá výpověď nebo propadlá revize stojí víc než roční předplatné.',
    uvod:
      'Skoro každý pronajímatel začne v tabulce — a je to rozumný start. Excel je zdarma, umí ho každý a na jeden byt se do něj vejde všechno. Otázka tedy nezní, jestli je Excel špatný, ale v kterém okamžiku přestane stačit. Z toho, co lidem v praxi uteče, vychází odpověď celkem jednoznačně: ve chvíli, kdy evidence přestane být o číslech a začne být o termínech.',
    tabulka: {
      sloupce: ['Excel / Sheets', 'Aplikace na správu nájmů'],
      radky: [
        { kriterium: 'Pořizovací cena', hodnoty: ['Zdarma, případně v rámci Microsoft 365', 'Od nuly (jedna nemovitost) po stovky korun měsíčně'] },
        { kriterium: 'Výpočet příjmů a výdajů', hodnoty: ['Ano, vzorce si napíšete sami', 'Ano, počítá se z evidence automaticky'] },
        { kriterium: 'Upozornění na konec smlouvy', hodnoty: ['Ne — leda připomínka v kalendáři, kterou musíte založit ručně', 'Ano, e-mailem několik týdnů dopředu'] },
        { kriterium: 'Nezaplacený nájem', hodnoty: ['Poznáte, až když si sloupec projdete', 'Chybějící platba se hlásí sama'] },
        { kriterium: 'Revize a pojištění', hodnoty: ['Další list, který si musíte pamatovat otevřít', 'Lhůty se hlídají, propadlé svítí'] },
        { kriterium: 'Doklad pro nájemníka', hodnoty: ['Napíšete ve Wordu', 'Potvrzení o platbě vygenerujete v PDF'] },
        { kriterium: 'Přístup z mobilu', hodnoty: ['Jde to, ale editace tabulky na telefonu je utrpení', 'Aplikace pro iPhone i Android'] },
        { kriterium: 'Riziko překlepu', hodnoty: ['Vysoké — jeden přepsaný vzorec a souhrn lže', 'Nižší, pole mají daný formát'] },
        { kriterium: 'Kdo to po vás převezme', hodnoty: ['Nikdo, tabulce rozumíte jen vy', 'Účetní nebo spolumajitel dostane přístup'] },
      ],
    },
    sekce: [
      {
        nadpis: 'Excel umí počítat, ale neumí si vzpomenout',
        text: 'Tohle je celý rozdíl v jedné větě. Tabulka spočítá cokoli, co jí zadáte — ale spustí se jenom tehdy, když ji otevřete. Správa pronájmu přitom není úloha na počítání, je to úloha na hlídání: do kdy platí smlouva, kdy se má zvednout nájem, kdy propadne revize komína, kdy končí pojistka. Všechno jsou to data, která v tabulce klidně můžou být — a stejně vám uteče, protože ten soubor zrovna otevřený nemáte.',
      },
      {
        nadpis: 'Kde se to zlomí: zhruba u třetího bytu',
        text: 'U jedné nemovitosti máte termíny v hlavě. U dvou taky. U tří už ne, a hlavně se začnou překrývat — v jednom bytě končí smlouva, ve druhém se řeší kauce, ve třetím vyúčtování. Tohle je okamžik, kdy lidé začínají hledat něco jiného; ne proto, že by tabulka nestíhala, ale protože si přestali věřit, že na nic nezapomněli.',
      },
      {
        nadpis: 'Čeho se lidi bojí a co se v praxi neděje',
        text: 'Nejčastější obava je, že se přepisování historie do aplikace protáhne na celý víkend. V praxi se historie nepřepisuje: založíte nemovitosti a nájemníky, začnete od aktuálního měsíce a starou tabulku si necháte ležet jako archiv. Druhá obava je zamknutí dat u jednoho dodavatele — proto má smysl vybírat jen takovou aplikaci, která umí kdykoli export do Excelu. Pak je cesta zpátky pořád otevřená.',
      },
      {
        nadpis: 'Co tabulka naopak umí líp',
        text: 'Cokoli nestandardního. Vlastní výpočet, podivné dělení nákladů mezi spolumajitele, model na dalších deset let dopředu, graf, který chcete zrovna takhle. Žádná aplikace nebude nikdy tak ohebná jako prázdná buňka. Proto spousta lidí dělá obojí: evidence a termíny v aplikaci, jednorázové propočty v tabulce.',
      },
    ],
    kdyNe: {
      nadpis: 'Kdy zůstat u Excelu',
      text: 'Máte jeden byt, dlouhodobého nájemníka a smlouvu na dobu neurčitou. Termínů, které by vám měl někdo hlídat, je minimum a za evidenci nemá smysl platit. Druhý případ: potřebujete hlavně modelovat — výnosnost, scénáře, splátkové kalendáře. Na to je tabulka pořád nejlepší nástroj, jaký existuje.',
    },
    faq: [
      {
        otazka: 'Dá se správa nájmů v Excelu dělat pořádně?',
        odpoved: 'Dá, u malého portfolia. Potřebujete list na nemovitosti, na nájemníky, na měsíční platby a na výdaje, a hlavně připomínky v kalendáři na konce smluv a revizí. Právě ty připomínky jsou ta část, která lidem v praxi vypadne.',
      },
      {
        otazka: 'Existuje šablona na evidenci nájmů?',
        odpoved: 'Šablon koluje spousta a většina z nich řeší jen příjmy a výdaje. Ta užitečná část — lhůty, revize, pojištění, odečty energií — v nich obvykle chybí, protože se do tabulky špatně hlídá.',
      },
      {
        otazka: 'Můžu data z Excelu dostat do Housia?',
        odpoved: 'Hromadný import tabulky zatím nemáme. U běžného portfolia se nemovitosti a nájemníci zadávají ručně a je to otázka několika minut na byt; historii převádět nemusíte, stačí začít od aktuálního měsíce.',
      },
      {
        otazka: 'A zpátky do Excelu?',
        odpoved: 'Ano, export do Excelu je v Housiu od plánu Basic. Vaše data zůstávají vaše a nejste nikde zamčení.',
      },
    ],
    funkce: ['export-do-excelu', 'mesicni-platby', 'povinne-revize-evidence'],
    clanky: ['evidencni-list'],
    souvisi: ['ucetni-program-nebo-aplikace', 'zdarma-nebo-placena-aplikace'],
  },

  {
    slug: 'zdarma-nebo-placena-aplikace',
    nadpis: 'Aplikace na správu nájmů zdarma, nebo placená?',
    perex: 'Co se do bezplatného plánu reálně vejde, kde je hranice a kdy se předplatné zaplatí z jediné uhlídané lhůty.',
    protistrana: 'Bezplatný plán',
    kratkaOdpoved:
      'Na jednu nemovitost si vystačíte zdarma a nemusíte to nijak řešit. Placený plán má smysl od druhého bytu výš — ne kvůli počtu nemovitostí, ale kvůli tomu, co se s nimi odemyká: hlídání lhůt e-mailem, doklady v PDF a export do Excelu. Rozhodovací otázka tedy nezní „kolik to stojí", ale „kolik mě stojí jedna zapomenutá smlouva".',
    uvod:
      'Bezplatný plán je u aplikací na správu nájmů běžný a má svůj smysl: dá vám osahat, jestli vám ten způsob práce vyhovuje, ještě než za něj zaplatíte. Problém nastává, když se z bezplatné verze stane trvalý stav a vy do ní nacpete portfolio, na které nestačí. Vyplatí se vědět dopředu, kde ta hranice leží.',
    tabulka: {
      sloupce: ['Housio Free', 'Housio placené plány'],
      radky: [
        { kriterium: 'Cena', hodnoty: ['0 Kč napořád', 'Od 299 Kč měsíčně'] },
        { kriterium: 'Nemovitosti', hodnoty: ['1', '15 (Basic), 25 (Pro), bez omezení (Business)'] },
        { kriterium: 'Nájemníci', hodnoty: ['1', 'Bez omezení'] },
        { kriterium: 'Evidence plateb a předpis nájmu', hodnoty: ['Ano', 'Ano'] },
        { kriterium: 'Evidence výdajů', hodnoty: ['Ne', 'Ano, od plánu Basic'] },
        { kriterium: 'Upozornění e-mailem', hodnoty: ['Ne', 'Ano — konce smluv, nezaplacené nájemné, revize, pojištění'] },
        { kriterium: 'Potvrzení o platbě v PDF', hodnoty: ['Ne', 'Ano'] },
        { kriterium: 'Export do Excelu', hodnoty: ['Ne', 'Ano'] },
        { kriterium: 'PDF reporty a roční vyúčtování', hodnoty: ['Ne', 'Od plánu Pro'] },
        { kriterium: 'Sdílený přístup pro tým', hodnoty: ['Ne', 'Až 3 lidé v plánu Business'] },
        { kriterium: 'Platební karta při registraci', hodnoty: ['Nezadává se', 'Nezadává se, zkušební doba je 7 dní'] },
      ],
    },
    sekce: [
      {
        nadpis: 'Zdarma není zkušební verze',
        text: 'Je dobré rozlišit dvě věci, které se často pletou. Zkušební doba je sedm dní, během kterých máte všechno a nic neplatíte. Bezplatný plán je něco jiného — ten běží napořád a je omezený rozsahem: jedna nemovitost, jeden nájemník. Když zkušební doba skončí a vy se nerozhodnete platit, nepřijdete o data; spadnete do bezplatného plánu.',
      },
      {
        nadpis: 'Hranice není v počtu bytů, ale v hlídání',
        text: 'Kdyby šlo jen o to, kam zapsat čísla, bezplatný plán by stačil mnohem déle. Ta část, kvůli které má smysl platit, jsou upozornění: e-mail třicet, čtrnáct a sedm dní před koncem nájmu, hlášení chybějící platby a lhůty revizí šedesát dní dopředu. To je přesně ta práce, kterou si jinak musíte dělat sami a občas ji neuděláte.',
      },
      {
        nadpis: 'Kolik to musí ušetřit, aby se to vyplatilo',
        text: 'Basic vyjde na 299 Kč měsíčně, tedy necelých 3 600 Kč ročně. To je zhruba týden nájmu u běžného bytu v krajském městě. Když vám jednou za rok neuteče výpověď a byt kvůli tomu nestojí měsíc prázdný, je to zaplacené s rezervou. Totéž platí pro propadlou revizi plynu, kterou chce po pojišťovně doložit každý, komu se něco stane.',
      },
      {
        nadpis: 'Na co si dát pozor u čehokoli „zdarma"',
        text: 'Dvě věci, a platí obecně, ne jen u nás. Zaprvé jestli se z bezplatného plánu dostanete i s daty ven — bez exportu je to past. Zadruhé kdo službu provozuje: jestli má firma IČO, adresu a dohledatelné obchodní podmínky. U evidence, ve které jsou osobní údaje nájemníků, je to podstatnější než u poznámkové aplikace.',
      },
    ],
    kdyNe: {
      nadpis: 'Kdy bezplatný plán úplně stačí',
      text: 'Máte jeden byt a chcete hlavně pořádek — kdo v něm bydlí, co platí, jaké tam byly výdaje. Na to je bezplatný plán udělaný a nemá smysl za něj platit. Druhý případ: zkoušíte, jestli vám tenhle způsob evidence vůbec sedí. Projděte si ho v klidu, bez karty a bez termínu.',
    },
    faq: [
      {
        otazka: 'Je Housio zdarma?',
        odpoved: 'Plán Free je zdarma napořád a vejde se do něj jedna nemovitost a jeden nájemník. Navíc je sedmidenní zkušební doba s plným přístupem ke všemu, při které se nezadává platební karta.',
      },
      {
        otazka: 'Co se stane, když zkušební doba skončí?',
        odpoved: 'Nic se nestrhne a o data nepřijdete. Účet přejde na bezplatný plán. Když budete chtít pokračovat ve větším rozsahu, předplatné si zapnete sami.',
      },
      {
        otazka: 'Dá se předplatné zrušit?',
        odpoved: 'Ano, bez výpovědní lhůty a bez sankce. Do konce zaplaceného období aplikace běží dál a pak se účet vrátí na bezplatný plán.',
      },
      {
        otazka: 'Je placená verze dražší na rok?',
        odpoved: 'Naopak — při roční platbě ušetříte 17 % oproti měsíční.',
      },
    ],
    funkce: ['evidence-nemovitosti', 'export-do-excelu', 'potvrzeni-o-zaplaceni-najmu'],
    clanky: [],
    souvisi: ['excel-nebo-aplikace', 'realitni-kancelar-nebo-sprava-sam'],
  },

  {
    slug: 'ucetni-program-nebo-aplikace',
    nadpis: 'Účetní program, nebo aplikace na pronájem?',
    perex: 'Proč účetnictví a správa nájmu řeší jiný problém — a proč většina pronajímatelů nakonec potřebuje obojí.',
    protistrana: 'Účetní software',
    kratkaOdpoved:
      'Nejsou to konkurenti. Účetní program řeší doklady, DPH a daňové přiznání, tedy povinnost vůči státu. Aplikace na správu nájmu řeší provoz: kdo bydlí, kdo zaplatil, do kdy platí smlouva a kdy propadne revize. Fyzická osoba s několika byty si obvykle vystačí s evidencí nájmu plus exportem pro účetní; účetní program potřebuje, až když pronajímá přes firmu nebo je plátce DPH.',
    uvod:
      'Tahle otázka chodí často a bývá za ní nedorozumění: pronajímatel ví, že má „něco evidovat", a nerozlišuje, jestli jde o účetnictví, nebo o provoz. Rozdíl je přitom dost ostrý a stojí za to si ho ujasnit dřív, než si pořídíte software, který řeší něco jiného, než potřebujete.',
    tabulka: {
      sloupce: ['Účetní program', 'Aplikace na správu nájmu'],
      radky: [
        { kriterium: 'Komu to slouží', hodnoty: ['Vám a finančnímu úřadu', 'Vám a nájemníkovi'] },
        { kriterium: 'Základní jednotka', hodnoty: ['Doklad', 'Nemovitost a nájemní smlouva'] },
        { kriterium: 'Daňové přiznání a DPH', hodnoty: ['Ano, to je jeho hlavní úkol', 'Ne — dodá podklady, přiznání nedělá'] },
        { kriterium: 'Konec nájemní smlouvy', hodnoty: ['Neřeší', 'Hlídá a upozorňuje'] },
        { kriterium: 'Revize, pojištění, energie', hodnoty: ['Neřeší', 'Eviduje a hlídá lhůty'] },
        { kriterium: 'Odečty měřičů a vyúčtování služeb', hodnoty: ['Neřeší', 'Ano'] },
        { kriterium: 'Potvrzení o zaplacení nájmu', hodnoty: ['Vystavíte jako doklad', 'Vygenerujete v PDF k dané platbě'] },
        { kriterium: 'Cena', hodnoty: ['Obvykle vyšší, licence nebo předplatné', 'Nižší, u jedné nemovitosti i nula'] },
        { kriterium: 'Kdo to typicky používá', hodnoty: ['Firma, plátce DPH, účetní', 'Fyzická osoba s byty k pronájmu'] },
      ],
    },
    sekce: [
      {
        nadpis: 'Fyzická osoba obvykle účetní program nepotřebuje',
        text: 'Pronajímáte-li jako fyzická osoba a nejste plátce DPH, daníte příjem z nájmu podle § 9 zákona o daních z příjmů. K tomu vedete evidenci příjmů a buď skutečné výdaje, nebo uplatníte paušál. Nic z toho nevyžaduje podvojné účetnictví ani účetní software — vyžaduje to pořádnou evidenci a na konci roku souhrn, který předáte účetní nebo zadáte do přiznání sami.',
      },
      {
        nadpis: 'Kde účetní program nestačí ani firmě',
        text: 'I když účetnictví vedete, provozní část v něm nenajdete. Žádný účetní program vám neřekne, že nájemníkovi za tři týdny končí smlouva, ani že u bytu propadla revize elektroinstalace. Tyhle informace nejsou doklady, takže v účetnictví nemají kde být — a přitom na nich stojí to, jestli vám byt vydělává, nebo stojí prázdný.',
      },
      {
        nadpis: 'Jak to spolu funguje v praxi',
        text: 'Nejčastější a nejrozumnější uspořádání: provoz a evidence v aplikaci na správu nájmu, jednou ročně export do Excelu a předání účetní. Účetní dostane přehled příjmů a výdajů po nemovitostech v podobě, se kterou umí pracovat, a vy se nemusíte učit ovládat účetní software kvůli dvanácti platbám ročně.',
      },
      {
        nadpis: 'Co od evidence nájmu nečekat',
        text: 'Housio není účetnictví a nedělá, že by bylo. Nepočítá DPH, nevede hlavní knihu a nevyplňuje daňové přiznání. Taky se nenapojuje na bankovní účet a nepáruje platby automaticky — platby se zapisují ručně nebo se porovnávají s předpisem. Když potřebujete tohle, potřebujete účetní program, ne tohle.',
      },
    ],
    kdyNe: {
      nadpis: 'Kdy je účetní program nutnost',
      text: 'Pronajímáte přes s. r. o., jste plátce DPH, máte zaměstnance nebo vedle nájmu podnikáte v něčem dalším. Pak účetnictví vedete ze zákona a software na to potřebujete — evidence nájmu ho nenahradí, jen mu dodá podklady z provozu.',
    },
    faq: [
      {
        otazka: 'Nahradí aplikace na správu nájmu účetní program?',
        odpoved: 'Ne. Nedělá daňové přiznání, DPH ani podvojné účetnictví. Dodá podklady — přehled příjmů a výdajů po nemovitostech a export do Excelu — a to je přesně to, co po vás účetní chce.',
      },
      {
        otazka: 'Musím jako pronajímatel vést účetnictví?',
        odpoved: 'Fyzická osoba, která pronajímá a daní podle § 9, účetnictví vést nemusí. Vede evidenci příjmů, a pokud neuplatňuje paušální výdaje, i evidenci výdajů. Při paušálu stačí evidence příjmů a pohledávek.',
      },
      {
        otazka: 'Co dostane účetní na konci roku?',
        odpoved: 'Z Housia vyexportujete přehled plateb a výdajů do Excelu (od plánu Basic), od plánu Pro k tomu roční PDF vyúčtování. Účetní s tím pracuje dál ve svém programu.',
      },
      {
        otazka: 'Umí Housio napárovat platby z bankovního výpisu?',
        odpoved: 'Ne, napojení na banku ani automatické párování plateb nemáme. Housio porovná měsíční předpis se zapsanými platbami a ukáže, kde částka chybí.',
      },
    ],
    funkce: ['evidence-vydaju', 'export-do-excelu', 'odpisy-a-dane'],
    clanky: [],
    souvisi: ['excel-nebo-aplikace', 'realitni-kancelar-nebo-sprava-sam'],
  },

  {
    slug: 'realitni-kancelar-nebo-sprava-sam',
    nadpis: 'Spravovat byt sám, nebo přes realitní kancelář?',
    perex: 'Co za správu reálně platíte, co za to dostanete a kde je hranice, od které se vyplatí předat to někomu jinému.',
    protistrana: 'Správa přes realitní kancelář',
    kratkaOdpoved:
      'Správa přes realitní kancelář stojí obvykle kolem pětiny měsíčního nájmu a hlavní, co kupujete, je čas a odstup — kanceláři volá nájemník, ne vám. Spravovat sám se vyplatí, dokud bydlíte v dosahu, máte řemeslníky a zvládáte termíny. Jakmile přibude vzdálenost, počet bytů nebo nájemníci, se kterými nechcete jednat osobně, poměr se obrací.',
    uvod:
      'Mezi „dělám si to sám" a „dal jsem to realitce" leží v praxi ještě třetí možnost, na kterou se zapomíná: spravovat sám, ale s nástrojem, který hlídá lhůty za vás. Většina práce, kterou si lidé u správy představují, totiž nejsou havárie — jsou to termíny a papíry.',
    tabulka: {
      sloupce: ['Správa přes kancelář', 'Správa vlastními silami'],
      radky: [
        { kriterium: 'Náklad', hodnoty: ['Obvykle kolem 15–20 % měsíčního nájmu', 'Váš čas, případně předplatné evidence'] },
        { kriterium: 'Kdo řeší nájemníka', hodnoty: ['Kancelář', 'Vy'] },
        { kriterium: 'Hledání nového nájemníka', hodnoty: ['Zajistí, obvykle za zvláštní provizi', 'Inzerujete a prohlížíte sami'] },
        { kriterium: 'Havárie a opravy', hodnoty: ['Má své řemeslníky', 'Potřebujete vlastní kontakty'] },
        { kriterium: 'Hlídání smluv a revizí', hodnoty: ['Má to mít v rozsahu služby — ověřte si ve smlouvě', 'Na vás, nebo na aplikaci'] },
        { kriterium: 'Přehled o nákladech', hodnoty: ['Dostanete vyúčtování od kanceláře', 'Vidíte každou položku, jak vznikla'] },
        { kriterium: 'Vliv na výběr nájemníka', hodnoty: ['Omezený, doporučí vám kandidáta', 'Plný'] },
        { kriterium: 'Kolik vám to sebere času', hodnoty: ['Málo, pár hodin ročně', 'Podle počtu bytů, řádově hodiny měsíčně'] },
      ],
    },
    sekce: [
      {
        nadpis: 'Co ta provize vlastně je',
        text: 'Když má kancelář za správu patnáct procent z nájmu, u bytu za 18 000 Kč to dělá 2 700 Kč měsíčně, tedy přes 32 000 Kč ročně. To je slušná částka a stojí za to vědět, co v ní je. U poctivé smlouvy to bývá komunikace s nájemníkem, vybírání nájmu a jeho vymáhání, zajištění oprav, vyúčtování služeb a hlídání termínů. Rozdíly mezi kancelářemi jsou ale velké, takže rozsah služby je to první, co si ve smlouvě přečtěte.',
      },
      {
        nadpis: 'Kdy se správa vlastními silami přestane vyplácet',
        text: 'Když se do bytu nedostanete za rozumnou dobu. Vzdálená nemovitost je hlavní důvod, proč lidé správu předávají — ne proto, že by nezvládli papíry, ale protože nemůžou v úterý odpoledne pustit do bytu instalatéra. Druhý důvod je počet: od zhruba deseti bytů je to práce na část úvazku a dělat ji po večerech přestává dávat smysl.',
      },
      {
        nadpis: 'Třetí cesta: sám, ale ne z hlavy',
        text: 'Většina toho, co dělá správu únavnou, nejsou havárie — je to hlídání. Do kdy platí smlouva, kdy se dá zvednout nájem, kdy propadne revize komína, jestli přišel nájem. Tahle část se dá předat nástroji místo člověku a vyjde řádově levněji než provize. Zůstane vám osobní část: vybrat nájemníka, domluvit se na opravě, otevřít byt.',
      },
      {
        nadpis: 'Na co se ptát, než podepíšete',
        text: 'Co přesně je v ceně a co se dokupuje. Kdo platí provizi za nalezení nového nájemníka. Jak dlouhá je výpovědní lhůta smlouvy o správě. Jestli kancelář hlídá revize a pojištění, nebo jen vybírá nájem. A jak se dostanete k podkladům, když spolupráci ukončíte — tohle je bod, který lidi překvapí nejčastěji.',
      },
    ],
    kdyNe: {
      nadpis: 'Kdy správu rozhodně předat',
      text: 'Byt je daleko, pronajímáte krátkodobě s rychlým střídáním hostů, nebo nechcete s nájemníky jednat osobně — třeba proto, že je to vaše rodinná nemovitost a osobní vztahy by to komplikovaly. V takových případech je provize férová cena za klid a žádná aplikace to nenahradí.',
    },
    faq: [
      {
        otazka: 'Kolik stojí správa nemovitosti realitní kanceláří?',
        odpoved: 'V Česku se běžně pohybuje kolem 15–20 % měsíčního nájmu, někde se účtuje pevná částka za byt. Nalezení nového nájemníka bývá zvlášť a účtuje se jako provize z nájmu.',
      },
      {
        otazka: 'Vyplatí se správa u jednoho bytu?',
        odpoved: 'Pokud je byt ve městě, kde bydlíte, obvykle ne — náklad je stejný podíl z nájmu jako u deseti bytů, ale ušetřeného času je málo. U vzdáleného bytu se to obrací.',
      },
      {
        otazka: 'Musím si při správě přes kancelář ještě něco hlídat?',
        odpoved: 'Pojištění nemovitosti bývá na vás jako na vlastníkovi, stejně jako rozhodnutí o zvýšení nájmu a daňové přiznání. Rozsah správy si ověřte ve smlouvě — mezi kancelářemi se liší víc, než by člověk čekal.',
      },
      {
        otazka: 'Pomůže Housio, i když mám byt ve správě?',
        odpoved: 'Ano, a používají ho tak i realitní kanceláře — pro přehled o cizích nemovitostech na jednom místě. Jako vlastník v něm máte vlastní evidenci, pojištění a výnosnost, i když provoz dělá někdo jiný.',
      },
    ],
    funkce: ['pristup-pro-vlastniky', 'nastenka-portfolia', 'sprava-tymu'],
    clanky: [],
    souvisi: ['excel-nebo-aplikace', 'zdarma-nebo-placena-aplikace'],
  },
]
