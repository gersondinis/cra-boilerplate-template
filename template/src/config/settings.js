import store from 'store';
import axios from 'axios';
import {
  changeLocale,
  i18nInit,
  loadLocales,
  LOCALE_DEFAULT,
  LOCALE_DETECTED,
  LOCALE_KEY,
  LOCALE,
  LOCALES_DATE_FNS_MAP,
  LOCALES_MAP,
  LOCALES_TRANSLATORS,
  translate as t
} from '../i18n/i18n';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_TIME_FORMAT_COMPATIBLE = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_TIME_FORMAT_NO_SEC = 'YYYY-MM-DD HH:mm';

export {LOCALE_KEY, changeLocale};
export const DEBUG_KEY = 'DEBUG';
export const MODE_KEY = 'MODE';
export const APP_MODES = {
  MOCK: 'MOCK',
  API: 'API'
};

export const SETTINGS = {
  app: {
    NAME: process.env.REACT_APP_NAME,
    API_REST_ENDPOINT: `${process.env.REACT_APP_API_REST_PROTOCOL}://${process.env.REACT_APP_API_REST_HOST}:${process.env.REACT_APP_API_REST_PORT}`,
    API_REST_PROTOCOL: process.env.REACT_APP_API_REST_PROTOCOL,
    API_REST_HOST: process.env.REACT_APP_API_REST_HOST,
    API_REST_PORT: process.env.REACT_APP_API_REST_PORT,
    ENV: process.env.REACT_APP_ENVIRONMENT,
    DEBUG: store.get(DEBUG_KEY) || false,
    INITIAL_MODE: store.get(MODE_KEY) || APP_MODES.API,
    MODES: {...APP_MODES},
    DEBOUNCE_TIME: 250,
    NOTIFICATION_TIMEOUT: 6000,
    INITIAL_PATH: window.location.pathname || '/',
    VERSION: process.env.REACT_APP_VERSION,
    isInMockMode: currentMode => currentMode === APP_MODES.MOCK,
    isInApiMode: currentMode => currentMode === APP_MODES.API,
  },
  i18n: {
    LOCALE_KEY,
    LOCALES: LOCALE,
    LOCALES_MAP,
    LOCALES_TRANSLATORS,
    LOCALES_DATE_FNS_MAP,
    LOCALE_DETECTED,
    LOCALE_DEFAULT,
    loadLocales,
    i18nInit,
    changeLocale,
    t
  },
  FORMATTERS: {
    DATE_FORMAT,
    DATE_TIME_FORMAT,
    DATE_TIME_FORMAT_NO_SEC,
    DATE_TIME_FORMAT_COMPATIBLE,
  }
};

export const httpClientApi = axios.create({
  baseURL: `${SETTINGS.app.API_REST_ENDPOINT}/api`
});

export default SETTINGS;
