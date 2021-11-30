import React from 'react';
import {Box, Card, CardActions, CardContent, IconButton, Typography} from '@mui/material';
import {navigate} from 'hookrouter';
import {ArrowBack} from '@mui/icons-material';

const HelpPage = () => {
  return (
    <Box sx={{minWidth: 275}}>
      <Card variant="outlined">
        <CardActions>
          <IconButton onClick={() => navigate('/')} size="large"><ArrowBack/></IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="h5" component="div">
            Packages:
          </Typography>
          <Typography variant="body2">
            -`store` for cross-browser local storage;<br/>
            -`valtio` for state management;<br/>
            -`hookrouter` for routing;<br/>
            -`ttag` for internalization;<br/>
            -`material-ui v5` for theme/components library;<br />
            -`notistack` for notification alerts;<br />
            -`axios` for REST;<br/>
            -`react-hook-form` for Forms validation;<br/>
            -`react-query` for Fetching and Caching.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HelpPage;
