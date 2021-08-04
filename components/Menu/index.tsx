/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Button, Flex, Box, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'

const Menu = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const IsDark = colorMode === ThemeMode.Dark
  const Icon = IsDark ? SunIcon : MoonIcon
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  return (
    <Flex
      justifyContent="flex-end"
      paddingX="14"
      paddingY="5"
      sx={{
        position: 'sticky',
        top: '0',
      }}
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
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
  )
}

export default Menu
