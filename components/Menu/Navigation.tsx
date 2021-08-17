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
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const MotionContainer = motion(Container)
  const MotionButton = motion(Button)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const menuButtonSize = useBreakpointValue({
    base: 'xl',
    md: 'sm',
  })

  const bg = useColorModeValue(
    'rgba(237, 242, 247, 0.95)',
    'rgba(18, 18, 18, 0.9)'
  )

  const borderColor = useColorModeValue('teal.500', 'cyan.200')
  const resumeColor = useColorModeValue('teal.500', 'cyan.200')

  const IsDark = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  const Icon = IsDark ? SunIcon : MoonIcon
  const onMenuItemClick = useCallback(
    (e) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()
      }
    },
    [isMobile, toggleOpen]
  )
  const scrollDirection = useScrollDirection()
  return (
    <>
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <IconButton
          aria-label="Color Mode"
          variant="ghost"
          icon={<Icon />}
          boxShadow="none"
          onClick={toggleColorMode}
          padding={0}
        />
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
          top: !isOpen && isMobile && '-100vh',
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
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          paddingX={{ base: '', sm: '10', lg: '0' }}
          paddingY={{
            base: '10',
            lg: scrollDirection === ScrollDirection.Down ? '10' : '3',
          }}
          height={{ base: '100vh', lg: 'auto' }}
          paddingRight="0"
          paddingBottom={isMobile ? 10 : '0'}
          onClick={() => isMobile && toggleOpen()}
        >
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href={isMobile ? '#aboutMe' : '#'}
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              About
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#jobs"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Experience
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#works"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Works
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#contact"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Contact
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <MotionButton
              fontWeight="light"
              variant="solid"
              fontSize="sm"
              borderColor={resumeColor}
              borderRadius="0"
              borderWidth="1px"
              color={resumeColor}
              letterSpacing={2}
              padding={2}
              marginX={2}
              as="a"
              rel="noreferrer"
              target="_blank"
              href="LawingcoMarcJhon2021v2.pdf"
              onClick={onMenuItemClick}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              resume
            </MotionButton>
          </Box>
          {!isMobile && (
            <Box>
              <IconButton
                aria-label="Color Mode"
                variant="ghost"
                icon={<Icon />}
                boxShadow="none"
                onClick={toggleColorMode}
              />
            </Box>
          )}
        </Flex>
      </MotionContainer>
    </>
  )
}

export default memo(Navigation)
