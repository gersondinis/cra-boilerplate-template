import store from 'store';
import axios from 'axios';
import {
    LOCALES,
    LOCALES_MAP,
    LOCALES_TRANSLATORS,
    LOCALES_DATE_FNS_MAP,
    LOCALE_DETECTED,
    LOCALE_DEFAULT,
    LOCALE_KEY,
    loadLocales,
    i18nInit,
    changeLocale,
    translate as t
} from '../i18n/i18n';
import {EMAIL_VALIDATOR, PHONE_MOBILE_VALIDATOR, PHONE_VALIDATOR, URL_VALIDATOR} from './validators/validators';

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
        API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
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
        LOCALES,
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
    },
    VALIDATORS: {
        EMAIL_VALIDATOR,
        URL_VALIDATOR,
        PHONE_VALIDATOR,
        PHONE_MOBILE_VALIDATOR,
    },
};

export const httpApiClient = axios.create({
    baseURL: `${SETTINGS.app.API_REST_PROTOCOL}://${SETTINGS.app.API_REST_HOST}:${SETTINGS.app.API_REST_PORT}/api`
});

export default SETTINGS;
