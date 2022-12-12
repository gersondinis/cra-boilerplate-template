import {useSnapshot} from 'valtio';
import {devtools} from 'valtio/utils';
import {initialState} from './initial-state';
import {createStore} from './store-utils';


export const store = createStore(initialState);
export const useStore = () => useSnapshot(store);

devtools(store, {name: 'STORE', enabled: true});
