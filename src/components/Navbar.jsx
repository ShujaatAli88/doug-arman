import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import MegaMenu from './MegaMenu'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Listings',   href: '/listings' },
  { label: 'Buy',        href: '/buy' },
  { label: 'Sell',       href: '/sell' },
  { label: 'Home Value', href: '/home-valuation' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(60)
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <>
      {/* thin blue accent line at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[51] bg-gradient-to-r from-brand-blue-deeper via-brand-blue to-brand-blue-light" />

      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/98 backdrop-blur-xl border-b border-dark-700 shadow-xl shadow-black/40'
            : 'bg-dark-900/75 backdrop-blur-xl border-b border-white/[0.06]'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight">
                <span className="text-white group-hover:text-white/90 transition-colors">DOUG </span>
                <span className="text-brand-blue group-hover:text-brand-blue-light transition-colors">ARMANTROUT</span>
              </span>
              <span className="text-[10px] text-white/35 uppercase tracking-[0.2em] mt-0.5">
                REALTOR® · Cole Camp, MO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/8'
                        : 'text-white/65 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-blue" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <a
                href="tel:6608511818"
                className="hidden lg:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <Phone size={13} />
                (660) 851-1818
              </a>

              {/* Mega menu trigger */}
              <button
                onClick={() => setMegaOpen(true)}
                aria-label="Open menu"
                className="w-10 h-10 rounded-lg border border-white/10 hover:border-brand-blue/50 bg-white/[0.04] hover:bg-brand-blue/10 flex items-center justify-center transition-all duration-200 group"
              >
                <span className="flex flex-col gap-[5px] w-4">
                  <span className="h-[1.5px] rounded-full bg-white/50 group-hover:bg-brand-blue transition-colors" />
                  <span className="h-[1.5px] rounded-full bg-white/50 group-hover:bg-brand-blue transition-colors w-3/4" />
                  <span className="h-[1.5px] rounded-full bg-white/50 group-hover:bg-brand-blue transition-colors" />
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden w-10 h-10 rounded-lg border border-white/10 hover:border-brand-blue/50 bg-white/[0.04] flex items-center justify-center text-white/65 hover:text-white transition-all"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="lg:hidden bg-dark-800/98 backdrop-blur-xl border-t border-dark-700 pb-4 rounded-b-xl"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium border-l-2 transition-all ${
                        isActive
                          ? 'text-brand-blue border-brand-blue bg-brand-blue/5'
                          : 'text-white/60 border-transparent hover:text-white hover:border-dark-400 hover:bg-white/[0.03]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="px-4 pt-3">
                  <a
                    href="tel:6608511818"
                    className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-3 rounded-lg w-full transition-colors"
                  >
                    <Phone size={14} />
                    (660) 851-1818
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
    </>
  )
}
