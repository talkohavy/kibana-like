import { createAction } from '@reduxjs/toolkit';
import { createActionString } from '../createActionString';

/** @typedef {import('./types').ApiRequest} ApiRequest */

const prefix = 'app';

const GROUND_ACTION = createActionString({ prefix, actionString: 'server responded' });
const API_REQUEST = createActionString({ prefix, actionString: 'API Request' });

const fallbackReduxActionCatcher = createAction(GROUND_ACTION);
const apiRequest = createAction(
  API_REQUEST,
  /** @param {ApiRequest} payload */
  (payload) => ({ payload: { method: 'GET', onSuccess: GROUND_ACTION, onFailure: GROUND_ACTION, ...payload } }),
);

export { apiRequest, fallbackReduxActionCatcher, prefix };
