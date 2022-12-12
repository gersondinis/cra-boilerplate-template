import {APIClient} from './api-client';
import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const axiosMock = new MockAdapter(APIClient);

export const testEndpoint = (endpoint: (...args: any) => Promise<AxiosResponse<any>>) => {
  describe('Should be an endpoint', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('should return server data', async () => {
      const serverData = 'data';
      axiosMock.onAny().replyOnce(200, serverData);
      expect((await endpoint({})).data).toBe(serverData);
    });

    it('should throw an error when a client error occurs', () => {
      axiosMock.onAny().networkErrorOnce();
      expect(endpoint({})).rejects.toThrow();
    });

    it('should be able to pass config to axios instance', async () => {
      const config = {params: {test: 'test'}};
      axiosMock.onAny().replyOnce((providedConfig) => {
        expect(providedConfig.params).toEqual(expect.objectContaining(config.params));
        return [200, true];
      });
      expect((await endpoint(config, config)).data).toBe(true);
    });

    it('should be able to pass an alternative client', async () => {
      const client = axios.create();
      const clientMock = new MockAdapter(client);
      const config = {params: 'test', client};
      const data = 'new-client-response-data';
      clientMock.onAny().replyOnce(200, data);
      expect((await endpoint(config, config)).data).toBe(data);
    });
  });
};