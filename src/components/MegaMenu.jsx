import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Phone, Mail, MapPin,
  Facebook, Instagram, Linkedin, Youtube,
  ArrowUpRight, ChevronRight,
  Home, Info, List, ShoppingBag, Tag, Calculator, BookOpen, MessageSquare,
} from 'lucide-react'
import { agent } from '../data/agentData'

const navItems = [
  { num: '01', label: 'Home',           href: '/',               Icon: Home,          sub: [] },
  { num: '02', label: 'About',          href: '/about',          Icon: Info,          sub: ['Meet Doug', 'Testimonials'] },
  { num: '03', label: 'Listings',       href: '/listings',       Icon: List,          sub: [] },
  { num: '04', label: 'Buy',            href: '/buy',            Icon: ShoppingBag,   sub: ["Buyer's Guide"] },
  { num: '05', label: 'Sell',           href: '/sell',           Icon: Tag,           sub: ["Seller's Guide"] },
  { num: '06', label: 'Home Valuation', href: '/home-valuation', Icon: Calculator,    sub: [] },
  { num: '07', label: 'Blog',           href: '/blog',           Icon: BookOpen,      sub: [] },
  { num: '08', label: 'Contact',        href: '/contact',        Icon: MessageSquare, sub: ['Free Consultation'] },
]

const socials = [
  { Icon: Facebook,  href: agent.social.facebook,  label: 'Facebook' },
  { Icon: Instagram, href: agent.social.instagram, label: 'Instagram' },
  { Icon: Linkedin,  href: agent.social.linkedin,  label: 'LinkedIn' },
  { Icon: Youtube,   href: agent.social.youtube,   label: 'YouTube' },
]

/* ── animation variants ── */
const overlayV = {
  hidden:  { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' },
  visible: { opacity: 1, clipPath: 'circle(170% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
}
const listV  = { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.22 } } }
const itemV  = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } } }
const panelV = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.32, ease: [0.4, 0, 0.2, 1] } } }
const bottomV = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.45, ease: [0.4, 0, 0.2, 1] } } }

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
          className="fixed inset-0 z-[90] flex flex-col overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #09111E 0%, #0E1D38 100%)' }}
        >
          {/* subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(rgba(27,79,216,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* ── Top bar (shared) ── */}
          <div className="relative flex items-center justify-between px-5 sm:px-8 lg:px-14 pt-4 pb-3 flex-shrink-0 border-b border-white/[0.07]">
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

            {/* ════════════════════════════════
                MOBILE nav  (below lg)
                Clean app-drawer style
                ════════════════════════════════ */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="lg:hidden flex-1 flex flex-col justify-between px-4 sm:px-6 py-3"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={itemV}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-brand-blue/15 border border-brand-blue/30'
                          : 'hover:bg-white/[0.05] border border-transparent'
                      }`}
                    >
                      {/* icon badge */}
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-brand-blue text-white'
                          : 'bg-white/[0.06] text-white/40 group-hover:bg-brand-blue/20 group-hover:text-brand-blue'
                      }`}>
                        <item.Icon size={15} />
                      </span>

                      {/* label */}
                      <span className={`font-semibold text-[15px] flex-1 transition-colors ${
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>

                      {/* active dot or arrow */}
                      {isActive
                        ? <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        : <ChevronRight size={14} className="text-white/20 group-hover:text-white/50 flex-shrink-0 transition-colors" />
                      }
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* ════════════════════════════════
                DESKTOP nav  (lg+)
                Large editorial serif style
                ════════════════════════════════ */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex flex-1 flex-col overflow-y-auto px-14 py-6 justify-start"
              style={{ scrollbarWidth: 'none' }}
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={itemV} className="flex-shrink-0">
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`group flex items-center gap-4 py-3.5 border-b border-white/[0.07] hover:border-brand-blue/40 transition-colors duration-200 ${
                        i === 0 ? 'border-t border-white/[0.07]' : ''
                      }`}
                    >
                      <span className="w-5 text-[9px] font-mono tracking-widest flex-shrink-0 text-white/20 group-hover:text-brand-blue/60 transition-colors">
                        {item.num}
                      </span>
                      <span className={`font-serif font-bold uppercase leading-none tracking-tight transition-colors duration-200 flex-1
                        text-4xl xl:text-5xl
                        ${isActive ? 'text-brand-blue' : 'text-white/80 group-hover:text-white'}`}>
                        {item.label}
                      </span>
                      {item.sub.length > 0 && (
                        <span className="hidden xl:flex items-center gap-3 flex-shrink-0">
                          {item.sub.map((s) => (
                            <span key={s} className="text-[9px] uppercase tracking-[0.18em] font-semibold text-white/20 group-hover:text-white/45 transition-colors">
                              {s}
                            </span>
                          ))}
                        </span>
                      )}
                      <ArrowUpRight size={15}
                        className="flex-shrink-0 text-white/0 group-hover:text-brand-blue transition-all duration-200 translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* ── Desktop right panel (lg+) ── */}
            <motion.aside
              variants={panelV}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex w-72 xl:w-[22rem] flex-col border-l border-white/[0.07] flex-shrink-0 overflow-hidden"
            >
              <div className="relative flex-shrink-0" style={{ height: '55%' }}>
                <img src="/bio_pic.png" alt="Doug Armantrout"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(8,14,28,0.1) 0%, rgba(8,14,28,0.15) 50%, rgba(8,14,28,0.92) 100%)' }} />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="block h-px w-5 bg-gold/60" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60">Meet</span>
                  </div>
                  <p className="font-serif font-bold text-gold uppercase text-lg leading-none tracking-wide">Doug Armantrout</p>
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.2em] mt-1">REALTOR® · Cole Camp, MO</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col px-6 py-5 overflow-hidden">
                <div className="space-y-2.5 mb-5">
                  {[
                    { Icon: Phone,  href: agent.phoneHref, text: agent.phone },
                    { Icon: Mail,   href: agent.emailHref, text: agent.email },
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
                <div className="h-px bg-white/[0.06] mb-4" />
                <p className="text-[9px] uppercase tracking-[0.2em] font-semibold text-white/20 mb-2.5">Follow Doug</p>
                <div className="flex gap-2 mb-auto">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-8 h-8 rounded-lg border border-white/10 hover:border-brand-blue hover:bg-brand-blue flex items-center justify-center text-white/30 hover:text-white transition-all duration-200">
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
                <Link to="/contact" onClick={onClose}
                  className="mt-4 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 flex-shrink-0">
                  Get Free Consultation <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.aside>
          </div>

          {/* ── Mobile bottom panel (below lg only) ── */}
          <motion.div
            variants={bottomV}
            initial="hidden"
            animate="visible"
            className="lg:hidden relative flex-shrink-0"
          >
            <div className="h-[2px] bg-gradient-to-r from-brand-blue via-brand-blue-light to-gold/50" />
            <div className="px-4 sm:px-8 pt-3.5 pb-5"
              style={{ background: 'rgba(8,14,28,0.97)', backdropFilter: 'blur(20px)' }}>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="relative flex-shrink-0">
                  <img src="/bio_pic.png" alt="Doug Armantrout"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="w-11 h-11 rounded-xl object-cover object-top border border-brand-blue/30" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-dark-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-bold text-white text-sm leading-tight">Doug Armantrout</p>
                  <p className="text-[10px] text-white/35 uppercase tracking-[0.15em] mt-0.5">REALTOR® · Cole Camp, MO</p>
                </div>
                <div className="flex gap-1.5">
                  {[{ Icon: Facebook, href: agent.social.facebook, label: 'Facebook' },
                    { Icon: Instagram, href: agent.social.instagram, label: 'Instagram' }].map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-7 h-7 rounded-lg border border-white/10 hover:border-brand-blue hover:bg-brand-blue/20 flex items-center justify-center text-white/30 hover:text-white transition-all">
                      <Icon size={11} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a href={agent.phoneHref}
                  className="flex items-center justify-center gap-2 border border-white/[0.12] hover:border-brand-blue/50 bg-white/[0.05] hover:bg-brand-blue/10 text-white/80 hover:text-white text-xs font-semibold py-3 rounded-xl transition-all">
                  <Phone size={12} className="text-brand-blue" /> Call Doug
                </a>
                <Link to="/contact" onClick={onClose}
                  className="flex items-center justify-center gap-1.5 text-white text-xs font-bold py-3 rounded-xl shadow-lg shadow-brand-blue/20 transition-all hover:shadow-brand-blue/40"
                  style={{ background: 'linear-gradient(135deg, #1B4FD8 0%, #4B73E8 100%)' }}>
                  Free Consult <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
