import storage from 'store';
import {IToDo} from 'types/domain/ToDo.types';
import {IUser} from 'types/domain/User.types';
import {IAppState} from './initial-state';
import {store} from './store';

export const actions = {
  app: {
    init: () => null,
    setAppState: (data: IAppState) => {
      store.app = { ...store.app, ...data };
    },
    toggleSidebarOpen: () => store.app.sidebarOpen = !store.app.sidebarOpen,
    setSidebarOpen: (open: boolean) => store.app.sidebarOpen = open
  },
  login: (userId: IUser['id']) => {
    store.userId = userId;
    storage.set('userId', userId);
  },
  logout: () => {
    store.userId = undefined;
    storage.set('userId', store.userId);
  },
  toDos: {
    add: (toDo: IToDo) => {
      store.toDos.push(toDo);
      storage.set('toDos', store.toDos);
    },
    remove: (toDoId: IToDo['id']) => {
      store.toDos = store.toDos.filter((t) => t.id !== toDoId);
      storage.set('toDos', store.toDos);
    },
    clear: () => {
      store.toDos = []
      storage.set('toDos', store.toDos);
    }
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
