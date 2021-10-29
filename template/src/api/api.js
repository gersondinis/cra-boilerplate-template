import {QueryClient, useMutation, useQuery} from 'react-query';
import axios from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    },
  },
});

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
});

export const TYPES = {
  TODOS_LIST: 'TODOS_LIST'
};

export const useGetTodos = () => useQuery(
  TYPES.TODOS_LIST,
  () => httpClient.get('/todos').then(({data}) => data)
);
export const useCreateTodo = () => useMutation(
  'CREATE_TODO',
  todo => httpClient.post('/todos', todo),
  {onSuccess: () => queryClient.invalidateQueries(TYPES.TODOS_LIST)}
);

export const API = {
  useGetTodos,
  useCreateTodo,
};

export default API;
