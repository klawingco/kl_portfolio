import { Box, Icon, useBreakpointValue } from '@chakra-ui/react'
import { RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'
import { mobileBreakpointsMap } from 'config/theme'

const scrollMoreVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  hidden: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      loop: Infinity,
      delay: 2,
    },
  },
  exit: {
    opacity: [1, 0],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
const ScrollMore = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection(false, isMobile)
  return (
    <Box
      position="fixed"
      bottom="1em"
      right="3%"
      display={isMobile ? 'none' : 'block'}
    >
      <AnimatePresence>
        {[ScrollDirection.Initial, ScrollDirection.Up].includes(
          scrollDirection
        ) && (
          <motion.div
            initial="initial"
            animate={['hidden', 'bounce']}
            variants={scrollMoreVariants}
            exit="exit"
          >
            <Icon
              w={6}
              h={6}
              as={RiMouseLine}
              color="currentColor"
              opacity="0.75"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollMore
