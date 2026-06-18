'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import { motion } from 'framer-motion'

const programmes = [
  {
    title: 'Early Childhood Development',
    tag: 'NQF 4 & 5 · QCTO Accredited',
    opens: 'Become a qualified ECD practitioner and shape the minds of South Africa\'s youngest generation.',
    icon: '🧒',
  },
  {
    title: 'NEMISA Digital Skills Programme',
    tag: 'Active 2025–2027',
    opens: 'Build real digital literacy, from social media to coding basics, to compete in the digital economy.',
    icon: '💻',
  },
  {
    title: 'Microsoft 365 Productivity',
    tag: 'Youth & Corporate',
    opens: 'Master the tools every workplace uses — Word, Excel, Teams, Outlook, OneDrive and more.',
    icon: '📊',
  },
  {
    title: 'New Venture Creation',
    tag: 'Entrepreneurship',
    opens: 'Learn to start and run your own business with practical entrepreneurship skills.',
    icon: '🚀',
  },
  {
    title: 'Data Science & Software Development',
    tag: 'In Accreditation 2025–2026',
    opens: 'Step into the fastest-growing careers of the 21st century.',
    icon: '⚡',
  },
]

export default function YouthPage() {
  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/youth-bg.png" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 to-green-950" />
        </div>
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-green-800 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Pillar One — For Youth
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Because Potential<br /><span className="text-gold-400">Doesn't Expire.</span>
            </h1>
            <p className="text-green-200 text-lg max-w-2xl leading-relaxed mb-8">
              If you have just finished school, been job-hunting for months with nothing to show for it,
              or you have potential the world simply hasn't had the chance to see yet — this is for you.
            </p>
            <Link href="/contact#enrol" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105">
              Enrol Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Our Belief</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-6 leading-tight">
              Talent is equally distributed.<br />Opportunity is not.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Azibuye's youth division exists because we refuse to accept that a young South African's
              future should be determined by the quality of the school they attended, the suburb they
              grew up in, or the connections their family does or doesn't have.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our programmes are built on a simple but radical idea: that practical, accredited skills
              delivered in an environment where you feel respected and valued can change the trajectory
              of a person's entire life. We have seen it happen. We will keep making it happen.
            </p>
            <p className="text-gold-500 font-bold italic">"We are here to close that gap."</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden aspect-video bg-gray-100">
              <img src="/images/youth-class.png" alt="Youth in training" className="w-full h-full object-cover" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* PROGRAMME CARDS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Youth Programmes</p>
            <h2 className="text-green-800 text-4xl font-extrabold mb-14">What We Offer</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.08}>
                <div className="bg-cream-50 rounded-2xl p-7 border border-gray-100 hover:border-green-800 hover:shadow-lg transition-all h-full group">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <span className="text-xs font-bold text-gold-500 uppercase tracking-wide">{p.tag}</span>
                  <h3 className="font-extrabold text-green-800 text-lg mt-2 mb-3 group-hover:text-gold-600 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-gold-500 mt-0.5 shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{p.opens}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ENROL */}
      <section className="bg-green-800 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 zulu-border-green opacity-20" />
        <SectionReveal>
          <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-3">Ready to Start?</p>
          <h2 className="text-white text-4xl font-extrabold mb-4">
            Your Future Starts Here.
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Fill in the enquiry form and our team will be in touch within 24 hours.
          </p>
          <Link href="/contact#enrol" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105">
            Apply Now <ArrowRight size={18} />
          </Link>
        </SectionReveal>
      </section>
    </>
  )
}
