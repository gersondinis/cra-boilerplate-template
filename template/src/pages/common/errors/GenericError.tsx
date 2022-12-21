import {Box, Button, Container, Typography} from '@mui/material';
import {FC, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {PUBLIC_URL} from 'services/env/environment.service';
import {ROUTE} from 'types/routes.enum';
import type {Theme} from '@mui/material';

export const GenericError: FC<IGenericError> = ({title = 'Whoops...', description = '', imgSrc = `${PUBLIC_URL}/static/images/undraw_close_tab_uk6g.svg`, children}) => {
  const navigate = useNavigate();

  return (
    <Box sx={classes.root}>
      <Container maxWidth='lg'>
        <Typography align='center' variant={'h1'} fontSize={'2.5rem'} color='textPrimary'>
          {title}
        </Typography>
        <Typography align='center' variant='subtitle2' color='textSecondary'>
          {description}
        </Typography>
        <Box mt={6} display='flex' justifyContent='center'>
          <Box component={'img'} sx={classes.image} alt='error view' src={imgSrc} />
        </Box>
        <Box mt={6} display='flex' justifyContent='center'>
          {children || (
            <Button color='primary' onClick={() => navigate(ROUTE.HOME)} variant='outlined'>
              Home
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export type IGenericError = {
  title?: string
  description?: string
  imgSrc?: string
  children?: ReactNode
}

const classes = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: (theme: Theme) => theme.spacing(3),
    paddingTop: '80px',
    paddingBottom: '80px'
  },
  image: {
    maxWidth: '100%',
    width: '560px',
    maxHeight: '300px',
    height: 'auto'
  }
};
