import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Makinon from './makinon';
import Form from './form';
import Config from '../config/Config.js';
//Cargar configuración
const config = new Config().getConfig();
export const backURL = config.backend.url;
export const backPort = config.backend.port;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Form />
    
  </React.StrictMode>
);

//<App />
//<Makinon />


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
