import {
  Grid,
  GridItem,
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Flex,
  Box,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Menu from 'components/Menu'
import Logo from 'components/Logo'
import styles from 'styles/Home.module.css'

const Portfolio = (): JSX.Element => {
  const { colorMode } = useColorMode()
  const catchPhrase = useColorModeValue('black.400', 'cyan.200')
  const surName = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const thankYou = useColorModeValue('teal.500', 'cyan.200')
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        padding="14"
        rowSpan={2}
        colSpan={2}
        display="flex"
        alignContent="center"
        alignItems="center"
        as="aside"
      >
        <motion.div
          className={`${styles.sidebar} ${
            colorMode === 'light' ? styles.dark : ''
          }`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.65, 1],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            loop: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
        <Logo />
        <Stack spacing={6}>
          <Text color={catchPhrase} fontWeight="light">
            Ohh you found me?. Howdy! I am
          </Text>
          <Heading
            as="h1"
            size="2xl"
            paddingRight="20"
            textTransform="uppercase"
          >
            Marc Jhon
          </Heading>
          <Heading
            as="h2"
            size="4xl"
            color={surName}
            className={styles.marginTopForce}
            textTransform="uppercase"
          >
            Lawingco.
          </Heading>
          <Text
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopSmall}
          >
            Or you could call me KL. That works too . . .
          </Text>
          <Divider
            bgColor={miniDesc}
            width="77%"
            className={styles.marginTopSmall}
          />
          <Heading
            as="h3"
            size="md"
            color={surName}
            className={styles.marginTopSmall}
          >
            Software Engineer
          </Heading>

          <Text color={miniDesc} fontSize="small" paddingRight="12">
            Hey! How nice of you to look at my personal site,
            <Text color={thankYou} as="span">
              {' '}
              Thank you!
            </Text>
            <br />I am software engineer that specialized at backends and
            somewhat to extent Front end stuff, and recently found myself
            dabbing into UX too.
          </Text>
          <Button
            size="lg"
            variant="outline"
            borderColor={catchPhrase}
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
          >
            Hit me up!
          </Button>
        </Stack>
      </GridItem>
      <GridItem as="main" rowSpan={2} colSpan={3} overflowY="scroll">
        <Menu />
        <Flex>
          <Box>
            {/* <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASDasdasd
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD222
            </Heading> */}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Portfolio
