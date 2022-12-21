import styled from '@emotion/styled';
import {IconButton} from '@mui/material';
import type {Theme} from '@mui/material';

export const ExpandMore = styled(({expand, ...other }: {expand: boolean}) => {
  return <IconButton {...other} />;
})(({ theme, expand }: {theme: Theme, expand: boolean}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
