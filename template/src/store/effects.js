import {changeLocale} from '../i18n/i18n';
import {httpClientParse as call} from '../config/settings';
import {httpClientApi} from '../config/settings';

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