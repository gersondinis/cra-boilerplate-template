import React from 'react';
import {navigate} from 'hookrouter';
import {Box, Button, Typography} from '@mui/material';

const PageNotFound = () => {
  return (
    <Box>
      <Typography>Page not found.</Typography>
      <Button size="small" onClick={() => navigate('/')}>Go back</Button>
    </Box>
  );
};

export default PageNotFound;