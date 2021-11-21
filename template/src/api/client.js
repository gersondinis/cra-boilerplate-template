import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
});

export default httpClient;
