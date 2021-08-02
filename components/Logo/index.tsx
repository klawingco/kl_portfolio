/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useColorMode, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'

const Logo = () => {
  const { colorMode } = useColorMode()
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
        <Image
          className={styles.logo}
          boxSize="50px"
          objectFit="cover"
          src={colorMode === ThemeMode.Dark ? './logo.png' : './logo_light.png'}
          alt="KL Lawingco"
        />
      </motion.div>
    </Link>
  )
}

export default Logo
