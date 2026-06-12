import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    if (sessionStorage.getItem('popup_shown')) return

    const timer = setTimeout(() => {
      setShow(true)
      sessionStorage.setItem('popup_shown', '1')
    }, 5000)

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('popup_shown')) {
        setShow(true)
        sessionStorage.setItem('popup_shown', '1')
        clearTimeout(timer)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const onSubmit = useCallback(async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 bg-dark-800 border border-brand-blue/40 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(27,79,216,0.25)' }}
          >
            <button
              onClick={() => setShow(false)}
              aria-label="Close popup"
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors focus-ring rounded-md p-1"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">You're on the list!</h3>
                <p className="text-text-secondary text-sm">We'll alert you when new homes hit the market.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <span className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue-light text-xs font-medium px-3 py-1 rounded-full mb-3">
                    📍 West Central Missouri
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-text-primary mb-2">Don't Miss New Listings!</h2>
                  <p className="text-text-secondary text-sm">
                    Get instant alerts when new homes hit the market in Cole Camp and West Central Missouri.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
                  <div>
                    <label htmlFor="popup-name" className="sr-only">Your Name</label>
                    <input
                      id="popup-name"
                      {...register('name', { required: true })}
                      placeholder="Your Name"
                      className="w-full bg-dark-700 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-3 outline-none transition-colors focus-ring"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">Name is required</p>}
                  </div>
                  <div>
                    <label htmlFor="popup-email" className="sr-only">Email Address</label>
                    <input
                      id="popup-email"
                      type="email"
                      {...register('email', { required: true })}
                      placeholder="Email Address"
                      className="w-full bg-dark-700 border border-dark-500 focus:border-brand-blue text-text-primary placeholder-text-muted text-sm rounded-lg px-4 py-3 outline-none transition-colors focus-ring"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">Email is required</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-ring"
                  >
                    {loading ? <Loader size={16} className="animate-spin" /> : null}
                    {loading ? 'Subscribing...' : 'Yes, Alert Me!'}
                  </button>
                </form>

                <button
                  onClick={() => setShow(false)}
                  className="w-full text-text-muted hover:text-text-secondary text-xs mt-3 transition-colors text-center"
                >
                  No thanks, I'll search on my own
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
