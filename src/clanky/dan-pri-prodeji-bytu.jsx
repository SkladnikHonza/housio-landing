import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazHeslo, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'dan-pri-prodeji-bytu',
  nadpis: 'Daň při prodeji bytu: pět let, deset let, nebo vůbec',
  perex: 'Časový test se v roce 2021 prodloužil z pěti let na deset — ale jen pro byty nabyté od té doby. U starších platí dál pětiletý. Kdy je příjem z prodeje osvobozený, co dělat, když test nesplníš, a jak se počítá základ daně.',
  tema: 'investice',
  datum: '2026-10-07',
  minut: 9,
  sekce: [
    { id: 'tri-cesty', nadpis: 'Tři cesty k osvobození' },
    { id: 'casovy-test', nadpis: 'Časový test: pět, nebo deset let' },
    { id: 'bydliste', nadpis: 'Dva roky bydliště' },
    { id: 'bytova-potreba', nadpis: 'Peníze použité na vlastní bydlení' },
    { id: 'zaklad', nadpis: 'Když osvobozený nejsi: jak se počítá daň' },
    { id: 'chyby', nadpis: 'Čtyři chyby, které stojí statisíce' },
  ],
  faq: [
    {
      otazka: 'Platí u mého bytu pětiletý, nebo desetiletý test?',
      odpoved: 'Rozhoduje den nabytí vlastnického práva. U nemovitostí nabytých do 31. 12. 2020 platí původní pětiletý test, u nabytých od 1. 1. 2021 desetiletý. Vyplývá to z přechodného ustanovení zákona č. 386/2020 Sb.',
    },
    {
      otazka: 'Odkdy se doba počítá — od podpisu smlouvy, nebo od katastru?',
      odpoved: 'Od nabytí vlastnického práva, tedy od právních účinků vkladu do katastru. Ty nastávají ke dni podání návrhu na vklad, ne ke dni, kdy katastr rozhodl. Den podpisu kupní smlouvy sám o sobě nerozhoduje.',
    },
    {
      otazka: 'Musím prodej uvést v přiznání, i když je osvobozený?',
      odpoved: 'Do přiznání osvobozený příjem neuvádíš. Pozor ale na oznamovací povinnost u osvobozených příjmů nad 5 milionů korun — tu splníš samostatným oznámením finančnímu úřadu, ne přiznáním.',
    },
    {
      otazka: 'Platí se ještě daň z nabytí nemovitých věcí?',
      odpoved: 'Ne. Byla zrušena zákonem č. 386/2020 Sb. a zanikly i povinnosti, u nichž lhůta pro podání přiznání uplynula od 31. 3. 2020. Kupující tedy ze čtyř procent ceny neplatí nic.',
    },
    {
      otazka: 'Co když byt prodám se ztrátou?',
      odpoved: 'Ztrátu z prodeje nemovitosti podle § 10 nelze uplatnit proti jiným druhům příjmů. Dá se jen započíst proti jinému příjmu téhož druhu v témže roce — tedy proti zisku z jiného prodeje.',
    },
    {
      otazka: 'Zkracuje se test, když jsem byt zdědil?',
      odpoved: 'U dědění po příbuzném v řadě přímé nebo po manželovi se doba zkracuje o dobu, po kterou nemovitost prokazatelně vlastnil zůstavitel. U ostatních zůstavitelů se nezkracuje.',
    },
  ],
  zdroje: [
    '§ 4 odst. 1 písm. a) a b) zákona o daních z příjmů',
    'zákon č. 386/2020 Sb. (zrušení daně z nabytí, přechodná ustanovení)',
    '§ 10 a § 38v zákona o daních z příjmů',
  ],
}

export default function DanPriProdejiBytu() {
  return (
    <>
      <Perex>
        Většina prodejů bytu je od daně osvobozená. „Většina“ je ale slabá útěcha, když se do ní
        zrovna nevejdeš — u bytu za pět milionů jde o statisíce.
      </Perex>

      <Shrnuti>
        <li>Nabyto do konce 2020 → časový test 5 let. Od 2021 → 10 let.</li>
        <li>Dva roky bydliště v bytě osvobozují bez ohledu na časový test.</li>
        <li>Použití peněz na vlastní bytovou potřebu osvobozuje i při nesplněném testu.</li>
        <li>Daň z nabytí nemovitých věcí byla zrušena, kupující neplatí nic.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="tri-cesty">Tři cesty k osvobození</H2>
      <P>
        Zákon nabízí tři samostatné důvody, proč nemusíš příjem z prodeje zdanit. Stačí splnit
        jeden z nich.
      </P>
      <Tabulka
        hlavicka={['Cesta', 'Podmínka', 'Kde v zákoně']}
        radky={[
          ['Časový test', 'vlastnil jsi 5 nebo 10 let podle data nabytí', '§ 4 odst. 1 písm. b)'],
          ['Bydliště', 'měl jsi v bytě bydliště poslední 2 roky před prodejem', '§ 4 odst. 1 písm. a)'],
          ['Bytová potřeba', 'peníze použiješ na obstarání vlastní bytové potřeby', '§ 4 odst. 1 písm. a) a b)'],
        ]}
      />
      <P>
        U investičního bytu, ve kterém jsi nikdy nebydlel a peníze chceš použít jinde, zbývá
        jediná — časový test. Proto se o něm mluví nejvíc.
      </P>

      <H2 id="casovy-test">Časový test: pět, nebo deset let</H2>
      <P>
        Do roku 2020 byl časový test pětiletý. Zákon č. 386/2020 Sb. ho od 1. ledna 2021 prodloužil
        na deset let. Zásadní je, co stojí v jeho přechodném ustanovení: u nemovitosti nabyté
        <strong> před</strong> účinností změny se použije osvobození podle dosavadního znění.
      </P>
      <Ramecek druh="priklad">
        <p>
          Byt koupený v září 2019 → platí pětiletý test, od září 2024 je prodej osvobozený.<br />
          Byt koupený v únoru 2021 → platí desetiletý test, osvobozeno bude až od února 2031.<br />
          Dva sousedé, skoro stejné byty, rozdíl pět let.
        </p>
      </Ramecek>
      <P>
        Doba se počítá od <strong>nabytí vlastnického práva</strong>, a to je u nemovitosti
        zapsané v katastru den, ke kterému nastaly právní účinky vkladu — tedy den podání návrhu
        na vklad. Ne den podpisu kupní smlouvy a ne den, kdy katastr rozhodl.
      </P>
      <Ramecek druh="pozor">
        <p>
          <Zakon>§ 4</Zakon> má u obou testů výjimku, na kterou se zapomíná: osvobození se
          nevztahuje na nemovitosti, které jsou nebo v rozhodné době byly zahrnuty do obchodního
          majetku. U pětiletého testu jsou to 2 roky od vyřazení, u desetiletého 10 let před
          prodejem. Pokud jsi byt měl v obchodním majetku jako OSVČ, počítej s tím zvlášť.
        </p>
      </Ramecek>

      <H2 id="bydliste">Dva roky bydliště</H2>
      <P>
        Druhá cesta se týká vlastního bydlení: měl-li jsi v bytě <strong>bydliště nejméně 2 roky
        bezprostředně před prodejem</strong>, je příjem osvobozený bez ohledu na to, jak dlouho
        byt vlastníš.
      </P>
      <P>
        Bydliště není totéž co trvalý pobyt zapsaný na úřadě. Je to místo, kde se skutečně
        zdržuješ s úmyslem žít tam — trvalý pobyt je jen jeden z důkazů. Finanční úřad se dívá
        i na to, kam ti chodí pošta, kde máš uzavřené smlouvy na energie a kde jsi reálně bydlel.
      </P>
      <P>
        U investičního bytu tahle cesta zpravidla nepřipadá v úvahu. Zmiňuju ji proto, že se
        hodí ve chvíli, kdy se rozhoduješ, který ze dvou bytů prodat.
      </P>

      <H2 id="bytova-potreba">Peníze použité na vlastní bydlení</H2>
      <P>
        Třetí cesta je záchranná brzda: i když test nesplníš, je příjem osvobozený, pokud získané
        prostředky <strong>použiješ na obstarání vlastní bytové potřeby</strong>.
      </P>
      <Seznam>
        <Polozka>
          <strong>Musí jít o tvou vlastní bytovou potřebu</strong>, ne o byt pro děti či rodiče
          a ne o další investiční byt.
        </Polozka>
        <Polozka>
          <strong>Použití je vázané lhůtami</strong> a musí se finančnímu úřadu oznámit.
          Tohle je bod, kde se vyplatí jedna konzultace s daňovým poradcem dřív, než podepíšeš
          kupní smlouvu — ne až v březnu při přiznání.
        </Polozka>
        <Polozka>
          <strong>Splacení hypotéky</strong> na vlastní bydlení se za bytovou potřebu považuje.
          Splacení hypotéky na pronajímaný byt ne.
        </Polozka>
      </Seznam>

      <H2 id="zaklad">Když osvobozený nejsi: jak se počítá daň</H2>
      <P>
        Neosvobozený příjem z prodeje nemovitosti patří mezi ostatní příjmy
        podle <Zakon>§ 10</Zakon>. Základem daně je rozdíl mezi příjmem a výdaji.
      </P>
      <Tabulka
        hlavicka={['Co se odečítá', 'Poznámka']}
        radky={[
          ['Kupní cena, za kterou jsi byt pořídil', 'u zděděného a darovaného se postupuje jinak'],
          ['Prokazatelně vynaložené náklady na opravy a údržbu', 'je třeba mít doklady'],
          ['Technické zhodnocení', 'rekonstrukce, která zvýšila hodnotu'],
          ['Náklady spojené s prodejem', 'provize, znalecký posudek, právní služby'],
          ['Zaplacené odpisy, pokud jsi je uplatňoval', 'snižují daňovou vstupní cenu — pozor na to'],
        ]}
      />
      <P>
        Poslední řádek je u investičních bytů podstatný. Pokud jsi byt
        <OdkazHeslo slug="odpis"> odpisoval</OdkazHeslo> a snižoval si tím daň z nájmu, při prodeji
        se to projeví — odečteš jen zůstatkovou cenu, ne celou pořizovací. Daňová úspora z odpisů
        se tak částečně vrací.
      </P>
      <P>
        Výsledek se zdaní sazbou podle tvého celkového základu: 15 %, nad zákonným limitem 23 %.
        Jednorázový prodej bytu přitom dokáže základ vyhnat do vyšší sazby — a to je přesně
        situace, kdy se vyplatí ptát se poradce dopředu.
      </P>

      <H2 id="chyby">Čtyři chyby, které stojí statisíce</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Počítat test od podpisu smlouvy.</strong> Počítá se od právních účinků vkladu.
          Pár týdnů rozhodne, jestli jsi uvnitř, nebo venku.
        </Polozka>
        <Polozka>
          <strong>Nevědět o budoucím prodeji.</strong> Zákon řeší i případ, kdy se prodej
          uskuteční až po uplynutí testu, ale <strong>smlouva o budoucím prodeji</strong> byla
          uzavřena dřív. Osvobození se na takový příjem nevztahuje. Posunout podpis rezervační
          smlouvy o dva měsíce tedy nemusí stačit.
        </Polozka>
        <Polozka>
          <strong>Zahodit doklady o rekonstrukci.</strong> Faktury za novou koupelnu snižují základ
          daně. Bez nich zaplatíš z celého rozdílu. Schovávej je po celou dobu držení.
        </Polozka>
        <Polozka>
          <strong>Zapomenout na oznámení osvobozeného příjmu.</strong> Osvobozený příjem nad
          5 milionů korun se finančnímu úřadu oznamuje podle <Zakon>§ 38v</Zakon>, i když se nedaní.
          Za nesplnění hrozí pokuta.
        </Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Dobrá zpráva na závěr: <strong>daň z nabytí nemovitých věcí už neexistuje.</strong>
          Zrušil ji zákon č. 386/2020 Sb. a kupující tedy ze čtyř procent z ceny neplatí nic.
          Pokud na ni někdo u prodeje upozorňuje, pracuje se zastaralými informacemi.
        </p>
      </Ramecek>

      <Ramecek druh="housio">
        <p>
          V Housiu máš u bytu pořizovací cenu, cenu rekonstrukce i přiložené faktury za opravy —
          tedy přesně to, co při prodeji odečítáš od příjmu. Export do Excelu z toho udělá
          podklad pro daňového poradce za pár vteřin místo večera nad šanony.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
