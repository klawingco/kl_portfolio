import { useColorMode, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const MotionImage = motion(Image)
  return (
    <Link href="/" passHref>
      <motion.div
        animate={{
          opacity: [1, 0.75, 1],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={styles.logo}
            boxSize="50px"
            objectFit="cover"
            src="./logo.png"
            alt="KL Lawingco"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
          />
        ) : (
          <MotionImage
            className={styles.logo}
            boxSize="50px"
            objectFit="cover"
            src="./logo_light.png"
            fallbackSrc="./logo_light.png"
            alt="KL Lawingco"
            variants={simpleOpacity}
          />
        )}
      </motion.div>
    </Link>
  )
}

export default Logo
