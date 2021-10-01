import React from 'react';
import PropTypes from 'prop-types';
import {Backdrop, CircularProgress} from '@material-ui/core';

const Loading = ({loading, onClick = () => null}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={onClick}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

Loading.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

Loading.defaultProps = {
    loading: true,
    onClick: () => null
}

export default Loading;