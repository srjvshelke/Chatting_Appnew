import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* CssBaseline use for reset margin and padding */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
