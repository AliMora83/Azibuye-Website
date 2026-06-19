'use client'
import SectionReveal from '@/components/SectionReveal'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

// Placeholder posts — replace with Sanity CMS data when integrated
const posts = [
  {
    title: 'Azibuye eSkills Launches New NEMISA Digital Skills Cohort',
    date: 'June 2025',
    category: 'News',
    excerpt: 'We are proud to announce the launch of our latest NEMISA Digital Skills cohort across three TVET colleges in KwaZulu-Natal, reaching over 200 new learners.',
    slug: 'nemisa-launch-2025',
  },
  {
    title: 'Dr Maseru Mkhwane Completes PhD in Digital Transformation',
    date: 'March 2025',
    category: 'Leadership',
    excerpt: 'Our founder and CEO has completed her doctorate at Durban University of Technology, further cementing Azibuye\'s commitment to academic excellence and community impact.',
    slug: 'ceo-phd-2025',
  },
  {
    title: 'Microsoft 365 Programme Expands to Coastal College',
    date: 'January 2025',
    category: 'Programmes',
    excerpt: 'Azibuye has extended its Microsoft 365 Workplace Productivity Programme to Coastal College, creating new pathways to digital employment for learners in the region.',
    slug: 'ms365-coastal-2025',
  },
  {
    title: 'What B-BBEE Aligned Training Really Means for Your Business',
    date: 'November 2024',
    category: 'Insight',
    excerpt: 'Beyond the scorecard — how genuine skills development creates lasting competitive advantage for South African businesses.',
    slug: 'bbbee-training-insight',
  },
]

const categories = ['All', 'News', 'Programmes', 'Leadership', 'Insight']

export default function MediaPage() {
  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Media & News</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Stories of<br /><span className="text-gold-400">Impact</span>
            </h1>
            <p className="text-green-200 text-lg max-w-xl">
              News, updates, insights and success stories from Azibuye Digital Technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filter */}
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((c) => (
                <button key={c}
                  className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                    c === 'All'
                      ? 'bg-green-800 text-white border-green-800'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-green-800 hover:text-green-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {posts.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-800 hover:shadow-lg transition-all group h-full flex flex-col">
                  <div className="bg-green-800 aspect-video flex items-center justify-center relative overflow-hidden">
                    <img src={`/images/media-${(i % 2) + 1}.png`} alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-extrabold text-green-800 text-xl mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-gold-500 font-bold text-sm">
                      Read more <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
