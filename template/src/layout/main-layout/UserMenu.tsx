import {useState} from 'react';
import {Box, Button, Menu, MenuItem, Stack, Typography, useMediaQuery} from '@mui/material';
import {AccountCircle, ExpandLess, ExpandMore} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {ROUTE} from 'types/routes.enum';
import {useStore} from 'store/store';
import {useGetUser} from 'xhr/hooks/api';
import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';
import {classes} from 'layout/main-layout/UserMenu.styles';
import type {Theme} from '@mui/material';

export const UserMenu = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const {userId} = useStore();
  const {data: user, isLoading} = useGetUser({id: userId!});

  const handleClose = () => setAnchorEl(undefined);
  const open = Boolean(anchorEl);
  const expandIcon = anchorEl ? <ExpandLess sx={classes.expandIcon}/> : <ExpandMore sx={classes.expandIcon}/>;

  return (
    <Box boxShadow={open ? 1 : 0} sx={classes.wrapper}>
      <Button
        variant={'text'}
        sx={classes.root}
        startIcon={<AccountCircle/>}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box display='flex' alignItems='center' width='100%'>
          {!isMobile && (
            <Box display='flex' flexDirection='column' flexGrow='1' justifyContent='flex-start'>
              <Typography component='p' variant='body2' sx={classes.header} noWrap>
                {user?.name}
              </Typography>
              <Typography component='p' variant='caption' sx={classes.subheader} noWrap>
                {user?.email}
              </Typography>
            </Box>
          )}
          <Box sx={classes.indicator}>{expandIcon}</Box>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        disablePortal
        PaperProps={{
          elevation: 1,
          sx: classes.popover
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {isMobile && (
          <MenuItem>
            <Stack>
              <Typography component='p' variant='body2' sx={classes.header} noWrap>
                {user?.name}
              </Typography>
              <Typography component='p' variant='caption' sx={classes.subheader} noWrap>
                {user?.email}
              </Typography>
            </Stack>
          </MenuItem>
        )}
        <MenuItem onClick={() => navigate(ROUTE.LOGOUT)}>Logout</MenuItem>
      </Menu>
      {isLoading && <LoadingScreen/>}
    </Box>
  );
};
