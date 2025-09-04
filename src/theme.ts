import { createTheme } from '@mui/material/styles';

// Thème clair
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#312d3a',
    },
    secondary: {
      main: '#928ba3',
    },
    background: {
      default: '#f1f1f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#928ba3',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

// Thème sombre
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#312d3a',
    },
    secondary: {
      main: '#928ba3',
    },
    background: {
      default: '#1a181e',
      paper: '#312d3a',
    },
    text: {
      primary: '#f1f1f1',
      secondary: '#928ba3',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});