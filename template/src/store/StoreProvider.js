import React from 'react';
import {Provider} from 'overmind-react';
import store from './store';


const StoreProvider = ({children}) => {
    return (
        <Provider value={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;