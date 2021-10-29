import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Box, Alert} from '@mui/material';

const ErrorsFeedback = ({errors}) => {

  const parseErrors = useCallback((error, title = '', key = '') => {
    if (!error) return null;
    if (typeof error === 'object') return Object.entries(error).map(([k, e], idx) => parseErrors(e, k, idx));
    if (Array.isArray(error)) return error.map((e, idx) => parseErrors(e, '[ArrayElement]', idx));
    return <Alert key={key} severity={'error'}>{title}: {error}</Alert>;
  }, []);

  if (!Object.keys(errors).length) return null;

  return (
    <Box p={1}>
      {parseErrors(errors)}
    </Box>
  );
};

ErrorsFeedback.propTypes = {
  errors: PropTypes.shape({}),
};

export default ErrorsFeedback;
