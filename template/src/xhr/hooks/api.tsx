import {useMutation, useQuery} from '@tanstack/react-query';
import {toast} from 'react-toastify';
import {createToDo, getToDos, getUser} from 'xhr/endpoints/api.endpoints';
import {parseErrorMessage} from 'services/error/error.service';
import {EndpointConfig} from 'xhr/utils/endpoint-config.type';
import {queryClient} from 'providers/ReactQueryProvider/ReactQueryProvider';
import {store} from 'store/store';
import {actions} from 'store/actions';
import {IToDo} from 'types/domain/ToDo.types';

export const QUERY_KEYS = {
  GET_USER: 'GET_USER',
  GET_TODOS: 'GET_TODOS',
  CREATE_TODO: 'CREATE_TODO',
};

export const useGetUser = (args: Parameters<typeof getUser>[0], config?: EndpointConfig) => {
  return useQuery(
    [QUERY_KEYS.GET_USER, args.id],
    () => getUser(args, config),
    {
      onError: (e: any) => {
        toast.error(parseErrorMessage(e));
      },
      enabled: Boolean(args.id)
    }
  );
};

export const useGetToDos = (config?: EndpointConfig) => {
  return useQuery<IToDo[]>(
    [QUERY_KEYS.GET_TODOS],
    () => getToDos(config),
    {
      onError: (e) => {
        toast.error(parseErrorMessage(e));
      }
    }
  );
};

export const useCreateToDo = (config?: EndpointConfig) => {
  return useMutation(
    [QUERY_KEYS.CREATE_TODO],
    (args: Parameters<typeof createToDo>[0]) => createToDo(args, config),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([QUERY_KEYS.GET_USER, store.userId]);
        actions.toDos.clear();
        toast.success('Ordered successfully!');
      },
      onError: (e: any) => {
        toast.error(parseErrorMessage(e));
      },
    }
  );
};
