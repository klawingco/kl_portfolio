import { useEffect, useState } from 'react'
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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaDev,
} from 'react-icons/fa'
import styles from './styles.module.css'
import Logo from 'components/Logo'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
const Sidebar = () => {
  const { colorMode } = useColorMode()
  const catchPhrase = useColorModeValue('black.400', 'cyan.200')
  const surName = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const thankYou = useColorModeValue('teal.500', 'cyan.200')

  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <motion.div initial="initial" animate="animate">
      <motion.div
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <Logo />
      <MotionStack variants={stagger} spacing={6}>
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
          paddingRight="20"
          textTransform="uppercase"
          variants={fadeInUp}
        >
          Marc Jhon
        </MotionHeading>
        <MotionHeading
          as="h2"
          size="4xl"
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
          paddingRight="12"
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
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://twitter.com/keysl1831"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaTwitter} color="currentColor" />
          </Link>
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://www.linkedin.com/in/marclawingco/"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaLinkedin} color="currentColor" />
          </Link>
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://stackoverflow.com/users/3867490/keysl"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaStackOverflow} color="currentColor" />
          </Link>
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaYoutube} color="currentColor" />
          </Link>
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://github.com/klawingco"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaGithub} color="currentColor" />
          </Link>
          <Link
            _hover={{
              color: thankYou,
            }}
            width={8}
            href="https://dev.to/klawingco"
            target="_blank"
          >
            <Icon w={6} h={6} as={FaDev} color="currentColor" />
          </Link>
        </MotionBox>
      </MotionStack>
    </motion.div>
  )
}

export default Sidebar
