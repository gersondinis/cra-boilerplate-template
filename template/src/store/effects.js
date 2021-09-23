import {changeLocale} from '../i18n/i18n';
import {httpApiClient} from '../config/settings';

export const to = p => p.then(result => [result, null]).catch(e => [undefined, e]);

export const effects = {
    app: {
        changeLocale
    },
    api: {
        users: {
            get: () => to(httpApiClient.get('/users')),
        }
    }
};

export default effects;