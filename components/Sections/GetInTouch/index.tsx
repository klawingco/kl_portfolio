import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
  //   Grid,
  //   GridItem,
} from '@chakra-ui/react'

const GetInTouch = () => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

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
        Say hi!{' '}
        <Text as="span" fontSize="2xl" color={emphasis}>
          (⁀ᗢ⁀)
        </Text>
      </Heading>
      <Text color={miniDesc}>
        Though, I am fairly introvert myself. I do reply to messages as fast as
        my human interaction battery last. So feel free to message me on any of
        my social media or you can shoot me an{' '}
        <Link
          href="mailto:marcjhon18@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>
    </Stack>
  )
}

export default memo(GetInTouch)
