import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import { agent } from '../data/agentData'

const quickLinks = [
  { label: 'About Doug',    href: '/about' },
  { label: 'Browse Listings', href: '/listings' },
  { label: 'Buyer Resources', href: '/buy' },
  { label: 'Seller Resources', href: '/sell' },
  { label: 'Home Valuation', href: '/home-valuation' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Contact',       href: '/contact' },
]

const socials = [
  { Icon: Facebook,  href: agent.social.facebook,  label: 'Facebook' },
  { Icon: Instagram, href: agent.social.instagram, label: 'Instagram' },

  { Icon: Youtube,   href: agent.social.youtube,   label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-brand-blue-deeper via-brand-blue to-brand-blue-light" />

      {/* Top CTA strip */}
      <div className="relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Ready to make your move?</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900">
                Let's Talk Real Estate
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={agent.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/25">
                <Phone size={14} /> {agent.phone}
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-brand-blue text-gray-700 hover:text-brand-blue font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200">
                Free Consultation <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Col 1: Brand (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <img
                src="/Doug-Updated-Logo.png"
                alt="Doug Armantrout — REALTOR®"
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              {agent.tagline} — West Central Missouri's trusted real estate expert serving buyers and sellers for over 10 years.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-200 hover:border-brand-blue hover:bg-brand-blue flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-xs uppercase tracking-[0.18em] mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="text-gray-500 hover:text-brand-blue text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-3 h-px bg-brand-blue/30 group-hover:w-5 group-hover:bg-brand-blue transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-gray-900 font-semibold text-xs uppercase tracking-[0.18em] mb-5">Contact Doug</h3>
            <ul className="space-y-4">
              <li>
                <a href={agent.phoneHref}
                  className="flex items-center gap-3 text-gray-500 hover:text-brand-blue text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue/8 border border-brand-blue/20 group-hover:bg-brand-blue group-hover:border-brand-blue flex items-center justify-center flex-shrink-0 transition-all duration-200">
                    <Phone size={13} className="text-brand-blue group-hover:text-white transition-colors" />
                  </span>
                  {agent.phone}
                </a>
              </li>
              <li>
                <a href={agent.emailHref}
                  className="flex items-center gap-3 text-gray-500 hover:text-brand-blue text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue/8 border border-brand-blue/20 group-hover:bg-brand-blue group-hover:border-brand-blue flex items-center justify-center flex-shrink-0 transition-all duration-200">
                    <Mail size={13} className="text-brand-blue group-hover:text-white transition-colors" />
                  </span>
                  {agent.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <span className="w-8 h-8 rounded-lg bg-brand-blue/8 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-brand-blue" />
                </span>
                {agent.location}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
