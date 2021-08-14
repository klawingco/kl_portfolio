import { memo } from 'react'
import { Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '73%' }}
      height="100%"
      spacing={6}
    >
      <Heading
        id="jobs"
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Places i’ve worked.
      </Heading>
      <Text color={miniDesc}>
        Since 2016, I’ve had privilege to work with several companies that
        enables me to hone my skills and talents. These companies will always
        have a special place in my heart.
      </Text>

      <ExperienceTab />
    </Stack>
  )
}

export default memo(DetailSection)
