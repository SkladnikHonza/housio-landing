'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function KontaktNav() {
  const t = useTranslations('kontaktNav')
  
  return (
    <nav className="px-6 py-6" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </Link>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition cursor-pointer"
          style={{ color: 'var(--teal-900)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToHome')}
        </Link>
        
      </div>
    </nav>
  )
}
