import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function CTABanner({ headline, subtext, primaryCTA, secondaryCTA, variant = 'blue' }) {
  const isBlue = variant === 'blue'

  return (
    <section
      className={`py-16 px-4 ${
        isBlue
          ? 'bg-gradient-to-r from-brand-blue-deeper via-brand-blue to-brand-blue-light'
          : 'bg-dark-800 border-t border-b border-brand-blue/30'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">{headline}</h2>
          {subtext && (
            <p className={`text-base lg:text-lg mb-8 max-w-2xl mx-auto ${isBlue ? 'text-blue-100' : 'text-text-secondary'}`}>
              {subtext}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isBlue
                    ? 'bg-white text-brand-blue hover:bg-blue-50'
                    : 'bg-brand-blue hover:bg-brand-blue-dark text-white'
                }`}
              >
                {primaryCTA.label}
                <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 border ${
                  isBlue
                    ? 'border-white/50 hover:border-white text-white hover:bg-white/10'
                    : 'border-brand-blue/50 hover:border-brand-blue text-text-primary hover:bg-brand-blue/10'
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
