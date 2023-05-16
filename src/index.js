import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'components/GlobalStyle';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
