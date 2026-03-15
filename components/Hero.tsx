'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid-overlay pointer-events-none" />

      {/* Gold glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-10 w-16 h-16 border-l border-t border-gold/30 pointer-events-none" />
      <div className="absolute bottom-24 right-10 w-16 h-16 border-r border-b border-gold/30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Eyebrow */}
        <div
          className={`fade-up ${mounted ? 'fade-up-visible' : 'fade-up-hidden'} delay-100 inline-flex items-center gap-3 mb-8`}
        >
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            CFAI · CAAS Accreditation Consulting
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        {/* Headline */}
        <h1
          className={`fade-up ${mounted ? 'fade-up-visible' : 'fade-up-hidden'} delay-200 font-playfair text-cream text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6`}
        >
          Reach the highest standard.
          <br />
          <span className="text-gold italic">With guidance from someone</span>
          <br />
          who&rsquo;s lived it.
        </h1>

        {/* Subheadline */}
        <p
          className={`fade-up ${mounted ? 'fade-up-visible' : 'fade-up-hidden'} delay-300 text-cream/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed`}
        >
          Expert CFAI and CAAS accreditation consulting led by an Executive Fire Officer
          and active CPSE peer assessor — with 20 years of fire service experience behind
          every recommendation.
        </p>

        {/* CTAs */}
        <div
          className={`fade-up ${mounted ? 'fade-up-visible' : 'fade-up-hidden'} delay-400 flex flex-col sm:flex-row gap-4 justify-center`}
        >
          <a
            href="#contact"
            className="bg-gold text-navy px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gold-light transition-colors duration-200 shadow-[0_4px_24px_rgba(201,151,43,0.35)]"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="border border-cream/40 text-cream px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-cream/70 hover:bg-cream/5 transition-all duration-200"
          >
            View Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`fade-up ${mounted ? 'fade-up-visible' : 'fade-up-hidden'} delay-500 mt-16 flex justify-center`}
        >
          <a href="#trust" className="flex flex-col items-center gap-2 text-cream/30 hover:text-cream/60 transition-colors group">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-current group-hover:h-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
