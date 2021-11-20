import React from 'react';
import {Box, Card, CardContent, CardHeader, IconButton} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import {proxy, subscribe, useSnapshot} from 'valtio';
import {subscribeKey} from 'valtio/utils';

export const state = proxy({
  app: {
    countA: 0,
    countB: 0,
  }
});

subscribe(state.app, () => console.log('subscribe', state.app.countA));

subscribeKey(state.app, 'countB', () => console.log('subscribeKey', state.app.countB));

const ValtioExample = () => {
  const {app: {countA, countB}} = useSnapshot(state);
  return (
    <Card raised>
      <CardHeader title={'valtio'} subheader={'state management'}/>
      <CardContent>
        CountA
        <Box sx={styles.container}>
          <IconButton onClick={() => --state.app.countA}><Remove/></IconButton>
          <Box sx={styles.counter}>
            {countA}
          </Box>
          <IconButton onClick={() => ++state.app.countA}><Add/></IconButton>
        </Box>
        CountB
        <Box sx={styles.container}>
          <IconButton onClick={() => --state.app.countB}><Remove/></IconButton>
          <Box sx={styles.counter}>
            {countB}
          </Box>
          <IconButton onClick={() => ++state.app.countB}><Add/></IconButton>
        </Box>
      </CardContent>
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

export default ValtioExample;
