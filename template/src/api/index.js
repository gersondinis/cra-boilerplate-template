import {QueryClient} from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5000,

    },
  },
});

export {default as postApi} from './endpoints/post.endpoints';
