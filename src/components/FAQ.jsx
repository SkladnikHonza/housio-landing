'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Plus, Minus, Mail } from 'lucide-react'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div 
      className="rounded-2xl transition-all overflow-hidden"
      style={{ 
        background: isOpen ? 'var(--bg-clean)' : 'transparent',
        border: '1px solid',
        borderColor: isOpen ? 'rgba(216, 155, 95, 0.3)' : 'rgba(31, 78, 95, 0.1)',
      }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/40 transition cursor-pointer"
      >
        <span 
          className="text-base md:text-lg font-medium" 
          style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
        >
          {question}
        </span>
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition"
          style={{ background: isOpen ? 'var(--orange)' : 'rgba(31, 78, 95, 0.08)' }}
        >
          {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" style={{ color: 'var(--teal-900)' }} />}
        </div>
      </button>
      
      <div className="overflow-hidden transition-all" style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}>
        <p className="px-6 pb-5 text-base leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
    { q: t('q8'), a: t('a8') },
  ]

  return (
    <section id="faq" className="px-6 py-12 lg:py-16 scroll-mt-20" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center" style={{ background: 'var(--bg-clean)', border: '1px solid rgba(31, 78, 95, 0.08)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
            <Mail className="w-7 h-7" style={{ color: 'var(--orange)' }} />
          </div>
          <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('stillQuestions')}
          </h3>
          <p className="text-base mb-5" style={{ color: 'var(--olive-dark)' }}>
            {t('emailUs')}
          </p>
          <a 
            href="mailto:info@useuropegroup.cz"
            className="inline-flex items-center gap-2 text-base font-medium text-white px-7 py-3.5 rounded-xl hover:opacity-90 transition cursor-pointer"
            style={{ background: 'var(--teal-900)' }}
          >
            <Mail className="w-4 h-4" />
            {t('emailButton')}
          </a>
        </div>

      </div>
    </section>
  )
}
