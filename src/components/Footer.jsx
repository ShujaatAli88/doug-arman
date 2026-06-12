import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
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
  { Icon: Linkedin,  href: agent.social.linkedin,  label: 'LinkedIn' },
  { Icon: Youtube,   href: agent.social.youtube,   label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      {/* Subtle top accent */}
      <div className="h-[3px] bg-gradient-to-r from-brand-blue-deeper via-brand-blue to-brand-blue-light" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(27,79,216,1) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

      {/* Top CTA strip */}
      <div className="relative border-b border-dark-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/35 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Ready to make your move?</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white">
                Let's Talk Real Estate
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={agent.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30">
                <Phone size={14} /> {agent.phone}
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 text-white/80 hover:text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200">
                Free Consultation <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Col 1: Brand (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4 mb-5">
              <img
                src="/bio_pic.png"
                alt="Doug Armantrout"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                className="w-16 h-16 rounded-xl object-cover object-top border border-brand-blue/30 flex-shrink-0"
              />
              <div>
                <div className="font-serif text-xl font-bold">
                  <span className="text-white">DOUG </span>
                  <span className="text-brand-blue">ARMANTROUT</span>
                </div>
                <div className="text-white/35 text-[11px] uppercase tracking-[0.18em] mt-0.5">
                  REALTOR® · Cole Camp, MO
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-sm">
              {agent.tagline} — West Central Missouri's trusted real estate expert serving buyers and sellers for over 12 years.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 hover:border-brand-blue hover:bg-brand-blue flex items-center justify-center text-white/35 hover:text-white transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-[0.18em] mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-3 h-px bg-brand-blue/40 group-hover:w-5 group-hover:bg-brand-blue transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-white/90 font-semibold text-xs uppercase tracking-[0.18em] mb-5">Contact Doug</h3>
            <ul className="space-y-4">
              <li>
                <a href={agent.phoneHref}
                  className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={13} className="text-brand-blue" />
                  </span>
                  {agent.phone}
                </a>
              </li>
              <li>
                <a href={agent.emailHref}
                  className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={13} className="text-brand-blue" />
                  </span>
                  {agent.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/45 text-sm">
                <span className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-brand-blue" />
                </span>
                {agent.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/[0.07] pt-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>© {new Date().getFullYear()} Doug Armantrout. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Equal Housing Opportunity</span>
              <span className="w-px h-3 bg-white/15" />
              <span>REALTOR®</span>
              <span className="w-px h-3 bg-white/15" />
              <span>MLS Member</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-white/20 leading-relaxed max-w-2xl">
            Licensed REALTOR® · West Central Association of Realtors MLS · All information deemed reliable but not guaranteed. Properties subject to prior sale or withdrawal.
          </p>
        </div>
      </div>
    </footer>
  )
}
