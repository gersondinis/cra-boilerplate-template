import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from './theme/ThemeProvider';
import StoreProvider from './store/StoreProvider';
import I18nProvider from './i18n/I18nProvider';
import App from './App';
import SnackbarProvider from './utils/providers/SnackbarProvider';
import ApiProvider from './api/ApiProvider';


ReactDOM.render(
  <ThemeProvider>
    <StoreProvider>
      <SnackbarProvider>
        <ApiProvider>
          <I18nProvider>
            <App/>
          </I18nProvider>
        </ApiProvider>
      </SnackbarProvider>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
