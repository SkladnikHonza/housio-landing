import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'souhlas-s-podnajmem',
  nadpis: 'Souhlas s podnájmem: když mlčíš měsíc, souhlasil jsi',
  perex: 'Nájemník požádal písemně o souhlas s podnájmem a ty jsi to odložil na později. Po měsíci platí souhlas, i když jsi nic nepodepsal. Jak lhůta funguje, kdy neběží a co napsat, když souhlas dát chceš — ale s podmínkami.',
  tema: 'smlouva',
  datum: '2026-10-07',
  minut: 7,
  sekce: [
    { id: 'lhuta', nadpis: 'Měsíc mlčení znamená souhlas' },
    { id: 'kdy-nebezi', nadpis: 'Kdy lhůta neběží' },
    { id: 'odmitnout', nadpis: 'Jak souhlas odmítnout' },
    { id: 'podminky', nadpis: 'Souhlas s podmínkami' },
    { id: 'co-dal', nadpis: 'Co si u podnájmu pohlídat' },
  ],
  faq: [
    {
      otazka: 'Opravdu platí souhlas, když na žádost neodpovím?',
      odpoved: 'Ano. Podle § 2275 odst. 2 občanského zákoníku se souhlas považuje za daný, pokud se pronajímatel k písemné žádosti nevyjádří ve lhůtě jednoho měsíce. Výjimkou je případ, kdy byl v nájemní smlouvě ujednán zákaz podnájmu.',
    },
    {
      otazka: 'Musí být žádost o souhlas písemná?',
      odpoved: 'Ano, zákon vyžaduje písemnou formu pro žádost i pro souhlas. Ústní žádost tedy měsíční lhůtu nespouští — ale spoléhat na to je riskantní, protože e-mail bývá za písemnou formu považován.',
    },
    {
      otazka: 'Můžu podnájem ve smlouvě zakázat úplně?',
      odpoved: 'Zákaz podnájmu lze ujednat a má ten účinek, že vyřadí pravidlo o mlčky daném souhlasu. Nevztahuje se ale na podnájem části bytu, ve kterém nájemce sám trvale bydlí — to právo mu dává zákon přímo.',
    },
    {
      otazka: 'Od kdy se měsíc počítá?',
      odpoved: 'Od doručení žádosti, ne od jejího odeslání. Když ti nájemce pošle žádost e-mailem, běží lhůta od chvíle, kdy se dostala do tvé sféry — tedy prakticky od doručení do schránky, ne od přečtení.',
    },
    {
      otazka: 'Co když souhlas dám a podnájemník byt zničí?',
      odpoved: 'Odpovídá ti nájemce, ne podnájemník. S podnájemníkem nemáš smluvní vztah, takže škodu řešíš s nájemcem a můžeš ji uplatnit z jistoty. To platí bez ohledu na to, jestli jsi souhlas dal, nebo ne.',
    },
  ],
  zdroje: ['§ 2274 až § 2278 občanského zákoníku'],
}

export default function SouhlasSPodnajmem() {
  return (
    <>
      <Perex>
        Většina pronajímatelů neví, že na žádost o podnájem musí odpovědět. Zákon za ně odpovídá
        sám — a odpovídá kladně.
      </Perex>

      <Shrnuti>
        <li>Žádost i souhlas musí být písemné.</li>
        <li>Neodpovíš-li do měsíce, souhlas se považuje za daný.</li>
        <li>Sjednaný zákaz podnájmu tohle pravidlo vyřadí.</li>
        <li>Na podnájem části bytu, kde nájemce bydlí, se souhlas nevztahuje vůbec.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="lhuta">Měsíc mlčení znamená souhlas</H2>
      <P>
        <Zakon>§ 2275</Zakon> odst. 2 je krátký a má pro pronajímatele nepříjemné vyústění:
        žádost o udělení souhlasu i souhlas samotný vyžadují písemnou formu, a nevyjádří-li
        se pronajímatel k žádosti ve lhůtě jednoho měsíce, <strong>považuje se souhlas za daný</strong>.
      </P>
      <P>
        Není to tedy tak, že bys měl právo mlčet. Mlčení je v tomhle případě souhlas.
      </P>
      <Ramecek druh="priklad">
        <p>
          3. března ti přijde e-mail: „Odstěhoval jsem se za prací do Brna, byt bych rád do konce
          nájmu podnajal kolegovi. Žádám o souhlas.“ Neodpovíš, protože to chceš promyslet,
          a pak na to zapomeneš.<br />
          4. dubna je souhlas daný. Nájemce může byt podnajmout a ty s tím nic neuděláš —
          vytýkat mu podnájem bez souhlasu už nemůžeš.
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Lhůta běží od <strong>doručení</strong> žádosti, ne od tvého přečtení. E-mail doručený
          do schránky, do které se díváš jednou za čtrnáct dní, lhůtu spustí stejně.
        </p>
      </Ramecek>

      <H2 id="kdy-nebezi">Kdy lhůta neběží</H2>
      <Tabulka
        hlavicka={['Situace', 'Běží měsíční lhůta?']}
        radky={[
          ['Žádost o podnájem celého bytu, bez zákazu ve smlouvě', 'ano — mlčení = souhlas'],
          ['Ve smlouvě je ujednán zákaz podnájmu', 'ne — mlčení souhlas nezakládá'],
          ['Podnájem části bytu, nájemce tam bydlí', 'souhlas se nevyžaduje vůbec'],
          ['Ústní žádost', 'zákon vyžaduje písemnou formu'],
        ]}
      />
      <P>
        Druhý řádek je ten, kvůli kterému se vyplatí mít zákaz podnájmu ve smlouvě — i když víš,
        že souhlas nejspíš dáš. Nejde o to podnájem znemožnit, jde o to, aby o něm rozhodovalo
        tvoje vyjádření, ne kalendář.
      </P>
      <P>
        Třetí řádek připomíná, co zákaz nikdy nepokryje: podnájem části bytu, ve kterém nájemce
        sám trvale bydlí, mu umožňuje přímo <Zakon>§ 2274</Zakon>. Rozdíly mezi oběma situacemi
        rozebírá <OdkazClanek slug="podnajem">článek o podnájmu</OdkazClanek>.
      </P>

      <H2 id="odmitnout">Jak souhlas odmítnout</H2>
      <P>
        Zákon ti neukládá odmítnutí zdůvodnit. Stačí se ve lhůtě vyjádřit, a to písemně.
        Z praktického hlediska se ale zdůvodnění vyplatí — snižuje pravděpodobnost, že to
        nájemce udělá stejně.
      </P>
      <Ramecek druh="vzor">
        <p>
          „K Vaší žádosti ze dne 3. 3. 2026 o souhlas s přenecháním bytu do podnájmu sděluji,
          že souhlas neuděluji. Nájemní smlouva byla uzavřena s ohledem na Vaši osobu
          a s přenecháním bytu třetí osobě nepočítá. Upozorňuji, že přenechání bytu do podnájmu
          bez souhlasu pronajímatele je podle § 2276 občanského zákoníku hrubým porušením
          povinnosti nájemce.“
        </p>
      </Ramecek>
      <P>
        Odešli to tak, abys uměl doložit doručení. U e-mailu si ulož odeslanou zprávu, u dopisu
        posílej doporučeně.
      </P>

      <H2 id="podminky">Souhlas s podmínkami</H2>
      <P>
        Mezi „ano“ a „ne“ je třetí možnost, kterou lidé nevyužívají: souhlas s konkrétní osobou
        a za konkrétních podmínek. Je to zpravidla rozumnější než odmítnout — nájemce, který se
        odstěhoval, byt nějak užívat bude tak jako tak.
      </P>
      <Ramecek druh="vzor">
        <p>
          „Uděluji souhlas s přenecháním bytu do podnájmu panu Janu Novákovi, nar. …, a to na dobu
          do skončení nájmu. Souhlas se vztahuje výlučně na uvedenou osobu; podnájem jiné osobě
          vyžaduje nový souhlas. Nájemce zůstává pronajímateli odpovědný za plnění všech povinností
          z nájemní smlouvy, včetně placení nájemného a náhrady škody. Nájemce doloží
          pronajímateli kopii podnájemní smlouvy do 14 dnů od jejího uzavření.“
        </p>
      </Ramecek>
      <Seznam>
        <Polozka>
          <strong>Konkrétní osoba.</strong> Obecný souhlas „s podnájmem“ ti vezme kontrolu nad
          tím, kdo se v bytě bude střídat.
        </Polozka>
        <Polozka>
          <strong>Omezení na dobu nájmu.</strong> Podnájem stejně
          podle <Zakon>§ 2277</Zakon> končí s nájmem, ale napsané je to jasnější — zvlášť pro
          podnájemníka, který smlouvu uvidí.
        </Polozka>
        <Polozka>
          <strong>Doložení podnájemní smlouvy.</strong> Budeš vědět, za kolik se v tvém bytě
          bydlí a kdo tam je.
        </Polozka>
      </Seznam>

      <H2 id="co-dal">Co si u podnájmu pohlídat</H2>
      <Seznam>
        <Polozka>
          <strong>Zálohy na služby.</strong> Změní-li se počet osob, přestanou sedět. Vodu a odpad
          <OdkazHeslo slug="rozuctovani"> rozúčtováváš</OdkazHeslo> podle osob a nedoplatek
          se vymáhá hůř než vyšší záloha.
        </Polozka>
        <Polozka>
          <strong>Jistota pokrývá dluh nájemce.</strong> Podnájemník ti po právu nedluží nic —
          dluží nájemci. Z <OdkazClanek slug="jistota-kauce">jistoty</OdkazClanek> si tedy
          strháváš to, co dluží nájemce, včetně škody způsobené podnájemníkem.
        </Polozka>
        <Polozka>
          <strong>Nejednej s podnájemníkem jako s nájemcem.</strong> Nepřijímej od něj platby
          přímo a nedomlouvej s ním podmínky užívání. Mohl by z toho vzniknout dojem, že mezi
          vámi vznikl nájemní vztah.
        </Polozka>
        <Polozka>
          <strong>Krátkodobé ubytování není podnájem.</strong> Je to ubytovací služba s jinými
          povinnostmi a v nájemní smlouvě se vylučuje zvlášť —
          viz <OdkazClanek slug="kratkodoby-pronajem">článek o krátkodobém pronájmu</OdkazClanek>.
        </Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Souhlas s podnájmem i podnájemní smlouvu si ulož k nájemní smlouvě v Housiu. Za dva roky,
          až se bude řešit, kdo v bytě vlastně bydlel a od kdy, to bude jediné místo, kde to najdeš.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
