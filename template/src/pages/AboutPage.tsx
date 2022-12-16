import { Box, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { ROUTE } from 'types/routes.enum';

export const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardActions>
          <IconButton onClick={() => navigate(ROUTE.HOME)} size='large'>
            <ArrowBack />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant='h5' component='div'>
            Packages:
          </Typography>
          <Typography variant='body2'>
            -`store` for cross-browser local storage;
            <br />
            -`valtio` for state management;
            <br />
            -`react-router` for routing;
            <br />
            -`ttag` for internalization;
            <br />
            -`material-ui v5` for theme/components library;
            <br />
            -`react-toastify` for notification alerts;
            <br />
            -`axios` for REST;
            <br />
            -`react-hook-form` for Forms validation;
            <br />
            -`react-query` for Fetching and Caching.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
