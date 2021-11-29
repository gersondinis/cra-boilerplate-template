import {useSnapshot} from 'valtio';
import initialState from './initialState';
import {devtools} from 'valtio/utils';
import SETTINGS from '../config/settings';
import {createStore} from './store-utils';

export const store = createStore(initialState);
export const useStore = () => useSnapshot(store);

if (SETTINGS.app.ENV === 'DEV') {
  devtools(store, 'STORE');
}

export default store;
