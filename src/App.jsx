import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'
import ExitIntentPopup from './components/ExitIntentPopup'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ListingsPage = lazy(() => import('./pages/ListingsPage'))
const BuyersPage = lazy(() => import('./pages/BuyersPage'))
const SellersPage = lazy(() => import('./pages/SellersPage'))
const ValuationPage = lazy(() => import('./pages/ValuationPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))

const PageLoader = () => (
  <div className="min-h-screen bg-dark-900 flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
  </div>
)

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-900 text-text-primary">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/listings" element={<PageWrapper><ListingsPage /></PageWrapper>} />
            <Route path="/buy" element={<PageWrapper><BuyersPage /></PageWrapper>} />
            <Route path="/sell" element={<PageWrapper><SellersPage /></PageWrapper>} />
            <Route path="/home-valuation" element={<PageWrapper><ValuationPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <MobileBottomBar />
      <ExitIntentPopup />
    </div>
  )
}
