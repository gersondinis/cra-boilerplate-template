import {generateCrudEndpoints} from '../helpers';
import axios from 'axios';
import {useQuery} from 'react-query';

export const type = 'POST';
export const endpoint = '/posts';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
});

export const todoClient = httpClient;

const endpoints = {
  ...generateCrudEndpoints({type, endpoint, httpClient}),
  useGetPostComments: (id) => useQuery(
    [type, id, 'COMMENTS'],
    () => httpClient.get(`${endpoint}/${id}/comments`).then(({data}) => data),
  )
};

export default endpoints;
