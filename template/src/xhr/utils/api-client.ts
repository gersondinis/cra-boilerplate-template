import axios from 'axios';
import {API_URL} from 'services/env/environment.service';

export const APIClient = axios.create({
  baseURL: API_URL,
  timeout: 20000
});
