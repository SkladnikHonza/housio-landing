import { Perex, Shrnuti, Obsah, H2, P, Seznam, Polozka, Ramecek, Tabulka, Zakon, OdkazClanek, OdkazKalkulacka, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'spolecny-najem',
  nadpis: 'Společný nájem: když je na smlouvě víc lidí a jeden z nich odejde',
  perex: 'Tři studenti na jedné smlouvě vypadají jako jistota — platí za sebe navzájem. Dokud jeden neodejde a zbylí dva neřeknou, že za něj platit nebudou. Co zákon opravdu říká a jak to ošetřit předem.',
  tema: 'smlouva',
  datum: '2026-10-07',
  minut: 8,
  sekce: [
    { id: 'co-to-je', nadpis: 'Co společný nájem znamená' },
    { id: 'dluh', nadpis: 'Kdo ti dluží, když jeden nezaplatí' },
    { id: 'odchod', nadpis: 'Jeden z nájemců chce odejít' },
    { id: 'vypoved', nadpis: 'Výpověď u společného nájmu' },
    { id: 'manzele', nadpis: 'Manželé jsou zvláštní případ' },
    { id: 'smlouva', nadpis: 'Co si ujednat předem' },
  ],
  faq: [
    {
      otazka: 'Můžu vymáhat celé nájemné po jednom ze společných nájemců?',
      odpoved: 'Jen pokud jste si solidární závazek ujednali ve smlouvě. Zákon říká, že společní nájemci mají stejná práva a povinnosti a že se přiměřeně použijí ustanovení o společnosti — z toho se dovozuje spíš dělený závazek. Bez výslovného ujednání tedy po jednom nájemci vymůžeš jeho podíl, ne celek.',
    },
    {
      otazka: 'Jak jeden ze společných nájemců vystoupí ze smlouvy?',
      odpoved: 'Dohodou všech stran, tedy dodatkem, který podepíšeš ty i všichni nájemci. Sám od sebe ze společného nájmu vystoupit nemůže — nájem je jeden a vztahuje se na všechny. Jednostranná výpověď ukončí nájem celý, ne jen jeho část.',
    },
    {
      otazka: 'Může nový spolubydlící přistoupit ke smlouvě?',
      odpoved: 'Ano. Zákon s tím výslovně počítá: společným nájemcem se stane i osoba, která se souhlasem stran přistoupí ke smlouvě. Prakticky to znamená dodatek podepsaný tebou i všemi stávajícími nájemci.',
    },
    {
      otazka: 'Komu vrátím kauci, když nájemci odcházejí postupně?',
      odpoved: 'Jistotu jsi přijal jednou a vracíš ji jednou, na konci nájmu. Komu přesně, si ujednej už ve smlouvě — jinak budeš na konci rozhodovat spor mezi lidmi, se kterými nemáš nic společného. Nejjednodušší je určit jeden účet pro vrácení.',
    },
    {
      otazka: 'Musím dát výpověď všem společným nájemcům?',
      odpoved: 'Ano. Nájem je jeden, takže výpověď musí být doručena každému z nich. Když jednomu doručena nebude, výpověď neplatí — a tříměsíční lhůta se počítá znovu až po řádném doručení všem.',
    },
    {
      otazka: 'Je společný nájem výhodnější než jeden nájemce a podnájemníci?',
      odpoved: 'Pro tebe zpravidla ano: máš smluvní vztah s každým, kdo v bytě bydlí, a každý z nich ručí za to, co užívá. U jednoho nájemce s podnájemníky máš vztah jen s ním a vše řešíš přes něj.',
    },
  ],
  zdroje: ['§ 2270 a § 2271 občanského zákoníku', '§ 745 a § 2272 občanského zákoníku'],
}

export default function SpolecnyNajem() {
  return (
    <>
      <Perex>
        Společný nájem vypadá jako pojistka — když jeden nezaplatí, doplatí to ostatní. Jenže to
        ze zákona samo od sebe neplyne. Musíš si to ujednat, a většina smluv to neřeší.
      </Perex>

      <Shrnuti>
        <li>Společný nájem vznikne, když smlouvu podepíše víc osob.</li>
        <li>Solidární závazek ze zákona neplyne — musí být ve smlouvě.</li>
        <li>Odejít může jeden nájemce jen dohodou, ne sám.</li>
        <li>Výpověď musí dostat každý z nich, jinak neplatí.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="co-to-je">Co společný nájem znamená</H2>
      <P>
        Podle <Zakon>§ 2270</Zakon> se společnými nájemci stanou všichni, kdo uzavřou nájemní
        smlouvu s pronajímatelem. Totéž platí o tom, kdo ke smlouvě později se souhlasem stran
        přistoupí. <Zakon>§ 2271</Zakon> k tomu dodává, že společní nájemci mají stejná práva
        a povinnosti a že se přiměřeně použijí ustanovení o společnosti.
      </P>
      <P>
        Podstatné je, co z toho <strong>neplyne</strong>: že by ti každý z nich dlužil celé
        nájemné. Z přiměřeného použití pravidel o společnosti se spíš dovozuje, že se podílejí
        rovným dílem. Když tedy tři studenti platí 21 000 Kč a jeden přestane posílat svých
        7 000 Kč, nemáš bez dalšího nárok žádat po zbylých dvou, aby to doplatili.
      </P>
      <Ramecek druh="pozor">
        <p>
          Tohle je nejčastější omyl u studentských bytů. Pronajímatel si myslí, že má tři dlužníky
          na celou částku, a ve skutečnosti má tři dlužníky na třetinu. Opravit to jde jedinou
          větou ve smlouvě — viz poslední kapitola.
        </p>
      </Ramecek>

      <H2 id="dluh">Kdo ti dluží, když jeden nezaplatí</H2>
      <Tabulka
        hlavicka={['', 'Bez ujednání ve smlouvě', 'Se solidárním závazkem']}
        radky={[
          ['Po kom vymáháš', 'po každém jeho podíl', 'po kterémkoli celou dlužnou částku'],
          ['Když jeden zmizí', 'jeho podíl vymáháš po něm', 'doplatí ostatní, ty neřešíš kdo'],
          ['Vypořádání mezi nájemci', 'netýká se tě', 'netýká se tě'],
          ['Jistota', 'pokrývá dluh všech dohromady', 'pokrývá dluh všech dohromady'],
        ]}
      />
      <P>
        Praktický rozdíl je obrovský a projeví se přesně ve chvíli, kdy jeden z nájemců
        přestane být k zastižení. Postup při dluhu popisuje
        článek <OdkazClanek slug="neplatici-najemnik">o neplatícím nájemníkovi</OdkazClanek> —
        u společného nájmu jen dvakrát zkontroluj, komu přesně výzvu posíláš.
      </P>

      <H2 id="odchod">Jeden z nájemců chce odejít</H2>
      <P>
        Tohle řeší u spolubydlení skoro každý. A zákon na to odpověď nemá — nájem je jeden
        a nedá se z něj „odhlásit“.
      </P>
      <Seznam cislovany>
        <Polozka>
          <strong>Dohoda všech stran.</strong> Jediná čistá cesta. Dodatek, ve kterém odcházející
          nájemce ze smlouvy vystupuje a zbylí v nájmu pokračují, podepsaný tebou i všemi.
          Co má dodatek obsahovat, rozebírá <OdkazClanek slug="dodatek-ke-smlouve">článek o dodatcích</OdkazClanek>.
        </Polozka>
        <Polozka>
          <strong>Přistoupení náhradníka.</strong> Nový spolubydlící se stane společným nájemcem,
          pokud se všichni dohodnou. Je to tentýž dodatek, jen o jeden podpis delší. Pozor na to,
          že nového nájemce si máš <OdkazClanek slug="provereni-najemnika">prověřit</OdkazClanek> stejně
          jako toho prvního — tohle není formalita.
        </Polozka>
        <Polozka>
          <strong>Nic nepodepíšeš.</strong> Pak odcházející nájemce zůstává nájemcem se vším všudy:
          dál mu běží povinnost platit a dál má právo byt užívat. To bývá nepříjemné pro všechny
          a obvykle to skončí výpovědí celého nájmu.
        </Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Tři nájemci, smlouva na dva roky. Po roce jeden odchází na Erasmus a chce ze smlouvy ven.
          Správně: dodatek, kde on vystupuje, nastupuje čtvrtý, a všichni čtyři plus ty ho
          podepíšou. Špatně: odcházející ti pošle e-mail „od září už tam nebydlím“. Tím se
          nestane nic — pořád je nájemce a pořád mu běží povinnosti ze smlouvy.
        </p>
      </Ramecek>

      <H2 id="vypoved">Výpověď u společného nájmu</H2>
      <P>
        Nájem je jeden, takže výpověď se týká všech. Z toho plynou dvě věci, na kterých padají
        výpovědi u soudu:
      </P>
      <Seznam>
        <Polozka>
          <strong>Doručit musíš každému.</strong> Nestačí hodit jednu obálku do schránky bytu.
          Každý společný nájemce musí výpověď dostat — a ty to musíš umět doložit.
          Nedoručíš-li jednomu, výpověď nevyvolá účinky vůbec.
        </Polozka>
        <Polozka>
          <strong>Výzva k nápravě taky každému.</strong> U výpovědi pro porušení povinnosti
          je předchozí písemná výzva podmínkou. Platí pro ni totéž.
          Podrobnosti v článku <OdkazClanek slug="vypoved-z-najmu">o výpovědi z nájmu</OdkazClanek>.
        </Polozka>
      </Seznam>
      <P>
        Výpovědní doba je i tady tři měsíce a běží od prvního dne měsíce následujícího po doručení
        — po doručení <strong>poslednímu</strong> z nájemců.
      </P>

      <H2 id="manzele">Manželé jsou zvláštní případ</H2>
      <P>
        U manželů se společný nájem řeší jinde. Uzavře-li nájemní smlouvu jeden z manželů za
        trvání manželství, vzniká podle <Zakon>§ 745</Zakon> společné nájemní právo oběma —
        i když je na smlouvě podepsaný jen jeden.
      </P>
      <P>
        Pro tebe to znamená, že druhý manžel je nájemcem, i když jsi ho nikdy neviděl: výpověď
        i výzvy musíš doručit oběma. Manželé si můžou ujednat jinak, ale takové ujednání musíš mít
        doložené, jinak budeš počítat s tím, že nájemci jsou dva.
      </P>

      <H2 id="smlouva">Co si ujednat předem</H2>
      <P>
        Společný nájem je pro tebe lepší než jeden nájemce s podnájemníky — máš vztah s každým,
        kdo v bytě bydlí. Stojí a padá ale se třemi větami ve smlouvě.
      </P>
      <Ramecek druh="vzor">
        <p>
          „Nájemci jsou zavázáni společně a nerozdílně; pronajímatel je oprávněn požadovat splnění
          celého dluhu po kterémkoli z nich. Změna v osobách nájemců, včetně přistoupení dalšího
          nájemce a vystoupení některého z nich, je možná pouze písemným dodatkem podepsaným všemi
          smluvními stranami. Jistota bude po skončení nájmu vrácena na účet č. … bez ohledu na to,
          kdo ji složil.“
        </p>
      </Ramecek>
      <Seznam>
        <Polozka>
          <strong>Solidární závazek</strong> je ta nejdůležitější. Bez ní vymáháš po každém jen
          jeho podíl.
        </Polozka>
        <Polozka>
          <strong>Změna jen dodatkem</strong> ti dá páku, abys nového spolubydlícího mohl prověřit
          dřív, než se stane nájemcem.
        </Polozka>
        <Polozka>
          <strong>Jeden účet pro vrácení jistoty.</strong> Jinak na konci nájmu rozhodneš spor,
          do kterého ti nic není. Jak se jistota vrací a co se z ní smí strhnout, rozebírá
          článek <OdkazClanek slug="jistota-kauce">o jistotě</OdkazClanek>; úrok, který k ní
          na konci nájmu přibude, spočítá <OdkazKalkulacka slug="urok-z-kauce">kalkulačka
          úroku z kauce</OdkazKalkulacka>.
        </Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš u jedné smlouvy všechny nájemníky i jejich kontakty, takže při výzvě nebo
          výpovědi víš, komu všemu se doručuje. Platby i jistota zůstávají u smlouvy, ne u jednoho
          člověka — a když se sestava spolubydlících změní, historie zůstává dohledatelná.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="7. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
