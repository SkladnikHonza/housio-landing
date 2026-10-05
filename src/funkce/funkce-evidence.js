// Funkce kolem evidence — co Housio drží a kde to člověk najde.
//
// PRAVIDLO PRO CELOU TUHLE SLOZKU: popisujeme JEN to, co aplikace opravdu
// umí. Žádná stránka o funkci, která se teprve chystá. Návštěvník, který
// se po registraci nedopátrá toho, co jsme slíbili, se už nevrátí — a Google
// to pozná dřív než my.

export const FUNKCE_EVIDENCE = [
  {
    slug: 'evidence-nemovitosti',
    nadpis: 'Evidence nemovitostí',
    perex: 'Každý byt jako vlastní karta — adresa, dispozice, nájemník, platby, výdaje, smlouvy a dokumenty pohromadě.',
    plan: 'free',
    uvod: 'Většina pronajímatelů má jeden byt v Excelu, druhý v e-mailu a třetí v hlavě. Housio dává každé nemovitosti jednu kartu, na které je všechno — a když se někdo zeptá, kdy se naposled měnil bojler, nehledáte to půl hodiny.',
    sekce: [
      {
        nadpis: 'Co je na kartě nemovitosti',
        text: 'Přehled (dispozice, plocha, hodnota, aktuální nájemník), Nájemníci, Smlouvy, Platby, Výdaje, Pojištění, Revize, Energie, Dokumenty a — u krátkodobého pronájmu — Pobyty a Kalendář. Záložky, ne deset různých míst.',
      },
      {
        nadpis: 'Proč všechno pod jednou kartou',
        text: 'Protože otázky, které vám chodí, jsou vždycky o konkrétním bytě. „Kolik mi loni sežraly opravy v Michálkovicích?" nebo „Do kdy platí revize plynu v Kasárenské?" Když je evidence rozdělená podle typu záznamu místo podle bytu, odpověď skládáte z pěti míst.',
      },
      {
        nadpis: 'Hodnota portfolia a obsazenost',
        text: 'Z vyplněných hodnot se počítá souhrn na Nástěnce: kolik má portfolio hodnotu, jaký je měsíční čistý příjem a kolik procent bytů je obsazených. Nemusíte to nikam přepisovat, počítá se to z toho, co už v evidenci je.',
      },
    ],
    proKoho: 'Pronajímatel s jedním i s třiceti byty. Ve Free plánu je jedna nemovitost zdarma napořád.',
    faq: [
      {
        otazka: 'Kolik nemovitostí můžu mít?',
        odpoved: 'Free 1, Basic 15, Pro 25, Business bez omezení. Nájemníků je ve všech placených plánech neomezeně.',
      },
      {
        otazka: 'Zvládne Housio i dům s více byty?',
        odpoved: 'Ano — každou bytovou jednotku si založíte jako vlastní nemovitost. Housio pracuje s jednotkami, protože nájemní smlouva, platby i vyúčtování se vážou k jednotce, ne k domu.',
      },
      {
        otazka: 'Můžu mít nemovitost, kterou zrovna nepronajímám?',
        odpoved: 'Ano. Nemovitost bez aktivní smlouvy se v přehledu obsazenosti započítá jako volná.',
      },
    ],
    souvisi: ['evidence-najemniku', 'mesicni-platby', 'nastenka-portfolia'],
  },
  {
    slug: 'evidence-najemniku',
    nadpis: 'Evidence nájemníků',
    perex: 'Kontakty, trvalá adresa, smlouvy a historie plateb u každého nájemníka — i u těch bývalých.',
    plan: 'free',
    uvod: 'Údaje o nájemníkovi potřebujete přesně ve dvou chvílích: když se něco rozbije a když se něco řeší právně. V obou případech je špatná odpověď „mám to někde v SMS".',
    sekce: [
      {
        nadpis: 'Co se eviduje',
        text: 'Jméno, telefon, e-mail, trvalá adresa (ta se tiskne na doklady), datum narození a poznámky. Nájemník je navázaný na nemovitost a na smlouvu, takže z jeho karty vidíte i platby a výdaje, které se ho týkají.',
      },
      {
        nadpis: 'Bývalí nájemníci se nemažou',
        text: 'Po skončení nájmu zůstane záznam i se smlouvou v archivu. Když se za rok ozve finanční úřad nebo se řeší spor o kauci, máte to po ruce.',
      },
      {
        nadpis: 'Co do evidence nepatří',
        text: 'Kopie občanského průkazu. Pořizovat ji smíte jen s prokazatelným souhlasem nájemníka (zákon č. 328/1999 Sb.) a pro běžný pronájem ji nepotřebujete — stačí si údaje opsat. Housio proto nikam nenutí nahrávat doklady totožnosti.',
      },
    ],
    proKoho: 'Každý, kdo pronajímá. Zvlášť se vyplatí u bytů, kde se nájemníci střídají.',
    faq: [
      {
        otazka: 'Můžu mít u jednoho bytu víc nájemníků?',
        odpoved: 'Ano. V placených plánech je počet nájemníků neomezený, ve Free je jeden.',
      },
      {
        otazka: 'Jak je to s GDPR?',
        odpoved: 'Jako pronajímatel jste správcem osobních údajů svých nájemníků a Housio zpracovatelem. Co to pro vás znamená a co musíte mít splněné, rozebírá článek o GDPR pro pronajímatele.',
      },
      {
        otazka: 'Co když se nájemník odstěhuje a dluží?',
        odpoved: 'Záznam i smlouva zůstanou v archivu, takže máte podklady pro upomínku i pro soud. Postup při neplacení rozebírá článek o neplatícím nájemníkovi.',
      },
    ],
    clanek: 'gdpr-pronajimatel',
    souvisi: ['evidence-nemovitosti', 'najemni-smlouvy', 'provereni-najemnika-evidence'],
  },
  {
    slug: 'najemni-smlouvy',
    nadpis: 'Nájemní smlouvy',
    perex: 'Evidence smluv s hlídáním konce doby nájmu, výše nájemného, záloh i kauce — a s doklady, které z nich vznikají.',
    plan: 'basic',
    uvod: 'Smlouva není papír, který se podepíše a zapomene. Je to zdroj dat pro skoro všechno ostatní: kolik se platí, do kdy, kolik je kauce a kdy se musí dát výpověď, aby lhůta sedla.',
    sekce: [
      {
        nadpis: 'Co se u smlouvy eviduje',
        text: 'Číslo smlouvy, datum podpisu, doba nájmu (od–do nebo na dobu neurčitou), nájemné, zálohy na služby, kauce včetně data přijetí a data vrácení, nájemník a stav smlouvy (návrh / aktivní / ukončená).',
      },
      {
        nadpis: 'Hlídání konce nájmu',
        text: 'U smlouvy na dobu určitou Housio ukazuje, kolik dní zbývá. Výpověď má tříměsíční lhůtu a běží od prvního dne měsíce následujícího po doručení — kdo si na to vzpomene pozdě, platí za vlastní nepozornost další čtvrtletí.',
      },
      {
        nadpis: 'Archiv místo mazání',
        text: 'Ukončené smlouvy se přesouvají do archivu a zůstávají dostupné. Doklady z nich jdou vytisknout i zpětně.',
      },
      {
        nadpis: 'Vzory smluv Housio nenabízí',
        text: 'Záměrně. Vzor nájemní smlouvy, který není posouzený advokátem, je u soudu spíš riziko než pomoc — a chyba ve výpovědní doložce stojí tři měsíce nájmu. Housio smlouvy eviduje a pracuje s jejich čísly, nenahrazuje právníka.',
      },
    ],
    proKoho: 'Kdokoli, kdo má aspoň jednu smlouvu na dobu určitou. Od plánu Basic.',
    faq: [
      {
        otazka: 'Můžu nahrát podepsanou smlouvu v PDF?',
        odpoved: 'Ano, ke smlouvě se dají přiložit soubory — sken, dodatky, předávací protokol.',
      },
      {
        otazka: 'Co dodatky?',
        odpoved: 'Změnu, která se dotkne plateb nebo doby nájmu, zapište jako změnu u smlouvy a dodatek přiložte jako soubor. Co musí dodatek obsahovat, rozebírá samostatný článek.',
      },
    ],
    clanek: 'najemni-smlouva',
    souvisi: ['potvrzeni-o-kauci', 'vraceni-kauce', 'mesicni-platby'],
  },
  {
    slug: 'mesicni-platby',
    nadpis: 'Měsíční platby a předpis nájemného',
    perex: 'Přehled, kdo kolik platí a za který měsíc — nájemné zvlášť, zálohy na služby zvlášť.',
    plan: 'free',
    uvod: 'Nejčastější otázka pronajímatele zní „zaplatil mi Novák za březen?". Housio na ni odpovídá tabulkou, kde je vidět celý rok najednou.',
    sekce: [
      {
        nadpis: 'Předpis a skutečnost',
        text: 'Z nájemní smlouvy vzniká předpis — kolik se má platit za nájem a kolik na zálohách. Proti němu se zapisuje, co skutečně přišlo. Rozdíl je vidět na první pohled.',
      },
      {
        nadpis: 'Nájemné a služby odděleně',
        text: 'To není kosmetika. Zálohy na služby se na konci roku vyúčtovávají podle zákona č. 67/2013 Sb. a nájemné ne. Když je máte slité dohromady, vyúčtování se dělá špatně a dlužné nájemné se špatně vymáhá.',
      },
      {
        nadpis: 'Roční souhrn',
        text: 'Předpis ročně, skutečně přijato, obsazenost. To samé, co potřebujete do daňového přiznání — a co jde vyexportovat do Excelu.',
      },
    ],
    proKoho: 'Všichni. Platby jsou v Housiu i ve Free plánu.',
    faq: [
      {
        otazka: 'Páruje Housio platby z banky automaticky?',
        odpoved: 'Ne. Napojení na banku zatím nemáme a dokud ho nebudeme mít doopravdy, nebudeme ho slibovat. Platby se zapisují ručně nebo se naimportují z vlastní evidence.',
      },
      {
        otazka: 'Co když nájemník zaplatí jen část?',
        odpoved: 'Zapíšete částku, která přišla. Rozdíl proti předpisu zůstane viditelný jako nedoplatek.',
      },
      {
        otazka: 'Můžu si platby naimportovat?',
        odpoved: 'Hromadný import zatím není. Zapisují se v aplikaci — na mobilu i na počítači.',
      },
    ],
    souvisi: ['vyuctovani-sluzeb-doklad', 'potvrzeni-o-zaplaceni-najmu', 'evidence-vydaju'],
  },
  {
    slug: 'evidence-vydaju',
    nadpis: 'Evidence výdajů',
    perex: 'Opravy, poplatky, pojistné i daně u konkrétního bytu — s fakturou, dodavatelem a kategorií.',
    plan: 'basic',
    uvod: 'Výdaje jsou druhá polovina čísla, které vás zajímá. Bez nich víte, kolik vám byt vynesl na papíře, ne kolik vám opravdu zůstalo — a bez doložených výdajů za ně navíc zaplatíte daň.',
    sekce: [
      {
        nadpis: 'Co se u výdaje eviduje',
        text: 'Datum, kategorie, popis, částka, dodavatel, číslo faktury, poznámka a příloha — sken faktury nebo fotka. Příloha je ta část, kterou po vás při kontrole chce finanční úřad.',
      },
      {
        nadpis: 'Výdaje jsou i v kartě nemovitosti',
        text: 'Nemusíte přepínat na samostatnou stránku a filtrovat. Záložka Výdaje je přímo u bytu, takže vidíte jen to, co se ho týká.',
      },
      {
        nadpis: 'Skutečné výdaje vs. paušál',
        text: 'U příjmů z pronájmu si můžete vybrat mezi skutečnými výdaji a paušálem 30 % (strop 600 000 Kč podle § 9 zákona o daních z příjmů). Evidence má smysl u obou — jen u paušálu ji potřebujete pro sebe, ne pro úřad.',
      },
    ],
    proKoho: 'Pronajímatel, který uplatňuje skutečné výdaje, nebo chce znát reálný výnos bytu. Od plánu Basic.',
    faq: [
      {
        otazka: 'Pozná Housio, co je oprava a co technické zhodnocení?',
        odpoved: 'Nerozhodne to za vás — je to právní posouzení. Hranice je 80 000 Kč za zdaňovací období podle § 33 zákona o daních z příjmů a nad ní se výdaj neuplatní najednou, ale odpisuje se. Housio vám dá kategorii a doklad, rozhodnutí je na vás nebo na účetním.',
      },
      {
        otazka: 'Dostanu z toho podklad pro daňové přiznání?',
        odpoved: 'Ano, přes export do Excelu — výdaje po kategoriích i po nemovitostech.',
      },
    ],
    clanek: 'dane-z-pronajmu',
    kalkulacka: 'dan-z-pronajmu',
    souvisi: ['export-do-excelu', 'mesicni-platby', 'odpisy-a-dane'],
  },
  {
    slug: 'pojisteni-nemovitosti',
    nadpis: 'Evidence pojištění',
    perex: 'Která pojistka ke kterému bytu patří, kolik stojí ročně a kdy končí.',
    plan: 'basic',
    uvod: 'Pojistku člověk vyřeší jednou a pak na ni nemyslí — až do chvíle, kdy praskne stoupačka a zjistí, že smlouva loni propadla.',
    sekce: [
      {
        nadpis: 'Co se eviduje',
        text: 'Pojišťovna, číslo smlouvy, typ pojištění, roční pojistné, platnost od–do a příloha s pojistnou smlouvou.',
      },
      {
        nadpis: 'Upozornění na konec platnosti',
        text: 'Pojištění, kterému se blíží konec, se v přehledu zvýrazní. Není to na vás schované v detailu — vidíte to na seznamu.',
      },
      {
        nadpis: 'Roční pojistné jde do nákladů',
        text: 'Pojistné na pronajímanou nemovitost je daňově uznatelný výdaj. Když ho máte v evidenci, nepřijdete o něj tím, že na něj v lednu zapomenete.',
      },
      {
        nadpis: 'Víc pojistek u jednoho bytu',
        text: 'Běžně jsou dvě: pojištění nemovitosti (zdi, instalace) a pojištění odpovědnosti. U každé je jiná pojišťovna, jiné číslo a jiná platnost — v evidenci je proto vedete zvlášť.',
      },
    ],
    proKoho: 'Majitel víc než jednoho bytu, kde se pojistky pletou. Od plánu Basic.',
    faq: [
      {
        otazka: 'Hlídá Housio i pojištění domácnosti nájemníka?',
        odpoved: 'Můžete si ho zapsat, ale Housio ho za vás nekontroluje — je to pojistka nájemníka, ne vaše.',
      },
      {
        otazka: 'Upozorní mě Housio, když pojistka končí?',
        odpoved: 'V přehledu se zvýrazní. E-mailová upozornění jsou v placených plánech.',
      },
      {
        otazka: 'Můžu přiložit pojistnou smlouvu?',
        odpoved: 'Ano, jako soubor u pojištění.',
      },
    ],
    souvisi: ['povinne-revize-evidence', 'evidence-vydaju'],
  },
  {
    slug: 'povinne-revize-evidence',
    nadpis: 'Hlídání povinných revizí',
    perex: 'Plyn, elektrika, komín, hasicí přístroje — kdy byla poslední a kdy musí být další.',
    plan: 'basic',
    uvod: 'Revize je jediná položka v pronájmu, kde se zapomenutí může obrátit v trestní odpovědnost. Když po požáru nebo otravě oxidem uhelnatým chybí platná revizní zpráva, řeší se zanedbání povinné péče.',
    sekce: [
      {
        nadpis: 'Co se eviduje',
        text: 'Typ revize, datum provedení, platnost do, revizní technik, číslo zprávy a sama zpráva jako příloha.',
      },
      {
        nadpis: 'Barevné stavy',
        text: 'Revize po platnosti svítí červeně, ta, které se blíží konec, oranžově. V přehledu i v kartě nemovitosti — nemusíte nikam klikat, abyste zjistili, že něco propadlo.',
      },
      {
        nadpis: 'Lhůty, které platí',
        text: 'Elektroinstalace v bytových domech se reviduje jednou za 5 let (nařízení vlády č. 190/2022 Sb.), plynová zařízení mají roční provozní kontrolu a tříletou revizi (nařízení vlády č. 191/2022 Sb.), spalinová cesta se čistí a kontroluje jednou ročně. Housio lhůty nepředvyplňuje za vás — záleží na typu zařízení a na tom, co předepsal výrobce.',
      },
    ],
    proKoho: 'Každý, kdo pronajímá byt s plynem nebo kotlem. Od plánu Basic.',
    faq: [
      {
        otazka: 'Pošle mi Housio upozornění e-mailem?',
        odpoved: 'E-mailová upozornění jsou v placených plánech. V aplikaci jsou blížící se a propadlé revize vidět vždycky.',
      },
      {
        otazka: 'Platí revize i pro byt v osobním vlastnictví?',
        odpoved: 'Za zařízení uvnitř bytu odpovídá vlastník jednotky, za společné části dům nebo SVJ. Podrobnosti rozebírá článek o povinných revizích.',
      },
    ],
    clanek: 'povinne-revize',
    souvisi: ['pojisteni-nemovitosti', 'evidence-nemovitosti'],
  },
  {
    slug: 'dokumenty-k-nemovitosti',
    nadpis: 'Dokumenty u nemovitosti',
    perex: 'Smlouvy, protokoly, revizní zprávy, faktury a fotky uložené u bytu, kterého se týkají.',
    plan: 'free',
    uvod: 'Papír, který hledáte, je skoro vždycky navázaný na konkrétní byt. Složka na disku pojmenovaná „byty_nove_FINAL" tuhle vazbu neumí.',
    sekce: [
      {
        nadpis: 'Co sem lidi dávají',
        text: 'Podepsanou nájemní smlouvu, předávací protokol se stavy měřidel, revizní zprávy, pojistku, faktury za opravy, fotky stavu bytu při předání.',
      },
      {
        nadpis: 'Proč fotky při předání',
        text: 'Protože bez nich se při vracení kauce špatně dokazuje, co je běžné opotřebení a co škoda. Fotka s datem je nejlevnější pojistka, jakou v pronájmu máte.',
      },
      {
        nadpis: 'Jak se soubory ukládají',
        text: 'Nahrajete je ke konkrétní nemovitosti, smlouvě, výdaji nebo revizi. Soubor pak najdete tam, kde ho budete hledat — u věci, které se týká, ne v jedné velké složce.',
      },
      {
        nadpis: 'Jak jsou chráněné',
        text: 'Soubory leží v šifrovaném úložišti a dostanete se k nim jen vy a lidé, které jste přizvali. Odkazy jsou dočasné, takže ani ten, komu jednou pošlete adresu, se k souboru nedostane napořád.',
      },
    ],
    proKoho: 'Všichni, i ve Free plánu.',
    faq: [
      {
        otazka: 'Kdo se k souborům dostane?',
        odpoved: 'Vy a lidé, které si přizvete do týmu. Vlastník, kterému dáte přístup k jedné nemovitosti, vidí jen přehled — ne vaše dokumenty.',
      },
      {
        otazka: 'Jaká je velikost a formát?',
        odpoved: 'Běžné dokumenty a fotky z telefonu projdou bez problémů. U hodně velkého souboru vám Housio řekne, že je moc velký, místo aby nahrávání tiše selhalo.',
      },
    ],
    clanek: 'predavaci-protokol',
    souvisi: ['pristup-pro-vlastniky', 'sprava-tymu'],
  },
]
