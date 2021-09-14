import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from './theme/ThemeProvider';
import StoreProvider from './store/StoreProvider';
import I18nProvider from './i18n/I18nProvider';
import App from './App';


ReactDOM.render(
    <ThemeProvider>
        <StoreProvider>
            <I18nProvider>
                <App/>
            </I18nProvider>
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById('root')
);
