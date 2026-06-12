import React, { memo } from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = memo(function TestimonialCard({ quote, author, location, rating }) {
  return (
    <div className="relative bg-dark-700 border-l-4 border-brand-blue rounded-xl p-6 h-full flex flex-col">
      {/* Decorative quote */}
      <span className="absolute top-4 right-5 text-6xl font-serif text-brand-blue/15 leading-none select-none">"</span>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1 italic mb-5">"{quote}"</p>

      <div>
        <div className="text-text-primary font-semibold text-sm">{author}</div>
        <div className="text-text-muted text-xs mt-0.5">{location}</div>
      </div>
    </div>
  )
})

export default TestimonialCard
