import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const Menu = () => {
  const scrollDirection = useScrollDirection()
  const MotionContainer = motion(Container)
  const { toggleColorMode, colorMode } = useColorMode()
  const bg = useColorModeValue('gray.100', 'black')
  const IsDark = colorMode === ThemeMode.Dark
  const Icon = IsDark ? SunIcon : MoonIcon
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  return (
    <Container width="100vw" maxWidth="100vw" padding={0} margin={0}>
      <Logo />
      <MotionContainer
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: '35%', sm: '35%', lg: '60%' }}
        className={styles.menu}
        initial="initial"
        animate={'show'}
        style={{
          width: scrollDirection === ScrollDirection.Down ? '12%' : '100%',
        }}
        ease={easing}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as="nav"
      >
        <Flex
          justifyContent="flex-end"
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          paddingX={{ base: '0', lg: '0' }}
          paddingY="5"
          paddingRight="0"
          paddingBottom="0"
        >
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize="md"
              letterSpacing={2}
              className={btnClassName}
            >
              Home
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize="md"
              letterSpacing={2}
              className={btnClassName}
            >
              About
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize="md"
              letterSpacing={2}
              className={btnClassName}
            >
              Works
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize="md"
              letterSpacing={2}
              className={btnClassName}
            >
              Contact
            </Button>
          </Box>
          <Box>
            <IconButton
              aria-label="Color Mode"
              variant="ghost"
              icon={<Icon />}
              boxShadow="none"
              onClick={toggleColorMode}
            />
          </Box>
        </Flex>
      </MotionContainer>
    </Container>
  )
}

export default Menu
