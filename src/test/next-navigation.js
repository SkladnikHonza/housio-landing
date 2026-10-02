// Náhrada za `next/navigation` v testech.
//
// Články importují prvky, které uvnitř sahají na navigaci next-intl, a ta
// v čistém Nodu nejde načíst. Testy nic nevykreslují — stačí jim, aby se
// moduly daly importovat, takže tady jsou jen prázdné funkce.
export function usePathname() { return '/' }
export function useRouter() { return { push() {}, replace() {}, refresh() {}, prefetch() {}, back() {}, forward() {} } }
export function useSearchParams() { return new URLSearchParams() }
export function useParams() { return {} }
export function redirect() {}
export function permanentRedirect() {}
export function notFound() {}
export function useSelectedLayoutSegment() { return null }
export function useSelectedLayoutSegments() { return [] }
export const ReadonlyURLSearchParams = URLSearchParams
