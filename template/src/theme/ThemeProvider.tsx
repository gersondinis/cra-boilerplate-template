import {createTheme, ThemeProvider as MuiThemeProvider} from '@mui/material';
import {FC, ReactNode} from 'react';
import themeData from './theme';

export const theme = createTheme(themeData);

export const ThemeProvider: FC<IThemeProvider> = ({children}) => {

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export type IThemeProvider = {
  children: ReactNode
}
