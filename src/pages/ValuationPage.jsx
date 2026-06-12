import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, Loader, Phone, Mail, BarChart2, FileSearch, MessageCircle } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'

const howItWorks = [
  { icon: FileSearch, step: '1', title: 'Submit Your Info', desc: 'Fill out the form with basic details about your property. Takes less than 3 minutes.' },
  { icon: BarChart2, step: '2', title: 'Market Analysis', desc: 'Doug analyzes recent comparable sales, market trends, and your home\'s unique features.' },
  { icon: MessageCircle, step: '3', title: 'Doug Calls You', desc: 'Within 24 hours, Doug personally calls to share your valuation and answer all your questions.' },
]

export default function ValuationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { state: 'MO' }
  })

  const onSubmit = useCallback(async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }, [])

  return (
    <main className="pb-20 lg:pb-0">
      <HeroSection
        height="half"
        badge="No Obligation • 100% Free • West Central MO Specialists"
        title={`<span class="text-white">Get Your Free </span><span class="text-[#1B4FD8]">Home Valuation</span>`}
        description="Find out what your home is worth in today's West Central Missouri market. No strings attached."
      />

      {/* Valuation Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-dark-700 rounded-2xl p-12 border border-green-500/30 text-center">
                    <CheckCircle className="text-green-500 mx-auto mb-5" size={56} />
                    <h3 className="font-serif text-2xl font-bold text-text-primary mb-3">Request Received!</h3>
                    <p className="text-text-secondary leading-relaxed mb-2">
                      Thank you for submitting your home information.
                    </p>
                    <p className="text-text-secondary text-sm">
                      Doug will personally review your property details and call you within 24 hours with your free valuation.
                    </p>
                    <a href="tel:6608511818" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg mt-6 transition-colors">
                      <Phone size={16} />
                      (660) 851-1818
                    </a>
                  </div>
                ) : (
                  <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
                    <SectionLabel text="Free Valuation Request" className="mb-5" />
                    <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">Tell Us About Your Property</h2>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label htmlFor="v-address" className="block text-xs font-medium text-text-secondary mb-1.5">
                            Property Address <span className="text-brand-blue">*</span>
                          </label>
                          <input id="v-address" {...register('address', { required: 'Address is required' })}
                            placeholder="123 Main Street"
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                          {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="v-city" className="block text-xs font-medium text-text-secondary mb-1.5">
                            City <span className="text-brand-blue">*</span>
                          </label>
                          <input id="v-city" {...register('city', { required: 'City is required' })}
                            placeholder="Cole Camp"
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                          {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="v-state" className="block text-xs font-medium text-text-secondary mb-1.5">State</label>
                            <input id="v-state" {...register('state')} readOnly
                              className="w-full bg-dark-600 border border-dark-500 text-text-muted text-sm rounded-lg px-4 py-2.5 outline-none cursor-not-allowed" />
                          </div>
                          <div>
                            <label htmlFor="v-zip" className="block text-xs font-medium text-text-secondary mb-1.5">
                              ZIP <span className="text-brand-blue">*</span>
                            </label>
                            <input id="v-zip" {...register('zip', { required: 'ZIP required' })}
                              placeholder="65325"
                              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                            {errors.zip && <p className="text-red-400 text-xs mt-1">{errors.zip.message}</p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="v-type" className="block text-xs font-medium text-text-secondary mb-1.5">
                            Property Type <span className="text-brand-blue">*</span>
                          </label>
                          <select id="v-type" {...register('type', { required: true })}
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring">
                            <option value="">Select type...</option>
                            <option>Single Family</option>
                            <option>Multi-Family</option>
                            <option>Condo/Townhome</option>
                            <option>Land</option>
                            <option>Commercial</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="v-beds" className="block text-xs font-medium text-text-secondary mb-1.5">
                            Bedrooms <span className="text-brand-blue">*</span>
                          </label>
                          <select id="v-beds" {...register('beds', { required: true })}
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring">
                            <option value="">Select...</option>
                            {[1,2,3,4,5,'5+'].map((n) => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="v-baths" className="block text-xs font-medium text-text-secondary mb-1.5">
                            Bathrooms <span className="text-brand-blue">*</span>
                          </label>
                          <select id="v-baths" {...register('baths', { required: true })}
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring">
                            <option value="">Select...</option>
                            {[1,1.5,2,2.5,3,'3+'].map((n) => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="v-sqft" className="block text-xs font-medium text-text-secondary mb-1.5">Approx. Sq Footage</label>
                          <input id="v-sqft" type="number" {...register('sqft')}
                            placeholder="e.g. 1800"
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                        </div>
                        <div>
                          <label htmlFor="v-year" className="block text-xs font-medium text-text-secondary mb-1.5">Year Built</label>
                          <input id="v-year" type="number" {...register('year')}
                            placeholder="e.g. 1998"
                            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                        </div>
                      </div>

                      <div className="border-t border-dark-600 pt-5">
                        <p className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-4">Your Contact Info</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="v-name" className="block text-xs font-medium text-text-secondary mb-1.5">
                              Your Name <span className="text-brand-blue">*</span>
                            </label>
                            <input id="v-name" {...register('name', { required: 'Name is required' })}
                              placeholder="Full name"
                              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="v-email" className="block text-xs font-medium text-text-secondary mb-1.5">
                              Email <span className="text-brand-blue">*</span>
                            </label>
                            <input id="v-email" type="email" {...register('email', { required: 'Email is required' })}
                              placeholder="your@email.com"
                              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="v-phone" className="block text-xs font-medium text-text-secondary mb-1.5">Phone</label>
                            <input id="v-phone" type="tel" {...register('phone')}
                              placeholder="(000) 000-0000"
                              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="v-notes" className="block text-xs font-medium text-text-secondary mb-1.5">Anything else Doug should know?</label>
                            <textarea id="v-notes" {...register('notes')} rows={3}
                              placeholder="Recent updates, unique features, planned timeline..."
                              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring resize-none" />
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={loading}
                        className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-base focus-ring">
                        {loading ? <Loader size={18} className="animate-spin" /> : null}
                        {loading ? 'Submitting...' : 'Request My Free Valuation'}
                      </button>
                    </form>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar — flex column, stretches to match form height */}
            <div className="flex flex-col gap-6 h-full">

              {/* What You'll Receive — grows to fill remaining space */}
              <AnimatedSection delay={0.1} className="flex-1 flex flex-col">
                <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 flex-1 flex flex-col">
                  <h3 className="font-serif font-bold text-text-primary mb-1">What You'll Receive</h3>
                  <p className="text-text-muted text-xs mb-5">Your free valuation includes:</p>
                  <ul className="space-y-4 flex-1">
                    {[
                      { title: 'Precise Market Value',    desc: 'Based on recent MLS sales data in your area' },
                      { title: 'Comparable Sales',        desc: 'Side-by-side analysis of nearby sold homes' },
                      { title: 'Market Conditions',       desc: 'Current trends affecting your listing price' },
                      { title: 'Recommended Price Range', desc: 'Priced to sell fast without leaving money behind' },
                      { title: 'Personal Call From Doug', desc: 'Walk through the numbers with an expert — no pressure' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={11} className="text-brand-blue" />
                        </span>
                        <div>
                          <p className="text-text-primary text-sm font-medium leading-snug">{item.title}</p>
                          <p className="text-text-muted text-xs leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* bottom accent */}
                  <div className="mt-6 pt-5 border-t border-dark-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-text-muted">Response within <strong className="text-text-secondary">24 hours</strong> · No obligation</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Agent card — natural height, pinned at bottom */}
              <AnimatedSection delay={0.2}>
                <div className="rounded-xl border border-white/[0.08] overflow-hidden"
                  style={{ background: 'rgba(11,18,38,0.95)' }}>
                  <div className="h-[2px] bg-gradient-to-r from-brand-blue/70 via-brand-blue/30 to-transparent" />
                  <div className="flex items-center gap-4 p-5">
                    <img
                      src="/bio_pic.png"
                      alt="Doug Armantrout"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                      className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0 border border-brand-blue/20"
                    />
                    <div className="min-w-0">
                      <h3 className="font-serif font-bold text-text-primary text-base leading-tight">Doug Armantrout</h3>
                      <p className="text-brand-blue text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">REALTOR® · Cole Camp, MO</p>
                      <a href="tel:6608511818"
                        className="flex items-center gap-1.5 text-text-secondary hover:text-white text-xs transition-colors mb-1.5">
                        <Phone size={11} className="text-brand-blue flex-shrink-0" /> (660) 851-1818
                      </a>
                      <a href="mailto:douga.homes@gmail.com"
                        className="flex items-center gap-1.5 text-text-secondary hover:text-white text-xs transition-colors truncate">
                        <Mail size={11} className="text-brand-blue flex-shrink-0" /> douga.homes@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="The Process" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text-primary">How Your Valuation Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                  <div className="inline-flex p-4 bg-brand-blue/15 rounded-2xl mb-4">
                    <Icon size={28} className="text-brand-blue" />
                  </div>
                  <div className="text-brand-blue font-bold text-sm mb-2">Step {item.step}</div>
                  <h3 className="font-serif font-bold text-text-primary text-lg mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Sell? Let's Talk Strategy."
        subtext="Turn your home's value into your next opportunity. Let's start with a free conversation."
        primaryCTA={{ label: 'Contact Doug Today', href: '/contact' }}
        variant="dark"
      />
    </main>
  )
}
