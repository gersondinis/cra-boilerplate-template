import {Box, Button, List, SwipeableDrawer, Typography, useMediaQuery} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {SidebarMenu} from 'SidebarMenu';
import {APP_VERSION} from 'services/env/environment.service';
import {useStore} from 'store/store';
import {actions} from 'store/actions';
import type {Theme} from '@mui/material';

export const Sidebar = () => {
  const {app: {sidebarOpen}} = useStore();
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <SwipeableDrawer
      variant={isTablet ? 'temporary' : 'permanent'}
      sx={styles.root(isTablet, sidebarOpen)}
      open={sidebarOpen}
      onClose={() => actions.app.setSidebarOpen(false)}
      onOpen={() => actions.app.setSidebarOpen(true)}
    >
      <Box display={'flex'}>
        {sidebarOpen && (
          <Typography sx={styles.title} variant='h6'>
            Navigation
          </Typography>
        )}
        <Button onClick={actions.app.toggleSidebarOpen} sx={styles.menuIcon} aria-label='menu'>
          <Menu />
        </Button>
      </Box>
      <List sx={styles.list}>
        <SidebarMenu />
      </List>
      <Typography variant={'caption'} sx={{...styles.appVersionLabel(isTablet)}} id={'qwer'}>
        <small>
          <i>{APP_VERSION}</i>
        </small>
      </Typography>
    </SwipeableDrawer>
  );
};

const styles = {
  root: (isMobile: boolean, open: boolean) => {
    let dynamicStyles = {width: '15.5rem', marginTop: '3.75rem'};
    if (isMobile && !open) dynamicStyles = {width: '0px', marginTop: '0px'};
    if (isMobile && open) dynamicStyles = {width: '15.5rem', marginTop: '0px'};
    if (!isMobile && !open) dynamicStyles = {width: '3.5rem', marginTop: '3.75rem'};

    return {
      zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
      ...dynamicStyles,
      [`& .MuiDrawer-paper`]: {
        color: (theme: Theme) => theme.palette.secondary.contrastText,
        backgroundColor: (theme: Theme) => theme.palette.secondary.main,
        ...dynamicStyles
      }
    };
  },
  list: {
    padding: 0
  },
  title: {
    opacity: 0.54,
    color: (theme: Theme) => theme.palette.common.white,
    padding: 0,
    margin: (theme: Theme) => theme.spacing(2),
    fontFamily: (theme: Theme) => theme.typography.h2.fontFamily,
    flexGrow: 1,
    lineHeight: '1.3'
  },
  appVersionLabel: (isTablet: boolean) => ({
    opacity: 0.34,
    position: 'absolute',
    bottom: isTablet ? '1px' : '55px',
    textAlign: 'center',
    width: '100%'
  }),
  menuIcon: {
    backgroundColor: (theme: Theme) => theme.palette.secondary.dark,
    margin: 0,
    height: '3.125rem',
    color: (theme: Theme) => theme.palette.secondary.contrastText,
    minWidth: '3.125rem',
    padding: (theme: Theme) => theme.spacing(2),
    borderRadius: '0.125rem'
  },
  icon: {
    color: (theme: Theme) => theme.palette.secondary.contrastText,
    minWidth: 'unset',
    width: '1.5rem',
    marginRight: (theme: Theme) => theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  activeButton: {
    backgroundColor: (theme: Theme) => theme.palette.secondary.light,
    borderLeftWidth: '0.250rem',
    borderStyle: 'solid',
    borderLeftColor: (theme: Theme) => theme.palette.primary.main,
    paddingLeft: (theme: Theme) => theme.spacing(1.5),
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.palette.secondary.light
    }
  }
};

export default Sidebar;
