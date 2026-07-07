import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
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
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <>
      {/* thin blue accent line at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[51] bg-gradient-to-r from-brand-blue-deeper via-brand-blue to-brand-blue-light" />

      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-gray-200 shadow-lg shadow-black/8'
            : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <img
                src="/Doug-Updated-Logo.png"
                alt="Doug Armantrout — REALTOR®"
                className="h-[44px] lg:h-[52px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
              />
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
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-3 right-3 h-px rounded-full"
                        style={{ background: 'linear-gradient(to right, transparent, #19469D, transparent)' }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <a
                href="tel:6608511818"
                className="hidden lg:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/25"
              >
                <Phone size={13} />
                (660) 851-1818
              </a>

              {/* Mega menu trigger */}
              <button
                onClick={() => setMegaOpen(true)}
                aria-label="Open menu"
                className="w-10 h-10 rounded-lg border border-gray-200 hover:border-brand-blue/40 bg-gray-50 hover:bg-brand-blue/5 flex items-center justify-center transition-all duration-200 group"
              >
                <span className="flex flex-col gap-[5px] w-4">
                  <span className="h-[1.5px] rounded-full bg-gray-500 group-hover:bg-brand-blue transition-colors" />
                  <span className="h-[1.5px] rounded-full bg-gray-500 group-hover:bg-brand-blue transition-colors w-3/4" />
                  <span className="h-[1.5px] rounded-full bg-gray-500 group-hover:bg-brand-blue transition-colors" />
                </span>
              </button>

            </div>
          </div>

        </nav>
      </header>

      <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
    </>
  )
}
