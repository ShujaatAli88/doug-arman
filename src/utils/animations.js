export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const blurUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.065 },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
}

export const defaultTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}
