import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'vypoved-z-najmu',
  nadpis: 'Výpověď z nájmu bytu: důvody, lhůty a co v ní nesmí chybět',
  perex: 'Kdy stačí tříměsíční výpovědní doba, kdy jde nájem ukončit okamžitě a proč je většina výpovědí neplatná kvůli jedné chybějící větě. S postupem i vzorem.',
  tema: 'problemy',
  datum: '2026-10-01',
  minut: 10,
  sekce: [
    { id: 'kdo', nadpis: 'Kdo může vypovědět a za jakých podmínek' },
    { id: 'duvody', nadpis: 'Výpovědní důvody s tříměsíční dobou' },
    { id: 'okamzita', nadpis: 'Výpověď bez výpovědní doby' },
    { id: 'nalezitosti', nadpis: 'Co musí výpověď obsahovat' },
    { id: 'namitky', nadpis: 'Námitky nájemníka a soud' },
    { id: 'vyklizeni', nadpis: 'Co když se nájemník nevystěhuje' },
    { id: 'chyby', nadpis: 'Nejčastější chyby' },
  ],
  faq: [
    {
      otazka: 'Můžu vypovědět nájem na dobu určitou?',
      odpoved: 'Jen ze zákonných důvodů, stejně jako u nájmu na dobu neurčitou. Důvod „potřebuji byt pro sebe nebo příbuzného“ se ale na dobu určitou nevztahuje — ten je vyhrazen nájmu na dobu neurčitou.',
    },
    {
      otazka: 'Musím před výpovědí nájemníka na něco upozornit?',
      odpoved: 'U porušování povinností ano. Před výpovědí bez výpovědní doby musíš nájemníka vyzvat, aby závadné chování nebo protiprávní stav odstranil. Bez výzvy soud výpověď zpravidla zruší.',
    },
    {
      otazka: 'Od kdy běží výpovědní doba?',
      odpoved: 'Tříměsíční výpovědní doba běží od prvního dne kalendářního měsíce následujícího po měsíci, v němž výpověď došla druhé straně. Výpověď doručená 20. května tedy znamená konec nájmu k 31. srpnu.',
    },
    {
      otazka: 'Co když nájemník výpověď nepřevezme?',
      odpoved: 'Rozhoduje dojití, ne převzetí. Zásilka doručená na adresu bytu se zpravidla považuje za došlou, i když si ji adresát nevyzvedne. Proto je důležité posílat na správnou adresu a doručení doložit.',
    },
    {
      otazka: 'Můžu nájemníkovi vyměnit zámek nebo vypnout vodu?',
      odpoved: 'Ne. Je to svépomoc, kterou zákon nedovoluje, a dostaneš se tím do role toho, kdo porušuje právo — včetně náhrady škody. Vystěhování řeší soud a následně exekutor.',
    },
  ],
  zdroje: ['§ 2286 až § 2296 občanského zákoníku'],
}

export default function VypovedZNajmu() {
  return (
    <>
      <Perex>
        Výpověď z nájmu bytu je jedna z mála věcí, kde formální chyba stojí tři měsíce času.
        Zákon chrání nájemníka jako slabší stranu a dává mu právo nechat výpověď přezkoumat soudem —
        proto má přesně dané důvody i náležitosti.
      </Perex>

      <Shrnuti>
        <li>Nájemník může vypovědět nájem na dobu neurčitou bez důvodu, ty vždy potřebuješ zákonný důvod.</li>
        <li>Výpověď musí být písemná, musí obsahovat důvod a poučení o právu podat námitky — jinak je neplatná.</li>
        <li>Výpovědní doba jsou tři měsíce a běží od prvního dne dalšího měsíce.</li>
        <li>Při dluhu za nejméně tři měsíce lze vypovědět bez výpovědní doby, ale až po výzvě k nápravě.</li>
        <li>Nájemník má dva měsíce na to, aby navrhl soudu přezkum.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="kdo">Kdo může vypovědět a za jakých podmínek</H2>
      <Tabulka
        hlavicka={['', 'Nájemník', 'Pronajímatel']}
        radky={[
          ['Doba neurčitá', 'bez důvodu, 3 měsíce', 'jen ze zákonného důvodu, 3 měsíce'],
          ['Doba určitá', 'při podstatné změně okolností', 'jen ze zákonného důvodu'],
          ['Zvlášť závažné porušení', '—', 'bez výpovědní doby, po výzvě k nápravě'],
        ]}
      />
      <P>
        Výpověď musí vždy dojít druhé straně písemně. Platí princip dojití: rozhoduje okamžik,
        kdy se zásilka dostala do sféry adresáta, ne kdy si ji vyzvedl.
      </P>

      <H2 id="duvody">Výpovědní důvody s tříměsíční dobou</H2>
      <P>
        Podle <Zakon>§ 2288</Zakon> můžeš vypovědět nájem, pokud:
      </P>
      <Seznam>
        <Polozka><strong>nájemník hrubě porušil svou povinnost</strong> — typicky dluh na nájemném nebo službách, neoznámení podnájmu, poškozování bytu;</Polozka>
        <Polozka><strong>byl odsouzen pro úmyslný trestný čin</strong> spáchaný na pronajímateli, členu jeho domácnosti, osobě bydlící v domě nebo na cizím majetku v domě;</Polozka>
        <Polozka><strong>má být byt vyklizen</strong>, protože je z důvodu veřejného zájmu potřeba s ním naložit tak, že ho nelze dál užívat;</Polozka>
        <Polozka><strong>je tu jiný obdobně závažný důvod</strong> pro vypovězení nájmu.</Polozka>
      </Seznam>
      <P>
        U nájmu <strong>na dobu neurčitou</strong> navíc můžeš vypovědět, když potřebuješ byt pro sebe
        nebo pro svého manžela, který se rozvedl, nebo pro příbuzného v řadě přímé či sourozence.
        Pozor na to, že byt pak musíš k uvedenému účelu skutečně použít — jinak nájemníkovi vzniká
        nárok na náhradu.
      </P>

      <H2 id="okamzita">Výpověď bez výpovědní doby</H2>
      <P>
        Podle <Zakon>§ 2291</Zakon> můžeš vypovědět nájem bez výpovědní doby, když nájemník porušuje
        své povinnosti <strong>zvlášť závažným způsobem</strong>. Zákon sám jmenuje:
      </P>
      <Seznam>
        <Polozka>nezaplacení nájemného a nákladů na služby za dobu <strong>alespoň tří měsíců</strong>,</Polozka>
        <Polozka>poškozování bytu nebo domu závažným či nenapravitelným způsobem,</Polozka>
        <Polozka>způsobování jinak závažných škod nebo obtíží pronajímateli či osobám bydlícím v domě,</Polozka>
        <Polozka>neoprávněné užívání bytu jiným způsobem nebo k jinému účelu, než bylo ujednáno.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          <strong>Nejdřív výzva, až potom výpověď.</strong> Před výpovědí bez výpovědní doby musíš
          nájemníka vyzvat, aby závadné chování nebo protiprávní stav odstranil. Bez prokazatelné
          výzvy soud výpověď zpravidla zruší, i když dluh skutečně existuje.
        </p>
      </Ramecek>
      <P>
        Dluh za tři měsíce nemusí jít po sobě — rozhoduje celkový dluh odpovídající třem měsíčním
        platbám. Praktický postup u neplatiče popisuju
        v článku <OdkazClanek slug="neplatici-najemnik">o neplatícím nájemníkovi</OdkazClanek>.
      </P>

      <H2 id="nalezitosti">Co musí výpověď obsahovat</H2>
      <Seznam cislovany>
        <Polozka><strong>Písemnou formu</strong> a označení obou stran a bytu.</Polozka>
        <Polozka><strong>Konkrétní výpovědní důvod</strong> popsaný skutkově — ne jen odkaz na paragraf. „Dluh na nájemném za červen až srpen 2026 ve výši 60 000 Kč“ je skutkový popis, „hrubé porušení povinností“ není.</Polozka>
        <Polozka><strong>Poučení o právu podat námitky</strong> a navrhnout soudu přezkoumání oprávněnosti výpovědi. <strong>Bez poučení je výpověď neplatná</strong> — tohle je nejčastější důvod, proč výpovědi padají.</Polozka>
        <Polozka><strong>Podpis</strong> a prokazatelné doručení.</Polozka>
      </Seznam>
      <Ramecek druh="vzor">
        <p>
          „Poučení: Máte právo podat proti této výpovědi námitky a navrhnout soudu, aby přezkoumal
          její oprávněnost, a to ve lhůtě dvou měsíců ode dne, kdy Vám byla výpověď doručena.“
        </p>
      </Ramecek>

      <H2 id="namitky">Námitky nájemníka a soud</H2>
      <P>
        Nájemník má právo do dvou měsíců od doručení výpovědi navrhnout soudu, aby přezkoumal, zda
        je výpověď oprávněná. Do rozhodnutí soudu nájem běží dál podle výpovědní doby — výpověď se
        tedy nepozastavuje, ale pokud soud rozhodne ve prospěch nájemníka, nájem trvá dál.
      </P>
      <P>
        Prakticky to znamená, že se nevyplatí počítat s datem vyklizení dřív, než ta dvouměsíční
        lhůta uplyne.
      </P>

      <H2 id="vyklizeni">Co když se nájemník nevystěhuje</H2>
      <Seznam cislovany>
        <Polozka><strong>Písemná výzva k vyklizení</strong> s termínem a upozorněním na náhradu škody za užívání bytu bez právního důvodu.</Polozka>
        <Polozka><strong>Žaloba na vyklizení</strong> u okresního soudu podle místa bytu.</Polozka>
        <Polozka><strong>Exekuce vyklizením</strong>, kterou provádí soudní exekutor po pravomocném rozsudku.</Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Výměna zámků, vypnutí vody nebo vynesení věcí je nedovolená svépomoc. Dostaneš se tím
          do pozice toho, kdo porušuje právo — a k dluhu nájemníka si přidáš vlastní odpovědnost
          za škodu.
        </p>
      </Ramecek>

      <H2 id="chyby">Nejčastější chyby</H2>
      <Seznam>
        <Polozka>chybějící poučení o právu podat námitky,</Polozka>
        <Polozka>obecně formulovaný důvod bez popisu skutku,</Polozka>
        <Polozka>výpověď bez předchozí výzvy k nápravě,</Polozka>
        <Polozka>výpovědní důvod, který je ve smlouvě, ale zákon ho nezná,</Polozka>
        <Polozka>nedoložené doručení — e-mail bez potvrzení u soudu neobstojí,</Polozka>
        <Polozka>počítání výpovědní doby ode dne doručení místo od prvního dne dalšího měsíce.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio drží u každé smlouvy předpis i skutečně přijaté platby po měsících. Když dojde
          na výpověď, máš dluh doložený měsíc po měsíci místo dohadování z výpisů — a nástěnka
          tě na nezaplacené měsíce upozorní dřív, než se z nich stanou tři.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
