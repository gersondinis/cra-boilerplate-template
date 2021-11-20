import {proxy, useSnapshot} from 'valtio';
import initialState from './initialState';

export const store = proxy(initialState);
export const useStore = () => useSnapshot(store);
export default store;
