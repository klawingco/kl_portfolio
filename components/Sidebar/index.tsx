import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'
const Sidebar = () => {
  const { colorMode } = useColorMode()
  const catchPhrase = useColorModeValue('black.400', 'cyan.200')
  const surName = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const thankYou = useColorModeValue('teal.500', 'cyan.200')
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox initial="initial" animate="animate" width="100%">
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <MotionStack variants={stagger} spacing={6} w="100">
        <MotionText
          variants={fadeInUp}
          delay={1}
          color={catchPhrase}
          fontWeight="light"
        >
          Ohh you found me?. Howdy! I am
        </MotionText>
        <MotionHeading
          as="h1"
          size="2xl"
          paddingRight={{ lg: '20' }}
          textTransform="uppercase"
          variants={fadeInUp}
        >
          Marc Jhon
        </MotionHeading>
        <MotionHeading
          as="h2"
          size={surNameSize}
          color={surName}
          className={styles.marginTopForce}
          textTransform="uppercase"
          variants={letterSpace}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Lawingco.
        </MotionHeading>
        <MotionText
          colorScheme="gray"
          fontSize="smaller"
          className={styles.marginTopForce}
          variants={fadeInUp}
        >
          Or you could call me KL. That works too . . .
        </MotionText>

        <MotionHeading
          as="h3"
          size="md"
          color={surName}
          className={styles.marginTopSmall}
          variants={fadeInUp}
        >
          Software Engineer
        </MotionHeading>

        <MotionText
          color={miniDesc}
          fontSize="small"
          paddingRight={{ lg: '12' }}
          variants={fadeInUp}
        >
          Hey! How nice of you to look at my personal site,
          <Text color={thankYou} as="span">
            {' '}
            Thank you!
          </Text>
          <br />I am software engineer that specializes at backends and somewhat
          to extent Front end stuff, and recently found myself dabbing into UX
          too.
        </MotionText>
        <MotionButton
          size="lg"
          variant="outline"
          borderColor={catchPhrase}
          borderWidth="1px"
          borderRadius="0"
          fontWeight="normal"
          fontSize="sm"
          width="120px"
          variants={simpleOpacity}
          as={'a'}
          href="mailto:marcjhon18@gmail.com"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hit me up!
        </MotionButton>

        <MotionBox d="flex" variants={simpleOpacity} color={miniDesc}>
          {SocialMedias.map((socMedia) => (
            <Link
              color="currentcolor"
              key={socMedia.label}
              _hover={{
                color: thankYou,
              }}
              aria-label={socMedia.label}
              rel="noreferrer"
              width={8}
              href={socMedia.href}
              target="_blank"
              _focus={{ boxShadow: 'none' }}
            >
              <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
            </Link>
          ))}
        </MotionBox>
      </MotionStack>
    </MotionBox>
  )
}

export default Sidebar
