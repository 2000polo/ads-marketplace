import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router-dom';
import router from './config/routes.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)
