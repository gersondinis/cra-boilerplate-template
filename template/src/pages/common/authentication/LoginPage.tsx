import {Box} from '@mui/material';
import {LoginForm} from 'components/LoginForm/LoginForm';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {PUBLIC_URL} from 'services/env/environment.service';
import {useStore} from 'store/store';
import {ROUTE} from 'types/routes.enum';
import type {Theme} from '@mui/material';


export const LoginPage = () => {
  const navigate = useNavigate();
  const {userId: isAuthenticated} = useStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTE.HOME);
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box sx={classes.root}>
      <Box>
        <LoginForm/>
      </Box>
      <Box mt={10} display='flex' justifyContent='center'>
        <Box
          sx={classes.image}
          component={'img'}
          alt='Under development'
          src={`${PUBLIC_URL}/static/images/undraw_Secure_server_re_8wsq.svg`}
        />
      </Box>
      <Box mt={2} display='flex' justifyContent='flex-end' width='24rem'>
        <Box
          sx={classes.logo}
          component={'img'}
          src={`${PUBLIC_URL}/static/logos/logo.png`}
        />
      </Box>
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
