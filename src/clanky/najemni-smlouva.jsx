import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'najemni-smlouva',
  nadpis: 'Co musí být v nájemní smlouvě na byt (a co do ní zákon nepustí)',
  perex: 'Povinné náležitosti, strop na jistotu a smluvní pokutu, ujednání, ke kterým se nepřihlíží, i to, co si do smlouvy přidat navíc. Se strukturou, podle které si smlouvu zkontroluješ za deset minut.',
  tema: 'smlouva',
  datum: '2026-10-01',
  minut: 10,
  sekce: [
    { id: 'povinne', nadpis: 'Co ve smlouvě musí být' },
    { id: 'navic', nadpis: 'Co tam zákon nevyžaduje, ale ty to chceš' },
    { id: 'jistota', nadpis: 'Jistota a smluvní pokuta: společný strop' },
    { id: 'nesmi', nadpis: 'Ujednání, ke kterým se nepřihlíží' },
    { id: 'doba', nadpis: 'Doba určitá, neurčitá a automatické prodloužení' },
    { id: 'predani', nadpis: 'Předání bytu a měřidla' },
    { id: 'kontrola', nadpis: 'Kontrolní seznam před podpisem' },
  ],
  faq: [
    {
      otazka: 'Musí být nájemní smlouva písemná?',
      odpoved: 'Ano, zákon pro nájem bytu vyžaduje písemnou formu. Pokud smlouva písemná není, ale nájemník byt v dobré víře užívá aspoň tři roky, nemůže pronajímatel neplatnost pro nedostatek formy namítat. V praxi na ústní dohodě vždycky tratí ten, kdo nemá co doložit.',
    },
    {
      otazka: 'Můžu nájemníkovi zakázat přihlásit si v bytě trvalý pobyt?',
      odpoved: 'Ne. Trvalý pobyt je evidenční údaj a zákaz v nájemní smlouvě nemá účinky. Přihlášení trvalého pobytu nijak nezakládá právo k bytu a po skončení nájmu se adresa přehlašuje nezávisle na tom, co je ve smlouvě.',
    },
    {
      otazka: 'Můžu omezit počet osob v bytě?',
      odpoved: 'Ano, přiměřený počet osob vzhledem k velikosti bytu si ujednat můžeš. Nemůžeš ale nájemníkovi zakázat, aby k sobě přijal osobu blízkou — o přijetí dalšího člena domácnosti tě musí bez zbytečného odkladu informovat.',
    },
    {
      otazka: 'Co když nájemník podepíše něco, co zákon zakazuje?',
      odpoved: 'K takovému ujednání se nepřihlíží — podpis na tom nic nemění. Zbytek smlouvy ale zůstává v platnosti, takže jedna vadná věta celou smlouvu neshodí.',
    },
    {
      otazka: 'Můžu ve smlouvě sjednat, že si nájemník platí drobné opravy?',
      odpoved: 'Běžná údržba a drobné opravy jdou ze zákona za nájemníkem i bez ujednání. Co je drobná oprava a běžná údržba, vymezuje nařízení vlády č. 308/2015 Sb. — vyplatí se na ně ve smlouvě odkázat, ať je jasno.',
    },
  ],
  zdroje: ['§ 2235 a násl. občanského zákoníku', 'nařízení vlády č. 308/2015 Sb.'],
}

export default function NajemniSmlouva() {
  return (
    <>
      <Perex>
        Nájemní smlouva na byt nemusí být složitá. Musí ale mít několik věcí, bez kterých se dohoda
        těžko prokazuje — a nesmí obsahovat ujednání, ke kterým zákon prostě nepřihlíží, i když je
        nájemník podepíše.
      </Perex>

      <Shrnuti>
        <li>Smlouva musí být písemná a musí z ní být jasné, kdo, co, za kolik a na jak dlouho.</li>
        <li>Jistota a smluvní pokuta dohromady nesmí přesáhnout trojnásobek měsíčního nájemného.</li>
        <li>Zákaz trvalého pobytu, vzdání se práv nájemníka a výpovědní důvody nad rámec zákona jsou neúčinné.</li>
        <li>Nájem na dobu určitou se po třech měsících mlčení automaticky prodlužuje.</li>
        <li>Předávací protokol není povinný, ale je to nejlevnější pojistka, jakou máš.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="povinne">Co ve smlouvě musí být</H2>
      <P>
        Nájem bytu upravuje <Zakon>§ 2235 a násl. občanského zákoníku</Zakon> a smlouva musí být
        písemná. Minimum, bez kterého se neobejdeš:
      </P>
      <Seznam>
        <Polozka>
          <strong>Smluvní strany.</strong> Jméno, datum narození a adresa u obou stran. U pronajímatele
          firmy název, IČO a sídlo. U více spoluvlastníků všichni, nebo ten, kdo je zmocněn.
        </Polozka>
        <Polozka>
          <strong>Předmět nájmu.</strong> Přesné označení bytu — číslo jednotky, adresa, podlaží,
          dispozice, podlahová plocha a co k bytu patří (sklep, parkovací stání, sklepní kóje, vybavení).
        </Polozka>
        <Polozka>
          <strong>Nájemné.</strong> Konkrétní částka, nebo alespoň způsob, jak se určí. Nájemné
          a zálohy na služby uváděj odděleně — potřebuješ to u vyúčtování i u daní.
        </Polozka>
        <Polozka>
          <strong>Služby a zálohy.</strong> Které služby zajišťuješ, jaké jsou zálohy a jak se budou
          vyúčtovávat. Co ve smlouvě není, nemůžeš nájemníkovi později naúčtovat.
        </Polozka>
        <Polozka>
          <strong>Doba nájmu.</strong> Na dobu určitou s konkrétním datem, nebo na dobu neurčitou.
          Když to ve smlouvě chybí, platí nájem na dobu neurčitou.
        </Polozka>
        <Polozka>
          <strong>Splatnost a způsob placení.</strong> K jakému dni, na jaký účet a s jakým variabilním
          symbolem. Bez variabilního symbolu se u více bytů špatně páruje, kdo co zaplatil.
        </Polozka>
      </Seznam>

      <H2 id="navic">Co tam zákon nevyžaduje, ale ty to chceš</H2>
      <Tabulka
        hlavicka={['Ujednání', 'Proč se vyplatí']}
        radky={[
          ['Počet osob v bytě', 'Rozhoduje o zálohách na vodu a odpad a dává ti přehled, kdo v bytě bydlí'],
          ['Stav měřidel při předání', 'Bez něj se první vyúčtování dělá od oka'],
          ['Pravidla pro domácí zvířata', 'Chov zvířete zakázat nejde, ale můžeš ujednat podmínky a úklid'],
          ['Souhlas s podnájmem', 'Bez něj může nájemník část bytu podnajmout i bez tvého vědomí, pokud v bytě sám bydlí'],
          ['Kontakt pro havárie', 'Ušetří škodu, když praskne stoupačka v neděli večer'],
          ['Odkaz na evidenční list', 'Umožní měnit zálohy bez dodatku ke smlouvě'],
        ]}
      />
      <P>
        Poslední řádek je důležitější, než vypadá. Bez věty, že se výše záloh stanovuje evidenčním
        listem, musíš každou změnu záloh dělat dodatkem. Podrobnosti rozebírám
        v článku <OdkazClanek slug="evidencni-list">o evidenčním listu</OdkazClanek>.
      </P>

      <H2 id="jistota">Jistota a smluvní pokuta: společný strop</H2>
      <P>
        Jistotu (lidově kauci) zákon dovoluje, ale omezuje její výši. Podle <Zakon>§ 2254</Zakon> smí
        jistota <em>spolu se smluvní pokutou</em> dosáhnout nanejvýš trojnásobku měsíčního nájemného.
        Možnost sjednat smluvní pokutu se do zákona vrátila novelou účinnou od 1. července 2020 —
        právě s tímto společným stropem.
      </P>
      <Ramecek druh="priklad">
        <p>
          Nájemné 20 000 Kč. Jistota a smluvní pokuta dohromady nesmí přesáhnout
          <strong> 60 000 Kč</strong>. Vezmeš-li jistotu 50 000 Kč, na smluvní pokuty zbývá
          prostor 10 000 Kč.
        </p>
      </Ramecek>
      <Seznam>
        <Polozka>Z jistoty hradíš dluh na nájemném, na službách i škodu nad rámec běžného opotřebení.</Polozka>
        <Polozka>Při skončení nájmu ji vracíš — sníženou o to, co ti nájemník po právu dluží.</Polozka>
        <Polozka>Nájemník má ze zákona právo na úroky z jistoty od jejího poskytnutí, i když o nich smlouva mlčí.</Polozka>
      </Seznam>
      <P>
        Víc o tom, z čeho si smíš strhnout a kdy musíš vracet, najdeš
        v článku <OdkazClanek slug="jistota-kauce">o jistotě</OdkazClanek>.
      </P>

      <H2 id="nesmi">Ujednání, ke kterým se nepřihlíží</H2>
      <P>
        Nájemce se předem nemůže vzdát práv, která mu zákon dává. Takové ujednání je neúčinné bez
        ohledu na podpis. V praxi jde nejčastěji o tohle:
      </P>
      <Seznam>
        <Polozka><strong>Zákaz přihlásit si v bytě trvalý pobyt.</strong></Polozka>
        <Polozka><strong>Zákaz přijmout do domácnosti osobu blízkou.</strong> Přiměřený počet osob ujednat můžeš, zákaz blízkých ne.</Polozka>
        <Polozka><strong>Vzdání se náhrady nákladů</strong>, které nájemník vynaložil na nutné opravy, jež jsi neudělal ani po výzvě.</Polozka>
        <Polozka><strong>Výpovědní důvody nad rámec zákona</strong> nebo kratší výpovědní doba, než zákon dovoluje.</Polozka>
        <Polozka><strong>Smluvní pokuty nad společný strop</strong> s jistotou.</Polozka>
        <Polozka><strong>Povinnost nájemníka hradit všechny opravy</strong> včetně těch, které jdou ze zákona za pronajímatelem.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Neúčinné ujednání neshodí celou smlouvu — zbytek platí dál. Problém nastane až ve chvíli,
          kdy na takové ujednání spoléháš. Typicky když vypovíš nájem z důvodu, který je sice
          ve smlouvě, ale zákon ho nezná.
        </p>
      </Ramecek>

      <H2 id="doba">Doba určitá, neurčitá a automatické prodloužení</H2>
      <H3>Nájem na dobu určitou</H3>
      <P>
        Skončí uplynutím doby. Pozor na automatické prodloužení: pokud nájemník užívá byt dál
        alespoň tři měsíce po dni, kdy měl nájem skončit, a ty ho písemně nevyzveš, aby byt opustil,
        nájem se obnovuje na stejnou dobu — nejvýše však na dva roky.
      </P>
      <H3>Nájem na dobu neurčitou</H3>
      <P>
        Nájemník může vypovědět bez udání důvodu s tříměsíční výpovědní dobou. Ty potřebuješ
        zákonný důvod a výpověď musí obsahovat poučení o právu podat námitky k soudu —
        jinak je neplatná. Celý postup rozebírám
        v článku <OdkazClanek slug="vypoved-z-najmu">o výpovědi z nájmu</OdkazClanek>.
      </P>
      <Ramecek druh="pozor">
        <p>
          Smlouva na dobu určitou není ochrana proti špatnému nájemníkovi — během sjednané doby
          ji taky nemůžeš jen tak vypovědět. Výhodou je jen to, že jednou skončí sama.
        </p>
      </Ramecek>

      <H2 id="predani">Předání bytu a měřidla</H2>
      <P>
        Předávací protokol není zákonná povinnost, ale je to nejlevnější pojistka, jakou máš.
        Zapiš do něj datum, stavy všech měřidel, počet předaných klíčů, stav vybavení a přilož fotky.
        Bez něj se po roce špatně dokazuje, že škrábanec na dveřích tam nebyl. Detailní návod
        je v článku <OdkazClanek slug="predavaci-protokol">o předávacím protokolu</OdkazClanek>.
      </P>

      <H2 id="kontrola">Kontrolní seznam před podpisem</H2>
      <Seznam>
        <Polozka>Sedí jméno, datum narození a adresa u obou stran?</Polozka>
        <Polozka>Je byt popsaný tak, že ho nelze zaměnit?</Polozka>
        <Polozka>Je nájemné oddělené od záloh na služby?</Polozka>
        <Polozka>Je u záloh napsáno, které služby pokrývají?</Polozka>
        <Polozka>Je jasné, odkdy dokdy nájem trvá?</Polozka>
        <Polozka>Nepřesahuje jistota se smluvní pokutou trojnásobek nájemného?</Polozka>
        <Polozka>Je ve smlouvě odkaz na evidenční list a na drobné opravy?</Polozka>
        <Polozka>Má smlouva přílohu s předávacím protokolem a stavy měřidel?</Polozka>
        <Polozka>Podepsali ji všichni spoluvlastníci a všichni nájemníci?</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš smlouvy u konkrétní nemovitosti i nájemníka — datum podpisu, platnost,
          jistotu i rozpis nájemného a záloh. Na končící smlouvy upozorní nástěnka dopředu, takže
          nájem na dobu určitou nepřejde do automatického prodloužení jen proto, že se na něj
          zapomnělo. Soubor se smlouvou si nahraješ k témuž místu, takže ho nemusíš hledat v e-mailu.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
