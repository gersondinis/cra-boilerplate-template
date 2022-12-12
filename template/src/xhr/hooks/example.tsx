import {useMutation, useQuery} from '@tanstack/react-query';
import {toast} from 'react-toastify';
import {parseErrorMessage} from '../../services/error/error.service';
import {createPost, getPosts} from '../endpoints/example/example.endpoints';
import {EndpointConfig} from '../utils/endpoint-config.type';

export const ENTITY_QUERY_TYPE = 'STORE';
export const ENTITY_ENDPOINT = '/store';
export const ENTITY_QUERY_KEYS = {
  GET_POSTS: 'GET_POSTS',
  CREATE_POST: 'CREATE_POST',
};

export const useGetPosts = (config?: EndpointConfig) => {
  return useQuery(
    [ENTITY_QUERY_TYPE, ENTITY_QUERY_KEYS.GET_POSTS],
    () => getPosts(config).then(({data}) => data),
    {
      onError: (e: any) => {
        toast.error(parseErrorMessage(e));
      },
    }
  );
};

export const useCreatePost = (config?: EndpointConfig) => {
  return useMutation(
    [ENTITY_QUERY_TYPE, ENTITY_QUERY_KEYS.CREATE_POST],
    (args: Parameters<typeof createPost>[0]) =>
      createPost(args, config).then(({data}) => data),
    {
      onSuccess: () => {
        toast.success('Successfully created!');
      },
      onError: (e: any) => {
        toast.error(parseErrorMessage(e));
      },
    }
  );
};
