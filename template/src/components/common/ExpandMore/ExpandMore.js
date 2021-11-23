import styled from '@emotion/styled';
import {IconButton} from '@mui/material';

export const ExpandMore = styled(({expand, ...other }) => {
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
