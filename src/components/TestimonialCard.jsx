import React, { memo } from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = memo(function TestimonialCard({ quote, author, location, rating }) {
  return (
    <div className="relative bg-dark-700 rounded-2xl p-8 h-full flex flex-col overflow-hidden border border-dark-600">
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full"
        style={{ background: 'linear-gradient(to bottom, transparent, #19469D 30%, #4B73E8 70%, transparent)' }}
      />

      {/* Decorative large quote mark */}
      <span
        className="absolute top-5 right-6 text-8xl font-serif leading-none select-none pointer-events-none"
        style={{ color: 'rgba(27,79,216,0.12)', lineHeight: 1 }}
      >"</span>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="text-gold fill-gold" />
        ))}
      </div>

      <p className="text-text-secondary text-sm leading-[1.8] flex-1 mb-6 relative z-10">
        "{quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
          <span className="text-brand-blue-light text-xs font-bold">{author[0]}</span>
        </div>
        <div>
          <div className="text-text-primary font-semibold text-sm leading-none mb-0.5">{author}</div>
          <div className="text-text-muted text-xs">{location}</div>
        </div>
      </div>
    </div>
  )
})

export default TestimonialCard
