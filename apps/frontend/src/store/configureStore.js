import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { configureStore } from '@reduxjs/toolkit';
import { fetchApiMiddleware } from './api/middleware';
import { apiFallbackReducer } from './api/reducer';
import { routerMiddleware } from './router/middleware';
import { userMiddleware, userReducer } from './user/index';

function getAllMiddlewares({ axiosInstance }) {
  return [routerMiddleware, userMiddleware, fetchApiMiddleware({ axiosInstance })];
}

export function configureMyStore({ preloadedState, axiosInstance }) {
  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
  });

  const store = configureStore({
    preloadedState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => {
      const middlewares = getAllMiddlewares({ axiosInstance });
      middlewares.push(routerMiddleware); // <--- for dispatching history actions
      // import.meta.env.MODE !== 'production' && middlewares.push(myLogger);
      return getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares);
    },
    reducer: {
      // @ts-ignore
      router: routerReducer,
      user: userReducer,
      apiFallback: apiFallbackReducer,
    },
  });

  const history = createReduxHistory(store);

  return { store, history };
}
