import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Azibuye eSkills | Skills without Limits',
  description:
    'Accredited digital skills, workforce development and employability programmes for youth, school leavers, and corporates across South Africa.',
  keywords: 'digital skills, ETDP SETA, NQF accredited, youth training, corporate training, South Africa, Durban',
  icons: {
    icon: '/images/Azibuye%20icon.png',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
