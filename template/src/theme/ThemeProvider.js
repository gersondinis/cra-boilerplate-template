import React from 'react';
import {createTheme, ThemeProvider as MuiThemeProvider} from '@mui/material';
import themeData from './theme';

export const theme = createTheme(themeData);

const ThemeProvider = ({children}) => {

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;