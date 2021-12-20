import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0075A2'
    },
    secondary: {
      main: '#FE938C'
    },
    text: {
      primary: '#1B262C'
    },
    background: {
      paper: '#f2f7ff'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Merriweather'
    },
    h3: {
      fontFamily: 'Merriweather'
    },
    h2: {
      fontFamily: 'Merriweather'
    },
    h4: {
      fontFamily: 'Merriweather'
    },
    button: {
      fontFamily: 'Poppins'
    },
    body1: {
      lineHeight: 1.7
    }
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;
