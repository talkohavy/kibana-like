import { createReducer } from '@reduxjs/toolkit';
import { fallbackReduxActionCatcher } from './actions';

const apiFallbackReducer = createReducer(null, ({ addCase }) => {
  addCase(fallbackReduxActionCatcher, (_, action) => {
    console.warn('Async API action', action.type, 'did NOT contain a SUCCESS/FAILURE actions');
  });
});

export { apiFallbackReducer };
