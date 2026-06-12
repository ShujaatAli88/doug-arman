import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, Loader } from 'lucide-react'

export default function LeadForm({ formType = 'general', title, subtitle }) {
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
      <div className="bg-dark-700 rounded-xl p-8 border border-green-500/30 text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-text-primary font-serif text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-text-secondary text-sm">Doug will be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="bg-dark-700 rounded-xl p-6 border border-dark-600">
      {title && <h3 className="font-serif text-xl font-bold text-text-primary mb-1">{title}</h3>}
      {subtitle && <p className="text-text-secondary text-sm mb-5">{subtitle}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="lf-name" className="block text-xs font-medium text-text-secondary mb-1.5">
            Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="lf-name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="lf-email" className="block text-xs font-medium text-text-secondary mb-1.5">
            Email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="lf-email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="your@email.com"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="lf-phone" className="block text-xs font-medium text-text-secondary mb-1.5">Phone</label>
          <input
            id="lf-phone"
            type="tel"
            {...register('phone')}
            placeholder="(000) 000-0000"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring"
          />
        </div>

        <div>
          <label htmlFor="lf-message" className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
          <textarea
            id="lf-message"
            {...register('message')}
            rows={3}
            placeholder="How can Doug help you?"
            className="w-full bg-dark-800 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-2.5 outline-none transition-colors focus-ring resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-ring"
        >
          {loading ? <Loader size={16} className="animate-spin" /> : null}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
