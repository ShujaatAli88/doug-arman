import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bed, Bath, Square, ArrowUpRight, MapPin } from 'lucide-react'
import { formatPrice } from '../utils/formatPrice'

const statusConfig = {
  'FOR SALE': { cls: 'bg-brand-blue text-white',  dot: 'bg-blue-300' },
  SOLD:       { cls: 'bg-emerald-600 text-white',  dot: 'bg-emerald-300' },
  PENDING:    { cls: 'bg-amber-500 text-dark-900', dot: 'bg-amber-200' },
}

const PropertyCard = memo(function PropertyCard({ listing }) {
  const { price, address, city, state, beds, baths, sqft, status, isNew, gradient, slug } = listing
  const sc = statusConfig[status] || { cls: 'bg-dark-500 text-white', dot: 'bg-white/50' }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-600 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: gradient }}>
        {/* Architectural texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />
        {/* House icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 80 60" className="w-16 h-16 opacity-10 text-white fill-current">
            <path d="M40 5 L5 30 L15 30 L15 55 L35 55 L35 40 L45 40 L45 55 L65 55 L65 30 L75 30 Z" />
          </svg>
        </div>
        {/* Shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-800/80 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg ${sc.cls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} animate-pulse`} />
            {status}
          </span>
        </div>
        {isNew && (
          <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-gold text-dark-900 shadow-md">
            NEW
          </span>
        )}

        {/* Price overlay at bottom */}
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl font-bold text-white drop-shadow-lg">{formatPrice(price)}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-text-primary font-semibold text-sm leading-snug">{address}</p>
          <Link
            to="/listings"
            className="flex-shrink-0 w-8 h-8 rounded-lg border border-dark-500 group-hover:border-brand-blue group-hover:bg-brand-blue flex items-center justify-center text-text-muted group-hover:text-white transition-all duration-200"
            aria-label="View listing"
          >
            <ArrowUpRight size={13} />
          </Link>
        </div>
        <p className="flex items-center gap-1 text-text-muted text-xs mb-4">
          <MapPin size={10} className="text-brand-blue" />
          {city}, {state}
        </p>

        {/* Divider */}
        <div className="h-px bg-dark-600 mb-4" />

        {/* Specs */}
        <div className="flex items-center gap-5 text-text-secondary text-xs">
          <span className="flex items-center gap-1.5">
            <Bed size={13} className="text-brand-blue" />
            <strong className="text-text-primary font-semibold">{beds}</strong> bd
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={13} className="text-brand-blue" />
            <strong className="text-text-primary font-semibold">{baths}</strong> ba
          </span>
          <span className="flex items-center gap-1.5">
            <Square size={13} className="text-brand-blue" />
            <strong className="text-text-primary font-semibold">{sqft.toLocaleString()}</strong> sqft
          </span>
        </div>
      </div>
    </motion.div>
  )
})

export default PropertyCard
