import { useTranslations } from 'next-intl'
import { User, Briefcase, Building2 } from 'lucide-react'

export default function Personae() {
  const t = useTranslations('personae')

  return (
    <section className="px-6 py-12 lg:py-16" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('title')}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Hobby */}
          <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-clean)' }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-warm)' }}>
              <User className="w-4 h-4 mr-1.5" style={{ color: 'var(--teal-900)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--teal-900)' }}>{t('p1Title')}</span>
            </div>
            <p className="text-sm font-medium mt-4 mb-2" style={{ color: 'var(--olive)' }}>{t('p1Subtitle')}</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
              {t('p1Desc')}
            </p>
          </div>

          {/* Investor - highlighted */}
          <div className="p-7 rounded-2xl relative" style={{ 
            background: 'var(--bg-clean)',
            border: '2px solid var(--orange)',
            boxShadow: '0 20px 50px rgba(216, 155, 95, 0.12)',
          }}>
            <div className="absolute -top-3 right-6 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'var(--orange)' }}>
              {t('p2Badge')}
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
              <Briefcase className="w-4 h-4 mr-1.5" style={{ color: 'var(--orange-dark)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>{t('p2Title')}</span>
            </div>
            <p className="text-sm font-medium mt-4 mb-2" style={{ color: 'var(--olive)' }}>{t('p2Subtitle')}</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
              {t('p2Desc')}
            </p>
          </div>

          {/* Profi */}
          <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-clean)' }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-warm)' }}>
              <Building2 className="w-4 h-4 mr-1.5" style={{ color: 'var(--teal-900)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--teal-900)' }}>{t('p3Title')}</span>
            </div>
            <p className="text-sm font-medium mt-4 mb-2" style={{ color: 'var(--olive)' }}>{t('p3Subtitle')}</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
              {t('p3Desc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
