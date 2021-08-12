import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUp } from 'config/animations'

const FeaturedWorksSection = () => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const MotionStack = motion(Stack)

  return (
    <MotionStack
      initial={fadeInUp.initial}
      variants={fadeInUp}
      animate="animate"
      width={{ base: '99%', lg: '60%', xl: '73%' }}
      height="100%"
      spacing={6}
    >
      <Heading id="works" size="xl" textTransform="uppercase">
        few of my works.
      </Heading>
      <Text color={miniDesc}>
        Checkout few of my works I did. Freelance, things I made at company and
        case studies.
      </Text>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        borderRadius="1em"
        overflow="hidden"
      >
        <GridItem colSpan={6}>
          <FeaturedCard
            alt="RSV"
            src="/works/rsv.png"
            height="320px"
            objectPosition="right 20%"
            ctaUrl="https://solution.rsv.ltd/jp"
          />
        </GridItem>
        <GridItem colSpan={3}>
          <FeaturedCard
            alt="Agora School"
            src="/works/agora.png"
            height="320px"
            ctaUrl="#"
            objectPosition="right 20%"
          />
        </GridItem>
        <GridItem colSpan={3}>
          <FeaturedCard
            alt="Agora School"
            src="/works/prot_kyc01.png"
            height="320px"
            ctaUrl="https://tokeneckyc.blotocol.net/"
            applyBg
          />
        </GridItem>
        <GridItem colSpan={6}>
          <FeaturedCard
            alt="TMH Layla EC"
            src="/works/tmh.png"
            height="280px"
            ctaUrl="https://www.layla-ec.com/"
          />
          {/* <Box
            height="280px"
            backgroundImage="/works/tmh.png"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          ></Box> */}
        </GridItem>
      </Grid>
      {/* <SimpleGrid columns={1} spacing={2}>
        <Box
          height="350px"
          backgroundImage="/works/rsv.png"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Image  width="100%" src="/works/rsv.png" objectFit="contain"></Image>
        </Box>
      </SimpleGrid> */}
    </MotionStack>
  )
}

export default memo(FeaturedWorksSection)
