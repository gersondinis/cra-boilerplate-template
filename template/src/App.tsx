import {Box} from '@mui/material';
import {DevToolsConnected} from './components/DevTools/DevToolsConnected';
import {Router} from './router/Router';

export const App = () => {
  return (
    <Box>
      <DevToolsConnected/>
      <Box margin={1}>
        <Router/>
      </Box>
    </Box>
  );
}
