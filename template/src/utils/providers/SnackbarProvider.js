import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {IconButton} from '@mui/material';
import {SnackbarProvider as Provider} from 'notistack';
import {Close} from '@mui/icons-material';

const SnackbarProvider = ({children, ...rest}) => {

  const ref = useRef();
  const onClickDismiss = key => {
    ref.current?.closeSnackbar(key);
  };

  return (
    <Provider
      ref={ref}
      maxSnack={5}
      action={key => (
        <IconButton onClick={() => onClickDismiss(key)}>
          <Close/>
        </IconButton>
      )}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      autoHideDuration={6000}
      dense
      {...rest}
    >
      {children}
    </Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.any,
};

SnackbarProvider.defaultProps = {
  children: null,
};

export default SnackbarProvider;
