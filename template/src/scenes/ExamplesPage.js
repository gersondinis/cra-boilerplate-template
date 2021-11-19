import React from 'react';
import FormExample from '../components/FormExample/FormExample';
import {Grid, IconButton} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import {navigate} from 'hookrouter';
import {ApiExample} from '../api/ApiExample';
import ValtioExample from './ValtioExample';


const ExamplesPage = () => {
  return (
    <Grid spacing={3} container>
      <Grid xs={12} item>
        <IconButton onClick={() => navigate('/')} size="large"><ArrowBack/></IconButton>
      </Grid>
      <Grid xs={12} item>
        <FormExample/>
      </Grid>
      <Grid xs={12} item>
        <ApiExample/>
      </Grid>
      <Grid xs={12} item>
        <ValtioExample/>
      </Grid>
    </Grid>
  );
};

export default ExamplesPage;
