import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Star, Phone, Mail } from 'lucide-react'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { testimonials } from '../data/testimonials'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const stats = [
  { value: 150, suffix: '+', label: 'Homes Sold' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 8, suffix: '', label: 'Cities Served' },
]

const credentials = [
  'Licensed REALTOR®',
  'West Central MLS Member',
  'Cole Camp Local Expert',
  'Proven Negotiator',
  'First-Time Buyer Specialist',
  'Always Accessible',
]

const values = [
  {
    title: 'Integrity',
    desc: 'Every recommendation Doug makes is in your best interest. No hidden agendas, no pressure tactics — just honest guidance.',
    icon: '🤝',
  },
  {
    title: 'Local Expertise',
    desc: 'Deep knowledge of Cole Camp, Warsaw, Sedalia, and surrounding communities means you benefit from insights no outsider can offer.',
    icon: '📍',
  },
  {
    title: 'Clear Communication',
    desc: 'Real estate has a lot of moving parts. Doug keeps you informed at every step so you always know exactly where things stand.',
    icon: '💬',
  },
  {
    title: 'Results Driven',
    desc: 'Doug\'s success is measured by yours. Maximum value for sellers, best deal for buyers, and a smooth closing for everyone.',
    icon: '🎯',
  },
]

export default function AboutPage() {
  return (
    <main className="pb-20 lg:pb-0 pt-24 lg:pt-28">
      {/* Bio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo + identity card + contact panel */}
            <AnimatedSection variant="slideLeft">
              <div className="sticky top-24 space-y-3">

                {/* Photo — face fully visible, card at very bottom */}
                <div className="rounded-2xl overflow-hidden aspect-[3/4] relative border border-white/[0.08]">
                  <img
                    src="/bio_pic.png"
                    alt="Doug Armantrout — REALTOR®"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* bottom-only gradient so face is never dimmed */}
                  <div className="absolute inset-x-0 bottom-0 h-[38%]"
                    style={{ background: 'linear-gradient(to top, rgba(8,15,32,0.96) 0%, rgba(8,15,32,0.55) 55%, transparent 100%)' }} />

                  {/* Meet card — anchored to the very bottom of the photo */}
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-3">
                    {/* gold rule + label */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="block h-px w-7 bg-gold/60" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold/60">Meet</span>
                    </div>
                    {/* name */}
                    <h3 className="font-serif font-bold uppercase text-gold leading-none tracking-wide"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', textShadow: '0 2px 16px rgba(201,168,76,0.25)' }}>
                      Doug Armantrout
                    </h3>
                    <p className="text-white/35 text-[10px] uppercase tracking-[0.22em] mt-1.5 font-medium">
                      REALTOR® · West Central Missouri
                    </p>
                  </div>
                </div>

                {/* Contact panel — separate card below the photo */}
                <div className="rounded-xl border border-white/[0.08] overflow-hidden"
                  style={{ background: 'rgba(11,18,38,0.95)' }}>
                  {/* gold accent strip at top */}
                  <div className="h-[2px] bg-gradient-to-r from-gold/60 via-gold/30 to-transparent" />
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((s) => <Star key={s} size={13} className="text-gold fill-gold" />)}
                      </div>
                      <span className="text-white/30 text-[10px] uppercase tracking-widest font-semibold">5.0 · 50+ Reviews</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="tel:6608511818"
                        className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30">
                        <Phone size={13} /> Call Doug
                      </a>
                      <a href="mailto:douga.homes@gmail.com"
                        className="flex items-center justify-center gap-2 border border-white/15 hover:border-gold/40 text-white/70 hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
                        <Mail size={13} /> Email
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>

            {/* Bio Content */}
            <AnimatedSection variant="slideRight" className="space-y-6">
              <div>
                <SectionLabel text="About Doug" className="mb-4" />
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary mb-2">Doug Armantrout</h2>
                <p className="text-brand-blue font-medium text-sm mb-6">
                  📍 Cole Camp, MO 65325 | West Central Association of Realtors
                </p>
              </div>

              <p className="text-text-secondary leading-relaxed">
                Doug Armantrout is a licensed REALTOR® based in Cole Camp, MO, serving buyers and sellers throughout West Central Missouri. His service area spans Cole Camp, Warsaw, Sedalia, Lincoln, Knob Noster, Leeton, Stover, Otterville, and surrounding communities — giving clients access to one of the region's most knowledgeable local real estate professionals.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With over 12 years of experience and full access to the West Central Association of Realtors MLS, Doug brings a strategic, data-driven approach to every transaction. Whether you're a first-time buyer navigating the process for the first time or a seasoned homeowner looking to maximize your sale, Doug tailors his expertise to your specific situation — not a one-size-fits-all script.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Born and raised in West Central Missouri, Doug is deeply committed to the communities he serves. He understands the unique character of Cole Camp, the lakeside appeal of Warsaw, and the economic vitality of Sedalia. That local knowledge translates directly into better outcomes for his clients — smarter pricing, sharper negotiations, and deals that actually close.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-text-secondary text-sm">
                    <CheckCircle size={15} className="text-brand-blue flex-shrink-0" />
                    {cred}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 mt-2">
                Work With Doug <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Core Values" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">What Doug Stands For</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.1 }}>
                <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-text-primary mb-3">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 border-y border-dark-700">
        <div className="max-w-5xl mx-auto">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Client Reviews" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">What Clients Say About Doug</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div key={t.id} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.08 }}>
                <TestimonialCard quote={t.quote} author={t.author} location={t.location} rating={t.rating} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Work With a Local Expert?"
        subtext="Experience the difference that true local knowledge makes. Let's start with a free conversation."
        primaryCTA={{ label: 'Contact Doug Today', href: '/contact' }}
        variant="dark"
      />
    </main>
  )
}
