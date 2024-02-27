import { push } from 'redux-first-history';
import { createMiddleware } from '../createMiddleware';
import { login, prefix, setIsLoggedIn } from './actions';

export const userMiddleware = createMiddleware({
  uniquePrefix: prefix,
  // eslint-disable-next-line
  handleActionLogic: ({ action, dispatch, getState }) => {
    if (login.match(action)) {
      dispatch(setIsLoggedIn({ isLogged: true }));

      dispatch(push('/'));
    }
  },
});
