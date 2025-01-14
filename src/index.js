import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateContext from "./context/statecontext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StateContext>
    <App />
  </StateContext>
   
  </React.StrictMode>
);


