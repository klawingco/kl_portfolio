import { memo } from 'react'
import { Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ExperienceTab from './ExperienceTab'
import { fadeInUp } from 'config/animations'
const DetailSection = () => {
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
      <Heading id="jobs" size="xl" textTransform="uppercase">
        Places I’ve worked.
      </Heading>
      <Text color={miniDesc}>
        Since 2016, I’ve had privilege to work with several companies that
        enables me to hone my skills and talents. These companies will always
        have a special place in my heart.
      </Text>

      <ExperienceTab />
    </MotionStack>
  )
}

export default memo(DetailSection)
