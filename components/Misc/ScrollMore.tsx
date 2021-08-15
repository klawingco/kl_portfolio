import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
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
    },
  },
  // exit: {
  //   opacity: [1, 0],
  //   transition: {
  //     duration: 0.5,
  //     ease: 'easeOut',
  //   },
  // },
}

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
    x: 50,
    rotate: 90,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 50,
    rotate: 90,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    rotate: 90,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const ScrollMore = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection(false, isMobile)
  const emailColor = useColorModeValue('gray.800', 'gray.400')
  const emailLine = useColorModeValue('teal.500', 'cyan.200')

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
      <AnimatePresence>
        {scrollDirection === ScrollDirection.Down && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            // style={{
            //   transform: 'rotate(90deg)'
            // }}
          >
            <Text
              as="a"
              paddingY={3}
              href="mailto:marcjhon18@gmail.com"
              target="_blank"
              rel="noreferrer"
              color={emailColor}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              fontWeight="light"
              fontSize="smaller"
              position="relative"
              letterSpacing={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              // transform="rotate(90deg)"
              marginBottom="5em"
              _after={{
                backgroundColor: emailLine,
                height: '2px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                width: { base: '5em', xl: '8em' },
                marginLeft: '1em',
              }}
            >
              marcjhon@gmail.com
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollMore
