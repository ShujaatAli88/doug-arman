import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function CTABanner({ headline, subtext, primaryCTA, secondaryCTA, variant = 'blue' }) {
  const isBlue = variant === 'blue'

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      {isBlue ? (
        <>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #0D2E8A 0%, #19469D 45%, #1340B0 100%)'
          }} />
          {/* Ambient radial glow center */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(75,115,232,0.25) 0%, transparent 70%)'
          }} />
          {/* Subtle diagonal grid */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          {/* Top + bottom edge fades */}
          <div className="absolute inset-x-0 top-0 h-px bg-brand-blue-light/40" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-brand-blue-deeper/60" />
          {/* Floating orbs */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-brand-blue-light/20 blur-[80px] pointer-events-none" />
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/5 blur-[60px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-dark-800" />
          <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
          <div className="absolute inset-x-0 bottom-0 h-px divider-gradient" />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(27,79,216,0.08) 0%, transparent 70%)'
          }} />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {headline}
          </h2>
          {subtext && (
            <p className={`text-base lg:text-lg mb-10 max-w-2xl mx-auto ${isBlue ? 'text-blue-100/80' : 'text-text-secondary'}`}>
              {subtext}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className={`group relative inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden ${
                  isBlue
                    ? 'bg-white text-brand-blue hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30'
                    : 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40'
                }`}
              >
                {/* shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative">{primaryCTA.label}</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border ${
                  isBlue
                    ? 'border-white/30 hover:border-white/70 text-white hover:bg-white/10 backdrop-blur-sm'
                    : 'border-brand-blue/40 hover:border-brand-blue text-text-primary hover:bg-brand-blue/10'
                }`}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
