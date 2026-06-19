'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Youth', href: '/programmes/youth' },
  { label: 'Corporates', href: '/programmes/corporate' },
  { label: 'Impact', href: '/impact' },
  { label: 'Media', href: '/media' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-green-800 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-brand-white.png" alt="Azibuye eSkills" className="h-[108px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:text-gold-400 transition-colors ${
                  isActive
                    ? 'text-gold-400 underline decoration-2 underline-offset-4'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-4 bg-gold-500 hover:bg-gold-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            Enrol Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-green-900 border-t border-green-700 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-semibold text-base hover:text-gold-400 transition-colors ${
                  isActive
                    ? 'text-gold-400 underline decoration-2 underline-offset-4'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold-500 text-white font-bold px-5 py-3 rounded-full text-center"
          >
            Enrol Now
          </Link>
        </div>
      )}
    </header>
  )
}
