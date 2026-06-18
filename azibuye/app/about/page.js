'use client'
import SectionReveal from '@/components/SectionReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Human Dignity',
    desc: 'We treat every learner as a complete human being with a history, with potential, and with the right to be taken seriously.',
    color: 'bg-green-800',
  },
  {
    title: 'Ubuntu',
    desc: 'What we give to one learner ripples outward into their family, their community, their generation.',
    color: 'bg-gold-500',
  },
  {
    title: 'Excellence',
    desc: 'We hold our programmes, our facilitators, and our outcomes to the highest standards. Our accreditation is a promise, not a decoration.',
    color: 'bg-green-800',
  },
  {
    title: 'Integrity',
    desc: 'We operate transparently. Every learner and every corporate partner knows exactly what they are getting, why, and how.',
    color: 'bg-gold-500',
  },
]

const objectives = [
  'Deliver nationally accredited NQF Level 4 and Level 5 qualifications recognised across South Africa.',
  'Develop digital and workplace skills for employability.',
  'Strengthen professional standards in Early Childhood Development.',
  'Support workforce transformation through corporate training solutions.',
  'Advance digital literacy and future-ready competencies.',
  'Focus on community accountability by measuring success through life changes.',
]

const timeline = [
  { year: '2017', event: 'Recognised as Best Tourism Ambassador by Ugu District Municipality' },
  { year: '2022', event: 'Winner of the Standard Bank Top Women Gender Empowered Award' },
  { year: '2025', event: 'Completed PhD in Digital Transformation (Durban University of Technology)' },
  { year: '2026+', event: 'Expanding skills centres and impacting communities across South Africa' },
]

const founderAwards = [
  { title: 'Influential Woman of the Year', body: 'Nominated at the Woman Changing The World Global Awards, London, UK' },
  { title: 'Standard Bank Top Women Award', body: 'Winner of the 2022 Standard Bank Top Women Gender Empowered Award' },
  { title: 'Honorary Doctorate Nomination', body: 'Nominated in Leadership & Strategic Management — one of Africa\'s outstanding leaders' },
]

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-950" />
        </div>
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Overview</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              The Azibuye<br /><span className="text-gold-400">Story</span>
            </h1>
            <p className="text-green-200 text-lg max-w-2xl leading-relaxed">
              <em>Azibuye</em> comes from a Nguni word that means:{' '}
              <span className="text-gold-400 font-bold">Let them return. Come back. Reclaim what is yours.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="bg-green-800 rounded-3xl p-10 relative overflow-hidden">
              <span className="text-gold-400 text-8xl font-serif leading-none absolute top-6 left-6 opacity-30">"</span>
              <p className="text-white text-2xl font-bold leading-snug relative z-10 mt-6">
                Come back, reclaim what is yours.
              </p>
              <div className="mt-6 pt-6 border-t border-green-700">
                <p className="text-green-300 text-sm">The meaning behind our name</p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We chose that name deliberately because everything we do is an act of restoration.
              Every skill we teach, every certificate we issue, every learner who crosses our
              graduation stage is reclaiming something the system once tried to take from them:
              their right to be seen, valued and economically active.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We exist to open doors, build capabilities and create pathways to opportunities
              for South Africa's most deserving communities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 2, label: 'Enterprises Founded' },
                { n: 5, label: 'Advocacy Areas' },
                { n: 3, label: 'National Sector Impact' },
                { n: 9, label: 'Provinces — National Vision' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-3xl font-extrabold text-green-800">
                    <AnimatedCounter target={s.n} />
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Meet the Founder</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-14">Dr Maseru Mkhwane</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionReveal>
              <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-[4/5]">
                <img src="/images/founder.jpg" alt="Dr Maseru Mkhwane" className="w-full h-full object-cover" />
              </div>
            </SectionReveal>
            <div>
              <SectionReveal delay={0.1}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Digital Transformation Specialist', 'Social Entrepreneur', 'Community Builder'].map((tag) => (
                    <span key={tag} className="bg-green-800/10 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 mb-8">
                  {['PhD (Digital Transformation)', 'B Tech (Travel & Tourism)', 'ETDP SETA & QCTO Accredited Provider'].map((q) => (
                    <div key={q} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                      <span className="text-gray-600 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-6">
                  Recognised · Respected · Impactful
                </p>
                <div className="space-y-4 mb-8">
                  {founderAwards.map((a) => (
                    <div key={a.title} className="border-l-4 border-gold-500 pl-5">
                      <p className="font-bold text-green-800 text-sm">{a.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{a.body}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              {/* Timeline */}
              <SectionReveal delay={0.3}>
                <div className="relative pl-6 border-l-2 border-gray-100 space-y-6">
                  {timeline.map((t) => (
                    <div key={t.year} className="relative">
                      <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gold-500 border-4 border-white" />
                      <p className="text-gold-500 font-extrabold text-sm mb-1">{t.year}</p>
                      <p className="text-gray-600 text-sm">{t.event}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-green-800 section-clip py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M20 0L40 20L20 40L0 20z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionReveal>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase text-center mb-3">Our Foundation</p>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-16">Vision & Mission</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Vision',
                text: 'A South Africa in which every person, regardless of the postcode of their birth, has access to the education, skills, and dignity they need to build a life of meaning.',
              },
              {
                label: 'Our Mission',
                text: 'To deliver accredited, human-centred skills development that restores dignity, builds professional competence, and creates sustainable economic pathways for South Africa\'s most deserving communities.',
              },
            ].map((item) => (
              <SectionReveal key={item.label} delay={0.1}>
                <div className="bg-green-900/60 border border-green-700 rounded-2xl p-8">
                  <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">{item.label}</p>
                  <p className="text-white text-lg leading-relaxed">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream-50 section-clip-reverse py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold mb-4">These are not words on a wall.</h2>
            <p className="text-gray-500 mb-14 max-w-xl">They are the operating instructions for everything we do.</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex">
                  <div className={`w-2 shrink-0 ${v.color}`} />
                  <div className="p-7">
                    <h3 className="font-extrabold text-green-800 text-xl mb-2">{v.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Our Objectives</p>
            <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold mb-14 max-w-xl">What We're Here to Do</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="flex items-start gap-4 bg-cream-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white font-extrabold text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{obj}</p>
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
            We don't just train people.<br />We transform lives and build futures.
          </h2>
          <p className="text-green-900 mb-8 max-w-xl mx-auto">
            Join thousands of South Africans who chose to come back and reclaim what is theirs.
          </p>
          <Link href="/contact" className="bg-green-800 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-green-900 transition-all hover:scale-105">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </SectionReveal>
      </section>
    </>
  )
}
