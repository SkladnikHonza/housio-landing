import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'gdpr-pronajimatel',
  nadpis: 'GDPR pro pronajímatele: co smíš o nájemníkovi vědět a jak dlouho',
  perex: 'Pronajímatel je správce osobních údajů, i když má jeden byt. Co smíš sbírat, na jakém základě, jak dlouho to držet a co udělat, když nájemník požádá o výmaz.',
  tema: 'provoz',
  datum: '2026-10-05',
  minut: 8,
  sekce: [
    { id: 'spravce', nadpis: 'Ano, i ty jsi správce osobních údajů' },
    { id: 'zaklad', nadpis: 'Na jakém základě údaje zpracováváš' },
    { id: 'co', nadpis: 'Co smíš sbírat a co už je moc' },
    { id: 'jak-dlouho', nadpis: 'Jak dlouho co uchovávat' },
    { id: 'prava', nadpis: 'Práva nájemníka a co s nimi' },
    { id: 'prakticky', nadpis: 'Co udělat prakticky' },
  ],
  faq: [
    {
      otazka: 'Platí GDPR i pro pronajímatele s jedním bytem?',
      odpoved: 'Ano. Výjimka pro čistě osobní činnost na pronájem nedopadá — je to ekonomická činnost. Rozsah povinností je ale úměrný tomu, kolik údajů zpracováváš; u jednoho bytu jde o pár stránek, ne o systém řízení.',
    },
    {
      otazka: 'Potřebuju od nájemníka souhlas se zpracováním údajů?',
      odpoved: 'Zpravidla ne. Údaje potřebné ke smlouvě zpracováváš na základě plnění smlouvy, daňové doklady kvůli právní povinnosti. Souhlas potřebuješ jen na to, co nad rámec toho — typicky na kopii občanského průkazu nebo marketing.',
    },
    {
      otazka: 'Musím mít zpracovatelskou smlouvu se softwarem, ve kterém vedu nájemníky?',
      odpoved: 'Pokud pro tebe poskytovatel zpracovává osobní údaje, ano. Seriózní poskytovatel ti ji poskytne na vyžádání — u Housia je ke stažení na webu.',
    },
    {
      otazka: 'Co když nájemník požádá o výmaz svých údajů?',
      odpoved: 'Právo na výmaz není absolutní. Dokud trvá smlouva nebo běží lhůty pro daňové doklady a případné nároky, údaje smazat nemusíš — musíš ale odpovědět a vysvětlit proč.',
    },
    {
      otazka: 'Můžu fotit byt s věcmi nájemníka a dát to do inzerátu?',
      odpoved: 'Fotky bytu s osobními věcmi, fotografiemi nebo dokumenty nájemníka do inzerátu nepatří. Domluv se na focení dopředu a foť prázdný nebo uklizený byt bez osobních věcí.',
    },
  ],
  zdroje: ['nařízení (EU) 2016/679 (GDPR)', 'zákon č. 110/2019 Sb., o zpracování osobních údajů'],
}

export default function GdprPronajimatel() {
  return (
    <>
      <Perex>
        Jakmile si zapíšeš jméno, rodné číslo a telefon nájemníka, zpracováváš osobní údaje a jsi
        jejich správcem. Neznamená to papírování na týden — u jednoho bytu jde o pár rozhodnutí,
        která uděláš jednou a pak se jimi držíš.
      </Perex>

      <Shrnuti>
        <li>Pronájem je ekonomická činnost, takže výjimka pro osobní použití neplatí.</li>
        <li>Na údaje do smlouvy souhlas nepotřebuješ — stačí plnění smlouvy a právní povinnost.</li>
        <li>Kopie občanského průkazu bez souhlasu ne, a většinou ji ani nepotřebuješ.</li>
        <li>Údaje neúspěšných zájemců smaž, jakmile je byt pronajatý.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="spravce">Ano, i ty jsi správce osobních údajů</H2>
      <P>
        GDPR nedopadá na činnost čistě osobní povahy — ale pronájem bytu je ekonomická činnost,
        takže se té výjimky nedovoláš. Správcem je ten, kdo určuje účel a prostředky zpracování.
        U nájmu to jsi ty: rozhoduješ, co o nájemníkovi víš a proč.
      </P>
      <P>
        Rozsah povinností je ale úměrný tomu, co zpracováváš. Pronajímatel jednoho bytu nepotřebuje
        pověřence ani záznamy o činnostech zpracování v podobě, jakou vede banka. Potřebuje vědět,
        <strong> co</strong> má, <strong>proč</strong> to má a <strong>jak dlouho</strong> to bude mít.
      </P>

      <H2 id="zaklad">Na jakém základě údaje zpracováváš</H2>
      <Tabulka
        hlavicka={['Co', 'Právní základ', 'Souhlas potřeba?']}
        radky={[
          ['Jméno, datum narození, adresa ve smlouvě', 'plnění smlouvy', 'ne'],
          ['Číslo účtu a historie plateb', 'plnění smlouvy', 'ne'],
          ['Daňové doklady a potvrzení o platbě', 'právní povinnost', 'ne'],
          ['Doložení příjmu před podpisem', 'opatření před uzavřením smlouvy', 'ne'],
          ['Kopie občanského průkazu', 'souhlas (zákon ji jinak zakazuje)', 'ano'],
          ['Zasílání nabídek a novinek', 'souhlas', 'ano'],
        ]}
      />
      <P>
        Protože většinu údajů zpracováváš na základě smlouvy a zákona, <strong>souhlas po
        nájemníkovi vůbec nechtěj</strong>. Vypadalo by to vstřícně, ale ve skutečnosti by sis
        tím zkomplikoval život — souhlas jde kdykoli odvolat, a ty bys pak nemohl vést ani
        smlouvu, kterou máš podepsanou.
      </P>

      <H2 id="co">Co smíš sbírat a co už je moc</H2>
      <H3>Potřebuješ</H3>
      <Seznam>
        <Polozka>Jméno a příjmení, datum narození, adresu trvalého pobytu — do smlouvy.</Polozka>
        <Polozka>Telefon a e-mail — pro komunikaci a doručování.</Polozka>
        <Polozka>Číslo účtu — pro párování plateb a vracení <OdkazHeslo slug="jistota">jistoty</OdkazHeslo>.</Polozka>
        <Polozka>Počet osob v bytě — kvůli zálohám a <OdkazHeslo slug="rozuctovani">rozúčtování</OdkazHeslo>.</Polozka>
      </Seznam>
      <H3>Nepotřebuješ</H3>
      <Seznam>
        <Polozka>Rodné číslo, pokud ho nevyžaduje konkrétní předpis. Do nájemní smlouvy se nehodí.</Polozka>
        <Polozka>Kopii občanky, zdravotní dokumentace nebo výpis z rejstříku trestů.</Polozka>
        <Polozka>Údaje o zdravotním stavu, náboženství nebo politických názorech — to jsou zvláštní kategorie údajů s přísnějším režimem.</Polozka>
        <Polozka>Fotky z bytu s osobními věcmi nájemníka.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Kamera mířící do společných prostor nebo ke dveřím bytu je samostatná kapitola. Pokud
          snímá prostor, kde se pohybují lidé, jde o zpracování osobních údajů se vším všudy —
          včetně informační cedule a posouzení, jestli je to vůbec přiměřené.
        </p>
      </Ramecek>

      <H2 id="jak-dlouho">Jak dlouho co uchovávat</H2>
      <Tabulka
        hlavicka={['Dokument', 'Jak dlouho', 'Proč']}
        radky={[
          ['Nájemní smlouva a dodatky', 'po dobu nájmu a pak po dobu promlčecích lhůt', 'možné nároky z nájmu'],
          ['Vyúčtování a doklady k němu', 'několik let po vypořádání', 'reklamace a spory'],
          ['Daňové doklady', 'podle daňových předpisů, u DPH 10 let', 'právní povinnost'],
          ['Předávací protokol a fotky', 'do vypořádání jistoty, raději déle', 'dokazování škody'],
          ['Podklady neúspěšných zájemců', 'smazat po pronajmutí bytu', 'žádný další důvod je držet'],
        ]}
      />
      <P>
        Poslední řádek je ten, na který se nejčastěji zapomíná. Složka s deseti životopisy a
        potvrzeními o příjmu z loňského inzerátu je zbytečné riziko.
      </P>

      <H2 id="prava">Práva nájemníka a co s nimi</H2>
      <Seznam>
        <Polozka><strong>Přístup k údajům</strong> — na žádost mu řekneš, co o něm vedeš a proč.</Polozka>
        <Polozka><strong>Oprava</strong> nesprávného údaje.</Polozka>
        <Polozka><strong>Výmaz</strong> — ale jen tam, kde pro uchování nemáš jiný důvod. Dokud trvá smlouva nebo běží lhůty pro daňové doklady, mazat nemusíš.</Polozka>
        <Polozka><strong>Námitka</strong> proti zpracování založenému na oprávněném zájmu.</Polozka>
      </Seznam>
      <P>
        Na žádost je potřeba odpovědět, a to bez zbytečného odkladu, nejpozději do měsíce.
        Odpovědí může být i vysvětlení, proč výmaz teď nejde — mlčení ale ne.
      </P>

      <H2 id="prakticky">Co udělat prakticky</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Napiš si jednostránkové poučení</strong> a dej ho jako přílohu smlouvy: kdo je
          správce, jaké údaje, proč, jak dlouho, komu je předáváš a jaká má nájemník práva.
        </Polozka>
        <Polozka>
          <strong>Projdi, co vlastně máš.</strong> E-mail, telefon, šuplík, cloud. Co nemá důvod,
          smaž.
        </Polozka>
        <Polozka>
          <strong>Zjisti, komu údaje předáváš.</strong> Správce domu, účetní, software — s každým,
          kdo pro tebe údaje zpracovává, bys měl mít <OdkazHeslo slug="svj">zpracovatelskou
          smlouvu</OdkazHeslo>.
        </Polozka>
        <Polozka>
          <strong>Nepoužívej na smlouvy veřejné úložiště bez hesla</strong> a neposílej skeny
          dokladů přes neověřené kanály.
        </Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio má zpracovatelskou smlouvu ke stažení a na stránce o bezpečnosti vyjmenované
          všechny zpracovatele i to, co kde běží. Když nájemník požádá o přehled svých údajů,
          vytáhneš ho exportem nemovitosti; když má být účet smazán, jde to i bez přihlášení
          přes veřejnou žádost.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
