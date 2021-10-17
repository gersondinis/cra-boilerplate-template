import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, Dialog, DialogContent} from '@mui/material';

const LoadingScreen = ({loading, onClick, ...rest}) => {

  if (!loading) return null;

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        },
      }}
      open={loading}
      onClick={onClick}
      {...rest}
    >
      <DialogContent>
        <CircularProgress color='inherit' />
      </DialogContent>
    </Dialog>
  );
};

LoadingScreen.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

LoadingScreen.defaultProps = {
  loading: true,
  onClick: () => null
};

export default LoadingScreen;