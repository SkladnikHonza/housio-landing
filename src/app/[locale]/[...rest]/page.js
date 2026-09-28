import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

// Zachytna cesta pro adresy, ktere na webu nejsou (napr. /cenik nebo /en/blog).
// Bez ni by Next u nepoznane adresy vypsal svou vlastni holou 404 — tady misto
// toho spustime notFound(), takze se vykresli [locale]/not-found.js v jazyce,
// ve kterem clovek prisel.
export default async function NeznamaCesta({ params }) {
  const { locale } = await params
  if (hasLocale(routing.locales, locale)) setRequestLocale(locale)
  notFound()
}
