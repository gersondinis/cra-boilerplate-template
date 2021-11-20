import React from 'react';
import {Box} from '@mui/material';
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
    <>
      CountA
      <Box sx={styles.container}>
        <button onClick={() => --state.app.countA}>dec</button>
        <Box sx={styles.counter}>
          {countA}
        </Box>
        <button onClick={() => ++state.app.countA}>INC</button>
      </Box>
      CountB
      <Box sx={styles.container}>
        <button onClick={() => --state.app.countB}>dec</button>
        <Box sx={styles.counter}>
          {countB}
        </Box>
        <button onClick={() => ++state.app.countB}>INC</button>
      </Box>

    </>

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
