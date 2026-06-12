import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Building, Facebook, Instagram, Linkedin, Youtube, CheckCircle, Loader, Clock, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { agent } from '../data/agentData'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = useCallback(async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div className="bg-dark-700 rounded-2xl p-10 border border-green-500/30 text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={52} />
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-text-secondary">Doug will respond within 24 hours. You can also reach him directly at <a href="tel:6608511818" className="text-brand-blue">(660) 851-1818</a>.</p>
      </div>
    )
  }

  return (
    <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
      <h3 className="font-serif text-xl font-bold text-text-primary mb-5">Send Doug a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="cf-first" className="block text-xs font-medium text-text-secondary mb-1.5">First Name <span className="text-brand-blue">*</span></label>
            <input id="cf-first" {...register('firstName', { required: true })}
              placeholder="First"
              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">Required</p>}
          </div>
          <div>
            <label htmlFor="cf-last" className="block text-xs font-medium text-text-secondary mb-1.5">Last Name <span className="text-brand-blue">*</span></label>
            <input id="cf-last" {...register('lastName', { required: true })}
              placeholder="Last"
              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">Required</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cf-email" className="block text-xs font-medium text-text-secondary mb-1.5">Email <span className="text-brand-blue">*</span></label>
            <input id="cf-email" type="email" {...register('email', { required: true })}
              placeholder="your@email.com"
              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
            {errors.email && <p className="text-red-400 text-xs mt-1">Required</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className="block text-xs font-medium text-text-secondary mb-1.5">Phone</label>
            <input id="cf-phone" type="tel" {...register('phone')}
              placeholder="(000) 000-0000"
              className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
          </div>
        </div>
        <div>
          <label htmlFor="cf-interest" className="block text-xs font-medium text-text-secondary mb-1.5">I'm interested in</label>
          <select id="cf-interest" {...register('interest')}
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring">
            <option value="">Select...</option>
            <option>Buying</option>
            <option>Selling</option>
            <option>Both Buying & Selling</option>
            <option>Home Valuation</option>
            <option>Free Consultation</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-message" className="block text-xs font-medium text-text-secondary mb-1.5">Message <span className="text-brand-blue">*</span></label>
          <textarea id="cf-message" {...register('message', { required: true })} rows={4}
            placeholder="How can Doug help you?"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring resize-none" />
          {errors.message && <p className="text-red-400 text-xs mt-1">Message is required</p>}
        </div>
        <div className="flex items-start gap-3">
          <input id="cf-consent" type="checkbox" {...register('consent', { required: true })}
            className="mt-0.5 accent-brand-blue w-4 h-4 flex-shrink-0 focus-ring" />
          <label htmlFor="cf-consent" className="text-text-muted text-xs leading-relaxed">
            I agree to be contacted by Doug Armantrout regarding my real estate inquiry. I can opt out at any time.
          </label>
        </div>
        {errors.consent && <p className="text-red-400 text-xs">Please accept to continue</p>}
        <button type="submit" disabled={loading}
          className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-ring">
          {loading ? <Loader size={16} className="animate-spin" /> : null}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = useCallback(async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }, [])

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="text-green-500 mx-auto mb-3" size={40} />
        <p className="text-text-primary font-medium">Consultation request received! Doug will confirm your time shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <label htmlFor="con-name" className="block text-xs font-medium text-text-secondary mb-1.5">Your Name <span className="text-brand-blue">*</span></label>
        <input id="con-name" {...register('name', { required: true })}
          placeholder="Full name"
          className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
      </div>
      <div>
        <label htmlFor="con-email" className="block text-xs font-medium text-text-secondary mb-1.5">Email <span className="text-brand-blue">*</span></label>
        <input id="con-email" type="email" {...register('email', { required: true })}
          placeholder="your@email.com"
          className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
      </div>
      <div>
        <label htmlFor="con-phone" className="block text-xs font-medium text-text-secondary mb-1.5">Phone</label>
        <input id="con-phone" type="tel" {...register('phone')}
          placeholder="(000) 000-0000"
          className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring" />
      </div>
      <div>
        <label htmlFor="con-time" className="block text-xs font-medium text-text-secondary mb-1.5">Best Time to Call</label>
        <select id="con-time" {...register('time')}
          className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring">
          <option>Morning (8am–12pm)</option>
          <option>Afternoon (12pm–5pm)</option>
          <option>Evening (5pm–7pm)</option>
          <option>Anytime</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1.5">I want to:</label>
        <div className="space-y-2">
          {['Buy a Home', 'Sell My Home', 'Both'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-text-secondary text-sm cursor-pointer">
              <input type="radio" value={opt} {...register('goal')} defaultChecked={opt === 'Buy a Home'} className="accent-brand-blue" />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <div className="flex items-end">
        <button type="submit" disabled={loading}
          className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-ring h-fit">
          {loading ? <Loader size={14} className="animate-spin" /> : <ArrowRight size={14} />}
          {loading ? 'Booking...' : 'Book Consultation'}
        </button>
      </div>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="pb-20 lg:pb-0 pt-24 lg:pt-28">
      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection variant="slideLeft">
                <SectionLabel text="Get In Touch" className="mb-5" />
                <h2 className="font-serif text-3xl font-bold text-text-primary mb-1">DOUG ARMANTROUT</h2>
                <p className="text-brand-blue font-medium text-sm mb-7">REALTOR® | West Central Missouri</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin size={17} className="text-brand-blue flex-shrink-0" />
                    <span className="text-sm">{agent.location}</span>
                  </div>
                  <a href={agent.phoneHref} className="flex items-center gap-3 text-text-secondary hover:text-brand-blue transition-colors">
                    <Phone size={17} className="text-brand-blue flex-shrink-0" />
                    <span className="text-sm">{agent.phone}</span>
                  </a>
                  <a href={agent.emailHref} className="flex items-center gap-3 text-text-secondary hover:text-brand-blue transition-colors">
                    <Mail size={17} className="text-brand-blue flex-shrink-0" />
                    <span className="text-sm">{agent.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Building size={17} className="text-brand-blue flex-shrink-0" />
                    <span className="text-sm">{agent.mls}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" aria-label={`Social link ${i + 1}`}
                      className="p-2.5 bg-dark-700 hover:bg-brand-blue/20 border border-dark-600 hover:border-brand-blue rounded-lg text-text-muted hover:text-brand-blue transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                <div className="bg-dark-700 rounded-xl p-5 border border-dark-600">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-brand-blue" />
                    <span className="text-text-primary font-semibold text-sm">Office Hours</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Mon–Fri</span>
                      <span className="text-text-primary">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Saturday</span>
                      <span className="text-text-primary">9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Sunday</span>
                      <span className="text-text-primary">By Appointment</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="slideRight">
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 px-4 bg-dark-800 border-t border-dark-700">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel text="Free Consultation" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text-primary">Book a Free Consultation</h2>
            <p className="text-text-secondary text-sm mt-3">Pick a time and tell Doug what you're looking to accomplish.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
              <ConsultationForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Service Area" className="justify-center mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">Proudly Serving West Central Missouri</h2>
            <p className="text-text-secondary text-base mt-4 max-w-2xl mx-auto">
              Doug has deep knowledge of each community in West Central Missouri, giving you a true local advantage wherever you're buying or selling.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {agent.serviceAreas.map((city, i) => (
              <AnimatedSection key={city} delay={i * 0.06}>
                <div className="bg-dark-700 rounded-xl p-5 border border-dark-600 hover:border-brand-blue/50 transition-colors group">
                  <h3 className="font-serif font-bold text-text-primary text-lg mb-1 group-hover:text-brand-blue transition-colors">{city}</h3>
                  <p className="text-brand-blue text-xs font-medium">Missouri</p>
                  <p className="text-text-muted text-xs mt-2 group-hover:text-text-secondary transition-colors">Homes Available →</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
