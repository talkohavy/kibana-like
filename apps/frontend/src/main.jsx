import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import App from './App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import { configureMyStore } from './store/configureStore';
import './index.css';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });
const { store, history } = configureMyStore({ preloadedState: {}, axiosInstance });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
