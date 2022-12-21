import { ExpandLess, ExpandMore, RemoveShoppingCart, ShoppingCart } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material';
import {classes} from 'components/Cart/Cart.styles';
import CheckIcon from '@mui/icons-material/Check';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { useMemo, useState } from 'react';
import { actions } from 'store/actions';
import { useStore } from 'store/store';
import type {Theme} from '@mui/material';

export const Cart = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const { toDos } = useStore();

  const summary = useMemo(
    () => (
      <Stack>
        <Typography component='p' variant='body2' sx={classes.header} noWrap>
          {toDos.length} todo(s)
        </Typography>
        <Typography component='p' variant='caption' sx={classes.subheader} noWrap>
          <b>Completed:</b> {toDos.filter(({completed}) => completed).length}
        </Typography>
      </Stack>
    ),
    [toDos]
  );

  const handleClose = () => setAnchorEl(undefined);
  const open = Boolean(anchorEl);
  const expandIcon = anchorEl ? <ExpandLess sx={classes.expandIcon} /> : <ExpandMore sx={classes.expandIcon} />;

  return (
    <Box boxShadow={open ? 1 : 0} sx={classes.wrapper}>
      <Button
        variant={'text'}
        disabled={!toDos.length}
        sx={classes.root}
        startIcon={<ShoppingCart />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box display='flex' alignItems='center' width='100%'>
          {!isMobile && summary}
          {Boolean(toDos.length) && <Box sx={classes.indicator}>{expandIcon}</Box>}
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
          sx: classes.popover,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {toDos.map(({ id, title, completed }) => (
          <MenuItem key={id}>
            <Box sx={classes.cartItemContainer}>
              <Box display={'flex'} alignItems='center'>
                <Typography component='p' variant='caption' sx={classes.subheader} noWrap>
                  {completed ? <CheckIcon/> : <HourglassEmptyIcon/>}
                </Typography>
                <Typography component='p' variant='body2' sx={classes.header} title={title} noWrap>
                  {title}
                </Typography>
              </Box>
              <IconButton onClick={() => actions.toDos.remove(id)}>
                <RemoveShoppingCart color='error' />
              </IconButton>
            </Box>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>{summary}</MenuItem>
      </Menu>
    </Box>
  );
};
