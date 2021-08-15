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
import { fadeInUpSlower, galleryStagger } from 'config/animations'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '73%' }}
      height="100%"
      spacing={6}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text color={miniDesc}>
        Checkout some of my works I did at freelancing, projects at the company
        and even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 3, md: 4 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            alt="Tobira!"
            src="/works/tobira/IphoneX-tobira.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://tobira-app-test.netlify.app/"
            titlePosition="left-top"
          />
        </MotionGridItem>
        <MotionGridItem colSpan={{ base: 6, md: 4 }} variants={fadeInUpSlower}>
          <FeaturedCard
            alt="RSV"
            src="/works/rsv.png"
            height={{ base: '130px', md: '225px', '2xl': '320px' }}
            objectPosition="right 20%"
            ctaUrl="https://solution.rsv.ltd/jp"
            titlePosition="left-bottom"
          />
        </MotionGridItem>

        <MotionGridItem
          colSpan={2}
          rowSpan={{ base: 1, md: 1 }}
          variants={fadeInUpSlower}
        >
          <FeaturedCard
            alt="ProT KYC"
            src="/works/prot_kyc01.png"
            height={{ base: '220px', md: '225px', '2xl': '320px' }}
            ctaUrl="https://tokeneckyc.blotocol.net/"
          />
        </MotionGridItem>
        <MotionGridItem colSpan={{ base: 4, md: 3 }} variants={fadeInUpSlower}>
          <FeaturedCard
            alt="Agora School"
            src="/works/agora.png"
            height={{ base: '220px', md: '225px', '2xl': '260px' }}
            ctaUrl="#"
            objectPosition="right 20%"
            titlePosition="left-bottom"
          />
        </MotionGridItem>
        <MotionGridItem colSpan={{ base: 6, md: 3 }} variants={fadeInUpSlower}>
          <FeaturedCard
            alt="TMH Layla EC"
            src="/works/tmh.png"
            height={{ base: '130px', md: '225px', '2xl': '260px' }}
            ctaUrl="https://www.layla-ec.com/"
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
