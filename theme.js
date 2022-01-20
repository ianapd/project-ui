import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

export const theme = extendTheme({
  colors: {
    darkBlack: "#111112",
    lightViolet: "#791AFF",
    darkViolet: "#4D2E79",
    green: "#85F0B5",
    lightGrey: "#A2A2A4",
    darkGrey: "#232325"
  },
  breakpoints,
  fonts: {
    heading: 'Work Sans',
    body: 'Work Sans'
  },
})
