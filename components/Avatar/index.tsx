/* eslint-disable react/no-multi-comp */
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { simpleOpacity } from 'config/animations'

const Avatar = () => {
  const AvatarImage = motion(Image)
  const subTextcolor = useColorModeValue('gray.800', 'gray.400')
  return (
    <Box boxSize={{ base: 64, lg: 'sm' }} padding={{ base: 8 }}>
      <AvatarImage
        src="/KL_avatar.png"
        alt="KL Lawingco Avatar"
        layout="intrinsic"
        width="250"
        height="250"
        initial="initial"
        animate="animate"
        variants={simpleOpacity}
        margin="auto"
      />
      <Text textAlign="center" fontSize="smaller" color={subTextcolor}>
        Art by KojiroArt
      </Text>
    </Box>
  )
}

export default Avatar
