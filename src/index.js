import React from 'react';
import ReactDOM from 'react-dom/client';

import './layer-4-style/index.css';
import AppIndex from './layer-3-app/app_index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppIndex />
  </React.StrictMode>
);