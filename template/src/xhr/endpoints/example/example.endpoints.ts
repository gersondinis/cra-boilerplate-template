import {IPost} from "../../../types";
import {APIClient} from "../../utils/api-client";
import {EndpointConfig} from "../../utils/endpoint-config.type";


export const getPosts = async ({client = APIClient, ...config}: EndpointConfig = {}) => {
  return client.get<IPost[]>(`/posts`, config);
};

export const createPost = async (args: Pick<IPost, 'id' | 'title'>, {client = APIClient, ...config}: EndpointConfig = {}) => {
  return client.post(`/posts`, args, config);
};
