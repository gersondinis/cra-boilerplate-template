import {proxy} from 'valtio';

export const clone = v => JSON.parse(JSON.stringify(v));
export const unwrap = clone;
export const createStore = state => proxy(clone(state));
export const resetStore = (store, state) => {
  const resetState = clone(state);
  Object.keys(resetState).forEach((key) => {
    store[key] = resetState[key];
  });
};

export const utils = {
  createStore,
  resetStore,
  unwrap,
  clone,
}
