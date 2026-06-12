import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
import { agent } from '../data/agentData'

const navItems = [
  { num: '01', label: 'Home',           href: '/',               sub: [] },
  { num: '02', label: 'About',          href: '/about',          sub: ['Meet Doug', 'Testimonials'] },
  { num: '03', label: 'Listings',       href: '/listings',       sub: [] },
  { num: '04', label: 'Buy',            href: '/buy',            sub: ["Buyer's Guide"] },
  { num: '05', label: 'Sell',           href: '/sell',           sub: ["Seller's Guide"] },
  { num: '06', label: 'Home Valuation', href: '/home-valuation', sub: [] },
  { num: '07', label: 'Blog',           href: '/blog',           sub: [] },
  { num: '08', label: 'Contact',        href: '/contact',        sub: ['Free Consultation'] },
]

const socials = [
  { Icon: Facebook,  href: agent.social.facebook,  label: 'Facebook' },
  { Icon: Instagram, href: agent.social.instagram, label: 'Instagram' },
  { Icon: Linkedin,  href: agent.social.linkedin,  label: 'LinkedIn' },
  { Icon: Youtube,   href: agent.social.youtube,   label: 'YouTube' },
]

const overlayV = {
  hidden:  { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' },
  visible: { opacity: 1, clipPath: 'circle(170% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.4,  ease: [0.76, 0, 0.24, 1] } },
}

const listV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.28 } },
}

const itemV = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const panelV = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.32, ease: [0.4, 0, 0.2, 1] } },
}

export default function MegaMenu({ open, onClose }) {
  const { pathname } = useLocation()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlayV}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[90] flex flex-col"
          style={{ background: 'linear-gradient(135deg, #09111E 0%, #0E1D38 100%)' }}
        >
          {/* dot-grid texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(rgba(27,79,216,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* ── Top bar ── */}
          <div className="relative flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-4 pb-3 flex-shrink-0 border-b border-white/[0.07]">
            <Link to="/" onClick={onClose} className="flex flex-col leading-none">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight">
                <span className="text-white">DOUG </span>
                <span className="text-brand-blue">ARMANTROUT</span>
              </span>
              <span className="text-[9px] text-white/30 uppercase tracking-[0.22em] mt-0.5">REALTOR® · Cole Camp, MO</span>
            </Link>
            <button onClick={onClose} aria-label="Close menu"
              className="w-9 h-9 rounded-full border border-white/15 hover:border-brand-blue bg-white/[0.04] hover:bg-brand-blue/10 flex items-center justify-center text-white/50 hover:text-brand-blue transition-all duration-200">
              <X size={15} />
            </button>
          </div>

          {/* ── Body ── */}
          <div className="relative flex-1 flex overflow-hidden min-h-0">

            {/* LEFT — nav list */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col overflow-y-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-8"
              style={{ scrollbarWidth: 'none' }}
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={itemV} className="flex-shrink-0">
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`group flex items-center gap-4 py-2.5 sm:py-3 lg:py-3.5 border-b border-white/[0.07] hover:border-brand-blue/40 transition-colors duration-200 ${
                        i === 0 ? 'border-t border-white/[0.07]' : ''
                      }`}
                    >
                      {/* number */}
                      <span className="w-5 text-[9px] font-mono tracking-widest flex-shrink-0 text-white/20 group-hover:text-brand-blue/60 transition-colors">
                        {item.num}
                      </span>

                      {/* label — responsive text size */}
                      <span className={`font-serif font-bold uppercase leading-none tracking-tight transition-colors duration-200 flex-1
                        text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
                        ${isActive ? 'text-brand-blue' : 'text-white/80 group-hover:text-white'}`}>
                        {item.label}
                      </span>

                      {/* sub-labels — only on wider screens */}
                      {item.sub.length > 0 && (
                        <span className="hidden md:flex items-center gap-3 flex-shrink-0">
                          {item.sub.map((s) => (
                            <span key={s} className="text-[9px] uppercase tracking-[0.18em] font-semibold text-white/20 group-hover:text-white/45 transition-colors">
                              {s}
                            </span>
                          ))}
                        </span>
                      )}

                      {/* arrow */}
                      <ArrowUpRight size={15}
                        className="flex-shrink-0 text-white/0 group-hover:text-brand-blue transition-all duration-200 translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* RIGHT — desktop contact panel */}
            <motion.aside
              variants={panelV}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex w-72 xl:w-[22rem] flex-col border-l border-white/[0.07] flex-shrink-0 overflow-hidden"
            >
              {/* Photo — portrait crop, face fills nicely */}
              <div className="relative flex-shrink-0" style={{ height: '55%' }}>
                <img
                  src="/bio_pic.png"
                  alt="Doug Armantrout"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="w-full h-full object-cover object-top"
                />
                {/* overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(8,14,28,0.1) 0%, rgba(8,14,28,0.15) 50%, rgba(8,14,28,0.92) 100%)' }} />
                {/* Meet card at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="block h-px w-5 bg-gold/60" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60">Meet</span>
                  </div>
                  <p className="font-serif font-bold text-gold uppercase text-lg leading-none tracking-wide">
                    Doug Armantrout
                  </p>
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.2em] mt-1">REALTOR® · Cole Camp, MO</p>
                </div>
              </div>

              {/* Contact info */}
              <div className="flex-1 flex flex-col px-6 py-5 overflow-hidden">
                <div className="space-y-2.5 mb-5">
                  {[
                    { Icon: Phone, href: agent.phoneHref, text: agent.phone },
                    { Icon: Mail,  href: agent.emailHref, text: agent.email },
                    { Icon: MapPin, href: null,            text: agent.location },
                  ].map(({ Icon, href, text }) => {
                    const cls = "flex items-center gap-3 text-white/45 hover:text-white text-xs transition-colors group"
                    const inner = (
                      <>
                        <span className="w-7 h-7 rounded-lg bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/25 flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon size={11} className="text-brand-blue" />
                        </span>
                        <span className="truncate">{text}</span>
                      </>
                    )
                    return href
                      ? <a key={text} href={href} className={cls}>{inner}</a>
                      : <div key={text} className={cls}>{inner}</div>
                  })}
                </div>

                {/* divider */}
                <div className="h-px bg-white/[0.06] mb-4" />

                {/* social */}
                <p className="text-[9px] uppercase tracking-[0.2em] font-semibold text-white/20 mb-2.5">Follow Doug</p>
                <div className="flex gap-2 mb-auto">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-8 h-8 rounded-lg border border-white/10 hover:border-brand-blue hover:bg-brand-blue flex items-center justify-center text-white/30 hover:text-white transition-all duration-200">
                      <Icon size={13} />
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/contact" onClick={onClose}
                  className="mt-4 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 flex-shrink-0">
                  Get Free Consultation <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.aside>
          </div>

          {/* ── Mobile/tablet bottom bar (visible below lg) ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="lg:hidden relative flex-shrink-0 border-t border-white/[0.07] px-6 sm:px-10 py-4"
            style={{ background: 'rgba(9,17,30,0.75)', backdropFilter: 'blur(12px)' }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img src="/bio_pic.png" alt="Doug"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="w-9 h-9 rounded-lg object-cover object-top flex-shrink-0 border border-brand-blue/25" />
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold leading-tight">Doug Armantrout</p>
                  <a href={agent.phoneHref}
                    className="flex items-center gap-1 text-brand-blue text-[11px] hover:text-brand-blue-light transition-colors">
                    <Phone size={9} /> {agent.phone}
                  </a>
                </div>
              </div>
              <Link to="/contact" onClick={onClose}
                className="flex-shrink-0 flex items-center gap-1.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200">
                Free Consult <ArrowUpRight size={12} />
              </Link>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
