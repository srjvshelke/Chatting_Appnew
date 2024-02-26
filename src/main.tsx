import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' ;
import {HelmetProvider} from 'react-helmet-async' ;
import { CssBaseline } from '@mui/material';
import './App.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline/> 
      {/* CssBaseline use for reset margin and padding */}
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)
