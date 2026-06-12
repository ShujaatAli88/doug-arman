import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

export default function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark-900/98 backdrop-blur-md border-t-2 border-brand-blue"
    >
      <div className="flex items-stretch divide-x divide-dark-700">
        <a
          href="tel:6608511818"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm py-4 transition-colors"
        >
          <Phone size={16} />
          Call Doug
        </a>
        <a
          href="mailto:douga.homes@gmail.com"
          className="flex-1 flex items-center justify-center gap-2 text-text-primary hover:text-brand-blue hover:bg-brand-blue/10 font-semibold text-sm py-4 transition-colors"
        >
          <Mail size={16} />
          Email Doug
        </a>
      </div>
    </motion.div>
  )
}
