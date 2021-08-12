import { Box, Image, ResponsiveValue, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'

export type FeaturedCardProps = {
  height: string | ResponsiveValue<number | 'auto'>
  src: string
  alt: string
  objectPosition?: string
  ctaUrl: string
  applyBg?: boolean
}

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionImage = motion(Image)
const FeaturedCard = ({
  height,
  src,
  alt,
  objectPosition,
  ctaUrl,
  applyBg,
}: FeaturedCardProps) => (
  <Link href={ctaUrl} rel="noreferrer" target="_blank">
    <Box
      height={height}
      className={styles.featureCard}
      bg={applyBg ? 'currentColor' : ''}
    >
      <MotionImage
        height={height}
        width="100%"
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        opacity={0.65}
        whileHover={variants.hover}
        whileTap={variants.tap}
      ></MotionImage>
    </Box>
  </Link>
)

export default FeaturedCard
