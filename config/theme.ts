import { extendTheme, ColorMode } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

interface IThemeMode {
  Light: ColorMode
  Dark: ColorMode
}

export const ThemeMode: IThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

// Theme Config
const config = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}

const colors = {
  black: '#121212',
}

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#121212')(props),
    },
  }),
}

const theme = extendTheme({
  config,
  fonts: {
    body: 'Poppins',
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('teal.500', 'cyan.200')(props),
      }),
    },
  },
})
export default theme
