import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'provereni-najemnika',
  nadpis: 'Jak prověřit nájemníka před podpisem — a co si přitom nesmíš dovolit',
  perex: 'Co si můžeš ověřit zdarma, co smíš chtít doložit, proč nesmíš kopírovat občanku bez souhlasu a jak vypadá slušné prověření, které neodradí ty dobré.',
  tema: 'smlouva',
  datum: '2026-10-05',
  minut: 9,
  sekce: [
    { id: 'proc', nadpis: 'Proč to dělat, i když se ti člověk zdá v pořádku' },
    { id: 'zdarma', nadpis: 'Co si ověříš zdarma za deset minut' },
    { id: 'doklady', nadpis: 'Co smíš chtít doložit' },
    { id: 'obcanka', nadpis: 'Občanka: dívat se ano, kopírovat bez souhlasu ne' },
    { id: 'gdpr', nadpis: 'Co s údaji těch, koho nevybereš' },
    { id: 'signaly', nadpis: 'Varovné signály z prohlídky' },
    { id: 'postup', nadpis: 'Postup, který neodradí slušné zájemce' },
  ],
  faq: [
    {
      otazka: 'Můžu po zájemci chtít potvrzení o příjmu?',
      odpoved: 'Ano, doložení příjmu je legitimní požadavek — potřebuješ vědět, jestli na nájem dosáhne. Nemůžeš ho ale vynucovat u člověka, se kterým už smlouvu máš, a nesmíš si potvrzení nechávat déle, než je potřeba.',
    },
    {
      otazka: 'Smím si okopírovat občanský průkaz?',
      odpoved: 'Jen s prokazatelným souhlasem držitele. Zákon o občanských průkazech kopírování bez souhlasu zakazuje. Výjimku mají například realitní zprostředkovatelé podle předpisů proti praní peněz — běžný pronajímatel ji nemá.',
    },
    {
      otazka: 'Kde zjistím, jestli zájemce není v exekuci?',
      odpoved: 'Insolvenční rejstřík je veřejný a zdarma. Centrální evidence exekucí je placená a dotaz na konkrétní osobu stojí jednotky korun. Obojí ti ale ukáže jen to, co už je v systému.',
    },
    {
      otazka: 'Můžu odmítnout zájemce bez udání důvodu?',
      odpoved: 'Vybrat si nájemce můžeš. Nesmíš ale odmítnout někoho kvůli důvodu, který zakazuje antidiskriminační zákon — tedy kvůli rase, etnickému původu, pohlaví, věku, zdravotnímu postižení, náboženství nebo sexuální orientaci.',
    },
    {
      otazka: 'Vyplatí se vyžadovat ručitele?',
      odpoved: 'U mladých zájemců bez historie příjmů to bývá rozumnější než vyšší jistota, kterou zákon stejně stropuje na trojnásobek nájemného. Ručitelské prohlášení musí být písemné a ručitel musí vědět, k čemu se zavazuje.',
    },
  ],
  zdroje: ['zákon č. 328/1999 Sb., o občanských průkazech', 'nařízení GDPR', 'zákon č. 198/2009 Sb., antidiskriminační zákon'],
}

export default function ProvereniNajemnika() {
  return (
    <>
      <Perex>
        Nejlevnější způsob, jak se vyhnout <OdkazClanek slug="neplatici-najemnik">neplatícímu
        nájemníkovi</OdkazClanek>, je nepodepsat s ním smlouvu. Prověření přitom není detektivní
        práce — většinu si ověříš zdarma za deset minut. Jen je potřeba vědět, kde je hranice,
        za kterou už se z opatrného pronajímatele stává ten, kdo porušuje právo.
      </Perex>

      <Shrnuti>
        <li>Insolvenční rejstřík je veřejný a zdarma, evidence exekucí stojí pár korun.</li>
        <li>Doložení příjmu chtít smíš, kopírovat občanku bez souhlasu ne.</li>
        <li>Údaje neúspěšných zájemců smaž, jakmile je byt pronajatý.</li>
        <li>Vybrat si můžeš, diskriminovat ne.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="proc">Proč to dělat, i když se ti člověk zdá v pořádku</H2>
      <P>
        Od první nezaplacené platby po vyklizení uplyne klidně rok. Po celou dobu platíš fond oprav,
        energie a hypotéku, zatímco v bytě bydlí někdo, kdo ti neposílá nic. Deset minut nad
        rejstříky je proti tomu levná pojistka.
      </P>
      <P>
        Druhá věc je, že prověření chrání i toho druhého. Když zájemce dopředu ví, že nájem
        s energiemi utáhne jen tak tak, ušetří si stěhování a ty výpadek.
      </P>

      <H2 id="zdarma">Co si ověříš zdarma za deset minut</H2>
      <Tabulka
        hlavicka={['Kde', 'Co se dozvíš', 'Kolik to stojí']}
        radky={[
          ['Insolvenční rejstřík (justice.cz)', 'Probíhající nebo skončené insolvenční řízení', 'zdarma'],
          ['Centrální evidence exekucí', 'Vedené exekuce na danou osobu', 'jednotky korun za dotaz'],
          ['Katastr nemovitostí', 'Jestli zájemce vlastní nemovitost, kterou uvádí', 'zdarma (nahlížení)'],
          ['Obchodní rejstřík', 'U podnikatele firmu, funkce a účetní závěrky', 'zdarma'],
          ['Vyhledávač', 'Veřejně dostupné informace, které sám o sobě zveřejnil', 'zdarma'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Čistý rejstřík neznamená, že je všechno v pořádku — ukáže jen to, co už se stihlo dostat
          do systému. Dluh u pronajímatele z loňska v žádné evidenci není.
        </p>
      </Ramecek>

      <H2 id="doklady">Co smíš chtít doložit</H2>
      <Seznam>
        <Polozka><strong>Potvrzení o příjmu</strong> od zaměstnavatele nebo daňové přiznání u podnikatele. Legitimní požadavek — potřebuješ vědět, jestli na nájem dosáhne.</Polozka>
        <Polozka><strong>Výpis z účtu</strong> s příchozí mzdou. Zájemce z něj může začernit vše ostatní; tebe zajímá jen pravidelný příjem.</Polozka>
        <Polozka><strong>Referenci od předchozího pronajímatele</strong> — kontakt a souhlas s tím, že se zeptáš.</Polozka>
        <Polozka><strong>Ručitele</strong> u zájemců bez historie příjmů, typicky studentů.</Polozka>
      </Seznam>
      <P>
        Praktické pravidlo pro poměr příjmu a nájmu: celkové měsíční náklady na bydlení včetně
        <OdkazHeslo slug="zalohy-na-sluzby"> záloh na služby</OdkazHeslo> by neměly přesáhnout
        zhruba třetinu až čtyřicet procent čistého příjmu domácnosti. Není to zákonné pravidlo,
        jen zkušenost — nad tou hranicí stačí jedna nečekaná výdajová vlna a nájem jde stranou.
      </P>

      <H2 id="obcanka">Občanka: dívat se ano, kopírovat bez souhlasu ne</H2>
      <P>
        Do smlouvy potřebuješ jméno, datum narození a adresu. Tyhle údaje si můžeš z dokladu opsat
        a totožnost si ověřit pohledem. <strong>Pořídit kopii nebo fotografii občanského průkazu
        ale smíš jen s prokazatelným souhlasem držitele</strong> — zákon o občanských průkazech
        to jinak zakazuje.
      </P>
      <P>
        Výjimku mají subjekty, na které dopadají předpisy proti praní peněz, tedy například realitní
        zprostředkovatelé. Pronajímatel, který pronajímá vlastní byt, mezi ně nepatří.
      </P>
      <Ramecek druh="pozor">
        <p>
          Souhlas „zaškrtnutím v e-mailu“ není prokazatelný souhlas. A i kdybys ho měl, pořád
          platí, že kopii smíš uchovávat jen tak dlouho, dokud ji k něčemu potřebuješ — což po
          podpisu smlouvy zpravidla neplatí.
        </p>
      </Ramecek>

      <H2 id="gdpr">Co s údaji těch, koho nevybereš</H2>
      <P>
        Jakmile sbíráš jména, telefony, příjmy a reference, zpracováváš osobní údaje a jsi jejich
        správcem. U vybraného nájemce máš právní základ ve smlouvě. U neúspěšných zájemců ale
        žádný důvod držet jejich papíry dál nemáš.
      </P>
      <Seznam>
        <Polozka>Po pronajmutí bytu <strong>smaž</strong> životopisy, potvrzení o příjmu a fotky dokladů neúspěšných zájemců.</Polozka>
        <Polozka>Nech si nanejvýš jméno a kontakt, a to jen pokud ti zájemce řekl, že ho můžeš oslovit příště.</Polozka>
        <Polozka>Nesdílej údaje zájemců s nikým dalším — ani v realitní skupině na sociální síti.</Polozka>
      </Seznam>
      <P>
        Podrobněji to rozebírám v článku <OdkazClanek slug="gdpr-pronajimatel">GDPR pro pronajímatele</OdkazClanek>.
      </P>

      <H2 id="signaly">Varovné signály z prohlídky</H2>
      <Seznam>
        <Polozka><strong>Spěch.</strong> „Potřebuju se nastěhovat zítra a platím hotově na půl roku dopředu“ je klasika, která končí špatně.</Polozka>
        <Polozka><strong>Odmítnutí jakéhokoli dokladu</strong> bez vysvětlení. Doložit příjem není urážka.</Polozka>
        <Polozka><strong>Nesrovnalosti v příběhu</strong> — jiné zaměstnání v e-mailu a jiné na prohlídce.</Polozka>
        <Polozka><strong>Vyhýbavá odpověď na to, kolik lidí bude v bytě bydlet.</strong> Počet osob ovlivňuje zálohy i opotřebení.</Polozka>
        <Polozka><strong>Tlak na smlouvu bez předávacího protokolu</strong> nebo na „papír až potom“.</Polozka>
      </Seznam>
      <P>
        Žádný z nich sám o sobě neznamená problém. Dva a víc dohromady už stojí za zpozornění.
      </P>

      <H2 id="postup">Postup, který neodradí slušné zájemce</H2>
      <Seznam cislovany>
        <Polozka><strong>V inzerátu napiš, co budeš chtít.</strong> Kdo s tím má problém, nepřijde — a ušetří čas oběma.</Polozka>
        <Polozka><strong>Na prohlídce se ptej na praktické věci</strong>: kdo bude v bytě bydlet, odkdy, na jak dlouho, kde pracuje.</Polozka>
        <Polozka><strong>Po prohlídce prověř rejstříky</strong> u zájemce, se kterým chceš pokračovat. Ne u všech — nemáš k tomu důvod.</Polozka>
        <Polozka><strong>Vyžádej doklady až ve chvíli, kdy jsi rozhodnutý.</strong> Nesbírej dokumenty od deseti lidí.</Polozka>
        <Polozka><strong>Udělej <OdkazClanek slug="predavaci-protokol">předávací protokol</OdkazClanek></strong> a smlouvu podle <OdkazClanek slug="najemni-smlouva">kontrolního seznamu</OdkazClanek>.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Vybrat si nájemce můžeš svobodně. Nesmíš ale odmítnout někoho kvůli rase, etnickému
          původu, pohlaví, věku, zdravotnímu postižení, náboženství nebo sexuální orientaci —
          to zakazuje antidiskriminační zákon.
        </p>
      </Ramecek>

      <Ramecek druh="housio">
        <p>
          Jakmile nájemník podepíše, máš v Housiu na jednom místě jeho kontakt, smlouvu, jistotu
          i předpis plateb — a od prvního měsíce vidíš, jestli platí včas. Právě ta pravidelná
          kontrola, ne prověření před podpisem, odhalí problém nejdřív.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
