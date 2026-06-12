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
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
]

/* ── animation variants ── */
const overlayV = {
  hidden:  { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' },
  visible: { opacity: 1, clipPath: 'circle(170% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
    transition: { duration: 0.4,  ease: [0.76, 0, 0.24, 1] } },
}

const listV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}

const itemV = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}

const panelV = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.35, ease: [0.4, 0, 0.2, 1] } },
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
          className="fixed inset-0 z-[90] flex flex-col overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #080A0F 0%, #0B1525 100%)' }}
        >
          {/* faint dot-grid texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(rgba(27,79,216,1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />

          {/* ── top bar ── */}
          <div className="relative flex items-center justify-between px-8 md:px-14 pt-5 pb-4 flex-shrink-0 border-b border-white/[0.07]">
            <Link to="/" onClick={onClose} className="flex flex-col leading-none">
              <span className="font-serif text-lg font-bold tracking-tight">
                <span className="text-white">DOUG </span>
                <span className="text-brand-blue">ARMANTROUT</span>
              </span>
              <span className="text-[10px] text-white/30 uppercase tracking-[0.22em] mt-0.5">REALTOR® · Cole Camp, MO</span>
            </Link>
            <button onClick={onClose} aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-white/15 hover:border-brand-blue bg-white/[0.04] hover:bg-brand-blue/10 flex items-center justify-center text-white/50 hover:text-brand-blue transition-all duration-200">
              <X size={16} />
            </button>
          </div>

          {/* ── main body ── */}
          <div className="relative flex-1 flex overflow-hidden">

            {/* LEFT — nav list */}
            <motion.nav
              variants={listV}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col justify-center px-8 md:px-14 py-8 overflow-y-auto"
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={itemV}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`group flex items-baseline gap-5 py-3.5 border-b border-white/[0.07] hover:border-brand-blue/40 transition-colors duration-200 ${
                        i === 0 ? 'border-t border-white/[0.07]' : ''
                      }`}
                    >
                      {/* number */}
                      <span className="w-6 text-[10px] font-mono tracking-widest flex-shrink-0 text-white/25 group-hover:text-brand-blue/70 transition-colors duration-200">
                        {item.num}
                      </span>

                      {/* label */}
                      <span className={`font-serif font-bold uppercase leading-none text-3xl md:text-4xl lg:text-5xl tracking-tight transition-colors duration-200 flex-1 ${
                        isActive ? 'text-brand-blue' : 'text-white/80 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>

                      {/* sub-labels */}
                      {item.sub.length > 0 && (
                        <span className="hidden sm:flex items-center gap-3 flex-shrink-0">
                          {item.sub.map((s) => (
                            <span key={s} className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/25 group-hover:text-white/50 transition-colors duration-200">
                              {s}
                            </span>
                          ))}
                        </span>
                      )}

                      {/* arrow */}
                      <ArrowUpRight
                        size={18}
                        className="flex-shrink-0 text-white/0 group-hover:text-brand-blue transition-all duration-200 translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0"
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* RIGHT — contact panel (hidden on small screens) */}
            <motion.aside
              variants={panelV}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex w-72 xl:w-80 flex-col justify-center px-10 py-8 border-l border-white/[0.07] flex-shrink-0"
            >
              {/* agent photo + Meet card */}
              <div className="mb-8">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5 border border-white/[0.07]">
                  <img
                    src="/bio_pic.png"
                    alt="Doug Armantrout"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#070E1E]/80 via-transparent to-transparent" />
                  {/* inline Meet card */}
                  <div className="absolute left-0 bottom-0 right-0 px-4 py-3"
                    style={{ background: 'rgba(8,18,38,0.82)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="block w-5 h-px bg-gold/60" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60">Meet</span>
                    </div>
                    <p className="font-serif font-bold text-gold uppercase tracking-wide text-base leading-tight">Doug Armantrout</p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest mt-0.5">REALTOR® · Cole Camp, MO</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href={agent.phoneHref}
                    className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                    <span className="w-7 h-7 rounded-full bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone size={12} className="text-brand-blue" />
                    </span>
                    {agent.phone}
                  </a>
                  <a href={agent.emailHref}
                    className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                    <span className="w-7 h-7 rounded-full bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail size={12} className="text-brand-blue" />
                    </span>
                    {agent.email}
                  </a>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="w-7 h-7 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={12} className="text-brand-blue" />
                    </span>
                    {agent.location}
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="h-px bg-white/[0.07] mb-6" />

              {/* social */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/25 mb-3">Follow Doug</p>
                <div className="flex gap-2">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-9 h-9 rounded-full border border-white/10 hover:border-brand-blue hover:bg-brand-blue flex items-center justify-center text-white/35 hover:text-white transition-all duration-200">
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link to="/contact" onClick={onClose}
                className="mt-8 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200">
                Get Free Consultation <ArrowUpRight size={14} />
              </Link>
            </motion.aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
