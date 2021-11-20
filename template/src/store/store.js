import {proxy, useSnapshot} from 'valtio';
import state from './state';

export const store = proxy(state);
export const useStore = () => useSnapshot(store);
export default store;
