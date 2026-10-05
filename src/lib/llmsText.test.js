import { describe, it, expect } from 'vitest'
import { clanekNaText } from './llmsText'

describe('převod článku na text pro AI', () => {
  it('z nadpisů udělá markdown', () => {
    expect(clanekNaText('<h2 id="x">Kdy můžu zvýšit</h2>')).toBe('## Kdy můžu zvýšit')
    expect(clanekNaText('<h3>Podnadpis</h3>')).toBe('### Podnadpis')
  })

  it('odstraní obsah článku, protože je to navigace', () => {
    const html = '<nav aria-label="Obsah článku"><ol><li><a href="#a">Sekce</a></li></ol></nav><p>Text.</p>'
    expect(clanekNaText(html)).toBe('Text.')
  })

  it('ze seznamu udělá odrážky', () => {
    expect(clanekNaText('<ul><li>První</li><li>Druhý</li></ul>')).toBe('- První\n- Druhý')
  })

  it('tabulku převede na markdownovou tabulku', () => {
    const html = '<table><thead><tr><th>Lhůta</th><th>Co</th></tr></thead><tbody><tr><td>4 měsíce</td><td>doručit</td></tr></tbody></table>'
    expect(clanekNaText(html)).toBe('| Lhůta | Co |\n| --- | --- |\n| 4 měsíce | doručit |')
  })

  it('časté dotazy udělá jako otázku a odpověď', () => {
    const html = '<details><summary>Kolik smí být kauce?</summary><p>Nejvýše trojnásobek.</p></details>'
    expect(clanekNaText(html)).toBe('**Kolik smí být kauce?**\n\nNejvýše trojnásobek.')
  })

  it('dekóduje entity a nenechá v textu značky', () => {
    const v = clanekNaText('<p>Jistota &amp; pokuta, nejvýš 3&#215; nájemné</p>')
    expect(v).toBe('Jistota & pokuta, nejvýš 3× nájemné')
  })

  it('nenechá v textu žádnou HTML značku', () => {
    const v = clanekNaText('<section><p class="x" style="color:red">Text <span>uvnitř</span>.</p></section>')
    expect(v).toBe('Text uvnitř.')
    expect(v).not.toMatch(/<[a-z/]/i)
  })

  it('nespojí dvě věty bez mezery, když je mezi nimi značka', () => {
    expect(clanekNaText('<p>Platí <strong>§ 2249</strong> občanského zákoníku.</p>'))
      .toBe('Platí § 2249 občanského zákoníku.')
  })

  it('nenechá víc než jeden prázdný řádek za sebou', () => {
    expect(clanekNaText('<p>A</p><div></div><div></div><p>B</p>')).toBe('A\n\nB')
  })
})
