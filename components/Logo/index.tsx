import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={isMobile ? styles.logoMobile : styles.logo}
            boxSize={isMobile ? '35px' : '50px'}
            objectFit="cover"
            src="./logo.png"
            alt="KL Lawingco Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
          />
        ) : (
          <MotionImage
            className={isMobile ? styles.logoMobile : styles.logo}
            boxSize={isMobile ? '35px' : '50px'}
            objectFit="cover"
            src="./logo_light.png"
            fallbackSrc="./logo_light.png"
            alt="KL Lawingco Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
