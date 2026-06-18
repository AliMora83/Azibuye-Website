'use client'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const phone = '27660046289'
  const message = encodeURIComponent("Hi Azibuye eSkills! I'd like to find out more about your programmes.")

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span
        className={`bg-green-800 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200">
        {/* WhatsApp SVG */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 3C9.374 3 4 8.373 4 15.004c0 2.225.58 4.317 1.593 6.133L4 29l8.08-1.568A12.94 12.94 0 0 0 16.004 28C22.63 28 28 22.627 28 15.996 28 9.37 22.63 4 16.004 3zm0 23.643a10.583 10.583 0 0 1-5.396-1.477l-.387-.23-4.795.929.99-4.677-.254-.4A10.594 10.594 0 0 1 5.357 15c0-5.87 4.78-10.643 10.647-10.643C21.869 4.357 26.643 9.13 26.643 15c0 5.874-4.774 10.643-10.64 10.643zm5.833-7.97c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-.987 1.253-.16.214-.32.24-.64.08-.32-.16-1.35-.497-2.572-1.587-.95-.847-1.59-1.893-1.777-2.213-.186-.32-.02-.493.14-.653.143-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.827.763.327 1.36.524 1.823.67.767.24 1.467.206 2.02.126.616-.093 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.293-.214-.614-.374z"/>
        </svg>
      </div>
    </a>
  )
}
