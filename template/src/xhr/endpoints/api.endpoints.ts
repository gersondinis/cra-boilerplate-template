import {IToDo} from 'types/domain/ToDo.types';
import {IUser} from 'types/domain/User.types';
import {APIClient} from 'xhr/utils/api-client';
import {EndpointConfig} from 'xhr/utils/endpoint-config.type';

export const getUser = async (args: Pick<IUser, 'id'>, { client = APIClient, ...config }: EndpointConfig = {}): Promise<IUser> => {
  return client.get<IUser>(`/users/${args.id}`, config).then(({data}) => data);
};

export const getToDos = async ({ client = APIClient, ...config }: EndpointConfig = {}) => {
  return client.get<IToDo[]>(`/todos`, config).then(({data}) => data);
};

export const createToDo = async (args: IToDo, { client = APIClient, ...config }: EndpointConfig = {}) => {
  return client.post<IToDo>(`/todos`, args, config).then(({data}) => (data));
};
