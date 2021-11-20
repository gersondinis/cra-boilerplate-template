import store from './store';
import effects from './effects';

export const actions = {
  app: {
    setAppState: (data) => {
      store.app = {...store.app, ...data};
    },
    setAppDevToolsState: (data) => {
      store.app.devTools = {...store.app.devTools, ...data};
    },
    setLanguage: (language) => {
      effects.app.changeLocale(language);
      store.app.language = language;
    },
  },
  user: {
    setName: (name) => {
      store.user.name = name;
    },
    addRole: async (role) => {
      store.user.roles.push(role);
      const timeout = () => new Promise(resolve => setTimeout(() => resolve('After 3000ms'), 3000));
      return await timeout();
    },
    removeRole: () => {
      store.user.roles.pop();
    },
    setUser: (user) => {
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

export default actions;
