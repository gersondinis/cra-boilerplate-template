
import {axiosMock, testEndpoint} from '../../utils/endpoint.test-utils';
import {getPosts} from './example.endpoints';


describe('User endpoints', () => {

  describe('getPostComments', () => {
    testEndpoint(getPosts);

    it('should call the right server endpoint', async () => {
      axiosMock.onGet('/posts').replyOnce(200, true);
      expect((await getPosts()).data).toBe(true);
    });
  });
});
