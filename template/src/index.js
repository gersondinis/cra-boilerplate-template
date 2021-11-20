import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from './theme/ThemeProvider';
import I18nProvider from './i18n/I18nProvider';
import App from './App';
import SnackbarProvider from './utils/providers/SnackbarProvider';
import ApiProvider from './api/ApiProvider';


ReactDOM.render(
  <ThemeProvider>
    <SnackbarProvider>
      <ApiProvider>
        <I18nProvider>
          <App/>
        </I18nProvider>
      </ApiProvider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
