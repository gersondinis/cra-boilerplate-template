import {isDevelopment, MOCK} from 'services/env/environment.service';
import {rest, setupWorker} from 'msw';
import {TodoListMock, UserMock} from 'xhr/endpoints/mocks';

export const initMocking = async () => {
  if (isDevelopment && MOCK) {
    const worker = setupWorker(
      rest.get('/api/users/*', (req, res, ctx) => res(ctx.json(UserMock))),
      rest.get('/api/todos', (req, res, ctx) => res(ctx.json(TodoListMock))),
    );

    worker.start({
      onUnhandledRequest: ({ method, url }) => {
        if (url.pathname.startsWith('/api')) {
          console.warn(`Unhandled ${method} request to ${url}`);
        }
      },
    });
  }
}