import { Perex, H2, H3, P, Seznam, Polozka, Ramecek, Upozorneni } from '@/components/clanek/Prvky'

export default function EvidencniList() {
  return (
    <>
      <Perex>
        Evidenční list nájemného dnes nemá oporu v zákoně — pochází z dob regulovaného nájemného.
        Přesto ho spousta pronajímatelů používá dál a má to dobrý důvod: je to jediná příloha
        smlouvy, která se dá měnit bez dodatku.
      </Perex>

      <H2>Co to je a proč ho vést</H2>
      <P>
        Evidenční list je jednostránkový přehled, kde je u konkrétního bytu rozepsané nájemné,
        jednotlivé zálohy na služby a počet osob, podle kterých se zálohy počítají. Nájemní smlouva
        na něj odkazuje a tím se stává její součástí.
      </P>
      <P>
        Výhoda je praktická. Když se změní cena vody nebo se do bytu nastěhuje další osoba, nemusíš
        podepisovat dodatek ke smlouvě — vystavíš nový evidenční list s datem účinnosti, pošleš ho
        nájemníkovi a máš doloženo, odkdy platí jaké zálohy.
      </P>

      <Ramecek druh="pozor">
        <p>
          Aby to fungovalo, musí být ve smlouvě věta, že výše záloh se stanovuje evidenčním listem
          a že ji pronajímatel může změnit písemným oznámením. Bez toho je nový evidenční list jen
          papír a změnu je potřeba udělat dodatkem.
        </p>
      </Ramecek>

      <H2>Co v něm má být</H2>
      <Seznam>
        <Polozka><strong>Označení bytu</strong> — adresa, číslo jednotky, podlahová plocha.</Polozka>
        <Polozka><strong>Nájemník</strong> a počet osob užívajících byt.</Polozka>
        <Polozka><strong>Nájemné</strong> jako samostatná položka.</Polozka>
        <Polozka><strong>Zálohy na jednotlivé služby</strong> rozepsané zvlášť — ne jedna souhrnná částka.</Polozka>
        <Polozka><strong>Celková měsíční platba</strong> a datum splatnosti.</Polozka>
        <Polozka><strong>Datum účinnosti</strong> a podpisy obou stran.</Polozka>
      </Seznam>
      <P>
        Rozepsané zálohy jsou důležitější, než se zdá. Když je v listu jen „zálohy 4 000 Kč“,
        nemáš z čeho vyjít při vyúčtování a nájemník má právo se ptát, kolik z toho šlo na teplo.
      </P>

      <Ramecek druh="priklad">
        <p><strong>Evidenční list k 1. 1. 2026 — byt 2+kk, Opavská 3, Krnov, 2 osoby</strong></p>
        <p>
          Nájemné 20 000 · teplo 1 800 · teplá voda 800 · studená voda 600 · elektřina společných
          prostor 150 · odpad 200 · výtah a úklid 450
        </p>
        <p>
          Celkem měsíčně <strong>24 000 Kč</strong>, splatné k 15. dni měsíce.
          Zálohy odpovídají vyúčtování za rok 2025 navýšenému o 8 %.
        </p>
      </Ramecek>

      <H2>Kdy ho vystavit znovu</H2>
      <Seznam>
        <Polozka>po ročním vyúčtování, když zálohy zjevně nestačí nebo jsou naopak zbytečně vysoké,</Polozka>
        <Polozka>při změně počtu osob v bytě,</Polozka>
        <Polozka>při změně ceny od dodavatele nebo změně záloh předepsaných společenstvím vlastníků,</Polozka>
        <Polozka>při změně nájemného — tam ale pozor, zvýšení nájemného má vlastní pravidla a evidenční list je jen zapisuje.</Polozka>
      </Seznam>

      <H3>Jak ho doručit</H3>
      <P>
        Stačí písemně, ale ať máš doklad — doporučeně, datovou schránkou nebo proti podpisu
        na druhém výtisku. Dej nájemníkovi rozumný čas, typicky od začátku dalšího měsíce,
        ne zpětně.
      </P>

      <Ramecek druh="housio">
        <p>
          V Housiu zapisuješ nájemné a jednotlivé zálohy u nemovitosti jako šablonu nájmu. Z té se
          skládá předpis pro každý měsíc, takže evidenční list i vyúčtování stojí na stejných
          číslech jako měsíční platby. Když zálohy změníš, platí nové od data, které zadáš —
          starší měsíce zůstanou tak, jak byly doopravdy.
        </p>
      </Ramecek>

      <Upozorneni aktualizovano="1. 10. 2026" />
    </>
  )
}
