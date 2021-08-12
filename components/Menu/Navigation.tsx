import { memo, useCallback } from 'react'
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion, useCycle } from 'framer-motion'
import styles from './styles.module.css'
import MobileMenu from './toggle'
import { ThemeMode } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const scrollDirection = useScrollDirection()
  const [isOpen, toggleOpen] = useCycle(false, true)

  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })

  const menuButtonSize = useBreakpointValue({
    base: 'xl',
    md: 'md',
  })

  const bg = useColorModeValue('gray.100', 'black')
  const borderColor = useColorModeValue('black.400', 'cyan.200')
  const IsDark = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  const Icon = IsDark ? SunIcon : MoonIcon
  const MotionContainer = motion(Container)
  const onMenuItemClick = useCallback(() => {
    if (isMobile) {
      toggleOpen()
    }
  }, [isMobile, toggleOpen])
  return (
    <>
      <Box
        display={{ base: 'block', xl: 'none' }}
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <MobileMenu isDarkMode={IsDark} toggle={toggleOpen} isOpen={isOpen} />
      </Box>

      <MotionContainer
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: '100%', sm: '35%', lg: '50%', xl: '60%' }}
        className={styles.menu}
        initial="hide"
        animate={(!isMobile || isOpen) && 'show'}
        style={{
          width:
            !isMobile && scrollDirection === ScrollDirection.Down
              ? '12%'
              : '100%',
          top: !isOpen && isMobile && -200,
          opacity: !isOpen && isMobile && '0',
          left: isOpen && isMobile && 0,
        }}
        borderColor={isOpen && isMobile && borderColor}
        borderBottomWidth={isOpen && isMobile && '1px'}
        paddingBottom={isOpen && isMobile && '1px'}
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
          paddingX={{ base: '', sm: '10', lg: '0' }}
          paddingY={{ base: '10', lg: '3' }}
          paddingRight="0"
          paddingBottom="0"
        >
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              as="a"
              href="#aboutMe"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              About
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              as="a"
              href="#jobs"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Experience
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              as="a"
              href="#works"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Works
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="light"
              variant="ghost"
              textTransform="uppercase"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              onClick={onMenuItemClick}
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
              onClick={() => {
                toggleColorMode()
                onMenuItemClick()
              }}
            />
          </Box>
        </Flex>
      </MotionContainer>
    </>
  )
}

export default memo(Navigation)
