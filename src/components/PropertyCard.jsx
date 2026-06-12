import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bed, Bath, Square, ArrowUpRight, MapPin } from 'lucide-react'
import { formatPrice } from '../utils/formatPrice'

const statusConfig = {
  'FOR SALE': { cls: 'bg-brand-blue text-white',       dot: 'bg-blue-300' },
  SOLD:       { cls: 'bg-emerald-600 text-white',       dot: 'bg-emerald-300' },
  PENDING:    { cls: 'bg-amber-500 text-dark-900',      dot: 'bg-amber-200' },
}

const PropertyCard = memo(function PropertyCard({ listing }) {
  const { price, address, city, state, beds, baths, sqft, status, isNew, gradient, image, slug } = listing
  const sc = statusConfig[status] || { cls: 'bg-dark-500 text-white', dot: 'bg-white/50' }
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const showImage = image && !imgError

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-600 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col"
    >
      {/* ── Image area ── */}
      <div className="relative aspect-[16/10] overflow-hidden">

        {/* Gradient fallback (always rendered, fades out when photo loads) */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: gradient,
            opacity: showImage && imgLoaded ? 0 : 1,
          }}
        >
          {/* Subtle grid texture on fallback */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 80 60" className="w-20 h-20 opacity-10 text-white fill-current">
              <path d="M40 5 L5 30 L15 30 L15 55 L35 55 L35 40 L45 40 L45 55 L65 55 L65 30 L75 30 Z" />
            </svg>
          </div>
        </div>

        {/* Photo */}
        {showImage && (
          <img
            src={image}
            alt={address}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Cinematic overlay on photo — darkens edges, keeps center bright */}
        {showImage && imgLoaded && (
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(8,15,32,0.15) 0%, rgba(8,15,32,0.05) 40%, rgba(8,15,32,0.65) 100%)',
            }} />
        )}

        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

        {/* Status badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm shadow-md ${sc.cls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} animate-pulse`} />
            {status}
          </span>
        </div>

        {isNew && (
          <span className="absolute top-3 right-3 z-10 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-gold text-dark-900 shadow-md backdrop-blur-sm">
            NEW
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            {formatPrice(price)}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
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

        <div className="h-px bg-dark-600 mb-4" />

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
