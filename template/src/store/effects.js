import {changeLocale} from '../i18n/i18n';
import {httpClientApi, httpClientParse as call} from '../config/settings';

export const effects = {
  app: {
    changeLocale
  },
  api: {
    users: {
      get: () => call(httpClientApi.get('/users')),
    }
  }
};

export default effects;