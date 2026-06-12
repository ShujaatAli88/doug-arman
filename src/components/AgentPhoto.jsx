import React, { useState } from 'react'
import { cn } from '../utils/cn'

export default function AgentPhoto({ className, size = 'lg' }) {
  const [error, setError] = useState(false)

  const sizeClasses = {
    sm: 'w-14 h-14 text-xl',
    md: 'w-20 h-20 text-2xl',
    lg: 'w-28 h-28 text-4xl',
    xl: 'w-32 h-32 text-5xl',
    full: 'w-full h-full text-5xl',
  }

  if (!error) {
    return (
      <img
        src="/bio_pic.png"
        alt="Doug Armantrout — REALTOR®"
        onError={() => setError(true)}
        className={cn(
          'object-cover object-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-deeper',
          sizeClasses[size],
          className
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'bg-gradient-to-br from-brand-blue to-brand-blue-deeper rounded-full flex items-center justify-center flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      <span className="font-serif font-bold text-white leading-none">DA</span>
    </div>
  )
}
