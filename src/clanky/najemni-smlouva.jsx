import { Perex, H2, H3, P, Seznam, Polozka, Ramecek, Zakon, Upozorneni } from '@/components/clanek/Prvky'

export default function NajemniSmlouva() {
  return (
    <>
      <Perex>
        Nájemní smlouva na byt nemusí být složitá. Musí ale mít několik věcí, bez kterých se dohoda
        těžko prokazuje — a nesmí obsahovat ujednání, která zákon prostě nebere v potaz, i když je
        nájemník podepíše.
      </Perex>

      <H2>Co ve smlouvě musí být</H2>
      <P>
        Nájem bytu upravuje <Zakon>§ 2235 a násl. občanského zákoníku</Zakon> a smlouva musí být
        písemná. Minimum, bez kterého se neobejdeš, je tohle:
      </P>
      <Seznam>
        <Polozka>
          <strong>Smluvní strany.</strong> Jméno, datum narození a adresa trvalého pobytu
          u obou stran. U pronajímatele firmy název, IČO a sídlo.
        </Polozka>
        <Polozka>
          <strong>Předmět nájmu.</strong> Přesné označení bytu — číslo jednotky, adresa, podlaží,
          dispozice a co k bytu patří (sklep, parkovací stání, vybavení).
        </Polozka>
        <Polozka>
          <strong>Nájemné.</strong> Konkrétní částka, nebo alespoň způsob, jak se určí. Pozor, že
          nájemné a zálohy na služby jsou dvě různé věci a je lepší je uvádět odděleně.
        </Polozka>
        <Polozka>
          <strong>Služby a zálohy.</strong> Které služby zajišťuješ ty, jaké jsou zálohy a jak se
          budou vyúčtovávat.
        </Polozka>
        <Polozka>
          <strong>Doba nájmu.</strong> Na dobu určitou s konkrétním datem, nebo na dobu neurčitou.
          Když ve smlouvě chybí, platí nájem na dobu neurčitou.
        </Polozka>
        <Polozka>
          <strong>Splatnost a způsob placení.</strong> K jakému dni a na jaký účet.
        </Polozka>
      </Seznam>
      <P>
        Co doporučuju přidat, i když to zákon nevyžaduje: stav měřidel při předání, předávací
        protokol s fotkami, počet osob, které budou byt užívat, a kontakt pro havárie.
      </P>

      <H2>Jistota (kauce) a smluvní pokuta</H2>
      <P>
        Jistotu zákon dovoluje, ale omezuje její výši. Podle <Zakon>§ 2254</Zakon> smí jistota spolu
        se smluvní pokutou dohromady dosáhnout nanejvýš trojnásobku měsíčního nájemného.
      </P>
      <Seznam>
        <Polozka>Jistotu si nemůžeš nechat jen tak — při skončení nájmu ji vracíš, snížit ji smíš o to, co ti nájemník dluží.</Polozka>
        <Polozka>Z jistoty hradíš dluhy na nájemném, na službách i škodu nad rámec běžného opotřebení.</Polozka>
        <Polozka>Nájemník má právo na úroky z jistoty od jejího poskytnutí.</Polozka>
      </Seznam>
      <Ramecek druh="priklad">
        <p>
          Nájemné 20 000 Kč. Jistota i případná smluvní pokuta dohromady tedy nesmí přesáhnout
          <strong> 60 000 Kč</strong>. Když si vezmeš jistotu 50 000 Kč, na smluvní pokuty ti zbývá
          prostor 10 000 Kč.
        </p>
      </Ramecek>

      <H2>Co do smlouvy nepatří</H2>
      <P>
        Zákon na některá ujednání nehledí, i když jsou podepsaná. Nájemce se předem nemůže vzdát
        práv, která mu zákon dává. V praxi jde nejčastěji o tohle:
      </P>
      <Seznam>
        <Polozka>Zákaz přihlásit si v bytě trvalý pobyt.</Polozka>
        <Polozka>Zákaz přijmout do domácnosti nového člena — u blízkých osob to zakázat nejde, jen můžeš požadovat souhlas u ostatních a sjednat maximální počet osob.</Polozka>
        <Polozka>Vzdání se práva na náhradu nákladů, které nájemník vynaložil na nutné opravy.</Polozka>
        <Polozka>Výpovědní důvody nad rámec zákona nebo kratší výpovědní doba, než zákon dovoluje.</Polozka>
        <Polozka>Pokuty za drobnosti ve výši, která přesahuje spolu s jistotou trojnásobek nájemného.</Polozka>
      </Seznam>

      <H2>Skončení nájmu</H2>
      <H3>Nájem na dobu určitou</H3>
      <P>
        Skončí uplynutím doby. Pozor na automatické prodloužení: když nájemník bydlí dál alespoň
        tři měsíce po skončení a ty ho písemně nevyzveš, aby byt opustil, nájem se obnovuje na
        stejnou dobu, nejvýše ale na dva roky.
      </P>
      <H3>Nájem na dobu neurčitou</H3>
      <P>
        Nájemník může vypovědět bez udání důvodu s tříměsíční výpovědní dobou. Ty jako pronajímatel
        potřebuješ zákonný důvod — typicky hrubé porušení povinností, neplacení ve výši trojnásobku
        nájemného, nebo potřeba bytu pro sebe či blízkou osobu. Výpověď musí být písemná, musí
        obsahovat důvod a poučení o právu podat námitky k soudu.
      </P>
      <Ramecek druh="pozor">
        <p>
          Výpověď bez uvedeného důvodu a bez poučení soud zruší, i když nájemník opravdu neplatí.
          Vyplatí se mít na výpověď šablonu a držet se jí.
        </p>
      </Ramecek>

      <H2>Předání bytu</H2>
      <P>
        Předávací protokol není zákonná povinnost, ale je to nejlevnější pojistka, jakou máš.
        Zapiš do něj datum, stav měřidel, počet předaných klíčů, stav vybavení a přiložte fotky.
        Bez něj se po roce špatně dokazuje, že škrábanec na dveřích tam nebyl.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu vedeš smlouvy u konkrétní nemovitosti i nájemníka — včetně data podpisu, platnosti,
          jistoty a rozpisu nájemného a záloh. Na končící smlouvy upozorní nástěnka dopředu, takže
          nájem na dobu určitou nepřejde do automatického prodloužení jen proto, že se na něj zapomnělo.
        </p>
      </Ramecek>

      <Upozorneni aktualizovano="1. 10. 2026" />
    </>
  )
}
