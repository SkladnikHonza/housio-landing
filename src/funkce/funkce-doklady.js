// Funkce kolem dokladů — všechno, co z Housia vypadne jako PDF nebo Excel.
//
// Tohle je ta část, kvůli které si lidi Housio platí: papír, který se dá
// poslat nájemníkovi, účetní nebo finančnímu úřadu.

export const FUNKCE_DOKLADY = [
  {
    slug: 'vyuctovani-sluzeb-doklad',
    nadpis: 'Roční vyúčtování služeb',
    perex: 'Spočítá přeplatek nebo nedoplatek proti zaplaceným zálohám a vytiskne vyúčtování, které obstojí.',
    plan: 'pro',
    uvod: 'Vyúčtování služeb má pevné lhůty a vlastní zákon. Za pozdní doručení vzniká nájemníkovi nárok na pokutu 50 Kč za každý započatý den — a to i tehdy, když je výsledek ve váš prospěch.',
    sekce: [
      {
        nadpis: 'Co doklad obsahuje',
        text: 'Období, zaplacené zálohy, skutečné náklady podle faktur, rozdíl, a hlavičku s oběma stranami i adresou bytu. Doklad se tiskne do PDF, které můžete poslat e-mailem nebo vytisknout.',
      },
      {
        nadpis: 'Lhůty, které musíte stihnout',
        text: 'Vyúčtování doručit do 4 měsíců od konce zúčtovacího období (§ 7 zákona č. 67/2013 Sb.). Nájemník má pak 30 dní na vyžádání podkladů a na námitky (§ 8). Vypořádat přeplatek nebo nedoplatek do 4 měsíců od doručení (§ 7 odst. 3). Sankce 50 Kč za den je v § 13.',
      },
      {
        nadpis: 'Doporučená nová záloha',
        text: 'Z vyúčtování vyplyne, jestli byla záloha nastavená dobře. Výpočet nové zálohy i termíny si můžete nanečisto projít v kalkulačce vyúčtování ještě před tím, než doklad vystavíte.',
      },
    ],
    proKoho: 'Pronajímatel, který vybírá zálohy na služby — tedy skoro každý. Od plánu Pro.',
    faq: [
      {
        otazka: 'Co když zálohu platí nájemník přímo dodavateli?',
        odpoved: 'Pak ji nevyúčtováváte — vyúčtování se dělá jen ze záloh, které vybíráte vy. Co do vyúčtování patří a co ne, rozebírá článek o vyúčtování služeb.',
      },
      {
        otazka: 'Musím vyúčtování poslat doporučeně?',
        odpoved: 'Zákon formu neurčuje, ale důkazní břemeno o doručení nesete vy. Doporučený dopis nebo datová schránka je rozdíl mezi „poslal jsem to" a „prokázal jsem, že jsem to poslal".',
      },
    ],
    clanek: 'vyuctovani-sluzeb',
    kalkulacka: 'vyuctovani-sluzeb',
    souvisi: ['mesicni-platby', 'faktury-a-doklady', 'vlastni-logo-na-dokladech'],
  },
  {
    slug: 'potvrzeni-o-zaplaceni-najmu',
    nadpis: 'Potvrzení o zaplacení nájmu',
    perex: 'Doklad za konkrétní měsíc — nájemné, zálohy, celkem a datum úhrady.',
    plan: 'basic',
    uvod: 'Nájemník potvrzení potřebuje do zaměstnání, k hypotéce, na úřad práce nebo k příspěvku na bydlení. Ručně psaná poznámka na papírku to nenahradí.',
    sekce: [
      {
        nadpis: 'Co je na dokladu',
        text: 'Obě strany i s adresami a IČO, adresa bytu, období, rozpis nájemné / zálohy / celkem, potvrzující věta a datum úhrady. Číslo dokladu se odvozuje od nemovitosti, takže je pro daný byt pokaždé stejné.',
      },
      {
        nadpis: 'Generuje se z plateb, které už máte',
        text: 'Nic se nepřepisuje. Doklad bere čísla z evidence plateb, takže nemůže říkat něco jiného než vaše účetnictví.',
      },
      {
        nadpis: 'Proč to nestačí napsat do e-mailu',
        text: 'Protože instituce, která potvrzení chce, posuzuje jeho podobu. Doklad s hlavičkou, číslem, oběma stranami a adresou bytu projde; věta v e-mailu „potvrzuji, že Novák zaplatil" se často vrací k doplnění.',
      },
      {
        nadpis: 'Nájemné a zálohy zvlášť',
        text: 'Na dokladu je rozpis, ne jedno číslo. Úřad, který posuzuje nárok na příspěvek na bydlení, rozlišuje nájemné a náklady na služby — a sloučená částka mu nestačí.',
      },
    ],
    proKoho: 'Pronajímatel, jehož nájemník žádá o cokoli, kde se dokládá bydlení. Od plánu Basic.',
    faq: [
      {
        otazka: 'Můžu vystavit potvrzení zpětně?',
        odpoved: 'Ano, za kterýkoli měsíc, který máte v evidenci.',
      },
      {
        otazka: 'Můžu vystavit potvrzení za celý rok?',
        odpoved: 'Potvrzení je za měsíc. Roční souhrn příjmů dostanete z exportu do Excelu.',
      },
    ],
    souvisi: ['mesicni-platby', 'faktury-a-doklady', 'potvrzeni-o-kauci'],
  },
  {
    slug: 'potvrzeni-o-kauci',
    nadpis: 'Potvrzení o přijetí kauce',
    perex: 'Doklad o složení jistoty — s částkou, datem a poučením podle § 2254.',
    plan: 'basic',
    uvod: 'Kauce se platí jednou, většinou v hotovosti nebo převodem bez poznámky, a pak se o ni tři roky nikdo nestará. Spor o ni začíná až na konci nájmu — a vyhraje ho ten, kdo má papír.',
    sekce: [
      {
        nadpis: 'Co je na dokladu',
        text: 'Obě strany, adresa bytu, přijatá částka, datum přijetí, číslo a datum nájemní smlouvy, poučení o vrácení a úrocích, a dva podpisy.',
      },
      {
        nadpis: 'Proč je tam poučení',
        text: 'Protože právě na vracení a úrocích stojí většina sporů o kauci. Nájemce má podle § 2254 občanského zákoníku právo na úroky z jistoty od jejího poskytnutí — a je lepší, když to obě strany vědí hned při nastěhování, než když to nájemník zjistí po třech letech od známého.',
      },
      {
        nadpis: 'Kolik smí kauce být',
        text: 'Jistota a smluvní pokuta dohromady nesmí přesáhnout trojnásobek měsíčního nájemného (§ 2254 odst. 1). Vyšší ujednání je v části nad limit neplatné.',
      },
    ],
    proKoho: 'Každý, kdo vybírá kauci. Od plánu Basic.',
    faq: [
      {
        otazka: 'Musím potvrzení vystavit?',
        odpoved: 'Zákon to výslovně nepřikazuje, ale vy nesete důkazní břemeno o tom, kolik jste přijali a kdy. Bez data přijetí se navíc nedá spočítat úrok.',
      },
      {
        otazka: 'Může být kauce v hotovosti?',
        odpoved: 'Může, ale pak je doklad jediný důkaz, že se platila. U převodu máte aspoň výpis; u hotovosti bez podepsaného potvrzení nemáte nic.',
      },
      {
        otazka: 'Musím kauci držet na zvláštním účtu?',
        odpoved: 'Zákon to nepřikazuje. Oddělený účet ale usnadní prokázat, že jste ji nespotřebovali, a zjednoduší výpočet úroků.',
      },
    ],
    clanek: 'jistota-kauce',
    kalkulacka: 'urok-z-kauce',
    souvisi: ['vraceni-kauce', 'najemni-smlouvy'],
  },
  {
    slug: 'vraceni-kauce',
    nadpis: 'Vyúčtování a vrácení kauce',
    perex: 'Rozpis, co se z jistoty strhlo a proč, s vyčísleným úrokem — a doklad, který to unese.',
    plan: 'basic',
    uvod: 'Tohle je ta polovina kauce, kde se opravdu hádá. Nájemník chce zpátky všechno, pronajímatel si chce strhnout škodu, a žádný z nich nemá rozpis. Housio ho vyrobí.',
    sekce: [
      {
        nadpis: 'Jak to funguje',
        text: 'Zadáte datum vrácení a úrokovou sazbu (předvyplněná zákonnou, ale přepsatelná) a po řádcích to, co strháváte — každý odpočet s vlastním důvodem. Housio spočítá úrok za přesný počet dní od složení jistoty a ukáže, kolik se vrací. Výsledek se uloží ke smlouvě, takže doklad jde vytisknout i za rok.',
      },
      {
        nadpis: 'Co na dokladu je',
        text: 'Přijatá jistota, úrok se sazbou i počtem dní, každý odpočet zvlášť s důvodem, odpočty celkem, částka k vrácení, datum vrácení a konec nájmu. Plus poučení podle § 2254 včetně věty, že sporné odpočty musí pronajímatel doložit.',
      },
      {
        nadpis: 'Když dluh převýší jistotu',
        text: 'Doklad to řekne nahlas: nevrací se nic a rozdíl se vyčíslí zvlášť jako částka, která zůstává k úhradě. „Vráceno 0 Kč" bez vysvětlení není doklad, je to záminka ke sporu.',
      },
      {
        nadpis: 'Co smíte strhnout',
        text: 'Dlužné nájemné, dlužné zálohy, nedoplatek z vyúčtování a škodu nad rámec běžného opotřebení. Ne vymalování po třech letech a ne opotřebený koberec — to je běžné opotřebení, které kryje nájemné.',
      },
    ],
    proKoho: 'Každý, komu končí nájem. Od plánu Basic.',
    faq: [
      {
        otazka: 'Jakou sazbu mám použít?',
        odpoved: 'Zákon u jistoty sazbu přesně neurčuje. V praxi se vychází ze sazby úroků z prodlení podle nařízení vlády č. 351/2013 Sb., tedy z repo sazby ČNB zvýšené o 8 procentních bodů — Housio ji předvyplní, ale pole je editovatelné, protože výklad není ustálený a smlouva může sjednat víc.',
      },
      {
        otazka: 'Do kdy musím kauci vrátit?',
        odpoved: 'Bez zbytečného odkladu po skončení nájmu a vyklizení bytu. Zadržovat ji „pro jistotu" měsíce bez vyčíslených nároků je cesta k úrokům z prodlení.',
      },
      {
        otazka: 'Musím odpočty doložit?',
        odpoved: 'Pokud je nájemník rozporuje, ano. Proto má každý odpočet na dokladu vlastní řádek s důvodem — faktura za opravu nebo fotka z předávacího protokolu jsou to, čím se to dokazuje.',
      },
    ],
    clanek: 'jistota-kauce',
    kalkulacka: 'urok-z-kauce',
    souvisi: ['potvrzeni-o-kauci', 'dokumenty-k-nemovitosti'],
  },
  {
    slug: 'faktury-a-doklady',
    nadpis: 'Faktury za nájem',
    perex: 'Faktura s oběma stranami, IČO, variabilním symbolem a splatností — pro nájemníka, který je firma.',
    plan: 'basic',
    uvod: 'Když pronajímáte firmě nebo podnikateli, potvrzení nestačí. Chtějí fakturu s náležitostmi, kterou dají své účetní.',
    sekce: [
      {
        nadpis: 'Co faktura obsahuje',
        text: 'Dodavatele a odběratele včetně IČO a DIČ, adresu nemovitosti, položky (nájemné, zálohy), celkovou částku, variabilní symbol, datum vystavení a splatnost.',
      },
      {
        nadpis: 'Variabilní symbol se neplete',
        text: 'Odvozuje se od nemovitosti, takže je pro daný byt pokaždé stejný. Na výpisu pak poznáte, od koho platba je, i když nájemník zapomene napsat zprávu.',
      },
      {
        nadpis: 'Kdy faktura, kdy potvrzení',
        text: 'Faktura je výzva k úhradě, kterou vystavujete dopředu — má splatnost a variabilní symbol. Potvrzení je doklad o tom, že už se zaplatilo, a vystavuje se zpětně. Firemní nájemník typicky chce obojí: fakturu do závazků, potvrzení do účetnictví.',
      },
      {
        nadpis: 'Splatnost a variabilní symbol',
        text: 'Splatnost si nastavíte, variabilní symbol se odvodí od nemovitosti. Když máte víc bytů, poznáte na výpisu, který z nich platba patří — i bez zprávy pro příjemce.',
      },
    ],
    proKoho: 'Pronajímatel firemním nájemníkům nebo OSVČ. Od plánu Basic.',
    faq: [
      {
        otazka: 'Řeší Housio DPH?',
        odpoved: 'Ne. Nájem bytu je od DPH osvobozen bez nároku na odpočet a Housio s DPH nepracuje. Pokud jste plátce a pronajímáte nebytové prostory, potřebujete účetní program.',
      },
      {
        otazka: 'Jdou faktury číslovat vlastní řadou?',
        odpoved: 'Číslo se odvozuje od nemovitosti a roku. Vlastní číselná řada zatím nejde nastavit.',
      },
    ],
    souvisi: ['potvrzeni-o-zaplaceni-najmu', 'vlastni-logo-na-dokladech'],
  },
  {
    slug: 'export-do-excelu',
    nadpis: 'Export do Excelu',
    perex: 'Celé portfolio nebo jedna nemovitost — platby, výdaje, smlouvy, nájemníci a pojištění v samostatných listech.',
    plan: 'basic',
    uvod: 'Dřív nebo později přijde chvíle, kdy data potřebujete jinde: u účetní, v bance, ve vlastní tabulce. Export je pojistka proti tomu, aby vám aplikace držela data jako rukojmí.',
    sekce: [
      {
        nadpis: 'Dvě úrovně exportu',
        text: 'Celé portfolio naráz, nebo jedna konkrétní nemovitost z její karty. Druhé se hodí, když posíláte podklady spoluvlastníkovi nebo řešíte jeden byt s účetní.',
      },
      {
        nadpis: 'Co je v sešitu',
        text: 'Souhrn, nemovitosti, nájemníci, smlouvy, platby, výdaje, pojištění a revize — každé ve vlastním listu, se záhlavím a bez slitých buněk. Tedy ve tvaru, se kterým jde v Excelu dál pracovat.',
      },
      {
        nadpis: 'Podklad pro daňové přiznání',
        text: 'Příjmy a výdaje po nemovitostech a po kategoriích je přesně to, co potřebujete do přílohy č. 2 daňového přiznání. Kolik z toho nakonec odvedete, si spočítáte v kalkulačce daně z pronájmu.',
      },
    ],
    proKoho: 'Pronajímatel, který spolupracuje s účetní nebo si vede vlastní tabulky. Od plánu Basic.',
    faq: [
      {
        otazka: 'Jde exportovat jen jeden rok?',
        odpoved: 'Ano, export se dá omezit na období.',
      },
      {
        otazka: 'A když budu chtít z Housia odejít?',
        odpoved: 'Vyexportujete si všechno do Excelu a účet smažete. Žádné podmínky, žádná výpovědní lhůta na data.',
      },
      {
        otazka: 'V jakém formátu se soubor stáhne?',
        odpoved: 'XLSX, otevře ho Excel, Numbers i Google Tabulky.',
      },
    ],
    kalkulacka: 'dan-z-pronajmu',
    souvisi: ['evidence-vydaju', 'odpisy-a-dane'],
  },
  {
    slug: 'vlastni-logo-na-dokladech',
    nadpis: 'Vlastní logo na dokladech',
    perex: 'Faktury, potvrzení a vyúčtování s vaší hlavičkou místo s naší.',
    plan: 'business',
    uvod: 'Když spravujete byty pro klienty, doklad s cizím logem vypadá jako doklad od někoho jiného. Tohle to řeší.',
    sekce: [
      {
        nadpis: 'Kde se logo objeví',
        text: 'V hlavičce všech PDF, které Housio vystavuje — faktury, potvrzení o zaplacení nájmu, potvrzení o kauci, vyúčtování kauce i roční vyúčtování služeb.',
      },
      {
        nadpis: 'Fakturační údaje taky',
        text: 'Na dokladech je váš název nebo jméno, adresa, IČO, DIČ, telefon a e-mail z profilu. Nemusíte to psát pokaždé znovu.',
      },
      {
        nadpis: 'Jak se logo nahraje',
        text: 'V nastavení profilu. Použije se obrázek, který nahrajete — nijak ho neupravujeme ani nepřebarvujeme. Doporučená je vodorovná varianta s průhledným pozadím, protože hlavička dokladu je světlá.',
      },
      {
        nadpis: 'Proč je to až v Business plánu',
        text: 'Protože to řeší potřebu, kterou má správce cizích bytů, ne pronajímatel dvou vlastních. Majitel, který posílá potvrzení svému nájemníkovi, logo nepotřebuje — klient, kterému správce reportuje, ano.',
      },
    ],
    proKoho: 'Správci nemovitostí a realitní kanceláře. Plán Business.',
    faq: [
      {
        otazka: 'Musím mít firmu?',
        odpoved: 'Ne. Logo může mít i fyzická osoba, na dokladu se pak objeví vaše jméno.',
      },
      {
        otazka: 'Objeví se logo i v exportu do Excelu?',
        odpoved: 'Ne, logo je na PDF dokladech. Excel je pracovní soubor, ne doklad pro klienta.',
      },
    ],
    souvisi: ['faktury-a-doklady', 'sprava-tymu'],
  },
]
