import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'clenove-domacnosti',
  nadpis: 'Kdo všechno smí v bytě bydlet: členové domácnosti, spolubydlící a návštěvy',
  perex: 'Nájemník se nastěhoval sám a dnes je jich v bytě pět. Co s tím zákon dělá, kdy si můžeš vyhradit souhlas, kde je hranice mezi návštěvou a členem domácnosti a co s tím má společného vyúčtování.',
  tema: 'kdo-bydli',
  datum: '2026-10-07',
  minut: 8,
  sekce: [
    { id: 'pravo', nadpis: 'Nájemce má právo přijmout kohokoli' },
    { id: 'souhlas', nadpis: 'Kdy si můžeš vyhradit souhlas' },
    { id: 'pocet', nadpis: 'Kolik lidí je ještě přiměřeně' },
    { id: 'navsteva', nadpis: 'Návštěva, spolubydlící, nebo podnájemník' },
    { id: 'zalohy', nadpis: 'Proč to není jen formalita: zálohy a opotřebení' },
    { id: 'smlouva', nadpis: 'Co si ujednat ve smlouvě' },
  ],
  faq: [
    {
      otazka: 'Může se nájemník nastěhovat s partnerkou, aniž by se mě zeptal?',
      odpoved: 'Ano. Zákon dává nájemci právo přijmout do své domácnosti kohokoli a u osoby blízké si souhlas vyhradit nemůžeš. Musí ti ale bez zbytečného odkladu oznámit, že se počet osob v bytě zvýšil — pokud to neudělá do dvou měsíců, má se za to, že závažně porušil svou povinnost.',
    },
    {
      otazka: 'Můžu ve smlouvě zakázat, aby v bytě bydlel někdo další?',
      odpoved: 'Úplně zakázat ne. Můžeš si ale ve smlouvě vyhradit souhlas s přijetím nového člena domácnosti — to neplatí u osob blízkých a u případů zvláštního zřetele hodných. Souhlas s přijetím jiné než blízké osoby musí být písemný.',
    },
    {
      otazka: 'Kolik lidí smí v bytě bydlet?',
      odpoved: 'Zákon číslo neuvádí. Máš právo požadovat, aby počet osob odpovídal velikosti bytu a aby v něm všichni mohli žít v obvyklých pohodlných a hygienicky vyhovujících podmínkách. Čtyři dospělí v garsonce tuhle podmínku nesplňují, dva dospělí a dvě děti v 3+1 ano.',
    },
    {
      otazka: 'Je spolubydlící podnájemník?',
      odpoved: 'Záleží, jestli za bydlení platí nájemci. Když platí, jde o podnájem části bytu — ten smí nájemce zřídit bez tvého souhlasu, pokud v bytě sám trvale bydlí. Když neplatí a jen tam bydlí, je to člen domácnosti. Pro tebe je rozdíl hlavně v tom, co můžeš požadovat doložit.',
    },
    {
      otazka: 'Musí mi nájemník hlásit, když se někdo odstěhuje?',
      odpoved: 'Ano, snížení počtu členů domácnosti má oznámit bez zbytečného odkladu stejně jako zvýšení. V praxi se na to zapomíná častěji — a je to ve prospěch nájemníka, protože zálohy na vodu a odpad se počítají podle osob.',
    },
    {
      otazka: 'Co se stane, když nájemce zemře?',
      odpoved: 'Nájem přejde na člena domácnosti, který v bytě žil ke dni smrti a nemá vlastní byt. U blízkých příbuzných automaticky, u ostatních jen s tvým souhlasem. Takto přešlý nájem skončí nejpozději za dva roky — to neplatí, pokud bylo té osobě ke dni přechodu aspoň sedmdesát let.',
    },
  ],
  zdroje: ['§ 2272 a § 2273 občanského zákoníku', '§ 2279 občanského zákoníku', '§ 22 odst. 1 občanského zákoníku'],
}

export default function CleneDomacnosti() {
  return (
    <>
      <Perex>
        Pronajal jsi byt jednomu člověku a za rok tam bydlí pět lidí. Je to porušení smlouvy, nebo
        tvoje smůla? Odpověď je obojí podle toho, kdo ti ti lidé jsou a jestli ti o nich nájemník
        řekl.
      </Perex>

      <Shrnuti>
        <li>Nájemce má právo přijmout do domácnosti kohokoli — a oznámit ti to.</li>
        <li>Souhlas si můžeš vyhradit, ale nikdy u osob blízkých.</li>
        <li>Počet osob smíš omezit na přiměřený velikosti bytu, ne libovolně.</li>
        <li>Neoznámení do dvou měsíců je závažné porušení povinnosti.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="pravo">Nájemce má právo přijmout kohokoli</H2>
      <P>
        <Zakon>§ 2272</Zakon> začíná větou, která překvapí skoro každého pronajímatele:
        „Nájemce má právo přijímat ve své domácnosti kohokoli.“ Byt si nepronajal jen pro sebe,
        pronajal si ho k bydlení — a s kým bydlí, je jeho věc.
      </P>
      <P>
        Zákon k tomu ale přidává povinnost: zvýšení počtu osob žijících v bytě ti nájemce musí
        oznámit <strong>bez zbytečného odkladu</strong>. Neudělá-li to ani do dvou měsíců od změny,
        má se za to, že závažně porušil svou povinnost — a to už je výpovědní důvod.
      </P>
      <Ramecek druh="pozor">
        <p>
          Všimni si, co je porušením a co ne. Porušením není to, že se někdo nastěhoval.
          Porušením je to, že ti to nikdo neřekl. Když tedy píšeš výzvu, nevytýkej nájemci
          přítomnost partnerky — vytkni mu nesplněnou oznamovací povinnost.
        </p>
      </Ramecek>

      <H2 id="souhlas">Kdy si můžeš vyhradit souhlas</H2>
      <P>
        Druhý odstavec § 2272 ti dává nástroj: ve smlouvě si můžeš vyhradit souhlas s přijetím
        nového člena do nájemcovy domácnosti. Má to ale dvě pevné hranice.
      </P>
      <Seznam>
        <Polozka>
          <strong>Neplatí to u osoby blízké.</strong> Partner, rodič, sourozenec, dítě, vnuk —
          u nich souhlas vyžadovat nemůžeš, ani kdyby to ve smlouvě stálo. Okruh osob blízkých
          vymezuje <Zakon>§ 22</Zakon>: příbuzný v řadě přímé, sourozenec, manžel nebo partner
          a dále osoby, které spolu trvale žijí.
        </Polozka>
        <Polozka>
          <strong>Neplatí to v případech zvláštního zřetele hodných.</strong> Zákon je nevyjmenovává.
          V praxi jde o situace jako přijetí osoby odkázané na péči nebo dočasné přijetí člověka
          v nouzi.
        </Polozka>
      </Seznam>
      <P>
        U kohokoli jiného — spolužák, kamarád, kolega z práce — souhlas vyžadovat můžeš. A musí
        mít <strong>písemnou formu</strong>. Souhlas po telefonu nebo mlčky je u jiné než blízké
        osoby bez právního významu.
      </P>

      <H2 id="pocet">Kolik lidí je ještě přiměřeně</H2>
      <P>
        Třetí odstavec je ten, o který se vedou spory. Máš právo požadovat, aby v bytě žil jen
        takový počet osob, který je <strong>přiměřený velikosti bytu</strong> a nebrání tomu, aby
        všechny mohly žít v obvyklých pohodlných a hygienicky vyhovujících podmínkách.
      </P>
      <P>
        Žádné číslo v zákoně není a nebude — posuzuje se to případ od případu. Co z formulace
        plyne prakticky:
      </P>
      <Tabulka
        hlavicka={['Situace', 'Jak to nejspíš dopadne']}
        radky={[
          ['2 dospělí + 2 děti v 3+1', 'v pořádku'],
          ['4 nepříbuzní dospělí ve 2+1', 'sporné, záleží na ploše a dispozici'],
          ['3 dospělí v garsonce', 'pravděpodobně nepřiměřené'],
          ['Ve smlouvě „nejvýše 1 osoba“ u 3+1', 'neplatné — omezení není přiměřené velikosti bytu'],
        ]}
      />
      <P>
        Poslední řádek je důležitý. Ujednání, které omezuje počet osob hluboko pod kapacitu bytu,
        soud neuzná — obchází totiž právo nájemce přijmout do domácnosti kohokoli.
      </P>

      <H2 id="navsteva">Návštěva, spolubydlící, nebo podnájemník</H2>
      <P>
        Tři různé situace, tři různá pravidla. Pleteš-li si je, napíšeš špatnou výzvu.
      </P>
      <Tabulka
        hlavicka={['', 'Návštěva', 'Člen domácnosti', 'Podnájemník']}
        radky={[
          ['Jak dlouho', 'dny až týdny', 'trvale', 'trvale'],
          ['Platí za bydlení', 'ne', 'ne', 'ano, nájemci'],
          ['Tvůj souhlas', 'nikdy', 'lze si vyhradit (ne u blízkých)', 'u části bytu ne, u celého ano'],
          ['Oznámit počet osob', 'ne', 'ano', 'ano'],
        ]}
      />
      <P>
        Hranice mezi dlouhou návštěvou a členem domácnosti není v zákoně a v praxi se posuzuje
        podle toho, jestli tam ten člověk <strong>bydlí</strong> — má tam věci, poštu, spí tam
        pravidelně. Podrobnosti k podnájmu rozebírá
        samostatný <OdkazClanek slug="podnajem">článek o podnájmu</OdkazClanek>.
      </P>

      <H2 id="zalohy">Proč to není jen formalita: zálohy a opotřebení</H2>
      <P>
        Oznamovací povinnost není byrokracie pro byrokracii. Visí na ní peníze.
      </P>
      <Seznam>
        <Polozka>
          <strong>Vodné, stočné a odpad se rozúčtovávají podle osob.</strong> Když se v bytě
          nenápadně zdvojnásobí počet lidí, zálohy nastavené na jednoho přestanou stačit a na konci
          roku z toho je nedoplatek, který se vymáhá hůř než vyšší záloha.
          Postup rozebírá <OdkazClanek slug="vyuctovani-sluzeb">článek o vyúčtování služeb</OdkazClanek>.
        </Polozka>
        <Polozka>
          <strong>Opotřebení roste rychleji než lineárně.</strong> Co je u dvou lidí
          <OdkazHeslo slug="bezne-opotrebeni"> běžné opotřebení</OdkazHeslo>, u pěti už bývá škoda,
          kterou lze strhnout z jistoty.
        </Polozka>
        <Polozka>
          <strong>Při havárii potřebuješ vědět, s kým jednat.</strong> A u revize plynu potřebuješ
          do bytu — s někým, kdo o tobě nikdy neslyšel, se to domlouvá hůř.
        </Polozka>
      </Seznam>

      <H2 id="smlouva">Co si ujednat ve smlouvě</H2>
      <P>
        Smysl má jediné: vyhradit si souhlas tam, kde to zákon dovolí, stanovit přiměřený počet
        osob a připomenout oznamovací povinnost. Víc z toho nevytlučeš.
      </P>
      <Ramecek druh="vzor">
        <p>
          „Byt je určen k bydlení nejvýše tří osob. Nájemce je povinen bez zbytečného odkladu
          písemně oznámit pronajímateli každou změnu počtu osob žijících v bytě, a to i snížení.
          K přijetí nového člena nájemcovy domácnosti, který není osobou nájemci blízkou,
          se vyžaduje předchozí písemný souhlas pronajímatele.“
        </p>
      </Ramecek>
      <Ramecek druh="priklad">
        <p>
          Nájemce bydlí v 2+kk sám. V květnu se k němu nastěhuje přítelkyně, v červenci její
          sestra. O přítelkyni ti nájemce napsal druhý den — tam není co řešit, je to osoba blízká
          a oznámeno bylo včas. O sestře mlčel. V srpnu to zjistíš při revizi. Sestra není osoba
          blízká nájemci, takže pokud sis ve smlouvě souhlas vyhradil, přijata být neměla —
          a oznámení nepřišlo vůbec. Výzva míří na obojí.
        </p>
      </Ramecek>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš u bytu jednotlivé nájemníky i počet osob. Když se počet změní, máš
          doloženo, odkdy v bytě bydlí kolik lidí — a to je přesně ten údaj, který potřebuješ
          doložit u vyúčtování vody i u sporu o zálohy.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
