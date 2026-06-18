'use client'
import Link from 'next/link'
import { ArrowRight, BookOpen, Monitor } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import { motion } from 'framer-motion'

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/programmes-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-950" />
        </div>
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Our Programmes</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Practical Skills.<br /><span className="text-gold-400">Real Impact.</span>
            </h1>
            <p className="text-green-200 text-lg max-w-2xl leading-relaxed">
              Our programmes are designed to equip you with relevant, in-demand skills that open
              doors to employment, entrepreneurship and lifelong growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3 text-center">Two Pathways. One Purpose.</p>
            <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold text-center mb-4">Choose Your Path</h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
              Azibuye Digital Technologies operates across two distinct but deeply connected divisions.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'For Youth & School Leavers',
                tag: 'PILLAR ONE',
                tagline: 'Because Potential Doesn\'t Expire.',
                desc: 'Practical, accredited programmes that unlock your potential and open doors to meaningful opportunities. If you are a young person ready to invest in your future, this is for you.',
                href: '/programmes/youth',
                bg: 'bg-green-800',
                cta: 'Explore Youth Programmes',
              },
              {
                icon: Monitor,
                title: 'For Corporates & Organisations',
                tag: 'PILLAR TWO',
                tagline: 'Build the Workforce Your Business Deserves.',
                desc: 'SETA-aligned training solutions that build capacity, drive transformation and strengthen your workforce. We understand B-BBEE requirements and compliance — and we deliver training that actually works.',
                href: '/programmes/corporate',
                bg: 'bg-gold-500',
                cta: 'Explore Corporate Solutions',
              },
            ].map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.15}>
                <div className={`${p.bg} rounded-3xl p-10 h-full flex flex-col`}>
                  <p className="text-white/60 font-bold text-xs tracking-widest uppercase mb-2">{p.tag}</p>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <p.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-white font-extrabold text-2xl mb-2">{p.title}</h3>
                  <p className="text-white/80 font-semibold italic mb-4">{p.tagline}</p>
                  <p className="text-white/70 leading-relaxed mb-8 flex-1">{p.desc}</p>
                  <Link href={p.href} className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all self-start">
                    {p.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
