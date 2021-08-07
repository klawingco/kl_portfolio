/* eslint-disable react/no-multi-comp */
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { simpleOpacity } from 'config/animations'

const Avatar = () => {
  const MotionBox = motion(Box)
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
        width="250"
        height="250"
        margin="auto"
      />
      <Text textAlign="center" fontSize="smaller" color={subTextcolor}>
        Art by KojiroArt
      </Text>
    </MotionBox>
  )
}

export default Avatar
