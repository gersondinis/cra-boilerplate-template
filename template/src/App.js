import React from 'react';
import {Box, useTheme} from '@mui/material';
import Router from './router/Router';
import DevTools from './components/DevTools/DevToolsConnected';

function App() {

  const theme = useTheme();

  debugger;

  return (
    <Box>
      <DevTools/>
      <Box margin={1}>
        <Router/>
      </Box>
    </Box>
  );
}

export default App;
