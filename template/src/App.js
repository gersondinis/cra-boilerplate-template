import React from 'react';
import {Box} from '@material-ui/core';
import Router from './router/Router';
import DevTools from './components/DevTools/DevToolsConnected';

function App() {

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
