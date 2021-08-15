import {
  Box,
  Image,
  ResponsiveValue,
  Link,
  Skeleton,
  Text,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'

export type TitlePosition =
  | 'right-top'
  | 'right-bottom'
  | 'left-top'
  | 'left-bottom'

export type FeaturedCardProps = {
  // Still can't find what's correct value for responsive value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height: string | ResponsiveValue<any>
  src: string
  alt: string
  objectPosition?: string
  ctaUrl: string
  applyBg?: boolean
  titlePosition?: TitlePosition
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
const EDGE_RADIUS = '0.5em'
const getCardTitlePosition = (titlePosition: TitlePosition) => {
  if (titlePosition === 'right-top') {
    return { right: 0, top: 0, borderBottomLeftRadius: EDGE_RADIUS }
  } else if (titlePosition === 'right-bottom') {
    return { right: 0, bottom: 0, borderTopLeftRadius: EDGE_RADIUS }
  } else if (titlePosition === 'left-top') {
    return { left: 0, top: 0, borderBottomRightRadius: EDGE_RADIUS }
  } else if (titlePosition === 'left-bottom') {
    return { left: 0, bottom: 0, borderTopRightRadius: EDGE_RADIUS }
  }
  return {}
}

const MotionImage = motion(Image)
const FeaturedCard = ({
  height,
  src,
  alt,
  objectPosition,
  ctaUrl,
  applyBg,
  titlePosition = 'right-bottom',
}: FeaturedCardProps) => (
  <Link href={ctaUrl} rel="noreferrer" target="_blank">
    <Box
      height="auto"
      className={styles.featureCard}
      bg={applyBg ? 'gray.900' : ''}
    >
      <MotionImage
        height={height}
        width="100%"
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        loading="lazy"
        opacity={0.75}
        whileHover={variants.hover}
        whileTap={variants.tap}
        fallback={<Skeleton height={height} width="100%" />}
      />
      <Flex
        position="absolute"
        className={styles.featureCover}
        {...getCardTitlePosition(titlePosition)}
      >
        <Text
          paddingY={1}
          paddingX={4}
          fontSize={{ base: 'md', lg: 'md', xl: 'md', '2xl': 'larger' }}
          color="gray.100"
          letterSpacing={2}
          textTransform="uppercase"
        >
          {alt}
        </Text>
      </Flex>
    </Box>
  </Link>
)

export default FeaturedCard
