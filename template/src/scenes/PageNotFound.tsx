import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography>Page not found.</Typography>
      <Button size='small' onClick={() => navigate('/')}>
        Go back
      </Button>
    </Box>
  );
};

export default PageNotFound;
