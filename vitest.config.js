import { defineConfig } from 'vitest/config'
import path from 'node:path'

// Testy webu. Nejsou tu komponentové testy s prohlížečem — kontroluje se to,
// co se nejčastěji rozbíjí a co build neodhalí: adresy a metadata pro
// vyhledávače, úplnost překladů ve všech deseti jazycích, obsah průvodce
// a logika souhlasu s měřením.
export default defineConfig({
  // Stejny prevod JSX jako pouziva Next — bez toho testy hlasi „React is not defined".
  esbuild: { jsx: 'automatic' },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      // Články sahají přes prvky na navigaci next-intl, která v čistém Nodu
      // nejde načíst. Testy nic nevykreslují, takže stačí prázdná náhrada.
      'next/navigation': path.resolve(process.cwd(), 'src/test/next-navigation.js'),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.js'],
    server: {
      // next-intl se musí projít přes stejné překlady aliasů jako náš kód,
      // jinak si sáhne na skutečné `next/navigation` a import spadne.
      deps: { inline: ['next-intl'] },
    },
  },
})
