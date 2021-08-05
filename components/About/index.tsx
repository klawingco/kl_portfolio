import { Heading, useColorModeValue, Text, Stack, Link } from '@chakra-ui/react'
import styles from './styles.module.css'
const AboutSection = () => {
  const surName = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  return (
    <Stack width="60%" spacing={6}>
      <Heading
        as="h5"
        size="lg"
        paddingRight="20"
        textTransform="uppercase"
        letterSpacing={1.8}
      >
        About Me
      </Heading>
      <Text color={miniDesc}>
        My journey to becoming developer started back at 2011 as a teenager,
        when I got myself into C# and php from my old slow laptop. Since then I
        enjoy creating logical stuff at backend. I even have a embarrasing{' '}
        <Link href="https://otakuprogrammer.wordpress.com/" color={surName}>
          wordpress site
        </Link>{' '}
        back then.
      </Text>
      <Text color={miniDesc}>
        Right now I am working as a Full Stack Developer mostly on architecture,
        apis, nitty gritty business logics and even front end integration stuff
        now, how time flies! Though I am still trying to learn more about UI/UX
        as of now.
      </Text>
    </Stack>
  )
}
export default AboutSection
