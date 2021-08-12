import {
  Container,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import styles from './styles.module.css'
import Navigation from './Navigation'
import { easing } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const Menu = () => {
  const MotionContainer = motion(Container)

  const bg = useColorModeValue('gray.100', 'black')
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })
  const scrollDirection = useScrollDirection(true, isMobile)
  return (
    <MotionContainer
      initial={isMobile && { opacity: 0, y: -30 }}
      animate={
        isMobile && {
          y: scrollDirection === ScrollDirection.Down ? -30 : 0,
          opacity: scrollDirection === ScrollDirection.Down ? 0 : 1,
        }
      }
      transition={{ duration: 0.3, delay: 0 }}
      ease={easing}
      className={isMobile ? styles.menuCont : ''}
      backgroundColor={isMobile ? bg : 'transparent'}
      width="100vw"
      maxWidth="100vw"
      padding={0}
      margin={0}
      borderBottomWidth={isMobile && '1px'}
      borderBottomColor={isMobile && '1px'}
    >
      <Logo />
      <Navigation />
    </MotionContainer>
  )
}

export default Menu
