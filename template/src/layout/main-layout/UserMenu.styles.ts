import type {Theme} from '@mui/material';

export const classes = {
  wrapper: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomWidth: 0
  },
  root: {
    margin: 0,
    height: '3.15rem',
    maxWidth: '14.875rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    textTransform: 'none',
    '& .MuiButton-startIcon': {
      paddingRight: (theme: Theme) => theme.spacing(1 / 2),
      '& .MuiSvgIcon-root': {
        fontSize: '2.1875rem'
      }
    }
  },
  smallButton: {
    width: 'auto',
    '& .MuiButton-startIcon': {
      paddingRight: 0,
      marginRight: 0
    }
  },
  header: {
    fontSize: '0.9375rem',
    maxWidth: '7.25rem',
    textTransform: 'none',
    paddingRight: (theme: Theme) => theme.spacing(1 / 2),
    color: (theme: Theme) => theme.palette.text.primary
  },
  subheader: {
    lineHeight: 1,
    maxWidth: '7.25rem',
    textTransform: 'none',
    textAlign: 'left',
    paddingRight: (theme: Theme) => theme.spacing(1 / 2),
    color: (theme: Theme) => theme.palette.text.disabled
  },
  expandIcon: {
    color: (theme: Theme) => theme.palette.primary.main
  },
  indicator: {
    maxHeight: '2.125rem',
    overflow: 'hidden',
    paddingTop: (theme: Theme) => theme.spacing(1 / 2)
  },
  popover: {
    maxWidth: '14.7rem',
    width: '14.875rem',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
};
