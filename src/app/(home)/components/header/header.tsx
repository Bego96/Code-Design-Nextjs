import React from 'react'
import AnimatedSection from '@/app/components/AnimatedSection';

export default function Header() {
  return (
    <header className='relative z-0 w-full'>
      <div className='relative bg-header-bg bg-cover bg-center h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden'>
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 max-w-6xl text-center px-4 py-4'>
          <AnimatedSection>
            <div className='relative inline-block'>
              {/* Top accent bar */}
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded'></div>
              <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[var(--font-bankgothic-md-bt)] uppercase tracking-wide mb-6 text-white drop-shadow-lg'>
                Istražite kako arhitektura može transformirati prostor
              </h1>
              {/* Bottom accent bar */}
              <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-500 rounded'></div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className='md:text-lg lg:text-xl text-white leading-relaxed drop-shadow-md mt-4'>
              Kroz našu stranicu zavirite u inovativne koncepte i inspirativne realizacije koje definiraju našu viziju za bolje sutra. Imamo više od 10 godina iskustva u različitim arhitektonskim oblastima.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </header>
  )
}
