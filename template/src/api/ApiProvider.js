import React from 'react';
import PropTypes from 'prop-types';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './api';

const ApiProvider = ({children}) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

ApiProvider.propTypes = {
    children: PropTypes.any,
};

ApiProvider.defaultProps = {
    children: null
};

export default ApiProvider;
