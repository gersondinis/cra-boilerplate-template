import {Home} from '@mui/icons-material';
import {useMatch, useNavigate} from 'react-router-dom';
import {ListItem, ListItemIcon, ListItemText, useMediaQuery} from '@mui/material';
import {actions} from 'store/actions';
import {FC} from 'react';
import type {Theme} from '@mui/material';

export const SidebarLink: FC<ISidebarLink> = ({path = '/', icon = <Home/>, text = 'Link', itemKey, exact = false}) => {
  const navigate = useNavigate();
  const matches = useMatch({path, end: exact});
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const clickHandler = () => {
    navigate(path);
    if (!isDesktop) {
      actions.app.setSidebarOpen(false);
    }
  };

  return (
    <ListItem key={itemKey} onClick={clickHandler} sx={matches ? styles.activeButton : {}} button>
      <ListItemIcon sx={styles.icon} children={icon} />
      <ListItemText primary={text} />
    </ListItem>
  );
};

const styles = {
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
  },
};

export type ISidebarLink = {
  exact?: boolean
  path?: string
  icon?: any
  text?: string
  itemKey?: any
}

SidebarLink.defaultProps = {
  exact: false,
  path: '/',
  icon: <Home/>,
  text: 'Link',
};
