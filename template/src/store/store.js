import {proxy, useSnapshot} from 'valtio';
import initialState from './initialState';
import {devtools} from 'valtio/utils';
import SETTINGS from '../config/settings';

export const store = proxy(initialState);
export const useStore = () => useSnapshot(store);

if (SETTINGS.app.ENV === 'DEV') {
  devtools(store, 'STORE');
}

export default store;
