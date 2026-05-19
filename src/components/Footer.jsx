import { useTranslations } from 'next-intl'
import { Home, Sparkles, ArrowRight } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <>
      <section className="px-6 py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, var(--bg-warm) 0%, var(--bg-clean) 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--orange)' }} />
            <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>{t('ctaBadge')}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}>
            {t('ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-8" style={{ color: 'var(--olive-dark)' }}>
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://housio.vercel.app/login" className="inline-flex items-center gap-2 text-base font-medium text-white px-8 py-4 rounded-xl hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--teal-900)' }}>
              {t('ctaPrimary')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:info@useuropegroup.cz" className="inline-flex items-center text-base font-medium px-8 py-4 rounded-xl bg-white hover:bg-white/80 transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
              {t('ctaContact')}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-16" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--orange)' }}>
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-inter-tight)' }}>
                  Housio
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {t('tagline')}
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com/housio.app" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/20 transition" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('productHeading')}</p>
              <ul className="space-y-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li><a href="#funkce" className="hover:text-white transition cursor-pointer">{t('productFeatures')}</a></li>
                <li><a href="#ceny" className="hover:text-white transition cursor-pointer">{t('productPricing')}</a></li>
                <li><a href="https://housio.vercel.app/login" className="hover:text-white transition cursor-pointer">{t('productLogin')}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('companyHeading')}</p>
              <ul className="space-y-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li><a href="mailto:info@useuropegroup.cz" className="hover:text-white transition cursor-pointer">{t('companyContact')}</a></li>
                <li><a href="https://instagram.com/housio.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition cursor-pointer">{t('companyInstagram')}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('legalHeading')}</p>
              <ul className="space-y-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li className="hover:text-white transition cursor-pointer">{t('legalTerms')}</li>
                <li className="hover:text-white transition cursor-pointer">{t('legalGdpr')}</li>
                <li className="hover:text-white transition cursor-pointer">{t('legalCookies')}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8" style={{ borderTop: '0.5px solid rgba(255,255,255,0.15)' }}>
            <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
