import React from 'react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { motion } from 'framer-motion'
import { fadeUp, defaultTransition } from '../utils/animations'

function StatItem({ value, suffix, label, index }) {
  const [ref, isInView] = useInView()
  const count = useCountUp(value, isInView)

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
      className="relative text-center group px-4"
    >
      {/* Hover ambient glow */}
      <div className="absolute inset-0 rounded-2xl bg-brand-blue/0 group-hover:bg-brand-blue/5 transition-colors duration-500 pointer-events-none" />

      <div className="relative">
        {/* Animated number */}
        <div
          className="text-4xl lg:text-5xl font-serif font-bold mb-1"
          style={{
            background: 'linear-gradient(135deg, #4B73E8 0%, #19469D 60%, #8FA8F0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {count}{suffix}
        </div>

        {/* Decorative line */}
        <div className="divider-gradient w-12 mx-auto my-2.5 opacity-60" />

        <div className="text-text-secondary text-sm font-medium tracking-wide">{label}</div>
      </div>
    </motion.div>
  )
}

export default function StatsCounter({ stats, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 divide-x-0 lg:divide-x divide-dark-600/60 ${className}`}
    >
      {stats.map((stat, i) => (
        <StatItem key={i} {...stat} index={i} />
      ))}
    </motion.div>
  )
}
