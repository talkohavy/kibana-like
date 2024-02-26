import { createReducer } from '@reduxjs/toolkit';
import { login } from './actions';

const INITIAL_STATE = {
  isLogged: false,
  user: null,
  isLoading: false,
};

export const userReducer = createReducer(INITIAL_STATE, ({ addCase }) => {
  addCase(login, (state) => {
    state.isLoading = true;
  });
});
