import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, MapPin, Home, FileText, Search, Key, Shield, Clock, DollarSign, Users, ChevronDown, ChevronUp } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import PropertyCard from '../components/PropertyCard'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { listings } from '../data/listings'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const steps = [
  { num: 1, icon: CreditCard, title: 'Get Pre-Approved', desc: 'Secure financing before you shop so you know your exact budget and can move quickly when you find the right home.' },
  { num: 2, icon: MapPin, title: 'Define Your Search', desc: 'Work with Doug to identify your must-haves, preferred areas, and realistic price range in West Central Missouri.' },
  { num: 3, icon: Search, title: 'Tour Homes', desc: 'Doug schedules and accompanies you on all showings, pointing out things you might miss and answering every question.' },
  { num: 4, icon: FileText, title: 'Make an Offer', desc: 'When you find the right home, Doug crafts a strategic offer designed to win without overpaying.' },
  { num: 5, icon: Home, title: 'Inspections & Due Diligence', desc: 'Doug coordinates inspections and reviews all findings, negotiating any repairs or credits on your behalf.' },
  { num: 6, icon: Key, title: 'Close & Get Your Keys', desc: 'Sit back as Doug manages the final details. On closing day, you get the keys to your new home.' },
]

const whyDoug = [
  { icon: Shield, title: 'Full MLS Access', desc: 'See every available property in West Central Missouri, including listings not on public sites.' },
  { icon: Clock, title: 'Fast Response', desc: 'In a competitive market, speed matters. Doug responds quickly so you never miss a great property.' },
  { icon: DollarSign, title: 'Expert Negotiator', desc: 'Doug fights for your best deal — on price, repairs, closing costs, and contract terms.' },
  { icon: Users, title: 'Local Network', desc: 'Access to lenders, inspectors, and contractors who know the West Central Missouri market.' },
]

const buyerFAQs = [
  {
    q: 'How much does it cost to use Doug as my buyer\'s agent?',
    a: 'In most transactions, the seller pays the buyer\'s agent commission. There is typically no out-of-pocket cost to you for Doug\'s buyer representation services. We\'ll go over all costs transparently before you sign anything.',
  },
  {
    q: 'How long does it take to buy a home in Cole Camp or West Central Missouri?',
    a: 'From starting your search to closing, the typical timeline is 60-90 days. This includes time to find the right home (2-6 weeks), negotiate and go under contract, and complete the closing process (usually 30-45 days after an accepted offer).',
  },
  {
    q: 'Do I need to be pre-approved before looking at homes?',
    a: 'We strongly recommend it. Pre-approval tells you exactly what you can afford, makes your offers more competitive, and prevents heartbreak when you fall in love with a home outside your budget. Doug can connect you with trusted local lenders.',
  },
  {
    q: 'What\'s the difference between pre-qualified and pre-approved?',
    a: 'Pre-qualification is an informal estimate based on self-reported information. Pre-approval is a formal review of your financial documents by a lender. Pre-approval carries much more weight with sellers and is what you need before making offers.',
  },
  {
    q: 'What areas does Doug cover for buyers?',
    a: 'Doug serves buyers throughout West Central Missouri, including Cole Camp, Warsaw, Sedalia, Lincoln, Knob Noster, Leeton, Stover, and Otterville. If you\'re looking in any of these areas, Doug has the local expertise to help.',
  },
  {
    q: 'Can Doug help me with new construction homes?',
    a: 'Absolutely. Doug can represent you in new construction purchases, helping you navigate builder contracts (which heavily favor the builder), select the right upgrades, and negotiate where possible.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-dark-600 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-700/50 transition-colors focus-ring"
      >
        <span className="font-medium text-text-primary text-sm pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-brand-blue flex-shrink-0" /> : <ChevronDown size={16} className="text-text-muted flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-dark-700 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function BuyersPage() {
  const featured = listings.filter((l) => l.isFeatured).slice(0, 3)

  return (
    <main className="pb-20 lg:pb-0">
      <HeroSection
        height="half"
        badge="Buyer Resources"
        title={`<span class="text-white">Your Complete </span><span class="text-[#1B4FD8]">Buyer's Guide</span>`}
        description="Everything you need to know about buying a home in West Central Missouri — from pre-approval to closing day."
        primaryCTA={{ label: 'Start Your Search', href: '/listings' }}
        secondaryCTA={{ label: 'Talk to Doug', href: '/contact' }}
      />

      {/* Buyer Steps */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel text="The Buying Process" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">6 Steps to Your New Home</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.num}
                        </div>
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

      {/* Why Doug */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Why Work With Doug" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Your Advantage in the Market</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
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

      {/* Featured Listings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Homes for Sale" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Featured Properties</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Info */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel text="Financing" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text-primary">Understanding Your Mortgage Options</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Conventional Loans', desc: 'Best for buyers with good credit and at least 5-20% down. Flexible terms and no upfront mortgage insurance with 20% down.' },
              { title: 'FHA Loans', desc: 'Ideal for first-time buyers. Requires as little as 3.5% down and is more forgiving of lower credit scores.' },
              { title: 'USDA & VA Loans', desc: 'Zero down payment options for qualifying rural properties (USDA) or veterans and active military (VA).' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 h-full">
                  <h3 className="font-serif font-bold text-brand-blue mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel text="Common Questions" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text-primary">Buyer FAQs</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {buyerFAQs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start Your Home Search Today"
        subtext="Get full MLS access and expert guidance for buying in West Central Missouri."
        primaryCTA={{ label: 'Search All Listings', href: '/listings' }}
        secondaryCTA={{ label: 'Contact Doug', href: '/contact' }}
        variant="blue"
      />
    </main>
  )
}
