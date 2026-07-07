import React from 'react'
import { cn } from '../utils/cn'

export default function SectionLabel({ text, className }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className="flex-shrink-0 h-px w-10"
        style={{ background: 'linear-gradient(to right, transparent, #19469D)' }}
      />
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue whitespace-nowrap">
        {text}
      </span>
      <span
        className="flex-shrink-0 h-px w-10"
        style={{ background: 'linear-gradient(to left, transparent, #19469D)' }}
      />
    </div>
  )
}
