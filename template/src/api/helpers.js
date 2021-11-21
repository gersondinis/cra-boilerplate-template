import {useMutation, useQuery} from 'react-query';
import client from './client';
import {queryClient} from './index';

/**
 * Generates CRUD hooks for the provided type, enpoint and http client.
 * @param type
 * @param endpoint
 * @param httpClient
 * @return {{useGetList: (function(): QueryObserverIdleResult<TQueryFnData, unknown> | QueryObserverLoadingErrorResult<TQueryFnData, unknown> | QueryObserverLoadingResult<TQueryFnData, unknown> | QueryObserverRefetchErrorResult<TQueryFnData, unknown> | QueryObserverSuccessResult<TQueryFnData, unknown>), useGet: (function(*): QueryObserverIdleResult<TQueryFnData, unknown> | QueryObserverLoadingErrorResult<TQueryFnData, unknown> | QueryObserverLoadingResult<TQueryFnData, unknown> | QueryObserverRefetchErrorResult<TQueryFnData, unknown> | QueryObserverSuccessResult<TQueryFnData, unknown>), useUpdate: (function(): ({[K in keyof MutationObserverIdleResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverIdleResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverLoadingResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverLoadingResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverErrorResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverErrorResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverSuccessResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverSuccessResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>})), useDelete: (function(): ({[K in keyof MutationObserverIdleResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverIdleResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverLoadingResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverLoadingResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverErrorResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverErrorResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverSuccessResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverSuccessResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>})), useCreate: (function(): ({[K in keyof MutationObserverIdleResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverIdleResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverLoadingResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverLoadingResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverErrorResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverErrorResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}) | ({[K in keyof MutationObserverSuccessResult<TData, unknown, void, unknown>]: K extends keyof {mutate: UseMutateFunction<TData, unknown, void, unknown>} ? {mutate: UseMutateFunction<TData, unknown, void, unknown>}[K] : MutationObserverSuccessResult<TData, unknown, void, unknown>[K]} & {mutateAsync: UseMutateAsyncFunction<TData, unknown, void, unknown>}))}}
 */
export const generateCrudEndpoints = ({type, endpoint, httpClient = client}) => {
  return {
    useGetList: () => useQuery(
      [type, 'LIST'],
      () => httpClient.get(endpoint).then(({data}) => data),
    ),
    useGet: (id) => useQuery(
      [type, id],
      () => httpClient.get(`${endpoint}/${id}`).then(({data}) => data)
    ),
    useCreate: () => useMutation(
      [type, 'CREATE'],
      todo => httpClient.post(endpoint, todo),
      {onSuccess: () => queryClient.invalidateQueries([type, 'LIST'])}
    ),
    useUpdate: () => useMutation(
      [type, 'UPDATE'],
      (id, todo) => httpClient.patch(`${endpoint}/${id}`, todo),
      {onSuccess: () => queryClient.invalidateQueries([type, 'LIST'])}
    ),
    useDelete: () => useMutation(
      [type, 'DELETE'],
      id => httpClient.delete(`${endpoint}/${id}`),
      {onSuccess: () => queryClient.invalidateQueries([type, 'LIST'])}
    )
  }
};
