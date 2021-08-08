import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode: '/KL_avatar.png',
  LightMode: './KL_avatar_light.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const [isLoaded, setLoaded] = useState(false)
  const MotionBox = motion(Box)
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const subTextcolor = useColorModeValue('gray.800', 'gray.400')

  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={isLoaded && 'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="KL Lawingco Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          onLoad={() => setLoaded(true)}
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
    </AnimatePresence>
  )
}

export default Avatar
