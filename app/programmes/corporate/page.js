'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, BarChart3, Lightbulb, GraduationCap, Handshake, Settings } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import { motion } from 'framer-motion'

const offerings = [
  {
    title: 'Microsoft 365 Workplace Programme',
    delivers: 'Immediately applicable digital productivity skills for your entire team, customisable to your needs.',
    icon: BarChart3,
  },
  {
    title: 'Digital Skills Programme (HEMISA)',
    delivers: 'Build digital fluency across your workforce, from foundation to intermediate competency.',
    icon: Lightbulb,
  },
  {
    title: 'Capacity Building for Certificate Programmes',
    delivers: 'Equip academic managers and lecturers for successful implementation of QCTO programmes.',
    icon: GraduationCap,
  },
  {
    title: 'B-BBEE Aligned Learnerships',
    delivers: 'SETA-compliant programmes that strengthen your scorecard and genuinely develop your people.',
    icon: Handshake,
  },
  {
    title: 'Bespoke Organisational Training',
    delivers: 'Custom training solutions designed around your specific sector, team, and transformation goals.',
    icon: Settings,
  },
]

const reasons = [
  { label: 'Accredited & Trusted', desc: 'ETDP SETA registered, QCTO and NEMISA aligned — real credentials that matter.' },
  { label: 'Community Rooted', desc: 'We understand the communities your employees come from, and the barriers they face.' },
  { label: 'Human Centred', desc: 'Training designed with dignity. Your employees will actually engage and remember it.' },
  { label: 'Measurable Outcomes', desc: 'We define success metrics upfront. You see the impact on performance, not just attendance.' },
]

export default function CorporatePage() {
  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/corporate-bg.png" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-950" />
        </div>
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Pillar Two — For Corporates
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Build the Workforce<br /><span className="text-gold-400">Your Business Deserves.</span>
            </h1>
            <p className="text-green-200 text-lg max-w-2xl leading-relaxed mb-8">
              Your people are your greatest competitive advantage — but only if they have the skills,
              the confidence, and the credentials to perform at the level your organisation needs.
            </p>
            <Link href="/contact#partner" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105">
              Request a Proposal <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* THE CASE */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="rounded-3xl overflow-hidden aspect-video bg-gray-100">
              <img src="/images/corporate-class.png" alt="Corporate Training" className="w-full h-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Why Azibuye?</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-6 leading-tight">
              More than training.<br />A partnership that transforms.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the pressures corporates face: B-BBEE scorecard requirements, SETA compliance,
              the need to demonstrate skills development that is more than box-ticking.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We have built our corporate offering specifically to address all of those needs, while
              delivering training that your employees will actually value and remember.
            </p>
            <blockquote className="border-l-4 border-gold-500 pl-6">
              <p className="text-green-800 font-bold text-lg italic leading-snug">
                "We don't measure success by the number of certificates we print. We measure it by
                what your people can do the day after they graduate."
              </p>
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Corporate Solutions</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-14">What We Deliver</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <SectionReveal key={o.title} delay={i * 0.08}>
                <div className="bg-cream-50 rounded-2xl p-7 border border-gray-100 hover:border-gold-500 hover:shadow-lg transition-all h-full group">
                  <o.icon className="w-10 h-10 text-green-800 mb-4 group-hover:text-gold-500 transition-colors" />
                  <h3 className="font-extrabold text-green-800 text-base mb-3 group-hover:text-gold-600 transition-colors">
                    {o.title}
                  </h3>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gold-500 mt-0.5 shrink-0" />
                    <p className="text-gray-500 text-sm leading-relaxed">{o.delivers}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-green-800 section-clip py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase text-center mb-3">Why Partner With Azibuye?</p>
            <h2 className="text-white text-4xl font-extrabold text-center mb-16">More Than Training</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <SectionReveal key={r.label} delay={i * 0.1}>
                <div className="bg-green-900/60 border border-green-700 rounded-2xl p-6 h-full">
                  <h3 className="text-gold-400 font-extrabold text-sm mb-3 uppercase tracking-wide">{r.label}</h3>
                  <p className="text-green-100 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-20 text-center">
        <SectionReveal>
          <h2 className="text-green-950 text-3xl md:text-4xl font-extrabold mb-4">
            Ready to invest in your people?
          </h2>
          <p className="text-green-900 mb-8 max-w-xl mx-auto">
            Request a proposal and we'll design a training solution around your specific goals.
          </p>
          <Link href="/contact#partner" className="bg-green-800 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-green-900 transition-all hover:scale-105">
            Request a Corporate Proposal <ArrowRight size={18} />
          </Link>
        </SectionReveal>
      </section>
    </>
  )
}
