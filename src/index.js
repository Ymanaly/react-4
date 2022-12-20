import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GAME from './tic-tak';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GAME/>
  </React.StrictMode>
);


