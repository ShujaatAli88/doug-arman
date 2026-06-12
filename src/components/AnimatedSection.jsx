import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { fadeUp, fadeIn, slideInLeft, slideInRight } from '../utils/animations'

const variants = { fadeUp, fadeIn, slideLeft: slideInLeft, slideRight: slideInRight }

export default function AnimatedSection({ variant = 'fadeUp', delay = 0, children, className }) {
  const [ref, isInView] = useInView()

  return (
    <motion.div
      ref={ref}
      variants={variants[variant] || fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
