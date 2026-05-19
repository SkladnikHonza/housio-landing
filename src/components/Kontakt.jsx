'use client'

import { useTranslations } from 'next-intl'
import { Mail, ArrowRight, Clock, MapPin } from 'lucide-react'

export default function Kontakt() {
  const t = useTranslations('kontakt')

  return (
    <section className="px-6 py-16 lg:py-24" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* === HEADER === */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }}></span>
            <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>{t('badge')}</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}
          >
            {t('title')}
          </h1>
          
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        {/* === 3 KONTAKTNÍ MOŽNOSTI === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Email */}
          <a 
            href="mailto:info@useuropegroup.cz"
            className="block bg-white rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group"
            style={{ boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition"
              style={{ background: 'var(--orange)' }}
            >
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{t('emailTitle')}</p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('emailSubtitle')}</p>
            <p className="text-xs mt-2" style={{ color: 'var(--orange-dark)' }}>info@useuropegroup.cz</p>
          </a>
          
          {/* Facebook */}
          <a 
            href="https://facebook.com/housioapp"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group"
            style={{ boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition"
              style={{ background: '#1877F2' }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <p className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{t('facebookTitle')}</p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('facebookSubtitle')}</p>
            <p className="text-xs mt-2" style={{ color: 'var(--orange-dark)' }}>@housioapp</p>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://instagram.com/housio.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group"
            style={{ boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition"
              style={{ background: 'var(--olive)' }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <p className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{t('instagramTitle')}</p>
            <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('instagramSubtitle')}</p>
            <p className="text-xs mt-2" style={{ color: 'var(--orange-dark)' }}>@housio.app</p>
          </a>
          
        </div>

        {/* === FORMULÁŘ === */}
        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }}>
          
          <h2 
            className="text-2xl md:text-3xl font-medium text-center mb-2 tracking-tight"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {t('formTitle')}
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--olive-dark)' }}>
            {t('formSubtitle')}
          </p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(t('formAlert')); }}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                  {t('labelName')}
                </label>
                <input 
                  type="text"
                  placeholder={t('placeholderName')}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition"
                  style={{ background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid transparent' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                  {t('labelEmail')}
                </label>
                <input 
                  type="email"
                  placeholder={t('placeholderEmail')}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition"
                  style={{ background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid transparent' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                {t('labelMessage')}
              </label>
              <textarea 
                rows="5"
                placeholder={t('placeholderMessage')}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition resize-none"
                style={{ background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid transparent' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 text-base font-medium text-white py-4 rounded-xl hover:opacity-90 transition cursor-pointer"
              style={{ background: 'var(--teal-900)' }}
            >
              {t('submitButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
            
          </form>
        </div>

        {/* === FOOTER INFO === */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm" style={{ color: 'var(--olive-dark)' }}>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            {t('footerResponse')}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            {t('footerLocation')}
          </span>
        </div>
        
      </div>
    </section>
  )
}
