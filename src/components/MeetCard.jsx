import React from 'react'
import { motion } from 'framer-motion'

/**
 * Walton-Dean-style floating identity card.
 * Designed to be absolutely positioned over an agent photo.
 *
 * Props:
 *  label    – small text above the name, default "Meet"
 *  name     – agent name
 *  subtitle – optional line below the name
 *  className – positioning overrides
 */
export default function MeetCard({ label = 'Meet', name, subtitle, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`absolute z-10 ${className}`}
      style={{
        background: 'rgba(10, 22, 46, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(201,168,76,0.18)',
      }}
    >
      {/* label row */}
      <div className="flex items-center gap-3 mb-2.5">
        <span className="block w-7 h-px bg-gold/70 flex-shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold/70">
          {label}
        </span>
      </div>

      {/* name */}
      <h3
        className="font-serif font-bold uppercase leading-none tracking-wide text-gold"
        style={{ textShadow: '0 2px 12px rgba(201,168,76,0.2)' }}
      >
        {name}
      </h3>

      {/* subtitle */}
      {subtitle && (
        <p className="text-white/35 text-[10px] uppercase tracking-[0.2em] mt-2 font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
