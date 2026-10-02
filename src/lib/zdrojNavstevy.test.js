import { describe, it, expect } from 'vitest'
import { pridejZdroj, maZdroj } from './zdrojNavstevy'

const APP = 'https://www.housio.online/'

describe('předání zdroje do aplikace', () => {
  it('přenese utm parametry z kampaně', () => {
    const v = pridejZdroj(APP, '?utm_source=email-rijen&utm_medium=email')
    expect(v).toContain('utm_source=email-rijen')
    expect(v).toContain('utm_medium=email')
  })

  it('přenese partnerský kód, na kterém visí provize', () => {
    expect(pridejZdroj(APP, '?ref=MAKLER123')).toContain('ref=MAKLER123')
  })

  it('nezahodí parametry, které už cílová adresa má', () => {
    const v = pridejZdroj('https://www.housio.online/?plan=pro&billing=mesicne', '?utm_source=web')
    expect(v).toContain('plan=pro')
    expect(v).toContain('billing=mesicne')
    expect(v).toContain('utm_source=web')
  })

  it('odkaz vyhrává nad adresou stránky', () => {
    const v = pridejZdroj('https://www.housio.online/?ref=ZODKAZU', '?ref=ZESTRANKY')
    expect(v).toContain('ref=ZODKAZU')
    expect(v).not.toContain('ZESTRANKY')
  })

  it('bez parametrů nechá adresu beze změny', () => {
    expect(pridejZdroj(APP, '')).toBe(APP)
    expect(pridejZdroj(APP, '?neco=jineho')).toBe(APP)
  })

  it('nesmyslná adresa nic neshodí', () => {
    // Funkce se volá jen na odkazy do aplikace, ale nesmí spadnout ani na nesmysl.
    expect(() => pridejZdroj('', '?utm_source=x')).not.toThrow()
    expect(pridejZdroj('', '?utm_source=x')).toBe('')
    expect(() => pridejZdroj(null, '?utm_source=x')).not.toThrow()
    expect(() => pridejZdroj('https://www.housio.online/', 'tohle není dotaz')).not.toThrow()
  })

  it('pozná, kdy je vůbec co předávat', () => {
    expect(maZdroj('?utm_campaign=podzim')).toBe(true)
    expect(maZdroj('?ref=X')).toBe(true)
    expect(maZdroj('?plan=pro')).toBe(false)
    expect(maZdroj('')).toBe(false)
    expect(maZdroj(undefined)).toBe(false)
  })
})
