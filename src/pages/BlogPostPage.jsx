import React, { useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag, Phone, Mail, CheckCircle, Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { blogPosts } from '../data/blogPosts'
import { agent } from '../data/agentData'
import AgentPhoto from '../components/AgentPhoto'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'

const categoryColors = {
  'Market Update': 'bg-brand-blue/20 text-brand-blue-light',
  'Buyer Tips': 'bg-green-500/20 text-green-400',
  'Seller Tips': 'bg-amber-500/20 text-amber-400',
  'Local News': 'bg-purple-500/20 text-purple-400',
}

function NewsletterWidget() {
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = useCallback(async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setDone(true)
  }, [])

  return (
    <div className="bg-dark-700 rounded-xl p-5 border border-dark-600">
      <h4 className="font-serif font-bold text-text-primary mb-2">Market Alert Signup</h4>
      <p className="text-text-secondary text-xs mb-4">Get new listings and market updates delivered to your inbox.</p>
      {done ? (
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle size={16} /> Subscribed!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
          <label htmlFor="bpp-email" className="sr-only">Email address</label>
          <input id="bpp-email" type="email" {...register('email', { required: true })}
            placeholder="your@email.com"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-xs rounded-lg px-3 py-2 outline-none transition-colors" />
          <button type="submit" disabled={loading}
            className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5">
            {loading ? <Loader size={12} className="animate-spin" /> : null}
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-text-primary mb-4">Article Not Found</h1>
          <p className="text-text-secondary mb-6">This article may have moved or been removed.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-blue-dark transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <main className="pb-20 lg:pb-0 pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-brand-blue text-sm transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-br from-brand-blue to-brand-blue-deeper rounded-2xl mb-8 flex items-center justify-center">
                <span className="text-7xl opacity-15">📰</span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 ${categoryColors[post.category] || ''}`}>
                  <Tag size={11} /> {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Article Body */}
              <div className="prose prose-invert max-w-none">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('**') && para.includes('.**')) {
                    const boldEnd = para.indexOf('.**')
                    const heading = para.slice(2, boldEnd)
                    const rest = para.slice(boldEnd + 3)
                    return (
                      <div key={i} className="mb-5">
                        <h3 className="font-serif font-bold text-text-primary text-xl mb-2">{heading}</h3>
                        {rest && <p className="text-text-secondary leading-relaxed">{rest}</p>}
                      </div>
                    )
                  }
                  if (para.match(/^\d+\.\s/)) {
                    const lines = para.split('\n')
                    return (
                      <ol key={i} className="space-y-3 mb-5">
                        {lines.map((line, j) => {
                          const match = line.match(/^\d+\.\s\*\*(.*?)\*\*(.*)/)
                          if (match) {
                            return (
                              <li key={j} className="text-text-secondary leading-relaxed">
                                <strong className="text-text-primary">{match[1]}</strong>{match[2]}
                              </li>
                            )
                          }
                          return <li key={j} className="text-text-secondary leading-relaxed">{line.replace(/^\d+\.\s/, '')}</li>
                        })}
                      </ol>
                    )
                  }
                  return <p key={i} className="text-text-secondary leading-relaxed mb-5">{para}</p>
                })}
              </div>

              {/* Author Bio */}
              <div className="mt-10 p-6 bg-dark-700 rounded-xl border border-dark-600 flex items-start gap-5">
                <AgentPhoto size="sm" className="flex-shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-text-primary">Doug Armantrout</h4>
                  <p className="text-brand-blue text-xs mb-2">REALTOR® | West Central Missouri</p>
                  <p className="text-text-secondary text-sm">Licensed REALTOR® serving Cole Camp, Warsaw, Sedalia, and all of West Central Missouri. Member of the West Central Association of Realtors.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Widget */}
            <AnimatedSection delay={0.1}>
              <div className="bg-dark-700 rounded-xl p-6 border border-brand-blue/30 text-center sticky top-24">
                <AgentPhoto size="md" className="mx-auto mb-3" />
                <h3 className="font-serif font-bold text-text-primary mb-1">Doug Armantrout</h3>
                <p className="text-brand-blue text-xs mb-4">REALTOR® | Cole Camp, MO</p>
                <p className="text-text-secondary text-xs leading-relaxed mb-5">
                  Questions about buying or selling in West Central Missouri? Doug is ready to help.
                </p>
                <div className="space-y-2">
                  <a href="tel:6608511818"
                    className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors w-full">
                    <Phone size={14} /> (660) 851-1818
                  </a>
                  <Link to="/contact"
                    className="flex items-center justify-center gap-2 border border-brand-blue/50 hover:border-brand-blue text-text-primary text-sm font-semibold py-2.5 rounded-lg transition-colors w-full">
                    <Mail size={14} /> Send a Message
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Recent Posts */}
            <AnimatedSection delay={0.15}>
              <div className="bg-dark-700 rounded-xl p-5 border border-dark-600">
                <h4 className="font-serif font-bold text-text-primary mb-4">Recent Posts</h4>
                <div className="space-y-4">
                  {blogPosts.filter((p) => p.slug !== slug).slice(0, 4).map((p) => (
                    <Link key={p.id} to={`/blog/${p.slug}`}
                      className="block group">
                      <p className="text-text-secondary group-hover:text-brand-blue text-sm transition-colors line-clamp-2 leading-relaxed">{p.title}</p>
                      <p className="text-text-muted text-xs mt-1">{p.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Newsletter */}
            <AnimatedSection delay={0.2}>
              <NewsletterWidget />
            </AnimatedSection>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="py-14 mt-10 border-t border-dark-700">
            <SectionLabel text="Related Articles" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rpost) => (
                <Link key={rpost.id} to={`/blog/${rpost.slug}`}
                  className="group bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-brand-blue/50 transition-colors">
                  <div className="aspect-video bg-gradient-to-br from-dark-600 to-dark-500 flex items-center justify-center">
                    <span className="text-3xl opacity-20">📰</span>
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[rpost.category] || ''}`}>{rpost.category}</span>
                    <h4 className="font-serif font-bold text-text-primary mt-2 group-hover:text-brand-blue transition-colors line-clamp-2">{rpost.title}</h4>
                    <p className="text-text-muted text-xs mt-2">{rpost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
