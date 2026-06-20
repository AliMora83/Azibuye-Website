'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Monitor, Briefcase, Users, User, ArrowRight, Star, ChevronDown } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import AnimatedCounter from '@/components/AnimatedCounter'

const stats = [
  { value: 1000, suffix: '+', label: 'Learners Trained' },
  { value: 500, suffix: '+', label: 'Youth Empowered' },
  { value: 10, suffix: '+', label: 'Community Projects' },
  { value: 9, suffix: '', label: 'Provinces Reached' },
]


const programmes = [
  { title: 'Early Childhood Development', tag: 'NQF 4 & 5', href: '/programmes/youth', color: 'bg-green-800' },
  { title: 'NEMISA Digital Skills', tag: 'Youth', href: '/programmes/youth', color: 'bg-green-800' },
  { title: 'Microsoft 365 Productivity', tag: 'Youth & Corporate', href: '/programmes/youth', color: 'bg-green-800' },
  { title: 'New Venture Creation', tag: 'Youth', href: '/programmes/youth', color: 'bg-gold-500' },
  { title: 'Data Science & Software Dev', tag: 'In Accreditation', href: '/programmes/youth', color: 'bg-green-800' },
  { title: 'Bespoke Corporate Training', tag: 'Corporate', href: '/programmes/corporate', color: 'bg-gold-500' },
]

const testimonials = [
  {
    quote: "Azibuye gave me a qualification the world could see. I went from unemployed to employed in 3 months.",
    name: "Zanele M.",
    role: "ECD Graduate, Durban",
  },
  {
    quote: "The Microsoft 365 programme transformed how our entire team works. Measurable ROI from day one.",
    name: "Corporate Partner",
    role: "HR Director, KwaZulu-Natal",
  },
  {
    quote: "I didn't just get a certificate. I got a career. Azibuye believed in me when I didn't believe in myself.",
    name: "Sibusiso K.",
    role: "Digital Skills Graduate",
  },
]

const partners = [
  'ETDP SETA', 'NEMISA', 'DUT', 'Coastal KZN College', 'Elangeni TVET College',
  'Umgungundlovu TVET College', 'QCTO', 'Vodacom', 'Huawei', 'King Cetshwayo District Municipality', 'iBMS',
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-green-950">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-950/40 to-green-950" />
        </motion.div>

        {/* Zulu pattern overlay top */}
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30 z-10" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              ETDP SETA Registered · NQF Accredited
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-6 max-w-4xl">
              Skills That<br />
              <span className="text-gold-400">Shape</span> Futures.
            </h1>
            <p className="text-green-200 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Accredited digital skills, workforce development and employability programmes
              designed for tomorrow's economy. <span className="text-gold-400 font-semibold">Come back. Reclaim what is yours.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/programmes/youth"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                Explore Programmes <ArrowRight size={18} />
              </Link>
              <Link
                href="/programmes/corporate"
                className="border-2 border-white/30 hover:border-gold-400 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="text-gold-400 w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── THREE PATHWAYS ─── */}
      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { label: 'Enrol', sub: 'Find your programme', href: '/programmes', color: 'text-gold-500' },
              { label: 'Partner', sub: 'Company Training Solutions', href: '/programmes/corporate', color: 'text-gold-500' },
              { label: 'Connect', sub: "Let's work together", href: '/contact', color: 'text-gold-500' },
            ].map(({ label, sub, href, color }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-4 px-8 py-5 hover:bg-cream-50 transition-colors group"
              >
                <div>
                  <p className={`font-bold text-base ${color} group-hover:underline`}>{label}</p>
                  <p className="text-gray-500 text-sm">{sub}</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-gold-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zulu Pattern Divider */}
      <div className="w-full h-12 bg-cream-50 bg-[url('/images/pattern.png')] bg-repeat-x bg-center bg-[length:auto_28px] relative z-10" />

      {/* ─── TWO PATHWAYS ─── */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 tracking-tight uppercase relative pb-4">
                Two Pathways. One Purpose.
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gold-500 rounded-full"></span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Youth Card */}
            <SectionReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl min-h-[460px] flex flex-col justify-between p-8 md:p-10 bg-green-950 group shadow-lg">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/youth-class.png"
                    alt="Youth Pathway"
                    fill
                    className="object-cover object-right opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-transparent z-10" />
                </div>

                <div className="relative z-20 flex flex-col h-full justify-between gap-12">
                  <div className="flex flex-col items-start">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                      <User className="text-white w-6 h-6" />
                    </div>
                    {/* Heading */}
                    <h3 className="text-white font-extrabold text-2xl md:text-3xl tracking-tight mb-4 uppercase leading-tight">
                      For Youth &<br />School Leavers
                    </h3>
                    {/* Paragraph */}
                    <p className="text-green-100/80 text-sm md:text-base leading-relaxed max-w-[280px] sm:max-w-[340px]">
                      Practical, accredited programmes that unlock your potential and open doors to meaningful opportunities.
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href="/programmes/youth"
                    className="bg-white hover:bg-green-50 text-green-950 font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-all self-start shadow-md text-sm group/btn"
                  >
                    Explore Youth Programmes
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SectionReveal>

            {/* Corporate Card */}
            <SectionReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl min-h-[460px] flex flex-col justify-between p-8 md:p-10 bg-[#a87520] group shadow-lg">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/corporate-class.png"
                    alt="Corporate Pathway"
                    fill
                    className="object-cover object-right opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a87520] via-[#a87520]/90 to-transparent z-10" />
                </div>

                <div className="relative z-20 flex flex-col h-full justify-between gap-12">
                  <div className="flex flex-col items-start">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                      <Briefcase className="text-white w-6 h-6" />
                    </div>
                    {/* Heading */}
                    <h3 className="text-white font-extrabold text-2xl md:text-3xl tracking-tight mb-4 uppercase leading-tight">
                      For Corporates &<br />Organisations
                    </h3>
                    {/* Paragraph */}
                    <p className="text-amber-50/80 text-sm md:text-base leading-relaxed max-w-[280px] sm:max-w-[340px]">
                      SETA-aligned training solutions that build capability, drive transformation and strengthen your workforce.
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href="/programmes/corporate"
                    className="bg-white hover:bg-amber-50 text-amber-950 font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-all self-start shadow-md text-sm group/btn"
                  >
                    Explore Corporate Solutions
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ─── STATS COUNTER SECTION ─── */}
      <section className="bg-green-800 section-clip py-28 relative overflow-hidden">
        <div className="absolute inset-0 zulu-border-green opacity-10" style={{ backgroundSize: '80px 22px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionReveal>
            <p className="text-gold-400 text-center font-bold text-xs tracking-widest uppercase mb-2">Our Impact</p>
            <h2 className="text-white text-center text-4xl md:text-5xl font-extrabold mb-16">
              Creating Opportunity<br />Through Skills
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 0.12}>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-extrabold text-gold-400 mb-2">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-green-200 font-semibold text-sm uppercase tracking-wide">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES GRID ─── */}
      <section className="bg-cream-50 section-clip-reverse py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-3">Our Programmes</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
                Practical Skills.<br />Real Impact.
              </h2>
              <Link href="/programmes" className="text-gold-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View all programmes <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmes.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.08}>
                <Link href={p.href}>
                  <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-800 hover:shadow-xl transition-all h-full">
                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${p.color} mb-4 inline-block`}>
                      {p.tag}
                    </span>
                    <h3 className="font-bold text-green-800 text-lg mt-3 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-1 text-gold-500 text-sm font-semibold">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-green-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-20" />
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <p className="text-gold-400 text-center font-bold text-xs tracking-widest uppercase mb-3">What People Say</p>
            <h2 className="text-white text-center text-4xl font-extrabold mb-14">
              We Don't Just Train People.<br />
              <span className="text-gold-400">We Transform Lives.</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.12}>
                <div className="bg-green-900/60 border border-green-800 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-green-100 text-base leading-relaxed flex-1 italic mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gold-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNER LOGO STRIP ─── */}
      <section className="bg-white py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <SectionReveal>
            <p className="text-center text-gray-400 text-xs font-bold tracking-widest uppercase">
              Accredited & Partnered With
            </p>
          </SectionReveal>
        </div>
        <div className="relative">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-14 items-center whitespace-nowrap"
          >
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-gray-400 font-bold text-sm tracking-wide uppercase">{p}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <p className="text-green-950 font-bold text-xs tracking-widest uppercase mb-4">Ready to Start?</p>
            <h2 className="text-green-950 text-4xl md:text-5xl font-extrabold mb-6">
              Let's Build Something That Lasts.
            </h2>
            <p className="text-green-900 text-lg mb-10 max-w-xl mx-auto">
              Whether you are a young person ready to unlock your future, or an organisation
              ready to invest in your people — Azibuye eSkills is ready for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact#enrol"
                className="bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                Enrol Today <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact#partner"
                className="bg-white/20 hover:bg-white/30 text-green-950 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
