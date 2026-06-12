import React from 'react'
import { cn } from '../utils/cn'

export default function SectionLabel({ text, className }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="flex-shrink-0 h-px w-8 bg-brand-blue" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-light whitespace-nowrap">
        {text}
      </span>
      <span className="flex-shrink-0 h-px w-8 bg-brand-blue" />
    </div>
  )
}
