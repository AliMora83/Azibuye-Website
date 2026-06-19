import Link from 'next/link'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { FacebookIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from '@/components/SocialIcons'

const programmes = [
  { label: 'Early Childhood Development', href: '/programmes/youth' },
  { label: 'NEMISA Digital Skills', href: '/programmes/youth' },
  { label: 'Microsoft 365 Productivity', href: '/programmes/youth' },
  { label: 'New Venture Creation', href: '/programmes/youth' },
  { label: 'Data Science & Software Dev', href: '/programmes/youth' },
  { label: 'Corporate Solutions', href: '/programmes/corporate' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Media & News', href: '/media' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Enrol Now', href: '/contact#enrol' },
  { label: 'Partner With Us', href: '/contact#partner' },
]

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Zulu pattern strip */}
      <div className="zulu-border opacity-40" />

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <img src="/images/logo-brand-white.png" alt="Azibuye eSkills" className="h-[129px] w-auto mb-4" />
          <p className="text-green-200 text-sm leading-relaxed mb-6">
            Empowering Communities.<br />Reclaiming Futures.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-6">
            Powered by <span className="text-gold-500 font-semibold">Azibuye Digital Technologies</span>
          </p>
          <div className="flex gap-4">
            {[
              { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
              { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
              { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-green-700 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-5">Programmes</h4>
          <ul className="space-y-2.5">
            {programmes.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-5">Contact</h4>
          <ul className="space-y-3">
            {[
              { icon: Phone, text: '066 004 6289', href: 'tel:0660046289' },
              { icon: Mail, text: 'info@azibuyeeskills.co.za', href: 'mailto:info@azibuyeeskills.co.za' },
              { icon: MapPin, text: '169 Lilly Road, Umzinto, Durban, 4240', href: null },
              { icon: Globe, text: 'www.azibuyeeskills.co.za', href: 'https://www.azibuyeeskills.co.za' },
            ].map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={15} className="text-gold-500 mt-0.5 shrink-0" />
                {href ? (
                  <a href={href} className="text-gray-400 text-sm hover:text-white transition-colors">{text}</a>
                ) : (
                  <span className="text-gray-400 text-sm">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Azibuye Digital Technologies. All rights reserved.</p>
          <div className="flex gap-1 items-center">
            <span className="text-gold-500 font-semibold">ETDP SETA</span>
            <span className="mx-2">·</span>
            <span className="text-gold-500 font-semibold">NQF Accredited</span>
            <span className="mx-2">·</span>
            <span className="text-gold-500 font-semibold">NEMISA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
