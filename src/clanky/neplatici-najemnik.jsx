import { Perex, Shrnuti, Obsah, H2, H3, P, Seznam, Polozka, Ramecek, Tabulka, OdkazClanek, CasteDotazy, Upozorneni } from '@/components/clanek/Prvky'

export const META = {
  slug: 'neplatici-najemnik',
  nadpis: 'Nájemník neplatí: postup krok za krokem od první upomínky po exekuci',
  perex: 'Co dělat hned první týden, kdy začít řešit výpověď, jak se počítá dluh za tři měsíce a čeho se vyvarovat, aby ses z poškozeného nestal tím, kdo porušuje právo.',
  tema: 'problemy',
  datum: '2026-10-01',
  minut: 9,
  sekce: [
    { id: 'tyden', nadpis: 'První týden: upomínka, ne mlčení' },
    { id: 'mesic', nadpis: 'Druhý měsíc: písemná výzva a splátkový kalendář' },
    { id: 'tri', nadpis: 'Tři měsíce dluhu: výpověď' },
    { id: 'jistota', nadpis: 'Kdy sáhnout na jistotu' },
    { id: 'soud', nadpis: 'Žaloba, platební rozkaz a exekuce' },
    { id: 'nesmis', nadpis: 'Co nesmíš dělat nikdy' },
    { id: 'prevence', nadpis: 'Jak tomu předejít u dalšího nájemníka' },
  ],
  faq: [
    {
      otazka: 'Od kolika měsíců dluhu můžu vypovědět bez výpovědní doby?',
      odpoved: 'Nezaplacení nájemného a nákladů na služby za dobu alespoň tří měsíců zákon výslovně označuje za zvlášť závažné porušení povinností. Dluh nemusí být za tři měsíce po sobě — rozhoduje jeho celková výše odpovídající třem platbám.',
    },
    {
      otazka: 'Musím před výpovědí poslat výzvu?',
      odpoved: 'U výpovědi bez výpovědní doby ano — nájemníka musíš vyzvat, aby protiprávní stav odstranil, tedy dluh zaplatil. Bez doložené výzvy soud výpověď zpravidla zruší.',
    },
    {
      otazka: 'Můžu dluh započíst proti jistotě ještě během nájmu?',
      odpoved: 'Jistota primárně zajišťuje dluhy při skončení nájmu. Pokud ji chceš použít dřív, musíš mít ve smlouvě ujednáno i to, že ji nájemník doplní — jinak zůstaneš bez zajištění do konce nájmu.',
    },
    {
      otazka: 'Vyplatí se dluh vymáhat soudně?',
      odpoved: 'U dluhu v řádu desítek tisíc většinou ano — soudní poplatek i náklady právního zastoupení hradí v případě úspěchu dlužník. Problém není rozsudek, ale vymahatelnost: u nemajetného dlužníka skončíš s pravomocným rozsudkem a bez peněz.',
    },
    {
      otazka: 'Můžu nájemníka vystěhovat sám, když mu skončil nájem?',
      odpoved: 'Ne. I po skončení nájmu je vystěhování věcí soudu a exekutora. Svépomocné vyklizení, výměna zámků nebo odpojení energií jsou protiprávní a vystavují tě náhradě škody.',
    },
  ],
  zdroje: ['§ 2288, § 2291 občanského zákoníku', 'zákon č. 99/1963 Sb., občanský soudní řád'],
}

export default function NeplaticiNajemnik() {
  return (
    <>
      <Perex>
        Nezaplacený nájem se neřeší sám a každý měsíc čekání stojí peníze. Dobrá zpráva je, že
        postup je docela přímočarý — jen se musí dodržet pořadí kroků, jinak ti výpověď spadne
        u soudu a začínáš znovu.
      </Perex>

      <Shrnuti>
        <li>Ozvi se hned první týden, ne po měsíci. Většina dluhů vzniká z nepořádku, ne ze zlé vůle.</li>
        <li>Všechno písemně a s doložením doručení — bez toho nemáš u soudu co předložit.</li>
        <li>Dluh ve výši tří měsíčních plateb je zvlášť závažné porušení, ale výzva k nápravě musí přijít dřív.</li>
        <li>Svépomocné vystěhování nebo odpojení energií z tebe udělá toho, kdo porušuje právo.</li>
      </Shrnuti>

      <Obsah sekce={META.sekce} />

      <H2 id="tyden">První týden: upomínka, ne mlčení</H2>
      <P>
        Platba nepřišla do tří dnů po splatnosti? Napiš. Ne výhrůžku, jen větu: platba za říjen
        nedorazila, posílám číslo účtu a variabilní symbol. Většina prvních výpadků je zapomenutý
        trvalý příkaz nebo změněná práce — a vyřeší se jedinou zprávou.
      </P>
      <Ramecek druh="pozor">
        <p>
          Měkký začátek neznamená neformální. I tahle upomínka patří do e-mailu nebo SMS, ne jen
          do telefonu. Potřebuješ později doložit, že jsi na dluh upozorňoval opakovaně.
        </p>
      </Ramecek>

      <H2 id="mesic">Druhý měsíc: písemná výzva a splátkový kalendář</H2>
      <P>
        Když dluh přeteče do druhého měsíce, přitvrď formu. Pošli doporučeně nebo datovou schránkou
        výzvu k úhradě, která obsahuje:
      </P>
      <Seznam>
        <Polozka>rozpis dluhu po měsících a položkách (nájemné, zálohy),</Polozka>
        <Polozka>celkovou částku a číslo účtu,</Polozka>
        <Polozka>lhůtu k úhradě — rozumných 10 až 15 dnů,</Polozka>
        <Polozka>upozornění, že při nezaplacení přistoupíš k ukončení nájmu a vymáhání.</Polozka>
      </Seznam>
      <P>
        Pokud nájemník komunikuje a má reálný plán, splátkový kalendář se vyplatí — písemně,
        s přesnými termíny a s ujednáním, že při nedodržení je celý dluh splatný najednou.
        Soud i exekuce stojí čas, který nemáš.
      </P>

      <H2 id="tri">Tři měsíce dluhu: výpověď</H2>
      <Tabulka
        hlavicka={['Situace', 'Co můžeš', 'Co musí předcházet']}
        radky={[
          ['Dluh 1–2 měsíce', 'výzva, splátkový kalendář', 'nic'],
          ['Dluh 3 měsíce a víc', 'výpověď bez výpovědní doby', 'prokazatelná výzva k nápravě'],
          ['Opakované pozdní platby', 'výpověď s tříměsíční dobou pro hrubé porušení', 'doložené upomínky'],
        ]}
      />
      <P>
        Dluh odpovídající třem měsíčním platbám nájemného a služeb zákon výslovně označuje za
        zvlášť závažné porušení povinností. I tak ale musí nejdřív přijít výzva, aby nájemník
        protiprávní stav odstranil. Náležitosti výpovědi — hlavně to poučení, bez kterého je
        neplatná — rozebírám
        v článku <OdkazClanek slug="vypoved-z-najmu">o výpovědi z nájmu</OdkazClanek>.
      </P>

      <H2 id="jistota">Kdy sáhnout na jistotu</H2>
      <P>
        Jistota se zpravidla započítává při skončení nájmu. Použít ji dřív jde jen tehdy, když to
        máš ve smlouvě ujednáno včetně povinnosti nájemníka jistotu doplnit. Jinak si zajištění
        spotřebuješ v polovině problému a do konce nájmu už nic nemáš.
      </P>
      <P>
        Jak se jistota vyúčtovává a co z ní smíš strhnout, najdeš
        v článku <OdkazClanek slug="jistota-kauce">o kauci</OdkazClanek>.
      </P>

      <H2 id="soud">Žaloba, platební rozkaz a exekuce</H2>
      <Seznam cislovany>
        <Polozka>
          <strong>Předžalobní výzva.</strong> Posílá se nejméně 7 dnů před podáním žaloby. Bez ní
          riskuješ, že ti soud nepřizná náhradu nákladů řízení.
        </Polozka>
        <Polozka>
          <strong>Žaloba na zaplacení.</strong> U jasného dluhu doloženého smlouvou a výpisy soud
          často vydá platební rozkaz bez jednání.
        </Polozka>
        <Polozka>
          <strong>Žaloba na vyklizení</strong>, pokud se nájemník po skončení nájmu nevystěhoval.
          Obvykle se podává spolu s žalobou na zaplacení.
        </Polozka>
        <Polozka>
          <strong>Exekuce</strong> po nabytí právní moci — srážky ze mzdy, účet, movité věci,
          případně vyklizení bytu.
        </Polozka>
      </Seznam>
      <Ramecek druh="pozor">
        <p>
          Počítej s tím, že od první nezaplacené platby po vyklizení uplyne klidně rok. Proto se
          vyplatí reagovat hned a nenechat dluh narůst do výše, kterou už nájemník nikdy nesplatí.
        </p>
      </Ramecek>

      <H2 id="nesmis">Co nesmíš dělat nikdy</H2>
      <Seznam>
        <Polozka><strong>Vyměnit zámek</strong> nebo jinak zabránit nájemníkovi ve vstupu.</Polozka>
        <Polozka><strong>Odpojit vodu, teplo nebo elektřinu.</strong></Polozka>
        <Polozka><strong>Vystěhovat věci</strong> nebo je zadržet jako „zástavu“.</Polozka>
        <Polozka><strong>Vstoupit do bytu bez souhlasu</strong> mimo havárii.</Polozka>
        <Polozka><strong>Zveřejnit dluh</strong> sousedům nebo zaměstnavateli.</Polozka>
      </Seznam>
      <P>
        Každý z těchto kroků z tebe udělá toho, kdo porušuje právo — a dlužník, který měl prohrát,
        najednou má nárok na náhradu škody.
      </P>

      <H2 id="prevence">Jak tomu předejít u dalšího nájemníka</H2>
      <Seznam>
        <Polozka><strong>Jistota v plné výši</strong>, kterou zákon dovoluje.</Polozka>
        <Polozka><strong>Splatnost na začátku měsíce</strong>, ne na konci — získáš měsíc náskoku.</Polozka>
        <Polozka><strong>Variabilní symbol pro každý byt</strong>, ať je jasné, kdo zaplatil.</Polozka>
        <Polozka><strong>Kontrola platby ve stejný den každý měsíc</strong> — ne jednou za čtvrt roku.</Polozka>
        <Polozka><strong>Doklady o příjmu</strong> před podpisem a ověření v insolvenčním rejstříku, který je veřejný a zdarma.</Polozka>
      </Seznam>

      <Ramecek druh="housio">
        <p>
          Housio ukazuje u každého měsíce rozdíl mezi předpisem a tím, co doopravdy přišlo, takže
          nezaplacený měsíc vidíš hned, ne až při hledání v bance. Když dojde na výzvu nebo žalobu,
          vytáhneš dluh rozepsaný měsíc po měsíci jedním exportem.
        </p>
      </Ramecek>

      <CasteDotazy dotazy={META.faq} />
      <Upozorneni aktualizovano="1. 10. 2026" zdroje={META.zdroje} />
    </>
  )
}
