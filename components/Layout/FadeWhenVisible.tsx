import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInUp } from 'config/animations'
const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
