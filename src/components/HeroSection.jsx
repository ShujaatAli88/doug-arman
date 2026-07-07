import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition } from '../utils/animations'

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  height = 'half',
  videoSrc,
}) {
  const isFullHeight = height === 'full'

  /* ─── shared text content ─── */
  const HeroContent = ({ compact = false }) => (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={isFullHeight && !compact ? 'max-w-3xl' : 'max-w-2xl'}
    >
      {badge && (
        <motion.div variants={fadeUp} transition={defaultTransition}>
          <span className={`inline-flex items-center gap-2.5 border border-brand-blue/30 bg-brand-blue/[0.1] backdrop-blur-sm text-white/75 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.18em] ${compact ? 'mb-3' : 'mb-7'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(75,115,232,0.9)' }} />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.div variants={fadeUp} transition={{ ...defaultTransition, delay: 0.05 }}>
        <div className={`w-10 h-[3px] rounded-full bg-brand-blue ${compact ? 'mb-3' : 'mb-5'}`} />
      </motion.div>

      <motion.h1
        variants={fadeUp}
        transition={{ ...defaultTransition, delay: 0.1 }}
        className={`font-serif font-bold leading-[1.08] text-white drop-shadow-lg ${compact ? 'mb-3' : 'mb-5'} ${
          isFullHeight && !compact
            ? 'text-4xl sm:text-5xl lg:text-7xl xl:text-8xl'
            : compact
            ? 'text-3xl sm:text-4xl'
            : 'text-4xl sm:text-5xl lg:text-6xl'
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.18 }}
          className={`text-brand-blue-light font-semibold tracking-wide ${compact ? 'text-sm mb-2' : 'text-base lg:text-lg mb-4'}`}>
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p variants={fadeUp} transition={{ ...defaultTransition, delay: 0.22 }}
          className={`text-white/70 leading-relaxed max-w-xl ${compact ? 'text-sm mb-5' : 'text-base lg:text-lg mb-8'}`}>
          {description}
        </motion.p>
      )}

      {(primaryCTA || secondaryCTA) && (
        <motion.div variants={fadeUp} transition={{ ...defaultTransition, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-2.5">
          {primaryCTA && (
            <Link to={primaryCTA.href}
              className={`group relative inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/40 overflow-hidden ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-sm lg:text-base'}`}>
              {/* shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <span className="relative">{primaryCTA.label}</span>
              <ArrowRight size={15} className="relative group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          )}
          {secondaryCTA && (
            <Link to={secondaryCTA.href}
              className={`inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/60 text-white/85 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/[0.07] backdrop-blur-sm ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-sm lg:text-base'}`}>
              {secondaryCTA.label}
            </Link>
          )}
        </motion.div>
      )}
    </motion.div>
  )

  /* ════════════════════════════════════════════
     MOBILE — video hero (stacked layout)
     Shows full 16:9 video, content below
     ════════════════════════════════════════════ */
  if (videoSrc) {
    return (
      <>
        {/* ── Mobile version ── */}
        <section className="lg:hidden overflow-hidden">
          {/* Full 16:9 video — no crop on mobile */}
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <video
              src={videoSrc}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.82)' }}
            />
            {/* Subtle vignette so video edges look polished */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 120% 120% at 50% 50%, transparent 55%, rgba(9,17,30,0.55) 100%)' }} />
            {/* Fade into content below */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, #09111E 100%)' }} />

            {/* Badge overlaid on video */}
            {badge && (
              <div className="absolute top-12 left-4 right-4">
                <span className="inline-flex items-center gap-2 border border-white/20 bg-dark-900/60 backdrop-blur-md text-white/80 text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.15em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse flex-shrink-0" />
                  {badge}
                </span>
              </div>
            )}
          </div>

          {/* Content below video */}
          <div className="bg-dark-900 px-4 sm:px-6 pt-4 pb-24 -mt-1">
            <HeroContent compact />
          </div>
        </section>

        {/* ── Desktop version ── */}
        <section className={`hidden lg:flex relative items-center overflow-hidden ${
          isFullHeight ? 'min-h-screen' : 'min-h-[65vh]'
        }`}>
          <video
            src={videoSrc}
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.85)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, rgba(8,14,30,0.90) 0%, rgba(8,14,30,0.65) 40%, rgba(8,14,30,0.25) 75%, rgba(8,14,30,0.10) 100%)'
          }} />
          <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #09111E 0%, transparent 100%)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-36 w-full">
            <HeroContent />
          </div>

          {isFullHeight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-semibold">Scroll</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
                <ChevronDown size={18} className="text-white/30" />
              </motion.div>
            </motion.div>
          )}
        </section>
      </>
    )
  }

  /* ════════════════════════════════════════════
     No video — static gradient bg (all screen sizes)
     ════════════════════════════════════════════ */
  return (
    <section className={`relative flex items-center overflow-hidden ${
      isFullHeight ? 'min-h-screen' : 'min-h-[55vh] lg:min-h-[65vh]'
    }`}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #07101D 0%, #0E1F3D 55%, #07101D 100%)'
      }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(rgba(27,79,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(27,79,216,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '480px', height: '480px',
          left: '30%', top: '10%',
          background: 'radial-gradient(circle, rgba(27,79,216,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-drift 16s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '280px', height: '280px',
          left: '5%', bottom: '20%',
          background: 'radial-gradient(circle, rgba(75,115,232,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'orb-drift 20s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '200px', height: '200px',
          right: '8%', top: '30%',
          background: 'radial-gradient(circle, rgba(27,79,216,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'orb-drift 12s ease-in-out infinite',
          animationDelay: '-6s',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #09111E 0%, transparent 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <HeroContent />
      </div>
    </section>
  )
}
