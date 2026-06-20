import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Azibuye eSkills | Skills without Limits',
  description:
    'Accredited digital skills, workforce development and employability programmes for youth, school leavers, and corporates across South Africa.',
  keywords: 'digital skills, ETDP SETA, NQF accredited, youth training, corporate training, South Africa, Durban',
  icons: {
    icon: [
      { url: '/images/icon-brand.png?v=2' },
      { url: '/images/icon-brand-white.png?v=2', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/images/icon-brand.png?v=2',
  },
  openGraph: {
    title: 'Azibuye eSkills | Skills without Limits',
    description: 'Empowering Communities. Reclaiming Futures.',
    url: 'https://www.azibuyeeskills.co.za',
    siteName: 'Azibuye eSkills',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
