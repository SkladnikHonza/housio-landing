// Texty nabídky jiného jazyka.
//
// PROČ NE PŘES next-intl: pruh se zobrazuje v jazyce, který návštěvníkovi
// NABÍZÍME, ne v tom, ve kterém je zrovna stránka. Angličan na české stránce
// musí přečíst „This site is also available in English" — česká věta by mu
// byla k ničemu. Aktivní slovník next-intl ale drží jazyk stránky, takže
// nabízený jazyk z něj vzít nejde.
export const NABIDKA = {
  cs: { veta: 'Tato stránka je dostupná i v češtině.', tlacitko: 'Přepnout', zavrit: 'Zavřít' },
  en: { veta: 'This site is also available in English.', tlacitko: 'Switch', zavrit: 'Dismiss' },
  de: { veta: 'Diese Seite ist auch auf Deutsch verfügbar.', tlacitko: 'Wechseln', zavrit: 'Schließen' },
  it: { veta: 'Questo sito è disponibile anche in italiano.', tlacitko: 'Cambia', zavrit: 'Chiudi' },
  es: { veta: 'Esta web también está disponible en español.', tlacitko: 'Cambiar', zavrit: 'Cerrar' },
  uk: { veta: 'Цей сайт також доступний українською.', tlacitko: 'Перейти', zavrit: 'Закрити' },
  ru: { veta: 'Этот сайт также доступен на русском.', tlacitko: 'Перейти', zavrit: 'Закрыть' },
  fr: { veta: 'Ce site est aussi disponible en français.', tlacitko: 'Changer', zavrit: 'Fermer' },
  pl: { veta: 'Ta strona jest dostępna także po polsku.', tlacitko: 'Przełącz', zavrit: 'Zamknij' },
  hr: { veta: 'Ova stranica dostupna je i na hrvatskom.', tlacitko: 'Prebaci', zavrit: 'Zatvori' },
  sk: { veta: 'Táto stránka je dostupná aj v slovenčine.', tlacitko: 'Prepnúť', zavrit: 'Zavrieť' },
}

// Který z našich jazyků návštěvníkovi nabídnout — podle pořadí jazyků
// nastavených v prohlížeči. Vrací null, když je stránka už v jeho jazyce
// nebo když žádný z jeho jazyků neumíme.
//
// PAST: prohlížeč posílá i podoby jako „en-GB" nebo „pt-BR", takže se
// porovnává jen část před pomlčkou.
export function nabidnoutJazyk(jazykyProhlizece, aktualni, podporovane) {
  for (const polozka of jazykyProhlizece || []) {
    const zaklad = String(polozka).toLowerCase().split('-')[0]
    if (!podporovane.includes(zaklad)) continue
    // První srozumitelný jazyk rozhoduje. Když je to ten, ve kterém stránka
    // už je, nenabízíme nic — jinak bychom Čechovi s pořadím [cs, en]
    // vnucovali angličtinu.
    return zaklad === aktualni ? null : zaklad
  }
  return null
}
