import { useState } from 'react'
import {
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'
const Menu = () => {
  const [show, setShow] = useState(true)
  const scrollDirection = useScrollDirection()
  const MotionContainer = motion(Container)
  const { toggleColorMode, colorMode } = useColorMode()
  // const bg = useColorModeValue('gray.100', 'black')
  const IsDark = colorMode === ThemeMode.Dark
  const Icon = IsDark ? SunIcon : MoonIcon
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  return (
    <>
      <MotionContainer
        width="100%"
        maxWidth={{ lg: '60%' }}
        className={styles.menu}
        initial="hide"
        animate={scrollDirection === ScrollDirection.Down ? 'hide' : 'show'}
        variants={menuAnim}
      >
        <Flex
          justifyContent="flex-end"
          paddingX="14"
          paddingY="5"
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
      <button onClick={() => setShow(!show)}>TEST</button>
    </>
  )
}

export default Menu
