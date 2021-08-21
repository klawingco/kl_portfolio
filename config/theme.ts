import {
  extendTheme,
  ColorMode,
  ChakraTheme,
  ThemeComponentProps,
} from '@chakra-ui/react'
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

const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('teal.500', 'cyan.200')(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.800', 'gray.400')(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('black.400', 'cyan.200')(props),
  }),
  accentAlternative: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('#595959', '#A6A6A6')(props),
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
      variants: {
        ...textVariants,
        description: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode('gray.800', 'gray.400')(props),
          _hover: {
            color: mode('teal.500', 'cyan.200')(props),
            textDecoration: 'none',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      variants: {
        outline: (props) => ({
          borderColor: mode('black.400', 'cyan.200')(props),
        }),
        outlineAlternative: (props) => ({
          borderWidth: '1px',
          borderRadius: 0,
          borderColor: mode('#595959', 'whiteAlpha.500')(props),
          _hover: {
            backgroundColor: mode(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            )(props),
          },
        }),
      },
    },
    Icon: {
      variants: {
        accent: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
        }),
      },
    },
    Divider: {
      variants: {
        solid: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
      },
    },
  },
})
export default theme
