import { createMiddleware } from '../createMiddleware';
import { apiRequest, prefix } from './actions';

function makeAxiosConfigSerializable(config) {
  const newConfig = { ...config };
  newConfig.env = null; // <--- non-serializable!
  newConfig.headers = { ...newConfig.headers }; // <--- non-serializable!
  newConfig.transformRequest = null; // <--- non-serializable!
  newConfig.transformResponse = null; // <--- non-serializable!
  newConfig.validateStatus = null; // <--- non-serializable!

  return newConfig;
}

const runOnSuccess =
  ({ dispatch, onSuccess, onFailure }) =>
  (response) => {
    const { data: axiosData, config } = response;
    const { error, data } = axiosData;

    const serializedConfig = makeAxiosConfigSerializable(config);

    if (error) return dispatch({ type: onFailure, payload: { error } });

    return dispatch({ type: onSuccess, payload: data, config: serializedConfig });
  };

const runOnError =
  ({ dispatch, onFailure }) =>
  (error) => {
    console.error(error.message);
    const { response } = error;
    const errorMessage = response?.data;
    // My custom error returned:
    if (errorMessage) return dispatch({ type: onFailure, payload: { error: errorMessage } });

    // Some other error returned:
    return dispatch({ type: onFailure, payload: response });
  };

/** @param {{ axiosInstance: import('axios').AxiosInstance }} props */
const fetchApiMiddleware = ({ axiosInstance }) =>
  createMiddleware({
    isNextFirst: false,
    uniquePrefix: prefix,
    handleActionLogic: ({ action, dispatch }) => {
      if (apiRequest.match(action)) {
        const { method, URL, body, config, onSuccess, onFailure } = action.payload;

        axiosInstance({ method, url: URL, ...config, data: body })
          .then(runOnSuccess({ dispatch, onSuccess, onFailure }))
          .catch(runOnError({ dispatch, onFailure }));
      }
    },
  });

export { fetchApiMiddleware };
