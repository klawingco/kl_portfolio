/* eslint-disable react/no-multi-comp */
import { Box, Image, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { simpleOpacity } from 'config/animations'

const Avatar = () => {
  const MotionBox = motion(Box)
    const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const subTextcolor = useColorModeValue('gray.800', 'gray.400')
  return (
    <MotionBox
      boxSize={{ base: 64, lg: 'sm' }}
      padding={{ base: 8 }}
      initial="initial"
      animate="animate"
      variants={simpleOpacity}
    >
      <Image
        src="/KL_avatar.png"
        alt="KL Lawingco Avatar"
        layout="intrinsic"
        htmlWidth="250"
        htmlHeight="250"
        margin="auto"
      />
      <Text textAlign="center" fontSize="smaller" color={subTextcolor}>
        Art by{' '}
        <Link
          href="https://twitter.com/kojiro_ai"
          target="_blank"
          color={emphasis}
          aria-label="KojiroArt"
          rel="noreferrer"
        >
          KojiroArt
        </Link>
      </Text>
    </MotionBox>
  )
}

export default Avatar
