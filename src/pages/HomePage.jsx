import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Search, TrendingUp, Heart, CheckCircle, ArrowRight, Mail } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import StatsCounter from '../components/StatsCounter'
import PropertyCard from '../components/PropertyCard'
import TestimonialCard from '../components/TestimonialCard'
import CTABanner from '../components/CTABanner'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { listings } from '../data/listings'
import { testimonials } from '../data/testimonials'
import { blogPosts } from '../data/blogPosts'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const stats = [
  { value: 150, suffix: '+', label: 'Homes Sold' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '★', label: 'Avg Rating' },
]

const approaches = [
  {
    icon: Search,
    title: 'Buy With Confidence',
    desc: 'Access to the full West Central MLS, neighborhood expertise, and a negotiator who puts your interests first.',
    href: '/buy',
    color: 'from-brand-blue to-brand-blue-dark',
  },
  {
    icon: TrendingUp,
    title: 'Sell for Maximum Value',
    desc: 'Data-driven pricing, professional marketing, and a proven strategy to get you the best possible outcome.',
    href: '/sell',
    color: 'from-brand-blue-dark to-brand-blue-deeper',
  },
  {
    icon: Heart,
    title: 'Process That Delivers',
    desc: 'From first conversation to closing day, expect clear communication, expert guidance, and zero surprises.',
    href: '/contact',
    color: 'from-brand-blue-light to-brand-blue',
  },
]

const featuredListings = listings.filter((l) => l.isFeatured).slice(0, 3)

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = useCallback((dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }, [])

  const t = testimonials[index]

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.4 }}
        >
          <TestimonialCard quote={t.quote} author={t.author} location={t.location} rating={t.rating} />
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={() => go(-1)} aria-label="Previous testimonial" className="p-2 rounded-full border border-dark-600 hover:border-brand-blue text-text-muted hover:text-brand-blue transition-colors focus-ring">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-brand-blue' : 'w-1.5 bg-dark-500'}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next testimonial" className="p-2 rounded-full border border-dark-600 hover:border-brand-blue text-text-muted hover:text-brand-blue transition-colors focus-ring">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

function BlogCard({ post }) {
  const categoryColors = {
    'Market Update': 'bg-brand-blue/20 text-brand-blue-light',
    'Buyer Tips': 'bg-green-500/20 text-green-400',
    'Seller Tips': 'bg-amber-500/20 text-amber-400',
    'Local News': 'bg-purple-500/20 text-purple-400',
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-brand-blue/50 transition-colors">
      <div className="aspect-video bg-gradient-to-br from-dark-600 to-dark-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-20">📰</span>
        </div>
      </div>
      <div className="p-5">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${categoryColors[post.category] || 'bg-dark-500 text-text-secondary'}`}>
          {post.category}
        </span>
        <h3 className="font-serif font-bold text-text-primary mt-3 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-text-secondary text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
        <span className="text-brand-blue text-xs font-semibold flex items-center gap-1">Read More <ArrowRight size={11} /></span>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [newsletterDone, setNewsletterDone] = useState(false)

  const handleNewsletter = useCallback((e) => {
    e.preventDefault()
    if (email) setNewsletterDone(true)
  }, [email])

  return (
    <main className="pb-20 lg:pb-0">
      {/* Hero */}
      <HeroSection
        height="full"
        badge="📍 Cole Camp, MO — West Central Missouri"
        title="Your Home.<br/>My Mission."
        description="West Central Missouri's trusted REALTOR® — strategic guidance for buyers and sellers across Cole Camp, Warsaw, Sedalia, and beyond."
        primaryCTA={{ label: 'Search All Listings', href: '/listings' }}
        secondaryCTA={{ label: 'Get Free Home Value', href: '/home-valuation' }}
        videoSrc="/intro.mp4"
      />

      {/* Stats */}
      <section className="bg-dark-800 border-y border-dark-700 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="How I Work" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">A Smarter Path to Your Goals</h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {approaches.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ ...defaultTransition, delay: i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="group block bg-dark-700 rounded-xl p-7 border border-dark-600 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 h-full"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-5`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-text-primary mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <SectionLabel text="Active Listings" className="mb-4" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Featured Properties</h2>
            </div>
            <Link to="/listings" className="flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-blue-light transition-colors">
              View All Listings <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredListings.map((listing, i) => (
              <motion.div key={listing.id} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.1 }}>
                <PropertyCard listing={listing} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Doug Teaser */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="slideLeft">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/[0.08]">
                <img
                  src="/bio_pic.png"
                  alt="Doug Armantrout — REALTOR®"
                  className="w-full h-full object-cover object-top"
                />

                {/* left-only gradient — right side of photo stays clean */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, rgba(8,15,32,0.92) 0%, rgba(8,15,32,0.65) 45%, transparent 72%)' }} />
                {/* bottom edge fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(8,15,32,0.80) 0%, transparent 100%)' }} />

                {/* Meet card — left-aligned, ~70% wide, photo shows on right */}
                <div className="absolute bottom-0 left-0 w-[72%] px-7 pb-6 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="block h-px w-7 bg-gold/60" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold/60">Meet</span>
                  </div>
                  <h3 className="font-serif font-bold uppercase text-gold leading-none tracking-wide"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)', textShadow: '0 2px 16px rgba(201,168,76,0.3)' }}>
                    Doug Armantrout
                  </h3>
                  <p className="text-white/35 text-[10px] uppercase tracking-[0.22em] mt-1.5 font-medium">
                    REALTOR® · Cole Camp, MO
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="slideRight">
              <SectionLabel text="About Doug" className="mb-4" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary mb-5">
                West Central Missouri's Trusted Real Estate Expert
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                Doug Armantrout has been helping buyers and sellers throughout Cole Camp, Warsaw, Sedalia, and the greater West Central Missouri region achieve their real estate goals. His deep local knowledge and strategic approach consistently deliver exceptional results.
              </p>
              <div className="space-y-2 mb-7">
                {['Licensed REALTOR® & MLS Member', 'Cole Camp Local Expert', 'Proven Negotiator', '12+ Years Experience'].map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-text-secondary text-sm">
                    <CheckCircle size={15} className="text-brand-blue flex-shrink-0" />
                    {cred}
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                Meet Doug <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Client Stories" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">What Clients Say</h2>
          </AnimatedSection>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Make Your Move?"
        subtext="Whether buying or selling, Doug is ready to guide you every step of the way."
        primaryCTA={{ label: 'Schedule Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Listings', href: '/listings' }}
        variant="blue"
      />

      {/* Recent Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <SectionLabel text="Real Estate Insights" className="mb-4" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Latest From the Blog</h2>
            </div>
            <Link to="/blog" className="flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-blue-light transition-colors">
              View All Posts <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div key={post.id} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.1 }}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 px-4 bg-dark-800 border-t border-dark-700">
        <div className="max-w-xl mx-auto text-center">
          <AnimatedSection>
            <Mail className="text-brand-blue mx-auto mb-4" size={32} />
            <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">Stay Ahead of the Market</h3>
            <p className="text-text-secondary text-sm mb-6">Get West Central Missouri market updates and new listing alerts delivered to your inbox.</p>
            {newsletterDone ? (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <CheckCircle size={18} />
                <span className="font-medium">You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-3 max-w-sm mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-dark-700 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring"
                />
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors focus-ring whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
