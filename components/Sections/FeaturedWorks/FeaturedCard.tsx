/* eslint-disable react/no-multi-comp */
import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  SimpleGrid,
  Button,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'

export type FeaturedCardProps = {
  // Still can't find what's correct value for responsive value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  isMobile?: boolean
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

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
}: {
  idx?: number
  title: string
  description: string
  ctaUrl: string
  isLeft: boolean
}) => (
  <Container
    paddingX={5}
    paddingY={1}
    display="flex"
    alignItems="center"
    justifyContent="space-around"
    flexDirection="column"
  >
    <Stack spacing={1} width="100%">
      <Text
        fontSize={{ base: 'md', md: 'large', '2xl': 'xx-large' }}
        fontWeight="bold"
        letterSpacing={2}
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        textTransform="uppercase"
        as="span"
      >
        <Text variant="accentAlternative" fontSize="md" as="span">
          #0{idx}
          {'  '}
        </Text>
        {title}
      </Text>
      <Divider
        borderColor="#A6A6A6"
        width="90%"
        marginLeft={0}
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      />
    </Stack>
    <Text
      fontSize="smaller"
      variant="accentAlternative"
      width="90%"
      alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      wordBreak="break-word"
      paddingY={{ base: 3, md: 0 }}
    >
      {description}
    </Text>
    <Button
      variant="outlineAlternative"
      fontWeight="light"
      fontSize={{ base: 'sm', '2xl': 'md' }}
      size="sm"
      as="a"
      href={ctaUrl}
      rel="noreferrer"
      target="_blank"
      marginY={{ base: 3, md: 0 }}
    >
      View Project
    </Button>
  </Container>
)

const FeaturedCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  isMobile,
}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const CoverImage = () => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.75}
      whileHover={variants.hover}
      whileTap={variants.tap}
      fallback={<Skeleton height={height} width="100%" />}
    />
  )

  return (
    <Box
      height="auto"
      bg={bg}
      borderRadius="1em"
      className={styles.featureCard}
      borderColor={bg}
      borderWidth="1px"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 3, md: 0 }}
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column-reverse', md: 'initial' }}
      >
        {isLeftImage && <CoverImage />}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          isLeft={isLeftImage}
        />
        {!isLeftImage && <CoverImage />}
      </SimpleGrid>
    </Box>
  )
}
export default FeaturedCard
