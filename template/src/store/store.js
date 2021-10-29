import {createOvermind as createStore} from 'overmind';
import {createActionsHook, createEffectsHook, createReactionHook, createStateHook} from 'overmind-react';

import state from './state';
import actions from './actions';
import effects from './effects';

export default createStore({
  state,
  actions,
  effects
});

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()
