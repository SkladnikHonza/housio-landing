import { describe, it, expect } from 'vitest'
import { nabidnoutJazyk, NABIDKA } from './nabidkaJazyka'
import { routing } from '@/i18n/routing'

const L = routing.locales

describe('koho oslovit nabídkou jiného jazyka', () => {
  it('Angličanovi na české stránce nabídne angličtinu', () => {
    expect(nabidnoutJazyk(['en-US', 'en'], 'cs', L)).toBe('en')
  })

  it('Čechovi na české stránce nenabídne nic', () => {
    expect(nabidnoutJazyk(['cs-CZ', 'cs'], 'cs', L)).toBeNull()
  })

  // Čech, který má v prohlížeči i angličtinu, nechce být přepnutý do angličtiny.
  it('rozhoduje první srozumitelný jazyk, ne jakákoli shoda', () => {
    expect(nabidnoutJazyk(['cs-CZ', 'en-US'], 'cs', L)).toBeNull()
    expect(nabidnoutJazyk(['en-US', 'cs-CZ'], 'cs', L)).toBe('en')
  })

  it('jazyky, které neumíme, se přeskočí', () => {
    expect(nabidnoutJazyk(['ja-JP', 'ko-KR', 'de-AT'], 'cs', L)).toBe('de')
    expect(nabidnoutJazyk(['ja-JP', 'ko-KR'], 'cs', L)).toBeNull()
  })

  it('regionální podoby se poznají podle části před pomlčkou', () => {
    expect(nabidnoutJazyk(['en-GB'], 'cs', L)).toBe('en')
    expect(nabidnoutJazyk(['DE-ch'], 'cs', L)).toBe('de')
  })

  it('na anglické stránce nenabízí znovu angličtinu, ale češtinu ano', () => {
    expect(nabidnoutJazyk(['en-US'], 'en', L)).toBeNull()
    expect(nabidnoutJazyk(['cs-CZ'], 'en', L)).toBe('cs')
  })

  it('prázdný nebo chybějící seznam nespadne', () => {
    expect(nabidnoutJazyk([], 'cs', L)).toBeNull()
    expect(nabidnoutJazyk(undefined, 'cs', L)).toBeNull()
  })

  // Pruh bez textu by byl horší než žádný pruh.
  it('text existuje pro každý jazyk, který umíme', () => {
    for (const lng of L) {
      expect(NABIDKA[lng], lng).toBeDefined()
      expect(NABIDKA[lng].veta.length, lng).toBeGreaterThan(10)
      expect(NABIDKA[lng].tlacitko, lng).toBeTruthy()
      expect(NABIDKA[lng].zavrit, lng).toBeTruthy()
    }
  })
})
