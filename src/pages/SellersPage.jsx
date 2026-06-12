import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, BarChart, Paintbrush, Megaphone, ClipboardList, CheckSquare, Camera, Share2, Globe, Database, TrendingUp, Award, DollarSign, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const steps = [
  { num: 1, icon: MessageSquare, title: 'Free Consultation', desc: 'Doug meets with you to learn about your home, timeline, and goals. No obligation, no pressure.' },
  { num: 2, icon: BarChart, title: 'Pricing Strategy', desc: 'Using a detailed Comparative Market Analysis, Doug recommends a price that attracts buyers while maximizing your net.' },
  { num: 3, icon: Paintbrush, title: 'Prepare & Stage', desc: 'Doug provides staging advice and a pre-listing checklist to present your home in its best possible light.' },
  { num: 4, icon: Megaphone, title: 'List & Market', desc: 'Professional photography, MLS listing, social media, and online syndication to all major real estate platforms.' },
  { num: 5, icon: ClipboardList, title: 'Review Offers', desc: 'Doug presents every offer with a clear breakdown, advises you on each one, and negotiates the best terms.' },
  { num: 6, icon: CheckSquare, title: 'Close & Move', desc: 'Doug coordinates with all parties to ensure a smooth closing. You get your proceeds and move on to the next chapter.' },
]

const marketing = [
  { icon: Database, title: 'MLS Listing', desc: 'Your home on the West Central Association of Realtors MLS — reaching every active buyer and their agent in the region.' },
  { icon: Camera, title: 'Professional Photography', desc: 'High-quality photos that showcase your home at its best, included with every listing.' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Targeted exposure on Facebook, Instagram, and other platforms to reach buyers where they spend time.' },
  { icon: Globe, title: 'Online Syndication', desc: 'Your listing distributed to Zillow, Realtor.com, Trulia, and hundreds of other real estate websites.' },
]

const whyDoug = [
  { icon: TrendingUp, title: 'Data-Driven Pricing', desc: 'Precise pricing based on real MLS data, not guesswork. Priced right from day one.' },
  { icon: Award, title: 'Proven Track Record', desc: '150+ homes sold. Doug knows what works in this market and applies it to every listing.' },
  { icon: DollarSign, title: 'Negotiation Expertise', desc: 'Doug negotiates every offer to maximize your net proceeds — not just the sale price.' },
  { icon: Clock, title: 'Fast & Efficient', desc: 'Properly marketed homes sell faster. Less time on market means more money for you.' },
]

const sellerFAQs = [
  {
    q: 'How does Doug determine the right listing price for my home?',
    a: 'Doug prepares a detailed Comparative Market Analysis (CMA) using recent comparable sales in your neighborhood and price range. He adjusts for condition, features, square footage, and current market conditions to recommend a precise, defensible price designed to attract buyers while maximizing your net proceeds.',
  },
  {
    q: 'How long will it take to sell my home?',
    a: "In the current West Central Missouri market, well-priced and well-presented homes are selling in an average of 21 days or less. The timeline depends on price, condition, location, and market conditions at the time of listing. Doug will give you a realistic projection based on current data.",
  },
  {
    q: 'What are your fees for selling my home?',
    a: "Doug will explain all costs transparently during your free consultation. Real estate commissions are always negotiable and are paid at closing from the sale proceeds — there are no upfront fees.",
  },
  {
    q: 'Do I need to do any repairs or updates before listing?',
    a: "Not necessarily. Doug will walk through your home and identify which improvements will generate a positive return on investment and which are not worth the expense. Often, strategic cleaning, decluttering, and simple staging make a bigger difference than expensive renovations.",
  },
  {
    q: 'What happens if my home doesn\'t sell right away?',
    a: "Doug monitors showing feedback and market activity closely. If a home isn't generating offers within the expected timeframe, he will recommend a pricing or marketing adjustment proactively. He won't let your listing go stale.",
  },
  {
    q: 'Can I sell my home if I still have a mortgage?',
    a: "Yes. Most homes are sold with an existing mortgage. The remaining loan balance is paid off from the sale proceeds at closing. Doug can connect you with a title company that will walk you through exactly how this works.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-dark-600 rounded-xl overflow-hidden">
      <button onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-700/50 transition-colors focus-ring">
        <span className="font-medium text-text-primary text-sm pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-brand-blue flex-shrink-0" /> : <ChevronDown size={16} className="text-text-muted flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-dark-700 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SellersPage() {
  return (
    <main className="pb-20 lg:pb-0">
      <HeroSection
        height="half"
        badge="Seller Resources"
        title={`<span class="text-white">Sell for </span><span class="text-[#1B4FD8]">Maximum Value</span>`}
        description="A proven strategy that gets your home sold fast and for the best possible price in West Central Missouri."
        primaryCTA={{ label: 'Get Free Home Valuation', href: '/home-valuation' }}
        secondaryCTA={{ label: 'Talk to Doug', href: '/contact' }}
      />

      {/* Seller Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel text="The Selling Process" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">6 Steps to a Successful Sale</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={16} className="text-brand-blue" />
                          <h3 className="font-serif font-bold text-text-primary">{step.title}</h3>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Marketing Strategy" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Maximum Exposure for Your Listing</h2>
            <p className="text-text-secondary text-base mt-4 max-w-2xl mx-auto">Every listing receives a comprehensive marketing package designed to reach the most qualified buyers.</p>
          </AnimatedSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketing.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.1 }}>
                  <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full text-center">
                    <div className="inline-flex p-3 bg-brand-blue/15 rounded-xl mb-4">
                      <Icon size={22} className="text-brand-blue" />
                    </div>
                    <h3 className="font-serif font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Doug Sellers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Why Doug" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">The Seller's Advantage</h2>
          </AnimatedSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDoug.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.1 }}>
                  <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full text-center">
                    <div className="inline-flex p-3 bg-brand-blue/15 rounded-xl mb-4">
                      <Icon size={22} className="text-brand-blue" />
                    </div>
                    <h3 className="font-serif font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel text="Common Questions" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text-primary">Seller FAQs</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {sellerFAQs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="What's Your Home Worth?"
        subtext="Get a precise, no-obligation valuation from West Central Missouri's local expert."
        primaryCTA={{ label: 'Get Free Valuation', href: '/home-valuation' }}
        secondaryCTA={{ label: 'Contact Doug', href: '/contact' }}
        variant="blue"
      />
    </main>
  )
}
