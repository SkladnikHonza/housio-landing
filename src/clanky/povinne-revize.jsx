import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'povinne-revize',
  nadpis: 'Povinné revize v pronajímaném bytě: elektřina, plyn a komín',
  perex: 'Které kontroly musí proběhnout, jak často, kdo je platí a co se stane, když papír chybí a dojde ke škodě. S intervaly i s tím, co dát do smlouvy.',
  tema: 'provoz',
  datum: '2026-10-05',
  minut: 8,
  sekce: [
    { id: 'co', nadpis: 'Co se v bytě vlastně reviduje' },
    { id: 'lhuty', nadpis: 'Intervaly, které potřebuješ znát' },
    { id: 'kdo', nadpis: 'Kdo revizi zajišťuje a kdo ji platí' },
    { id: 'smlouva', nadpis: 'Co o revizích napsat do smlouvy' },
    { id: 'skoda', nadpis: 'Co se stane, když papír chybí a vznikne škoda' },
    { id: 'evidence', nadpis: 'Jak si to hlídat, aby nic nepropadlo' },
  ],
  faq: [
    {
      otazka: 'Musí mít pronajímaný byt revizi elektroinstalace?',
      odpoved: 'Pravidelná revize elektroinstalace se u bytů provádí zpravidla jednou za pět let. Odpovědnost nese vlastník; u společných rozvodů v domě ji zajišťuje společenství vlastníků, u rozvodů v bytě vlastník jednotky.',
    },
    {
      otazka: 'Jak často se kontroluje plyn?',
      odpoved: 'U spotřebního rozvodu plynu a plynových spotřebičů se dělá kontrola jednou ročně a provozní revize jednou za tři roky. Platí to i pro byt, který pronajímáš.',
    },
    {
      otazka: 'Může revizi platit nájemník?',
      odpoved: 'Náklad na revizi zařízení, které je součástí bytu, nese zpravidla vlastník — není to drobná oprava ani běžná údržba. Ujednat ve smlouvě přenesení nákladu na nájemce lze jen v mezích zákona a u revizí to bývá sporné.',
    },
    {
      otazka: 'Co když mě nájemník do bytu kvůli revizi nepustí?',
      odpoved: 'Nájemce musí umožnit prohlídku bytu i přístup k zařízením, pokud ho na to pronajímatel předem upozorní v přiměřené době. Opakované odmítnutí je porušením povinností nájemce.',
    },
    {
      otazka: 'Jak dlouho revizní zprávy schovávat?',
      odpoved: 'Minimálně do další revize, prakticky ale déle — při škodě se dokládá i několik let zpětně. Digitální archiv nic nestojí a papír se ztratí.',
    },
  ],
  zdroje: ['nařízení vlády č. 190/2022 Sb. a č. 191/2022 Sb.', 'nařízení vlády č. 34/2016 Sb.'],
}

export default function PovinneRevize() {
  return (
    <>
      <Perex>
        Revize jsou tichá povinnost. Nikdo o ně nestojí, dokud se nic nestane — a ve chvíli, kdy
        vyhoří zásuvka nebo unikne plyn, je revizní zpráva první papír, který pojišťovna i hasiči
        chtějí vidět. Tenhle návod říká, co se reviduje, jak často a kdo to platí.
      </Perex>

      <Shrnuti>
        <li>Elektroinstalace zpravidla jednou za pět let, plyn každoročně kontrola a revize jednou za tři roky.</li>
        <li>Odpovědnost nese vlastník, i když zařízení užívá nájemník.</li>
        <li>Nájemce musí umožnit přístup, pokud ho dopředu upozorníš v přiměřené době.</li>
        <li>Bez revizní zprávy se po škodě těžko prokazuje, že zařízení bylo v pořádku.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="co">Co se v bytě vlastně reviduje</H2>
      <P>
        Pod pojem <OdkazHeslo slug="revize">revize</OdkazHeslo> spadá několik různých kontrol, které
        mají vlastní předpisy i lhůty. U běžného bytu jde hlavně o tohle:
      </P>
      <Seznam>
        <Polozka><strong>Elektroinstalace</strong> — rozvody v bytě, zásuvky, jističe, případně elektrický sporák nebo bojler.</Polozka>
        <Polozka><strong>Plynové zařízení</strong> — spotřební rozvod plynu a spotřebiče: kotel, karma, plynový sporák.</Polozka>
        <Polozka><strong>Spalinová cesta</strong> — komín nebo kouřovod u každého spotřebiče, který někam odvádí spaliny.</Polozka>
        <Polozka><strong>Hromosvod</strong> a <strong>výtah</strong> — ty už jsou věcí domu, tedy společenství vlastníků.</Polozka>
      </Seznam>
      <P>
        Hranice mezi „bytem“ a „domem“ je přitom to, co v praxi dělá nejvíc zmatku. Společné rozvody
        a zařízení domu hlídá <OdkazHeslo slug="svj">společenství vlastníků</OdkazHeslo>, co je uvnitř
        bytu, je na vlastníkovi jednotky — tedy na tobě.
      </P>

      <H2 id="lhuty">Intervaly, které potřebuješ znát</H2>
      <Tabulka
        hlavicka={['Zařízení', 'Jak často', 'Kdo to zpravidla řeší']}
        radky={[
          ['Elektroinstalace v bytě', 'revize jednou za 5 let', 'vlastník jednotky'],
          ['Plynové spotřebiče a rozvod', 'kontrola 1× ročně, revize 1× za 3 roky', 'vlastník jednotky'],
          ['Spalinová cesta', 'kontrola zpravidla 1× ročně', 'vlastník jednotky'],
          ['Hromosvod', 'podle typu objektu, obvykle 2 až 4 roky', 'společenství vlastníků'],
          ['Výtah', 'pravidelně podle normy', 'společenství vlastníků'],
        ]}
      />
      <Ramecek druh="pozor">
        <p>
          Lhůty se liší podle typu zařízení, paliva i stáří objektu a předpisy se v posledních letech
          měnily. Čísla v tabulce jsou obvyklá pro běžný byt — u konkrétního zařízení je autoritou
          revizní technik a předpis, který na něj dopadá, ne tahle tabulka.
        </p>
      </Ramecek>

      <H2 id="kdo">Kdo revizi zajišťuje a kdo ji platí</H2>
      <P>
        Odpovědnost za stav zařízení nese vlastník, i když ho denně používá někdo jiný. Nájemník
        má povinnost oznámit závadu a umožnit její odstranění; nemá povinnost shánět revizního
        technika.
      </P>
      <P>
        Náklad na revizi není drobná oprava ani běžná údržba — ty hradí nájemce podle nařízení
        vlády č. 308/2015 Sb. Revize je nad jejich rámec, takže ji platí vlastník. Výjimkou bývá
        zařízení, které si do bytu pořídil sám nájemce.
      </P>
      <Ramecek druh="priklad">
        <p>
          Plynový kotel v bytě je tvůj: roční kontrolu i tříletou revizi platíš ty. Nájemník si
          do bytu přinesl vlastní plynový gril na balkon — ten je jeho věc a tvoje odpovědnost
          na něj nedosahuje.
        </p>
      </Ramecek>

      <H2 id="smlouva">Co o revizích napsat do smlouvy</H2>
      <P>
        Nemusí to být odstavec na půl strany. Stačí tři věty, které předejdou dohadování:
      </P>
      <Ramecek druh="vzor">
        <p>
          „Pronajímatel zajišťuje na své náklady pravidelné revize a kontroly technických zařízení,
          která jsou součástí bytu. Nájemce se zavazuje umožnit přístup do bytu za účelem provedení
          revize, kontroly nebo odečtu, bude-li mu to oznámeno alespoň pět dnů předem. Nájemce je
          povinen bez zbytečného odkladu oznámit pronajímateli závadu na technickém zařízení bytu.“
        </p>
      </Ramecek>
      <P>
        Přístup do bytu je přitom to, kvůli čemu revize nejčastěji nevyjde. Zákon nájemci ukládá
        umožnit prohlídku i přístup k zařízením, pokud ho na to předem upozorníš v přiměřené době —
        ale konkrétní lhůta ve smlouvě ti ušetří hádku o tom, co je přiměřené.
      </P>

      <H2 id="skoda">Co se stane, když papír chybí a vznikne škoda</H2>
      <Seznam>
        <Polozka>
          <strong>Pojišťovna</strong> může plnění krátit nebo odmítnout, pokud se prokáže, že škoda
          souvisí se zanedbanou povinností. Revizní zprávu bude chtít vidět.
        </Polozka>
        <Polozka>
          <strong>Odpovědnost za škodu</strong> na zdraví nebo majetku třetích osob jde za vlastníkem
          zařízení. U požáru nebo otravy oxidem uhelnatým to může být velmi drahé.
        </Polozka>
        <Polozka>
          <strong>Dokazování</strong> bez revizní zprávy je skoro beznadějné. Platná revize naopak
          ukazuje, že jsi povinnost splnil.
        </Polozka>
      </Seznam>
      <P>
        Pojistka na pronajímaný byt má navíc vlastní úskalí — o těch píšu
        v hesle <OdkazHeslo slug="pojisteni-nemovitosti">pojištění pronajímané nemovitosti</OdkazHeslo>.
      </P>

      <H2 id="evidence">Jak si to hlídat, aby nic nepropadlo</H2>
      <P>
        Revize mají jednu nepříjemnou vlastnost: připomenou se samy až tím, že propadly. U jednoho
        bytu se to ještě uhlídá v hlavě, u pěti už ne.
      </P>
      <Seznam cislovany>
        <Polozka>U každého zařízení si zapiš datum poslední revize a interval.</Polozka>
        <Polozka>Spočítej datum příští a nastav si připomínku aspoň dva měsíce dopředu — technici bývají objednaní.</Polozka>
        <Polozka>Revizní zprávu si ulož digitálně k té konkrétní nemovitosti, ne do e-mailu.</Polozka>
        <Polozka>Při výměně nájemníka zkontroluj, jestli některá revize nepropadne během nového nájmu.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio má u každé nemovitosti záložku Revize: typ, datum provedení, platnost do a interval.
          Co se blíží konci, upozorní s předstihem a co už propadlo, svítí červeně. Revizní zprávu
          si nahraješ k témuž místu, takže se při škodě nehledá ve starých e-mailech.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="5. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
