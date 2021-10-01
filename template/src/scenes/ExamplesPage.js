import React from 'react';
import FormExample from '../components/FormExample/FormExample';
import {Grid, IconButton} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import {navigate} from 'hookrouter';


const ExamplesPage = () => {
    return (
        <Grid container>
            <Grid xs={12} item>
                <IconButton onClick={() => navigate('/')}><ArrowBack/></IconButton>
            </Grid>
            <Grid xs={12} item>
                <FormExample/>
            </Grid>
        </Grid>
    );
};

export default ExamplesPage;