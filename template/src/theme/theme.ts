export const FONT_FAMILY = 'Roboto, Helvetica, Arial, sans-serif';

export const THEME = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    background: {
      paper: '#fff',
      default: '#F9FAFC'
    },
    primary: {
      light: 'rgba(88, 176, 237, 1)',
      main: 'rgba(0, 129, 186, 1)',
      dark: 'rgba(0, 85, 138, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(58, 80, 132, 1)',
      main: 'rgba(0, 40, 87, 1)',
      dark: 'rgba(0, 0, 46, 1)',
      contrastText: '#fff'
    },
    error: {
      light: 'rgba(255, 100, 80, 1)',
      main: 'rgba(203, 47, 38, 1)',
      dark: 'rgba(146, 0, 0, 1)',
      contrastText: '#fff'
    },
    info: {
      light: 'rgba(88, 176, 237, 1)',
      main: 'rgba(0, 129, 186, 1)',
      dark: 'rgba(0, 85, 138, 1)',
      contrastText: '#fff'
    },
    success: {
      light: '#77cf72',
      main: '#459d45',
      dark: '#026e18',
      contrastText: '#fff'
    },
    warning: {
      light: '#ffc947',
      main: '#ee9801',
      dark: '#b66a00',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 40, 87, 1)',
      secondary: 'rgba(98, 98, 98, 1)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  },
  typography: {
    fontFamily: FONT_FAMILY,
    h1: {
      fontFamily: FONT_FAMILY,
      fontSize: '2.18rem',
      letterSpacing: '-0.3px'
    },
    h2: {
      fontSize: '1.875rem',
      letterSpacing: '-0.3px'
    },
    h3: {
      fontFamily: FONT_FAMILY,
      fontSize: '1.375rem',
      letterSpacing: '-0.06px'
    },
    h4: {
      fontSize: '1.125rem',
      letterSpacing: '-0.06px'
    },
    h5: {
      fontFamily: FONT_FAMILY,
      fontSize: '1rem',
      letterSpacing: '-0.05px'
    },
    h6: {
      fontFamily: FONT_FAMILY,
      fontSize: '0.875rem',
      letterSpacing: '-0.05px'
    },
    overline: {
      fontFamily: FONT_FAMILY
    },
    subtitle2: {
      fontFamily: FONT_FAMILY
    },
    button: {
      fontFamily: FONT_FAMILY
    }
  }
};

export default THEME;
