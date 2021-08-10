import { memo } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
    xl: false,
  })
  return (
    <Link href="/" passHref>
      <motion.div initial="initial" animate="animate">
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={isMobile ? styles.logoMobile : styles.logo}
            boxSize={isMobile ? '35px' : '50px'}
            objectFit="cover"
            src="./logo.png"
            alt="KL Lawingco Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
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
          />
        )}
      </motion.div>
    </Link>
  )
}

export default memo(Logo)
