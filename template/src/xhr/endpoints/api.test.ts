import {IToDo} from 'types/domain/ToDo.types';
import {axiosMock, testEndpoint} from 'xhr/utils/endpoint.test-utils';
import {createToDo, getToDos, getUser} from './api.endpoints';

describe('User endpoints', () => {
  describe('getUser', () => {
    testEndpoint(getUser);

    it('should call the right server endpoint', async () => {
      axiosMock.onGet('/users/1').replyOnce(200, true);
      expect(await getUser({ id: 1 })).toBe(true);
    });
  });

  describe('getToDos', () => {
    testEndpoint(getToDos);

    it('should call the right server endpoint', async () => {
      axiosMock.onGet('/todos').replyOnce(200, true);
      expect(await getToDos()).toBe(true);
    });
  });

  describe('createToDo', () => {
    testEndpoint(createToDo);

    it('should call the right server endpoint', async () => {
      const mock: IToDo = {id: 1, userId: 1, title: 'title', completed: false};
      axiosMock.onPost('/todos', expect.objectContaining(mock)).replyOnce(200, true);
      expect(await createToDo(mock)).toBe(true);
    });
  });
});
