import React, { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import PropertyCard from '../components/PropertyCard'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import { listings } from '../data/listings'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const CITIES = ['All Cities', 'Cole Camp', 'Warsaw', 'Sedalia', 'Lincoln', 'Knob Noster', 'Leeton', 'Stover', 'Otterville']
const TYPES = ['All Types', 'Single Family', 'Land', 'Commercial', 'Multi-Family']
const STATUSES = ['All Status', 'FOR SALE', 'PENDING', 'SOLD']
const SORT_OPTIONS = ['Newest', 'Price: High to Low', 'Price: Low to High', 'Sq Ft']
const PER_PAGE = 9

export default function ListingsPage() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All Cities')
  const [type, setType] = useState('All Types')
  const [status, setStatus] = useState('All Status')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minBeds, setMinBeds] = useState(0)
  const [minBaths, setMinBaths] = useState(0)
  const [sort, setSort] = useState('Newest')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let result = [...listings]

    if (search) {
      const q = search.toLowerCase()
      result = result.filter((l) =>
        l.city.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.zip.includes(q)
      )
    }
    if (city !== 'All Cities') result = result.filter((l) => l.city === city)
    if (type !== 'All Types') result = result.filter((l) => l.type === type)
    if (status !== 'All Status') result = result.filter((l) => l.status === status)
    if (minPrice) result = result.filter((l) => l.price >= parseInt(minPrice))
    if (maxPrice) result = result.filter((l) => l.price <= parseInt(maxPrice))
    if (minBeds > 0) result = result.filter((l) => l.beds >= minBeds)
    if (minBaths > 0) result = result.filter((l) => l.baths >= minBaths)

    if (sort === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
    else if (sort === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
    else if (sort === 'Sq Ft') result.sort((a, b) => b.sqft - a.sqft)
    else result.sort((a, b) => b.id - a.id)

    return result
  }, [search, city, type, status, minPrice, maxPrice, minBeds, minBaths, sort])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const reset = () => {
    setSearch(''); setCity('All Cities'); setType('All Types')
    setStatus('All Status'); setMinPrice(''); setMaxPrice('')
    setMinBeds(0); setMinBaths(0); setSort('Newest'); setPage(1)
  }

  const bedOptions = [0, 1, 2, 3, 4, 5]
  const bathOptions = [0, 1, 2, 3]

  return (
    <main className="pb-20 lg:pb-0">
      <HeroSection
        height="half"
        badge="West Central Association of Realtors MLS"
        title={`<span class="text-white">Browse All </span><span class="text-[#1B4FD8]">Listings</span>`}
        description="Explore available homes across Cole Camp, Warsaw, Sedalia, and West Central Missouri."
      />

      {/* Filters */}
      <section className="bg-dark-800 border-b border-dark-700 py-6 px-4 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <label htmlFor="listing-search" className="sr-only">Search listings</label>
              <input
                id="listing-search"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                placeholder="Search by city, address, or ZIP..."
                className="w-full bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg pl-9 pr-4 py-2.5 outline-none transition-colors"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city-filter" className="sr-only">City</label>
              <select id="city-filter" value={city} onChange={(e) => { setCity(e.target.value); setPage(1) }}
                className="bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary text-sm rounded-lg px-3 py-2.5 outline-none transition-colors min-w-[140px]">
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Type */}
            <div>
              <label htmlFor="type-filter" className="sr-only">Property type</label>
              <select id="type-filter" value={type} onChange={(e) => { setType(e.target.value); setPage(1) }}
                className="bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary text-sm rounded-lg px-3 py-2.5 outline-none transition-colors min-w-[140px]">
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status-filter" className="sr-only">Status</label>
              <select id="status-filter" value={status} onChange={(e) => { setStatus(e.target.value); setPage(1) }}
                className="bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary text-sm rounded-lg px-3 py-2.5 outline-none transition-colors min-w-[120px]">
                {STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {/* Price */}
            <div className="flex items-center gap-2">
              <label htmlFor="min-price" className="sr-only">Min price</label>
              <input id="min-price" type="number" value={minPrice} onChange={(e) => { setMinPrice(e.target.value); setPage(1) }}
                placeholder="Min $" className="w-24 bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-3 py-2 outline-none" />
              <span className="text-text-muted text-xs">–</span>
              <label htmlFor="max-price" className="sr-only">Max price</label>
              <input id="max-price" type="number" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value); setPage(1) }}
                placeholder="Max $" className="w-24 bg-dark-700 border border-dark-600 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-3 py-2 outline-none" />
            </div>

            {/* Beds */}
            <div className="flex items-center gap-1.5">
              <span className="text-text-muted text-xs">Beds:</span>
              {bedOptions.map((n) => (
                <button key={n} onClick={() => { setMinBeds(n); setPage(1) }}
                  className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${minBeds === n ? 'bg-brand-blue border-brand-blue text-white' : 'border-dark-600 text-text-muted hover:border-brand-blue'}`}>
                  {n === 0 ? 'Any' : `${n}+`}
                </button>
              ))}
            </div>

            {/* Baths */}
            <div className="flex items-center gap-1.5">
              <span className="text-text-muted text-xs">Baths:</span>
              {bathOptions.map((n) => (
                <button key={n} onClick={() => { setMinBaths(n); setPage(1) }}
                  className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${minBaths === n ? 'bg-brand-blue border-brand-blue text-white' : 'border-dark-600 text-text-muted hover:border-brand-blue'}`}>
                  {n === 0 ? 'Any' : `${n}+`}
                </button>
              ))}
            </div>

            <button onClick={reset} className="flex items-center gap-1.5 text-text-muted hover:text-text-primary text-xs ml-auto transition-colors">
              <X size={13} /> Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <p className="text-text-secondary text-sm">
              Showing <span className="text-text-primary font-semibold">{pageItems.length}</span> of{' '}
              <span className="text-text-primary font-semibold">{filtered.length}</span> listings
            </p>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-text-muted" />
              <label htmlFor="sort-select" className="sr-only">Sort</label>
              <select id="sort-select" value={sort} onChange={(e) => { setSort(e.target.value); setPage(1) }}
                className="bg-dark-700 border border-dark-600 text-text-primary text-sm rounded-lg px-3 py-2 outline-none focus:border-brand-blue">
                {SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {pageItems.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <p className="text-text-muted text-lg mb-4">No listings match your filters.</p>
              <button onClick={reset} className="text-brand-blue hover:text-brand-blue-light font-semibold text-sm">Clear all filters</button>
            </AnimatedSection>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pageItems.map((listing, i) => (
                <motion.div key={listing.id} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.06 }}>
                  <PropertyCard listing={listing} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm rounded-lg border border-dark-600 text-text-secondary hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 text-sm rounded-lg border transition-colors ${
                    page === n
                      ? 'bg-brand-blue border-brand-blue text-white'
                      : 'border-dark-600 text-text-secondary hover:border-brand-blue hover:text-brand-blue'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm rounded-lg border border-dark-600 text-text-secondary hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}

          <p className="text-text-muted text-xs text-center mt-8 max-w-2xl mx-auto">
            All listings provided through the West Central Association of Realtors MLS. Information deemed reliable but not guaranteed. Subject to prior sale, change, or withdrawal.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Can't Find What You're Looking For?"
        subtext="Doug has access to unlisted properties and can help you find the perfect home — even if it's not on the market yet."
        primaryCTA={{ label: 'Contact Doug', href: '/contact' }}
        secondaryCTA={{ label: 'Get Listing Alerts', href: '/contact' }}
        variant="dark"
      />
    </main>
  )
}
