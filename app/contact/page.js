'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import emailjs from '@emailjs/browser'

// ─── Replace these with your real EmailJS credentials ───
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_ENROL_TID   = process.env.NEXT_PUBLIC_EMAILJS_ENROL_TEMPLATE_ID || 'YOUR_ENROL_TEMPLATE_ID'
const EMAILJS_PARTNER_TID = process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID || 'YOUR_PARTNER_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────

const programmes = [
  'Early Childhood Development (NQF 4)',
  'Early Childhood Development (NQF 5)',
  'NEMISA Digital Skills Programme',
  'Microsoft 365 Productivity',
  'New Venture Creation',
  'Data Science & Software Development',
  'Other / Not Sure Yet',
]

function EnrolForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', phone: '', programme: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_ENROL_TID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={52} className="text-gold-500 mb-4" />
        <h3 className="text-green-800 font-extrabold text-2xl mb-2">Application Received!</h3>
        <p className="text-gray-500">Our team will be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enrol-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
          <input id="enrol-name" required name="name" value={form.name} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white"
            placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="enrol-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Phone Number *</label>
          <input id="enrol-phone" required name="phone" value={form.phone} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white"
            placeholder="e.g. 066 004 6289" />
        </div>
      </div>
      <div>
        <label htmlFor="enrol-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Email Address</label>
        <input id="enrol-email" name="email" type="email" value={form.email} onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white"
          placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="enrol-programme" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Programme of Interest *</label>
        <select id="enrol-programme" required name="programme" value={form.programme} onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white">
          <option value="">Select a programme…</option>
          {programmes.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="enrol-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Message (optional)</label>
        <textarea id="enrol-message" name="message" value={form.message} onChange={handleChange} rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white resize-none"
          placeholder="Tell us a bit about yourself or any questions you have…" />
      </div>
      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
        {status === 'sending' ? 'Sending…' : <><Send size={16} /> Submit Application</>}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or WhatsApp us.</p>
      )}
    </form>
  )
}

function PartnerForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', size: '', needs: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_PARTNER_TID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={52} className="text-gold-500 mb-4" />
        <h3 className="text-green-800 font-extrabold text-2xl mb-2">Proposal Request Received!</h3>
        <p className="text-gray-500">We'll send a tailored proposal within 48 hours.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="partner-company" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Company Name *</label>
          <input id="partner-company" required name="company" value={form.company} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white"
            placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="partner-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Contact Person *</label>
          <input id="partner-name" required name="name" value={form.name} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white"
            placeholder="Full name" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="partner-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Email Address *</label>
          <input id="partner-email" required name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white"
            placeholder="work@company.com" />
        </div>
        <div>
          <label htmlFor="partner-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Phone Number *</label>
          <input id="partner-phone" required name="phone" value={form.phone} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white"
            placeholder="e.g. 031 000 0000" />
        </div>
      </div>
      <div>
        <label htmlFor="partner-size" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Number of Employees to Train *</label>
        <select id="partner-size" required name="size" value={form.size} onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white">
          <option value="">Select range…</option>
          {['1–10', '11–25', '26–50', '51–100', '100+'].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="partner-needs" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Training Needs / Goals *</label>
        <textarea id="partner-needs" required name="needs" value={form.needs} onChange={handleChange} rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 bg-white resize-none"
          placeholder="Describe what your team needs to learn or achieve…" />
      </div>
      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-green-800 hover:bg-green-900 disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
        {status === 'sending' ? 'Sending…' : <><Send size={16} /> Request a Proposal</>}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('enrol')

  useEffect(() => {
    if (window.location.hash === '#partner') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial tab with the URL hash, an external source React can't read during render
      setActiveTab('partner')
    }
  }, [])

  return (
    <>
      <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Let's Build Something<br /><span className="text-gold-400">That Lasts.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <SectionReveal>
              <h2 className="text-green-800 font-extrabold text-2xl mb-6">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: Phone, text: '066 004 6289', href: 'tel:0660046289' },
                  { icon: Mail, text: 'info@azibuyeeskills.co.za', href: 'mailto:info@azibuyeeskills.co.za' },
                  { icon: Mail, text: 'support@azibuyeeskills.co.za', href: 'mailto:support@azibuyeeskills.co.za' },
                  { icon: MapPin, text: '169 Lilly Road, Umzinto, Durban, 4240', href: null },
                  { icon: Globe, text: 'www.azibuyeeskills.co.za', href: 'https://www.azibuyeeskills.co.za' },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-800 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    {href ? (
                      <a href={href} className="text-gray-600 hover:text-green-800 transition-colors text-sm mt-2">{text}</a>
                    ) : (
                      <span className="text-gray-600 text-sm mt-2">{text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  title="Azibuye Location"
                  src="https://maps.google.com/maps?q=169%20Lilly%20Road,%20Umzinto,%20South%20Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            <SectionReveal delay={0.1}>
              {/* Tab Switcher */}
              <div id="enrol" className="flex bg-white rounded-2xl p-1.5 border border-gray-100 mb-8 max-w-sm">
                {[
                  { key: 'enrol', label: 'Enrol / Enquire' },
                  { key: 'partner', label: 'Partner With Us' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                      activeTab === tab.key
                        ? 'bg-green-800 text-white shadow-sm'
                        : 'text-gray-500 hover:text-green-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-green-800 font-extrabold text-xl mb-1">
                  {activeTab === 'enrol' ? 'Programme Enquiry' : 'Corporate Proposal Request'}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {activeTab === 'enrol'
                    ? 'Fill in your details and we\'ll be in touch within 24 hours.'
                    : 'Tell us about your organisation and we\'ll send a tailored proposal within 48 hours.'}
                </p>
                {activeTab === 'enrol' ? <EnrolForm /> : <PartnerForm />}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}
