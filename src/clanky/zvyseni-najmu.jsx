import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'zvyseni-najmu',
  nadpis: 'Jak zvýšit nájemné v roce 2026: inflační doložka i postup podle zákona',
  perex: 'Kdy stačí oznámení, kdy potřebuješ souhlas nájemníka, proč existuje strop dvaceti procent za tři roky a jak dlouho celé zvýšení trvá. Včetně vzoru návrhu a pěti chyb, které zvýšení shodí.',
  tema: 'najemne',
  datum: '2026-10-01',
  minut: 9,
  sekce: [
    { id: 'kdy', nadpis: 'Kdy můžu nájemné vůbec zvýšit' },
    { id: 'dolozka', nadpis: 'Inflační doložka: jak ji napsat a jak podle ní počítat' },
    { id: 'postup', nadpis: 'Postup podle § 2249 krok za krokem' },
    { id: 'strop', nadpis: 'Strop 20 % za tři roky a pravidlo jednou za rok' },
    { id: 'soud', nadpis: 'Když nájemník nesouhlasí nebo mlčí' },
    { id: 'zalohy', nadpis: 'Zálohy na služby se mění úplně jinak' },
    { id: 'chyby', nadpis: 'Pět chyb, kvůli kterým zvýšení neplatí' },
  ],
  faq: [
    {
      otazka: 'Můžu zvýšit nájemné u smlouvy na dobu určitou?',
      odpoved: 'Ano. Postup podle § 2249 i inflační doložka fungují stejně u nájmu na dobu určitou i neurčitou. Rozdíl je jen v tom, že u krátké smlouvy na rok se většinou vyplatí počkat a novou výši sjednat rovnou v další smlouvě.',
    },
    {
      otazka: 'Musí nájemník se zvýšením souhlasit?',
      odpoved: 'Jednostranně mu nájemné zvednout nemůžeš. Když ale na písemný návrh do dvou měsíců neodpoví souhlasem, máš další tři měsíce na to, abys navrhl soudu, aby výši nájemného určil sám. Soud pak nájemné stanoví do výše obvyklé v místě.',
    },
    {
      otazka: 'Jak často můžu nájemné zvyšovat?',
      odpoved: 'K návrhu podanému dřív než rok od posledního zvýšení se nepřihlíží. Prakticky tedy jednou za dvanáct měsíců — a vždy jen do stropu dvaceti procent za poslední tři roky dohromady.',
    },
    {
      otazka: 'Co když nájemník na návrh vůbec nereaguje?',
      odpoved: 'Mlčení se bere jako nesouhlas, ne jako souhlas. Po uplynutí dvou měsíců ti běží tříměsíční lhůta na podání návrhu k soudu. Když ji necháš uplynout, musíš začít znovu novým návrhem.',
    },
    {
      otazka: 'Platí strop 20 % i při inflační doložce?',
      odpoved: 'Ne. Strop se váže na zákonný postup. Pokud máte ve smlouvě ujednáno, jak se nájemné mění, postupuje se podle smlouvy a § 2249 se nepoužije. Proto je dobře napsaná doložka pro pronajímatele výhodnější.',
    },
  ],
  zdroje: ['§ 2249 a § 2250 občanského zákoníku', 'nařízení vlády č. 453/2013 Sb.'],
}

export default function ZvyseniNajmu() {
  return (
    <>
      <Perex>
        Nájemné se nezvyšuje tím, že nájemníkovi napíšeš vyšší částku do dalšího předpisu. Záleží
        na jediné věci — jestli máš ve smlouvě inflační doložku. Když ji nemáš, platí přesný postup
        z občanského zákoníku, který má svoje lhůty, strop i následky, když ho porušíš.
      </Perex>

      <Shrnuti>
        <li>Inflační doložka ve smlouvě vyhrává nad zákonem a nemá strop dvaceti procent.</li>
        <li>Bez doložky potřebuješ písemný návrh, dva měsíce na vyjádření a trpělivost — nové nájemné platí nejdřív od třetího měsíce.</li>
        <li>Zvýšení spolu se zvýšeními za poslední tři roky nesmí přesáhnout 20 %.</li>
        <li>Nový návrh můžeš podat nejdřív rok po tom předchozím.</li>
        <li>Zálohy na služby s nájemným nesouvisí a mění se samostatně.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="kdy">Kdy můžu nájemné vůbec zvýšit</H2>
      <P>
        Všechno se odvíjí od toho, co máš ve smlouvě. Jsou tři možnosti a každá vede jinam.
      </P>
      <Tabulka
        hlavicka={['Co je ve smlouvě', 'Co platí', 'Jak dlouho to trvá']}
        radky={[
          ['Inflační doložka', 'Postupuje se podle ní, zákonný postup se nepoužije', 'Oznámení a hotovo'],
          ['O zvyšování nic', 'Platí § 2249 — návrh, lhůty, strop 20 %', 'Nejméně 3 měsíce'],
          ['Zvyšování je vyloučeno', 'Jednostranně nezvýšíš, jen dohodou', 'Podle dohody'],
        ]}
      />
      <P>
        Pozor na jednu věc, kterou spousta pronajímatelů přehlédne: ujednání o zvyšování nemusí
        být nadepsané „inflační doložka“. Stačí jakákoli věta o tom, jak se nájemné v čase mění —
        a už se postupuje podle ní.
      </P>

      <H2 id="dolozka">Inflační doložka: jak ji napsat a jak podle ní počítat</H2>
      <P>
        Inflační doložka je nejčistší cesta. Nájemník dopředu ví, co ho čeká, ty nemusíš nic
        vyjednávat a neplatí pro tebe strop dvaceti procent. Dobře napsaná doložka vždy pojmenuje
        čtyři věci.
      </P>
      <Seznam>
        <Polozka><strong>Podle čeho</strong> se zvyšuje — nejčastěji podle indexu spotřebitelských cen, který zveřejňuje Český statistický úřad.</Polozka>
        <Polozka><strong>Za jaké období</strong> se index bere — typicky míra inflace za předchozí kalendářní rok.</Polozka>
        <Polozka><strong>Od kdy</strong> nová částka platí — od ledna, nebo od výročí smlouvy.</Polozka>
        <Polozka><strong>Jak se to nájemníkovi oznámí</strong> — písemně, s uvedením výpočtu.</Polozka>
      </Seznam>
      <Ramecek druh="vzor">
        <p>
          „Nájemné se každoročně k 1. lednu zvyšuje o míru inflace vyjádřenou přírůstkem průměrného
          indexu spotřebitelských cen za předchozí kalendářní rok, vyhlášenou Českým statistickým
          úřadem. Pronajímatel novou výši nájemného sdělí nájemci písemně nejpozději do 31. ledna
          včetně výpočtu. Nedojde-li ke sdělení, zůstává nájemné beze změny.“
        </p>
      </Ramecek>
      <Ramecek druh="priklad">
        <p>
          Nájemné 20 000 Kč, inflace za předchozí rok 3,1 % (číslo je jen ilustrativní, skutečné
          vyhlašuje ČSÚ). Nové nájemné je 20 000 × 1,031 = <strong>20 620 Kč</strong>.
        </p>
        <p>
          Zálohy na služby se tím nemění — ty se řídí skutečnou spotřebou, ne inflací.
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Doložka, která říká jen „nájemné se každoročně zvýší o inflaci“, bývá v praxi zdrojem
          sporu: není jasné, o jakou inflaci jde, za jaké období ani od kdy nové nájemné platí.
          Když jde o spor, vykládá se nejasné ujednání spíš ve prospěch nájemníka jako slabší strany.
        </p>
      </Ramecek>

      <H2 id="postup">Postup podle § 2249 krok za krokem</H2>
      <P>
        Nemáš doložku? Zákon ti nedovolí zvednout nájemné jednostranně, ale dá ti cestu, jak se
        k vyššímu nájemnému dopracovat i bez souhlasu nájemníka. Jen to trvá a má to pravidla.
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Zjisti srovnatelné nájemné.</strong> Navrhnout můžeš nanejvýš takovou částku, jaká
          je v místě a čase obvyklá u srovnatelných bytů. Hledisko srovnatelnosti popisuje nařízení
          vlády č. 453/2013 Sb. — v praxi stačí vytisknout tři aktuální nabídky ve stejné lokalitě,
          velikosti a stavu a přiložit je k návrhu.
        </Polozka>
        <Polozka>
          <strong>Napiš písemný návrh.</strong> Musí z něj být zřejmá <em>konkrétní výše</em> nového
          nájemného a musí doložit splnění podmínek. K návrhu, který výši neobsahuje nebo podmínky
          nedokládá, se nepřihlíží — nespustí tedy vůbec žádnou lhůtu.
        </Polozka>
        <Polozka>
          <strong>Doruč ho prokazatelně.</strong> Doporučeně, datovou schránkou nebo proti podpisu.
          Od doručení běží všechny lhůty, takže potřebuješ vědět, kdy přesně došel.
        </Polozka>
        <Polozka>
          <strong>Počkej dva měsíce.</strong> Tolik má nájemník na písemné vyjádření. Souhlasí-li,
          platí nové nájemné počínaje třetím kalendářním měsícem po dojití návrhu.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Návrh dojde nájemníkovi 10. února. Lhůta pro vyjádření běží do 10. dubna.
          Když souhlasí, nové nájemné platí <strong>od 1. května</strong> — tedy od třetího
          kalendářního měsíce po dojití návrhu. Od návrhu k první vyšší platbě uplyne skoro čtvrt roku.
        </p>
      </Ramecek>

      <H2 id="strop">Strop 20 % za tři roky a pravidlo jednou za rok</H2>
      <P>
        Dvě omezení, která se nejčastěji přehlížejí:
      </P>
      <Seznam>
        <Polozka>
          <strong>Navržené zvýšení spolu se zvýšeními za poslední tři roky nesmí přesáhnout 20 %.</strong>
          Smyslem je zabránit tomu, aby se nájemník nalákal na nízké nájemné a pak mu skokově vyrostlo.
        </Polozka>
        <Polozka>
          <strong>K návrhu podanému dřív než rok od posledního zvýšení se nepřihlíží.</strong>
          Zvyšovat tedy můžeš nanejvýš jednou za dvanáct měsíců.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Nájemné je 20 000 Kč. Před dvěma lety jsi ho zvedl z 18 000 Kč, tedy o 11,1 %.
          Do stropu zbývá zhruba 8,9 %, takže letos můžeš navrhnout nanejvýš okolo
          <strong> 21 780 Kč</strong> — a jen tehdy, pokud tolik dávají srovnatelné byty v okolí.
        </p>
        <p>
          Za rok se do tříletého okna to staré zvýšení přestane počítat a prostor se zase otevře.
        </p>
      </Ramecek>

      <H2 id="soud">Když nájemník nesouhlasí nebo mlčí</H2>
      <P>
        Mlčení není souhlas. Pokud ti nájemník do dvou měsíců písemně nesdělí, že souhlasí, máš
        <strong> další tři měsíce</strong> na to, abys navrhl soudu, aby výši nájemného určil.
        Soud ho stanoví do výše obvyklé v místě a jeho rozhodnutí působí zpětně.
      </P>
      <P>
        Tříměsíční lhůta je propadná. Když ji necháš uplynout, celý postup začíná znovu od nového
        návrhu — a mezitím běží i to roční pravidlo.
      </P>
      <Ramecek druh="pozor">
        <p>
          Nájemné nikdy nezvyšuj tím, že prostě pošleš vyšší předpis. Nájemník ti bude dál platit
          původní částku po právu a rozdíl po něm nevymůžeš. Horší je, že z toho vznikne dojem
          dluhu, podle kterého bys mohl neplatně vypovědět nájem.
        </p>
      </Ramecek>

      <H2 id="zalohy">Zálohy na služby se mění úplně jinak</H2>
      <P>
        Zálohy na vodu, teplo nebo elektřinu se zvyšováním nájemného nesouvisí. Ty můžeš měnit
        samostatně, když se změní cena služby, spotřeba nebo počet osob v bytě — typicky po
        vyúčtování, které ukáže, že dosavadní záloha nestačila. Změnu stačí písemně oznámit
        a odůvodnit, nejčastěji právě odkazem na poslední vyúčtování.
      </P>
      <P>
        Podrobně to rozebírám v článku <OdkazClanek slug="vyuctovani-sluzeb">Vyúčtování služeb</OdkazClanek>,
        kam patří i lhůty a pokuta za prodlení. Praktické je zapsat novou výši záloh
        do <OdkazClanek slug="evidencni-list">evidenčního listu</OdkazClanek>, který se dá měnit
        bez dodatku ke smlouvě.
      </P>

      <H2 id="chyby">Pět chyb, kvůli kterým zvýšení neplatí</H2>
      <Seznam cislovany>
        <Polozka><strong>Návrh bez konkrétní částky.</strong> „Zvyšuji o inflaci“ nestačí, musí tam být číslo.</Polozka>
        <Polozka><strong>Nedoložené srovnatelné nájemné.</strong> Bez podkladů se k návrhu nepřihlíží.</Polozka>
        <Polozka><strong>Zvýšení nad strop.</strong> Dvacet procent se počítá za tři roky zpětně, ne za jeden.</Polozka>
        <Polozka><strong>Dva návrhy krátce po sobě.</strong> Dřív než rok po předchozím zvýšení se k návrhu nepřihlíží.</Polozka>
        <Polozka><strong>Nedoložené doručení.</strong> E-mail bez potvrzení u soudu neobstojí a lhůty ti neběží.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio drží u každé nemovitosti historii nájemného podle smluv. Když zapíšeš novou výši
          od konkrétního data, měsíční platby se podle ní přepočítají samy — starší měsíce zůstanou
          na původní částce a nové se počítají z nové. Nemusíš nic přepisovat zpětně ani si
          pamatovat, odkdy platí co. Z téhož místa pak vytáhneš i podklad pro vyúčtování
          nebo pro účetní.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
