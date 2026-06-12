import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

export default function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark-900/98 backdrop-blur-md border-t border-brand-blue/40"
    >
      <div className="flex items-stretch divide-x divide-dark-700">
        <a
          href="tel:6608511818"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold
            text-xs sm:text-sm
            py-2.5 sm:py-4
            transition-colors"
        >
          <Phone size={13} className="sm:hidden" />
          <Phone size={15} className="hidden sm:block" />
          <span>Call Doug</span>
        </a>
        <a
          href="mailto:douga.homes@gmail.com"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-text-primary hover:text-brand-blue hover:bg-brand-blue/10 font-semibold
            text-xs sm:text-sm
            py-2.5 sm:py-4
            transition-colors"
        >
          <Mail size={13} className="sm:hidden" />
          <Mail size={15} className="hidden sm:block" />
          <span>Email Doug</span>
        </a>
      </div>
    </motion.div>
  )
}
