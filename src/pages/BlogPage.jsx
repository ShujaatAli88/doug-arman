import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { blogPosts } from '../data/blogPosts'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, defaultTransition } from '../utils/animations'

const categoryColors = {
  'Market Update': 'bg-brand-blue/20 text-brand-blue-light',
  'Buyer Tips': 'bg-green-500/20 text-green-400',
  'Seller Tips': 'bg-amber-500/20 text-amber-400',
  'Local News': 'bg-purple-500/20 text-purple-400',
}

const PER_PAGE = 6

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10 h-full flex flex-col shimmer-card">
      <div className="aspect-video bg-gradient-to-br from-dark-600 to-dark-500 relative flex-shrink-0 overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-15">📰</span>
          </div>
        )}
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
        {/* Category badge on image */}
        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm ${categoryColors[post.category] || 'bg-dark-500/80 text-text-secondary'}`}>
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-text-muted text-xs">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-dark-400" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-serif font-bold text-text-primary text-base mb-2 group-hover:text-brand-blue transition-colors duration-200 line-clamp-2 flex-1 leading-snug">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
        <span className="text-brand-blue text-sm font-semibold flex items-center gap-1.5 mt-auto">
          Read More <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const [page, setPage] = useState(1)
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0]
  const otherPosts = blogPosts.filter((p) => !p.featured || p.id !== featuredPost.id)
  const totalPages = Math.ceil(otherPosts.length / PER_PAGE)
  const pagePosts = otherPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <main className="pb-20 lg:pb-0">
      <HeroSection
        height="half"
        badge="West Central Missouri Market Updates"
        title={`<span class="text-white">Real Estate </span><span class="text-[#19469D]">Insights</span>`}
        description="Market updates, buyer tips, seller guidance, and local news from West Central Missouri's trusted REALTOR®."
      />

      {/* Featured Post */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-8">
            <SectionLabel text="Featured Article" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link to={`/blog/${featuredPost.slug}`} className="group block bg-dark-700 rounded-2xl overflow-hidden border border-dark-600 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/12 shimmer-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto min-h-[280px] bg-gradient-to-br from-brand-blue to-brand-blue-deeper relative overflow-hidden">
                  {featuredPost.image ? (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl opacity-20">📰</span>
                    </div>
                  )}
                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-700/30 to-transparent lg:bg-gradient-to-l lg:from-dark-700/20 lg:to-transparent pointer-events-none" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${categoryColors[featuredPost.category] || ''}`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-text-muted text-xs">{featuredPost.date}</span>
                    <span className="text-text-muted text-xs">· {featuredPost.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-brand-blue transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                    Read Full Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <SectionLabel text="All Articles" />
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pagePosts.map((post, i) => (
              <motion.div key={post.id} variants={fadeUp} transition={{ ...defaultTransition, delay: i * 0.08 }} className="flex">
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="p-2 rounded-lg border border-dark-600 text-text-secondary hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 transition-colors">
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} onClick={() => setPage(n)}
                  className={`w-9 h-9 text-sm rounded-lg border transition-colors ${page === n ? 'bg-brand-blue border-brand-blue text-white' : 'border-dark-600 text-text-secondary hover:border-brand-blue'}`}>
                  {n}
                </button>
              ))}
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="p-2 rounded-lg border border-dark-600 text-text-secondary hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
