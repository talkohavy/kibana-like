import { createMiddleware } from '../createMiddleware';
import { prefix } from './actions';

export const userMiddleware = createMiddleware({
  uniquePrefix: prefix,
  // eslint-disable-next-line
  handleActionLogic: ({ action, dispatch, getState }) => {
    if (action.type === 'COOKIE_AUTH_SUCCESS') {
      console.log('do something');
    }
  },
});
