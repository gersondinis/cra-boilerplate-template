import {changeLocale} from '../config/settings';
import {LOCALE} from '../i18n/i18n';
import {IAppState} from './initial-state';
import {store} from './store';


export const actions = {
  app: {
    setAppState: (data: IAppState) => {
      store.app = {...store.app, ...data};
    },
    setAppDevToolsState: (data: IAppState['app']['devTools']) => {
      store.app.devTools = {...store.app.devTools, ...data};
    },
    setLanguage: (language: LOCALE) => {
      changeLocale(language);
      store.app.language = language;
    },
  },
  user: {
    setName: (name: string) => {
      store.user.name = name;
    },
    addRole: async (role: string) => {
      store.user.roles.push(role);
      const timeout = () => new Promise(resolve => setTimeout(() => resolve('After 3000ms'), 3000));
      return await timeout();
    },
    removeRole: () => {
      store.user.roles.pop();
    },
    setUser: (user: IAppState['user']) => {
      store.user = user;
    },
  },
  count: {
    increment: () => {
      store.count++;
    },
    decrement: () => {
      store.count--;
    },
  }
};
