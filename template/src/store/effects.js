import {changeLocale} from '../i18n/i18n';
import {httpClientApi} from '../config/settings';

export const effects = {
  app: {
    changeLocale
  },
  api: {
    users: {
      get: () => httpClientApi.get('/users'),
    }
  }
};

export default effects;