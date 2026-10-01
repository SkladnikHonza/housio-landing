import { Perex, H2, H3, P, Seznam, Polozka, Ramecek, Zakon, Upozorneni } from '@/components/clanek/Prvky'

export default function ZvyseniNajmu() {
  return (
    <>
      <Perex>
        Nájemné se nezvyšuje tím, že nájemníkovi napíšeš vyšší částku do dalšího předpisu.
        Záleží na tom, jestli máš ve smlouvě inflační doložku — a když ji nemáš, platí přesný
        postup z občanského zákoníku, který má svoje lhůty i strop.
      </Perex>

      <H2>Nejdřív se podívej do smlouvy</H2>
      <P>
        Všechno ostatní se odvíjí od jediné věci: jestli je ve smlouvě ujednáno, jak se nájemné
        mění. Jsou tři možnosti a každá vede jinam.
      </P>
      <Seznam>
        <Polozka>
          <strong>Inflační doložka</strong> — smlouva říká, že se nájemné každý rok upraví podle
          indexu spotřebitelských cen. Pak se postupuje podle ní a zákonný postup se nepoužije.
        </Polozka>
        <Polozka>
          <strong>Smlouva o zvyšování mlčí</strong> — platí <Zakon>§ 2249 občanského zákoníku</Zakon>,
          tedy návrh, lhůty a strop, které rozebírám níž.
        </Polozka>
        <Polozka>
          <strong>Smlouva zvyšování výslovně vylučuje</strong> — pak nájemné po dobu nájmu nezvýšíš
          jednostranně vůbec a zbývá ti jen dohoda s nájemníkem.
        </Polozka>
      </Seznam>

      <H2>Když máš inflační doložku</H2>
      <P>
        Inflační doložka je nejčistší cesta: nájemník dopředu ví, co ho čeká, a ty nemusíš nic
        vyjednávat. Dobře napsaná doložka vždy pojmenuje tři věci — podle jakého indexu se zvyšuje,
        k jakému datu a jak se nájemníkovi oznámí nová částka.
      </P>
      <P>
        V Česku se nejčastěji odkazuje na index spotřebitelských cen, který zveřejňuje Český
        statistický úřad. Praktické je navázat úpravu na míru inflace za předchozí kalendářní rok
        a novou částku poslat písemně, typicky od ledna nebo od výročí smlouvy.
      </P>
      <Ramecek druh="priklad">
        <p>
          Nájemné 20 000 Kč, inflace za předchozí rok 3,1 %. Nové nájemné je
          20 000 × 1,031 = <strong>20 620 Kč</strong>. Zálohy na služby se tím nemění — ty se řídí
          skutečnou spotřebou a vyúčtováním, ne inflací.
        </p>
      </Ramecek>
      <Ramecek druh="pozor">
        <p>
          Doložka, která říká jen „nájemné se každoročně zvýší o inflaci“, bývá v praxi zdrojem
          sporu: není jasné, o jakou inflaci jde ani od kdy nové nájemné platí. Dopiš do ní
          konkrétní index, rozhodné období a datum účinnosti.
        </p>
      </Ramecek>

      <H2>Když doložku nemáš: postup podle § 2249</H2>
      <P>
        Zákon tě nenechá zvednout nájemné jednostranně, ale dá ti postup, jak se k vyššímu nájemnému
        dopracovat i bez souhlasu nájemníka — jen to trvá a má to pravidla.
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Zjisti srovnatelné nájemné.</strong> Navrhnout můžeš nanejvýš takovou částku, jaká
          je v místě a čase obvyklá u srovnatelných bytů. Hledisko srovnatelnosti popisuje nařízení
          vlády č. 453/2013 Sb. — v praxi stačí doložit tři srovnatelné nabídky ve stejné lokalitě,
          velikosti a stavu.
        </Polozka>
        <Polozka>
          <strong>Pošli písemný návrh.</strong> Musí z něj být zřejmé, o kolik a od kdy nájemné
          zvyšuješ, a měl by obsahovat i to, čím srovnatelnou výši dokládáš.
        </Polozka>
        <Polozka>
          <strong>Počkej dva měsíce.</strong> Tolik má nájemník na to, aby se vyjádřil. Když
          souhlasí, platí nové nájemné od třetího měsíce po doručení návrhu.
        </Polozka>
        <Polozka>
          <strong>Když nesouhlasí nebo mlčí</strong>, můžeš do tří měsíců od uplynutí té lhůty
          navrhnout soudu, aby výši nájemného určil. Soud pak rozhodne a nájemné platí zpětně.
        </Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          <strong>Strop 20 %.</strong> Navržené zvýšení spolu se zvýšeními, ke kterým došlo
          v posledních třech letech, nesmí přesáhnout dvacet procent. Když jsi tedy nájemné zvedal
          loni, letos máš prostor jen do zbytku z těch dvaceti procent.
        </p>
      </Ramecek>
      <Ramecek druh="priklad">
        <p>
          Nájemné 20 000 Kč, před dvěma lety jsi ho zvedl z 18 000 Kč, tedy o 11 %. Do stropu zbývá
          zhruba 9 %, takže letos můžeš navrhnout nanejvýš okolo <strong>21 800 Kč</strong> — a jen
          pokud tolik dávají srovnatelné byty v okolí.
        </p>
      </Ramecek>

      <H2>Co se zálohami na služby</H2>
      <P>
        Zálohy na vodu, teplo nebo elektřinu se zvyšováním nájemného nesouvisí. Ty můžeš měnit
        samostatně, když se změní cena nebo spotřeba — typicky po vyúčtování, které ukáže, že
        dosavadní záloha nestačila. Změnu stačí nájemníkovi písemně oznámit a odůvodnit.
      </P>

      <H3>Praktické pořadí kroků</H3>
      <Seznam cislovany>
        <Polozka>Projdi smlouvu a najdi, jestli má inflační doložku.</Polozka>
        <Polozka>Spočítej novou částku — podle doložky, nebo podle srovnatelných bytů a stropu.</Polozka>
        <Polozka>Pošli písemné oznámení nebo návrh a nech si doklad o doručení.</Polozka>
        <Polozka>Od data účinnosti změň předpis nájemného, ať sedí evidence i vyúčtování.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio drží u každé nemovitosti historii nájemného podle smluv. Když zapíšeš novou smlouvu
          nebo novou výši od konkrétního data, měsíční platby se podle ní přepočítají samy — starší
          měsíce zůstanou na původní částce a nové se počítají z nové. Nemusíš tedy nic přepisovat
          zpětně ani si pamatovat, odkdy platí co.
        </p>
      </Ramecek>

      <Upozorneni aktualizovano="1. 10. 2026" />
    </>
  )
}
