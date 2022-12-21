import {Menu} from '@mui/icons-material';
import {AppBar as MuiAppBar, Box, IconButton, Toolbar, Typography, useMediaQuery} from '@mui/material';
import {Cart} from 'components/Cart/Cart';
import {useNavigate} from 'react-router-dom';
import {APP_NAME} from 'services/env/environment.service';
import {actions} from 'store/actions';
import {ROUTE} from 'types/routes.enum';
import {UserMenu} from './UserMenu';
import type {Theme} from '@mui/material';

export const AppBar = () => {
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <MuiAppBar position={'fixed'} sx={classes.root} elevation={0}>
      <Toolbar sx={classes.toolbar}>
        {isTablet && (
          <IconButton edge={'start'} onClick={actions.app.toggleSidebarOpen}>
            <Menu fontSize={'large'} />
          </IconButton>
        )}
        <Box sx={classes.barHolder}>
          <Box sx={classes.barHolderLeft}>
            <Typography sx={classes.appName} variant='h4' onClick={() => navigate(ROUTE.HOME)}>
              {APP_NAME}
            </Typography>
          </Box>
          <Box display={'flex'}>
            <Cart/>
            <UserMenu />
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

const classes = {
  root: {
    color: 'secondary.main',
    backgroundColor: 'common.white',
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
    height: '3.75rem'
  },
  image: {
    height: '2.625rem',
    cursor: 'pointer'
  },
  appName: {
    fontSize: '1.25rem',
    marginLeft: '0.8rem',
    display: {xs: 'none', sm: 'unset'},
    color: 'text.secondary'
  },
  toolbar: {
    minHeight: '3.75rem'
  },
  barHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: 'primary.main'
  },
  barHolderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  }
};
