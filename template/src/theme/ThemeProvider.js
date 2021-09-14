import React from 'react';
import {MuiThemeProvider, createTheme} from '@material-ui/core';
import themeData from './theme';

const theme = createTheme(themeData);

const ThemeProvider = ({children}) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;