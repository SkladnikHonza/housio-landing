'use client'

import { useState } from 'react'
import { Plus, Minus, Mail } from 'lucide-react'

const faqs = [
  {
    question: 'Jak funguje 14denní zkušební doba zdarma?',
    answer: 'Při registraci PRO nebo BUSINESS plánu nezadáváš žádnou platební kartu. Máš plný přístup ke všem funkcím na 14 dní zdarma. Po skončení trial si můžeš vybrat — pokračovat za 199 Kč/měs (PRO) nebo zůstat na bezplatném FREE plánu. Nikdy ti nic nestrhneme automaticky.',
  },
  {
    question: 'Můžu Housio kdykoli zrušit?',
    answer: 'Ano. Bez výpovědní lhůty, bez sankcí. Stačí v nastavení kliknout na "Zrušit předplatné" a do konce zaplaceného období můžeš dál používat. Tvoje data zůstanou bezpečně uložená — pokud se vrátíš, najdeš všechno na svém místě.',
  },
  {
    question: 'Jsou moje data v bezpečí?',
    answer: 'Housio běží na enterprise infrastruktuře (Supabase + Vercel) s evropskými servery. Všechna data jsou šifrovaná, automaticky zálohovaná a chráněná podle GDPR. Tvoje smlouvy a osobní údaje nájemníků jsou v bezpečí — nikdy je nesdílíme s třetími stranami.',
  },
  {
    question: 'V jakých zemích Housio funguje?',
    answer: 'Housio je navržené pro celou EU. Podporujeme češtinu, angličtinu a němčinu. Můžeš pracovat v CZK, EUR, PLN, CHF a dalších měnách. Ať jsi pronajímatel v Praze, Vídni, Berlíně nebo Varšavě — Housio ti rozumí.',
  },
  {
    question: 'Co když mám víc než 5 nemovitostí?',
    answer: 'PRO plán pokrývá až 5 nemovitostí za 199 Kč/měs. Pokud máš víc, BUSINESS plán (499 Kč/měs) ti dá neomezený počet nemovitostí + multi-user přístup pro tým, PDF výkazy a API. Pro správce s desítkami nemovitostí je to optimální volba.',
  },
  {
    question: 'Můžu Housio používat na mobilu?',
    answer: 'Ano. Housio je plně responzivní — funguje stejně dobře na mobilu, tabletu i desktopu. Bez nutnosti instalace aplikace. Stačí otevřít housio.app v prohlížeči, přihlásit se a máš všechno na jednom místě. Vše se synchronizuje v reálném čase.',
  },
  {
    question: 'Posíláte upozornění o končících smlouvách?',
    answer: 'Ano, automaticky. Housio tě upozorní emailem 30, 14 a 7 dní před koncem smlouvy. Nikdy nezapomeneš prodloužit a nepřijdeš o nájemníka. Stejně tak ti přijde notifikace o nezaplaceném nájmu nebo blížícím se konci pojištění.',
  },
  {
    question: 'Můžu data exportovat?',
    answer: 'Jasně. V BUSINESS plánu generuješ PDF výkazy pro účetní, banku nebo daňového poradce. Vše hotové za 10 sekund. Také máš API přístup pro napojení vlastních systémů. Tvoje data jsou vždy tvoje — žádný vendor lock-in.',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
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
          {faq.question}
        </span>
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition"
          style={{ background: isOpen ? 'var(--orange)' : 'rgba(31, 78, 95, 0.08)' }}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4" style={{ color: 'var(--teal-900)' }} />
          )}
        </div>
      </button>
      
      <div 
        className="overflow-hidden transition-all"
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p 
          className="px-6 pb-5 text-base leading-relaxed" 
          style={{ color: 'var(--olive-dark)' }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-6 py-12 lg:py-16 scroll-mt-20" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
            Časté otázky
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Vše co potřebuješ vědět.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            Nemůžeš najít odpověď? Napiš nám, rádi pomůžeme.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="rounded-2xl p-8 text-center"
          style={{ background: 'var(--bg-clean)', border: '1px solid rgba(31, 78, 95, 0.08)' }}
        >
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(216, 155, 95, 0.12)' }}
          >
            <Mail className="w-7 h-7" style={{ color: 'var(--orange)' }} />
          </div>
          <h3 
            className="text-xl md:text-2xl font-medium mb-2" 
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
          >
            Pořád máš otázky?
          </h3>
          <p className="text-base mb-5" style={{ color: 'var(--olive-dark)' }}>
            Napiš nám email a odpovíme zpravidla do 24 hodin.
          </p>
          <a 
            href="mailto:info@useuropegroup.cz"
            className="inline-flex items-center gap-2 text-base font-medium text-white px-7 py-3.5 rounded-xl hover:opacity-90 transition cursor-pointer"
            style={{ background: 'var(--teal-900)' }}
          >
            <Mail className="w-4 h-4" />
            Napsat na info@useuropegroup.cz
          </a>
        </div>

      </div>
    </section>
  )
}
