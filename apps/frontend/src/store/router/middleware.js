import { LOCATION_CHANGE } from 'redux-first-history';
import { createMiddleware } from '../createMiddleware';

const routerMiddleware = createMiddleware({
  // eslint-disable-next-line
  handleActionLogic: ({ action, dispatch, getState }) => {
    if (action.type === LOCATION_CHANGE) {
      // const store = getState();
      // console.log('LOCATION_CHANGE even caught!');
    }
  },
});

export { routerMiddleware };
