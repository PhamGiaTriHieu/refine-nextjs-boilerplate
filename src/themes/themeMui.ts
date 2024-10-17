'use client';
import {createTheme} from '@mui/material';
import {Open_Sans} from 'next/font/google';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    laptop: true; // add custom breakpoint
  }
}

const openSans = Open_Sans({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const themeMui = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {},
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    fontSize: 16,
    button: {
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      laptop: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});
