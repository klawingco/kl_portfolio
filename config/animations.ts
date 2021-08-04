const DURATIONS = {
  Fast: 0.6,
  Normal: 0.8,
  Slow: 1.2,
}
const easing = [0.6, -0.05, 0.01, 0.99]

const silenceIsGolden = {
  initial: {},
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const letterSpace = {
  initial: {
    opacity: 0,
  },
  animate: {
    letterSpacing: ['0px', '-10px', '0px'],
    opacity: 1,
    transition: {
      duration: DURATIONS.Slow,
      ease: easing,
    },
  },
}

const simpleOpacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export {
  easing,
  silenceIsGolden,
  fadeInUp,
  letterSpace,
  stagger,
  simpleOpacity,
}
