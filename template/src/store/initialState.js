import {LOCALE_DEFAULT} from '../i18n/i18n';
import SETTINGS from '../config/settings';

export const initialState = {
  app: {
    language: LOCALE_DEFAULT,
    loading: false,
    notifications: [],
    user: {
      roles: [],
    },
    devTools: {
      open: false,
      mode: SETTINGS.app.INITIAL_MODE,
      debug: SETTINGS.app.DEBUG,
    }
  },
  count: 0,
};

export default initialState;
