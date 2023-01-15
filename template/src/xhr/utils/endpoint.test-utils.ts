import {APIClient} from 'xhr/utils/api-client';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const axiosMock = new MockAdapter(APIClient);

export const testEndpoint = (endpoint: (...args: any) => Promise<any>, mock: any = true) => {
  describe('Should be an endpoint', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('should return server data', async () => {
      axiosMock.onAny().replyOnce(200, mock);
      expect((await endpoint({}))).toBeTruthy();
    });

    it('should throw an error when a client error occurs', () => {
      axiosMock.onAny().networkErrorOnce();
      expect(endpoint({})).rejects.toThrow();
    });

    it('should be able to pass config to axios instance', async () => {
      const config = {params: {test: 'test'}};
      axiosMock.onAny().replyOnce((providedConfig) => {
        expect(providedConfig.params).toEqual(expect.objectContaining(config.params));
        return [200, mock];
      });
      expect((await endpoint(config, config))).toBeTruthy();
    });

    it('should be able to pass an alternative client', async () => {
      const client = axios.create();
      const clientMock = new MockAdapter(client);
      const config = {params: 'test', client};
      clientMock.onAny().replyOnce(200, mock);
      expect((await endpoint(config, config))).toBeTruthy();
    });
  });
};