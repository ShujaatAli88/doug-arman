import React from 'react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, suffix, label }) {
  const [ref, isInView] = useInView()
  const count = useCountUp(value, isInView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-serif font-bold text-brand-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-secondary text-sm font-medium">{label}</div>
    </div>
  )
}

export default function StatsCounter({ stats, className = '' }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, i) => (
        <StatItem key={i} {...stat} />
      ))}
    </div>
  )
}
