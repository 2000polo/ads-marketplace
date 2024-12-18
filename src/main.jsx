import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router-dom';
import store from './app/store.js';
import { Provider } from 'react-redux';
import router from './config/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Theme>
  </StrictMode>,
)
