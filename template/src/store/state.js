import {LOCALE_DEFAULT} from '../i18n/i18n';
import SETTINGS from '../config/settings';

export const state = {
    app: {
        language: LOCALE_DEFAULT,
        loading: false,
        notifications: [],
        devTools: {
            open: false,
            mode: SETTINGS.app.INITIAL_MODE,
            debug: SETTINGS.app.DEBUG,
        }
    },
};

export default state;
