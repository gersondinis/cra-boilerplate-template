import React from 'react';
import FormExample from '../components/FormExample/FormExample';
import {Grid, IconButton} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import {navigate} from 'hookrouter';
import {ApiExample} from '../api/ApiExample';


const ExamplesPage = () => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <IconButton onClick={() => navigate('/')} size="large"><ArrowBack/></IconButton>
      </Grid>
      <Grid xs={12} item>
        <FormExample/>
      </Grid>
      <Grid xs={12} item>
        <ApiExample/>
      </Grid>
    </Grid>
  );
};

export default ExamplesPage;
