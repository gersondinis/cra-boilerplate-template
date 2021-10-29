import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSnackbar} from 'notistack';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const QueryFeedback = ({isSuccess, isError, error, isLoading, successMessage, snackbarOnSuccessOptions, snackbarOnErrorOptions}) => {

  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar(successMessage, snackbarOnSuccessOptions);
    }
  }, [successMessage, isSuccess, enqueueSnackbar, snackbarOnSuccessOptions]);

  useEffect(() => {
    if (isError || error) {
      enqueueSnackbar(error.message, snackbarOnErrorOptions);
    }
  }, [error, isError, enqueueSnackbar, snackbarOnErrorOptions]);

  return isLoading
    ? <LoadingScreen/>
    : null;
};

QueryFeedback.propTypes = {
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  successMessage: PropTypes.string,
  snackbarOnErrorOptions: PropTypes.object,
  snackbarOnSuccessOptions: PropTypes.object,
};

QueryFeedback.defaultProps = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  error: null,
  successMessage: 'Success',
  snackbarOnErrorOptions: {variant: 'error'},
  snackbarOnSuccessOptions: {variant: 'success'},
};

export default QueryFeedback;
