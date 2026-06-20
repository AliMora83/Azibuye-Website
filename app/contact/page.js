'use client'
import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import PageHero from '@/components/PageHero'
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

const employeeRanges = ['1–10', '11–25', '26–50', '51–100', '100+']

const FIELD_CLASS = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-800 transition-colors bg-white'
const LABEL_CLASS = 'block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5'

function FormField({ id, label, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <input id={id} className={FIELD_CLASS} {...inputProps} />
    </div>
  )
}

function FormSelect({ id, label, options, placeholder, ...selectProps }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <select id={id} className={FIELD_CLASS} {...selectProps}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function FormTextarea({ id, label, ...textareaProps }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <textarea id={id} className={`${FIELD_CLASS} resize-none`} {...textareaProps} />
    </div>
  )
}

function FormSuccess({ title, body }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 size={52} className="text-gold-500 mb-4" />
      <h3 className="text-green-800 font-extrabold text-2xl mb-2">{title}</h3>
      <p className="text-gray-500">{body}</p>
    </div>
  )
}

function useEmailForm(templateId, initialValues) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState(initialValues)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, templateId, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { formRef, status, form, handleChange, handleSubmit }
}

function EnrolForm() {
  const { formRef, status, form, handleChange, handleSubmit } = useEmailForm(EMAILJS_ENROL_TID, {
    name: '', email: '', phone: '', programme: '', message: '',
  })

  if (status === 'success') {
    return <FormSuccess title="Application Received!" body="Our team will be in touch within 24 hours." />
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField id="enrol-name" label="Full Name *" required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
        <FormField id="enrol-phone" label="Phone Number *" required name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 066 004 6289" />
      </div>
      <FormField id="enrol-email" label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
      <FormSelect id="enrol-programme" label="Programme of Interest *" required name="programme" value={form.programme}
        onChange={handleChange} options={programmes} placeholder="Select a programme…" />
      <FormTextarea id="enrol-message" label="Message (optional)" name="message" value={form.message} onChange={handleChange}
        rows={4} placeholder="Tell us a bit about yourself or any questions you have…" />
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
  const { formRef, status, form, handleChange, handleSubmit } = useEmailForm(EMAILJS_PARTNER_TID, {
    company: '', name: '', email: '', phone: '', size: '', needs: '',
  })

  if (status === 'success') {
    return <FormSuccess title="Proposal Request Received!" body="We'll send a tailored proposal within 48 hours." />
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField id="partner-company" label="Company Name *" required name="company" value={form.company} onChange={handleChange} placeholder="Your company" />
        <FormField id="partner-name" label="Contact Person *" required name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField id="partner-email" label="Email Address *" required name="email" type="email" value={form.email} onChange={handleChange} placeholder="work@company.com" />
        <FormField id="partner-phone" label="Phone Number *" required name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 031 000 0000" />
      </div>
      <FormSelect id="partner-size" label="Number of Employees to Train *" required name="size" value={form.size}
        onChange={handleChange} options={employeeRanges} placeholder="Select range…" />
      <FormTextarea id="partner-needs" label="Training Needs / Goals *" required name="needs" value={form.needs} onChange={handleChange}
        rows={4} placeholder="Describe what your team needs to learn or achieve…" />
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
      <PageHero>
        <p className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">Get In Touch</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Let's Build Something<br /><span className="text-gold-400">That Lasts.</span>
        </h1>
      </PageHero>

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
