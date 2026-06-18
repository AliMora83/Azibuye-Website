'use client'
import SectionReveal from '@/components/SectionReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import { motion } from 'framer-motion'

const stats = [
  { value: 1000, suffix: '+', label: 'Learners Trained', desc: 'Real people with real qualifications.' },
  { value: 500, suffix: '+', label: 'Youth Empowered', desc: 'Young South Africans who reclaimed their future.' },
  { value: 10, suffix: '+', label: 'Community Projects', desc: 'Across KwaZulu-Natal and beyond.' },
  { value: 2, suffix: '', label: 'Skills Divisions', desc: 'Youth and Corporate — one purpose.' },
]

const partners = [
  { name: 'ETDP SETA', type: 'Accreditation' },
  { name: 'QCTO', type: 'Accreditation' },
  { name: 'NEMISA', type: 'Programme Partner' },
  { name: 'Durban University of Technology', type: 'Academic Partner' },
  { name: 'MUT', type: 'Academic Partner' },
  { name: 'Coastal KZN College', type: 'TVET Partner' },
  { name: 'Elangeni TVET College', type: 'TVET Partner' },
  { name: 'Umgungundlovu TVET College', type: 'TVET Partner' },
  { name: 'King Cetshwayo District Municipality', type: 'Government Partner' },
  { name: 'Vodacom', type: 'Corporate Partner' },
  { name: 'Huawei', type: 'Corporate Partner' },
  { name: 'iBMS', type: 'Research Partner' },
]

const accreditations = [
  {
    body: 'Training Practice Registration',
    detail: 'ETDP SETA (Education, Training & Development Practices)',
  },
  {
    body: 'Occupational Certificate: ECD Practitioner',
    detail: 'QCTO (Quality Council for Trades and Occupations) NQF Level 4',
  },
  {
    body: 'In Accreditation (2025–2026)',
    detail: 'Data Science Practitioner · Software Developer · End-User Computing · Coding & Robotics · New Venture Creation',
  },
  {
    body: 'Active Programmes (2025–2027)',
    detail: 'NEMISA Digital Skills — Umgungundlovu, King Cethwayo, Elangeni TVET Colleges; MS 365 — Coastal College',
  },
]

export default function ImpactPage() {
  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Our Impact</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Creating Opportunity<br /><span className="text-gold-400">Through Skills</span>
            </h1>
            <p className="text-green-200 text-lg max-w-2xl">
              We measure success by the lives we change and the communities we uplift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-extrabold text-gold-400 mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white font-bold text-sm mb-1">{s.label}</p>
                <p className="text-green-300 text-xs">{s.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Credentials & Accreditation</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-4">Qualifications You Can Trust</h2>
            <div className="bg-green-800 rounded-2xl p-6 mb-10 max-w-2xl">
              <p className="text-white font-semibold text-sm leading-relaxed">
                In South Africa's skills development landscape, accreditation is everything.
                It is the difference between a training certificate that means something and a piece of paper that means nothing.
                At Azibuye eSkills, our accreditation is the foundation of our promise to every learner and every client.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accreditations.map((a, i) => (
              <SectionReveal key={a.body} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-400 transition-colors">
                  <p className="font-bold text-green-800 mb-2">{a.body}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.detail}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Our Partners</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-4">Proudly Partnered</h2>
            <p className="text-gray-500 mb-14">Working with institutions, organisations and communities that share our vision.</p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <SectionReveal key={p.name} delay={i * 0.05}>
                <div className="bg-cream-50 rounded-2xl p-5 border border-gray-100 hover:border-green-800 transition-colors text-center">
                  <p className="font-bold text-green-800 text-sm mb-1">{p.name}</p>
                  <p className="text-gold-500 text-xs">{p.type}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
