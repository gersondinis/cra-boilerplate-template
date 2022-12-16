import {Box, Card, CardContent, CardHeader, IconButton} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import {proxy, useSnapshot} from 'valtio';
import ValtioExampleSnippet from './ValtioExampleSnippet';

export const state = proxy({
  count: 0,
});

export const ValtioExample = () => {

  const {count} = useSnapshot(state);

  return (
    <Card raised>
      <CardHeader title={'valtio'} subheader={'state management'}/>
      <CardContent>
        <Box sx={styles.container}>
          <IconButton onClick={() => --state.count}><Remove/></IconButton>
          <Box sx={styles.counter}>
            {count}
          </Box>
          <IconButton onClick={() => ++state.count}><Add/></IconButton>
        </Box>
      </CardContent>
      <ValtioExampleSnippet/>
    </Card>
  );
};

const styles = {
  container: {
    display: 'flex'
  },
  counter: {
    display: 'flex',
    fontSize: '40px',
    padding: 1
  }
}
