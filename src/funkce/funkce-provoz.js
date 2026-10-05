// Funkce kolem provozu a přehledu — co člověk používá denně a s kým data sdílí.

export const FUNKCE_PROVOZ = [
  {
    slug: 'nastenka-portfolia',
    nadpis: 'Nástěnka a přehled portfolia',
    perex: 'Hodnota portfolia, měsíční čistý příjem, obsazenost a vývoj v grafu — na jedné obrazovce.',
    plan: 'free',
    uvod: 'Otázka „jak si to vede?" nemá odpověď v žádné jednotlivé tabulce. Vzniká až složením příjmů, výdajů a obsazenosti dohromady.',
    sekce: [
      {
        nadpis: 'Co je na nástěnce',
        text: 'Počet nemovitostí, hodnota portfolia, měsíční čistý příjem a obsazenost v procentech. Pod tím graf vývoje a seznam toho, co vyžaduje pozornost — propadlé revize, končící smlouvy, nezaplacené platby.',
      },
      {
        nadpis: 'Čistý příjem, ne hrubý',
        text: 'Od příjmů se odečítají evidované výdaje. Hrubý nájem je číslo do inzerátu; čistý příjem je číslo, podle kterého se rozhoduje, jestli byt prodat.',
      },
      {
        nadpis: 'Počítá se z toho, co už máte',
        text: 'Nic se nikam nezadává zvlášť. Nástěnka je pohled na existující data, ne další evidence, kterou musíte udržovat.',
      },
      {
        nadpis: 'Co vyžaduje pozornost',
        text: 'Pod čísly je seznam věcí, které se blíží nebo propadly — končící smlouvy, propadlé revize, nezaplacené platby. Nástěnka tedy neslouží jen k pochlubení; je to první místo, kam se podíváte, když chcete vědět, na co nezapomenout.',
      },
      {
        nadpis: 'Graf vývoje',
        text: 'Měsíc po měsíci: příjmy, náklady a rozdíl. Z jednoho čísla nepoznáte, jestli byt vydělává líp nebo hůř než loni — z křivky ano.',
      },
    ],
    proKoho: 'Každý, i ve Free plánu. Smysl roste s počtem bytů.',
    faq: [
      {
        otazka: 'Co když nemám vyplněnou hodnotu nemovitosti?',
        odpoved: 'Hodnota portfolia bude nižší o ten byt. Ostatní čísla fungují i bez ní.',
      },
      {
        otazka: 'Počítá se obsazenost i u krátkodobého pronájmu?',
        odpoved: 'Ano, u bytů s evidovanými pobyty se obsazenost počítá z nocí.',
      },
    ],
    souvisi: ['evidence-nemovitosti', 'mesicni-platby', 'pristup-pro-vlastniky'],
  },
  {
    slug: 'pristup-pro-vlastniky',
    nadpis: 'Přístup pro vlastníky',
    perex: 'Majitel bytu vidí svůj byt — obsazenost, příjmy a náklady. Nic nemůže měnit a nic cizího nevidí.',
    plan: 'basic',
    uvod: 'Když spravujete cizí byt, majitel se ptá. Buď mu každý měsíc posíláte tabulku, nebo mu dáte přístup, kde si to vezme sám.',
    sekce: [
      {
        nadpis: 'Co vlastník vidí',
        text: 'Jen tu nemovitost, ke které jste ho pozvali: obsazenost, příjmy, náklady a jejich vývoj. Ne vaše ostatní byty, ne vaše dokumenty, ne vaše poznámky.',
      },
      {
        nadpis: 'Jen čte',
        text: 'Vlastník nemůže nic měnit, mazat ani přidávat. Je to okno, ne druhý klíč.',
      },
      {
        nadpis: 'Pozvánka e-mailem',
        text: 'Zadáte e-mail, vlastníkovi přijde pozvánka, založí si účet a vidí svůj byt. Přístup mu kdykoli odeberete.',
      },
      {
        nadpis: 'Co to řeší v praxi',
        text: 'Spor o to, jestli správce „něco neschovává". Když má majitel vlastní přístup, nemusí věřit měsíčnímu PDF — podívá se, kdykoli chce. Paradoxně to šetří čas oběma: správce přestane dostávat dotazy a majitel přestane mít pocit, že je o něco ošizený.',
      },
    ],
    proKoho: 'Správci cizích bytů, spoluvlastníci, rodinné portfolio rozdělené mezi sourozence. Od plánu Basic.',
    faq: [
      {
        otazka: 'Platí za to vlastník?',
        odpoved: 'Ne. Účet vlastníka je zdarma, platíte vy za svůj plán.',
      },
      {
        otazka: 'Může jich být víc u jedné nemovitosti?',
        odpoved: 'Ano, u jednoho bytu může být víc vlastníků — třeba spoluvlastnický podíl mezi sourozenci.',
      },
      {
        otazka: 'Může vlastník stahovat doklady?',
        odpoved: 'Vidí přehled příjmů a nákladů. Doklady vystavujete a posíláte vy.',
      },
    ],
    souvisi: ['sprava-tymu', 'nastenka-portfolia'],
  },
  {
    slug: 'sprava-tymu',
    nadpis: 'Správa týmu',
    perex: 'Přizvěte až tři lidi, kteří s vámi budou nemovitosti spravovat.',
    plan: 'business',
    uvod: 'Jakmile pronájem přestane být práce jednoho člověka, začne se sdílet heslo. To je nejhorší možné řešení — nejde odebrat přístup a nejde poznat, kdo co udělal.',
    sekce: [
      {
        nadpis: 'Jak to funguje',
        text: 'Pozvete člena týmu e-mailem, ten si založí vlastní účet a dostane se ke stejným nemovitostem jako vy. Přístup kdykoli odeberete, aniž byste museli měnit heslo.',
      },
      {
        nadpis: 'Rozdíl proti vlastníkovi',
        text: 'Člen týmu s vámi nemovitosti spravuje — může zapisovat a měnit. Vlastník jen vidí jednu nemovitost a nic neupraví. Jsou to dvě různé role pro dvě různé situace.',
      },
      {
        nadpis: 'Kdo co vidí',
        text: 'Člen týmu vidí stejné portfolio jako vy — nemovitosti, nájemníky, smlouvy, platby i dokumenty. Je to spolupráce, ne omezený náhled. Když potřebujete pustit někoho jen k jedné nemovitosti a jen ke čtení, je na to role vlastníka.',
      },
      {
        nadpis: 'Proč tři místa',
        text: 'Protože Business plán cílí na malou správcovskou firmu nebo rodinné portfolio, ne na korporát. Kdyby vám tři místa nestačila, napište — zajímá nás, kde je skutečná hranice.',
      },
    ],
    proKoho: 'Dvojice, která pronajímá společně, nebo malá správcovská firma. Plán Business, až 3 členové.',
    faq: [
      {
        otazka: 'Můžu členovi týmu omezit přístup jen na některé byty?',
        odpoved: 'Zatím ne — člen týmu vidí celé portfolio. Pokud potřebujete omezit přístup na jednu nemovitost, použijte roli vlastníka.',
      },
      {
        otazka: 'Pozná se, kdo co změnil?',
        odpoved: 'Podrobný záznam změn zatím nemáme. Pokud ho potřebujete, napište nám — je to na seznamu.',
      },
    ],
    souvisi: ['pristup-pro-vlastniky', 'dokumenty-k-nemovitosti'],
  },
  {
    slug: 'kratkodoby-pronajem',
    nadpis: 'Krátkodobý pronájem a pobyty',
    perex: 'Evidence pobytů — kdo kdy byl, kolik za noc a kolik to vyneslo.',
    plan: 'basic',
    uvod: 'Krátkodobý pronájem má jinou matematiku než dlouhodobý: nájemné se nepočítá měsíčně, ale po nocích, a obsazenost je hlavní číslo. Housio rezervace neřídí — zapisuje výsledek.',
    sekce: [
      {
        nadpis: 'Co se eviduje',
        text: 'Termín pobytu, host, cena za noc, celkem a poznámka. Z toho vzniká výnos za období a obsazenost, které se promítnou do přehledu nemovitosti.',
      },
      {
        nadpis: 'Housio není rezervační systém',
        text: 'Říkáme to rovnou, abyste se nezklamali: Housio nepřijímá rezervace, nekomunikuje s hosty a neinkasuje platby. To dělá Airbnb nebo Booking. Housio je evidence pro vás a pro finanční úřad.',
      },
      {
        nadpis: 'Daňová stránka',
        text: 'Krátkodobé ubytování se často neposuzuje jako příjem z nájmu podle § 9, ale jako příjem ze samostatné činnosti podle § 7 — s jinými povinnostmi včetně živnosti a odvodů. Hranice je v tom, jestli poskytujete ubytovací služby. Rozebírá to samostatný článek.',
      },
    ],
    proKoho: 'Majitelé bytů na Airbnb a Booking, kteří chtějí evidenci mimo platformu. Od plánu Basic.',
    faq: [
      {
        otazka: 'Řeší Housio ubytovací poplatek obci?',
        odpoved: 'Ne. Eviduje pobyty, ze kterých poplatek spočítáte, ale hlášení obci si podáváte sami.',
      },
      {
        otazka: 'Spočítá Housio obsazenost v procentech?',
        odpoved: 'Ano, z evidovaných pobytů za zvolené období.',
      },
    ],
    clanek: 'kratkodoby-pronajem',
    souvisi: ['kalendar-obsazenosti', 'evidence-nemovitosti'],
  },
  {
    slug: 'kalendar-obsazenosti',
    nadpis: 'Kalendář obsazenosti',
    perex: 'Načte z Airbnb nebo Booking.com, které noci jsou obsazené — aby to viděl i vlastník.',
    plan: 'basic',
    uvod: 'Majitel bytu, který ho má na Airbnb přes správce, nevidí nic. Tohle mu dá kalendář, aniž by dostal přístup k vašemu účtu na platformě.',
    sekce: [
      {
        nadpis: 'Jak to funguje',
        text: 'Z Airbnb nebo Booking.com zkopírujete odkaz na iCal kalendář a vložíte ho do Housia. Obsazené noci se zobrazí v kalendáři u nemovitosti.',
      },
      {
        nadpis: 'Co to neumí',
        text: 'Je to jednosměrné čtení. Housio do platformy nic nezapisuje, rezervace nevytváří a ceny nemění. Pokud hledáte channel manager, tohle jím není.',
      },
      {
        nadpis: 'Víc kalendářů u jednoho bytu',
        text: 'Když inzerujete stejný byt na Airbnb i na Booking.com, přidáte oba odkazy a v kalendáři se obsazené noci sloučí. Uvidíte tedy skutečnou obsazenost, ne obsazenost na jedné platformě.',
      },
      {
        nadpis: 'Komu se to hodí nejvíc',
        text: 'Správci, který pronajímá cizí byt a každý měsíc vysvětluje majiteli, proč byl výnos nižší. Kalendář to ukáže beze slov — a majitel k němu má přístup přes roli vlastníka.',
      },
    ],
    proKoho: 'Správci bytů na krátkodobý pronájem, kteří reportují majiteli. Od plánu Basic.',
    faq: [
      {
        otazka: 'Jak často se kalendář aktualizuje?',
        odpoved: 'Načítá se z odkazu, který platformy samy obnovují — zpoždění je dané jimi, ne Housiem.',
      },
      {
        otazka: 'Můžu přidat kalendář z jiné platformy?',
        odpoved: 'Ano, funguje libovolný iCal odkaz.',
      },
    ],
    souvisi: ['kratkodoby-pronajem', 'pristup-pro-vlastniky'],
  },
  {
    slug: 'poznamky-a-ukoly',
    nadpis: 'Poznámky a úkoly',
    perex: 'Co je potřeba zařídit, u koho a do kdy — bez dalšího nástroje.',
    plan: 'free',
    uvod: 'Devadesát procent věcí kolem pronájmu je „zavolat instalatérovi" a „dodat smlouvu Novákové". Na to nepotřebujete projektový nástroj, potřebujete seznam, který nezmizí.',
    sekce: [
      {
        nadpis: 'Jak to funguje',
        text: 'Napíšete poznámku, odškrtnete ji, když je hotová. Hotové se přesunou dolů a zůstanou — takže je po půl roce dohledatelné, kdy jste co řešili.',
      },
      {
        nadpis: 'Proč je to i ve Free plánu',
        text: 'Protože zamykat poznámky za paywall je drobné nepřátelství. Jsou ve všech plánech včetně bezplatného.',
      },
      {
        nadpis: 'Co sem lidi píšou',
        text: '„Zavolat kominíkovi", „dodat kopii smlouvy Novákové", „zkontrolovat, jestli přišel nedoplatek", „objednat revizi plynu do konce března". Drobnosti, které se jinak ztratí mezi e-maily.',
      },
      {
        nadpis: 'Proč ne další aplikace',
        text: 'Protože úkol kolem pronájmu se objeví ve chvíli, kdy jste v Housiu — díváte se na platby a zjistíte, že něco chybí. Kdyby se měl zapsat jinam, nezapíše se.',
      },
    ],
    proKoho: 'Všichni.',
    faq: [
      {
        otazka: 'Můžu poznámku navázat na konkrétní byt?',
        odpoved: 'Poznámky jsou společné pro celé portfolio. U konkrétního bytu je lepší použít poznámku přímo u výdaje, smlouvy nebo revize, které se to týká.',
      },
      {
        otazka: 'Pošle mi Housio připomínku?',
        odpoved: 'Poznámky samy neupozorňují. Na termíny, které mají právní dopad — konec smlouvy, platnost revize, vyúčtování — jsou upozornění přímo u těch záznamů.',
      },
    ],
    souvisi: ['nastenka-portfolia', 'povinne-revize-evidence'],
  },
  {
    slug: 'vyhledavani',
    nadpis: 'Vyhledávání napříč daty',
    perex: 'Jedno pole, které prohledá nemovitosti, nájemníky, smlouvy, platby, výdaje i pojištění.',
    plan: 'free',
    uvod: 'Když si pamatujete jen příjmení, nemá smysl procházet šest seznamů.',
    sekce: [
      {
        nadpis: 'Co umí najít',
        text: 'Nemovitost podle názvu nebo adresy, nájemníka podle jména, smlouvu podle čísla, platbu, výdaj i pojištění. Z výsledku se prokliknete rovnou tam, kam patří.',
      },
      {
        nadpis: 'Proč to není jen filtr',
        text: 'Filtr funguje, když víte, v jakém seznamu hledat. Vyhledávač funguje, když víte jen jméno. To je rozdíl mezi „otevřu Nájemníky, zapnu filtr, projdu stránku" a „napíšu Nováková".',
      },
      {
        nadpis: 'Kde ho najdete',
        text: 'Nahoře v aplikaci, na mobilu i na počítači. Výsledky se skládají průběžně, jak píšete, a jsou rozdělené podle toho, odkud pocházejí — abyste poznali, jestli jde o nájemníka, nebo o smlouvu, která se ho týká.',
      },
    ],
    proKoho: 'Čím víc bytů, tím větší smysl. Ve všech plánech.',
    faq: [
      {
        otazka: 'Hledá i v přiložených souborech?',
        odpoved: 'Ne, obsah PDF se neprohledává. Hledá se v názvech a údajích, které jsou v evidenci.',
      },
      {
        otazka: 'Funguje to i na mobilu?',
        odpoved: 'Ano, stejně jako na počítači.',
      },
      {
        otazka: 'Najde i smazané záznamy?',
        odpoved: 'Ne. Smazané nemovitosti a smlouvy jsou v koši a hledají se tam.',
      },
      {
        otazka: 'Musím psát s diakritikou?',
        odpoved: 'Ne, hledání diakritiku ignoruje — „novakova" najde Novákovou.',
      },
    ],
    souvisi: ['evidence-nemovitosti', 'evidence-najemniku'],
  },
  {
    slug: 'mobilni-aplikace',
    nadpis: 'Mobilní aplikace',
    perex: 'Housio na iPhonu i Androidu — stejná data jako na počítači.',
    plan: 'free',
    uvod: 'Výdaj zapíšete nejspolehlivěji ve chvíli, kdy stojíte u řemeslníka s fakturou v ruce. Ne večer doma, kdy už si nevzpomenete na částku.',
    sekce: [
      {
        nadpis: 'Kde ji stáhnete',
        text: 'V App Store a na Google Play. Přihlásíte se stejným účtem, data jsou totožná — co zapíšete v mobilu, je hned i na počítači.',
      },
      {
        nadpis: 'Na co se hodí nejvíc',
        text: 'Vyfotit a zapsat fakturu na místě, podívat se na kontakt na nájemníka, zkontrolovat, jestli přišla platba, odškrtnout poznámku.',
      },
      {
        nadpis: 'Stejná data, ne osekaná verze',
        text: 'Mobilní aplikace není zjednodušená náhražka. Jsou v ní všechny záložky i doklady — PDF se dá vygenerovat a rovnou sdílet přes systémové sdílení telefonu, takže ho pošlete nájemníkovi z WhatsAppu nebo e-mailem, aniž byste cokoli stahovali.',
      },
      {
        nadpis: 'Jak se přihlásíte',
        text: 'Stejným účtem jako v prohlížeči — e-mailem a heslem, nebo přes Google a Apple. Žádný zvláštní mobilní účet neexistuje.',
      },
    ],
    proKoho: 'Všichni. Aplikace je zdarma, platí se jen plán.',
    faq: [
      {
        otazka: 'Funguje aplikace offline?',
        odpoved: 'Ne, potřebuje připojení — data jsou na serveru, aby seděla napříč zařízeními.',
      },
      {
        otazka: 'Musím používat mobil?',
        odpoved: 'Ne, Housio běží i v prohlížeči na housio.online.',
      },
      {
        otazka: 'Stojí aplikace něco navíc?',
        odpoved: 'Ne. Stahuje se zdarma a platí se jen plán, který máte.',
      },
    ],
    souvisi: ['evidence-vydaju', 'deset-jazyku'],
  },
  {
    slug: 'deset-jazyku',
    nadpis: 'Deset jazyků',
    perex: 'Česky, slovensky srozumitelně, anglicky, německy, italsky, španělsky, francouzsky, polsky, chorvatsky, rusky a ukrajinsky.',
    plan: 'free',
    uvod: 'Byty v Česku nevlastní jen Češi a nespravují je jen Češi. Jazyk aplikace by neměl být důvod, proč někdo zůstane u Excelu.',
    sekce: [
      {
        nadpis: 'Jazyk se přepíná kdykoli',
        text: 'V nastavení. Doklady — faktury, potvrzení, vyúčtování — se tisknou v jazyce, který máte nastavený, takže je můžete poslat nájemníkovi v jeho řeči.',
      },
      {
        nadpis: 'Co zůstává české',
        text: 'Zákony. Lhůty, paragrafy a sazby v Housiu vycházejí z české úpravy, protože pro ni je aplikace stavěná. Překlad mění jazyk, ne právní řád.',
      },
      {
        nadpis: 'Jak se chovají čísla a data',
        text: 'Každý jazyk má vlastní formát datumu, oddělovač tisíců i tvar množného čísla. Housio je nepřepíná ručně — používá systémové formátování, takže Němec vidí 1.234,50 a Čech 1 234,50, aniž by se o to kdokoli staral.',
      },
      {
        nadpis: 'Proč zrovna těchhle deset',
        text: 'Vycházejí z toho, kdo v Česku byty vlastní a pronajímá: čeština a slovenština jako domácí trh, angličtina a němčina pro zahraniční investory, ukrajinština a ruština kvůli nájemníkům, polština, chorvatština, italština, španělština a francouzština kvůli vlastníkům z EU.',
      },
    ],
    proKoho: 'Zahraniční vlastníci bytů v Česku, ukrajinští a polští nájemníci, správci s mezinárodní klientelou.',
    faq: [
      {
        otazka: 'Jsou překlady strojové?',
        odpoved: 'Prošly kontrolou, včetně míst, kde se čísla a množná čísla chovají jinak než v češtině. Pokud na něco nesedícího narazíte, napište nám — opravíme to.',
      },
      {
        otazka: 'V jakém jazyce dostane doklad nájemník?',
        odpoved: 'V tom, který máte v aplikaci nastavený, když doklad vystavujete. Jazyk se dá přepnout a doklad vygenerovat znovu.',
      },
    ],
    souvisi: ['mobilni-aplikace', 'faktury-a-doklady'],
  },
  {
    slug: 'odpisy-a-dane',
    nadpis: 'Podklady pro daň z pronájmu',
    perex: 'Příjmy, výdaje a odpisy po nemovitostech — v podobě, ze které se vyplňuje přiznání.',
    plan: 'basic',
    uvod: 'Daňové přiznání z pronájmu není složité. Složité je sehnat čísla, když je máte v sedmi složkách a v bankovním výpisu.',
    sekce: [
      {
        nadpis: 'Co z Housia vypadne',
        text: 'Příjmy a výdaje po nemovitostech a po kategoriích, za zvolené období, v Excelu. To je obsah přílohy č. 2 daňového přiznání.',
      },
      {
        nadpis: 'Skutečné výdaje, nebo paušál',
        text: 'Paušál je 30 % z příjmů, nejvýš 600 000 Kč (§ 9 zákona o daních z příjmů). Vyplatí se, když máte málo doložených výdajů. Kalkulačka daně z pronájmu vám obě varianty spočítá vedle sebe.',
      },
      {
        nadpis: 'Odpisy Housio nepočítá za vás',
        text: 'Eviduje hodnotu nemovitosti, ze které odpis vychází, ale samotný odpisový plán si vedete vy nebo účetní. Budova pro pronájem patří do 5. odpisové skupiny, odpisuje se 30 let, v prvním roce 1,4 % a dál 3,4 % ze vstupní ceny. Spočítat si to můžete v kalkulačce odpisů.',
      },
      {
        nadpis: 'Kdy se přiznání podávat musí',
        text: 'Když příjmy z pronájmu přesáhnou 20 000 Kč za rok a nemáte jiné zdanitelné příjmy ze zaměstnání; se zaměstnáním je hranice 20 000 Kč u vedlejších příjmů (§ 38g zákona o daních z příjmů). Konkrétní situaci si ověřte u daňového poradce.',
      },
    ],
    proKoho: 'Každý, kdo podává přiznání z pronájmu. Od plánu Basic.',
    faq: [
      {
        otazka: 'Vyplní Housio přiznání za mě?',
        odpoved: 'Ne. Dává podklady, ne formulář — a není to daňové poradenství.',
      },
      {
        otazka: 'Je kauce zdanitelný příjem?',
        odpoved: 'Ne, dokud ji držíte. Příjmem se stane až to, co si z ní po právu ponecháte.',
      },
    ],
    clanek: 'dane-z-pronajmu',
    kalkulacka: 'dan-z-pronajmu',
    souvisi: ['export-do-excelu', 'evidence-vydaju'],
  },
  {
    slug: 'provereni-najemnika-evidence',
    nadpis: 'Podklady k prověření nájemníka',
    perex: 'Co si o zájemci smíte zjistit, co si smíte uložit — a kde je hranice.',
    plan: 'free',
    uvod: 'Nejdražší chyba v pronájmu se dělá před podpisem smlouvy. Neplatiče nevystěhujete za měsíc a soud o vyklizení trvá roky.',
    sekce: [
      {
        nadpis: 'Co Housio dělá',
        text: 'Eviduje, co si o nájemníkovi zapíšete — kontakt, trvalou adresu, poznámky z prověření, přiložené doklady o příjmu, které vám sám dal.',
      },
      {
        nadpis: 'Co Housio nedělá',
        text: 'Nelustruje. Nemá napojení na insolvenční rejstřík, registr dlužníků ani exekuce a nepředstírá, že má. Ty rejstříky jsou veřejné a prověříte si je sami zdarma — článek o prověření nájemníka ukazuje, kde a jak.',
      },
      {
        nadpis: 'Kopie občanky ne',
        text: 'Pořídit kopii průkazu totožnosti smíte jen s prokazatelným souhlasem (zákon č. 328/1999 Sb.) a pro uzavření nájemní smlouvy ji nepotřebujete — údaje si můžete opsat. Housio proto nikam nenabízí nahrát doklad totožnosti.',
      },
      {
        nadpis: 'Kam si poznámky z prověření zapsat',
        text: 'K nájemníkovi ještě před podpisem smlouvy. Zájemce si můžete v Housiu založit, i když u vás zatím nebydlí — a když to nakonec nevyjde, záznam smažete.',
      },
    ],
    proKoho: 'Každý, kdo zrovna hledá nájemníka.',
    faq: [
      {
        otazka: 'Můžu si vyžádat potvrzení o příjmu?',
        odpoved: 'Požádat můžete, zájemce ho dát nemusí. Odmítnutí je samo o sobě informace.',
      },
      {
        otazka: 'Kde si zájemce prověřím zdarma?',
        odpoved: 'V insolvenčním rejstříku a v centrální evidenci exekucí — obojí je veřejné. Přesné adresy a postup jsou v článku o prověření nájemníka.',
      },
    ],
    clanek: 'provereni-najemnika',
    souvisi: ['evidence-najemniku', 'najemni-smlouvy'],
  },
]
