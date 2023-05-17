import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HamburguerStore } from './context/hamburguerContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HamburguerStore>
      <App />
    </HamburguerStore>
  </React.StrictMode>
);