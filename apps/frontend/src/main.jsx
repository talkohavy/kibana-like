import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import './index.css';
import { configureMyStore } from './store/configureStore';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });
const store = configureMyStore({ preloadedState: {}, axiosInstance });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
