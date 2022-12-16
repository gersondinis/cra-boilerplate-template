import {IUser} from 'types/domain/User.types';
import storage from 'store';
import {IToDo} from 'types/domain/ToDo.types';

export const initialState = {
  app: {
    loading: false,
    sidebarOpen: false,
  },
  userId: storage.get('userId') as IUser['id'] | undefined,
  toDos: storage.get('toDos', []) as IToDo[],
  count: 0
};

export type IAppState = typeof initialState;
