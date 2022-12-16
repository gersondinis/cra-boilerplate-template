import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {FC, ReactNode} from 'react';
import {isDevelopment} from 'services/env/environment.service';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5000
    }
  }
});

export const ReactQueryProvider: FC<IReactQueryProvider> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDevelopment && <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />}
    </QueryClientProvider>
  );
};

export interface IReactQueryProvider {
  children: ReactNode;
}
