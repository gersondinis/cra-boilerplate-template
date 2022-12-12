import {proxy} from 'valtio';


export const clone = <T extends object>(v: T): T => JSON.parse(JSON.stringify(v));
export const unwrap = clone;
export const createStore = <T extends object>(state: T) => proxy<T>(clone(state));
export const resetStore = <T extends object>(store: T, state: T): void => {
  const resetState = clone(state);
  Object.keys(resetState).forEach((key) => {
    store[key as keyof T] = resetState[key as keyof T];
  });
};

export const utils = {
  createStore,
  resetStore,
  unwrap,
  clone
};
