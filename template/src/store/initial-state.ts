import {LOCALE_DEFAULT} from '../i18n/i18n';
import SETTINGS from '../config/settings';

export const initialState = {
  app: {
    language: LOCALE_DEFAULT,
    loading: false,
    notifications: [],
    devTools: {
      open: false,
      mode: SETTINGS.app.INITIAL_MODE,
      debug: SETTINGS.app.DEBUG,
    },
  },
  user: {
    name: '',
    roles: [] as string[],
  },
  count: 0,
};

export type IAppState = typeof initialState;
