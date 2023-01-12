import {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Home} from '@mui/icons-material';
import {PUBLIC_URL} from 'services/env/environment.service';
import {ROUTE} from 'types/routes.enum';
import {useStore} from 'store/store';
import {actions} from 'store/actions';
import type {Theme} from '@mui/material';

export const LogoutPage = () => {
  const navigate = useNavigate();
  const {userId: isAuthenticated} = useStore();


  useEffect(() => {
    if (isAuthenticated) {
      actions.logout();
    }
  }, [isAuthenticated]);

  return (
    <Box sx={classes.root}>
      {isAuthenticated ? (
        <Typography align='center' variant='h2'>Clearing your session, please wait...</Typography>
      ) : (
        <Typography align='center' variant='h2'>Thank you. See you soon!</Typography>
      )}
      <Box mt={10} display='flex' justifyContent='center'>
        <Box
          component={'img'}
          alt='under development'
          sx={classes.image}
          src={`${PUBLIC_URL}/static/images/undraw_close_tab_uk6g.svg`}
        />
      </Box>
      <Box mt={2} display='flex' justifyContent='flex-end' width='24rem'>
        <Box component={'img'} sx={classes.logo} src={`${PUBLIC_URL}/static/logos/logo.png`} />
      </Box>

      {!isAuthenticated && (
        <Box mt={4} display='flex' justifyContent='center'>
          <Button color='secondary' onClick={() => navigate(ROUTE.HOME)} variant='outlined'>
            Go to home page &nbsp; &nbsp;
            <Home />
          </Button>
        </Box>
      )}
    </Box>
  );
};

const classes = {
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: (theme: Theme) => theme.spacing(3),
    paddingTop: (theme: Theme) => theme.spacing(10)
  },
  caption: {
    justifyContent: 'flex-start',
    marginTop: (theme: Theme) => theme.spacing(1),
    display: 'flex',
    width: '20rem'
  },
  image: {
    maxWidth: '100%',
    width: '35rem',
    maxHeight: '16.75rem',
    height: 'auto'
  },
  logo: {
    width: '9.375rem'
  }
};
