'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PageHero({
  bgImage,
  bgOpacity = 'opacity-20',
  gradientFrom = 'from-green-950/80',
  containerClassName = 'px-4',
  children,
}) {
  return (
    <section className="relative bg-green-950 pt-36 pb-24 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <Image src={bgImage} alt="" fill priority className={`object-cover ${bgOpacity}`} />
          <div className={`absolute inset-0 bg-gradient-to-b ${gradientFrom} to-green-950`} />
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 zulu-border opacity-30" />
      <div className={`relative z-10 max-w-7xl mx-auto ${containerClassName}`}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
