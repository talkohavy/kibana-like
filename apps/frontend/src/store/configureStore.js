import { configureStore } from '@reduxjs/toolkit';
import { fetchApiMiddleware } from './api/middleware';
import { apiFallbackReducer } from './api/reducer';
import { userMiddleware, userReducer } from './user/index';

function getAllMiddlewares({ axiosInstance }) {
  return [userMiddleware, fetchApiMiddleware({ axiosInstance })];
}

export function configureMyStore({ preloadedState, axiosInstance }) {
  const store = configureStore({
    preloadedState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => {
      const middlewares = getAllMiddlewares({ axiosInstance });
      // import.meta.env.MODE !== 'production' && middlewares.push(myLogger);
      return getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares);
    },
    reducer: {
      // @ts-ignore
      user: userReducer,
      apiFallback: apiFallbackReducer,
    },
  });

  return store;
}
