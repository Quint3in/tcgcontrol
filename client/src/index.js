import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './form';
export const backURL = process.env.REACT_APP_BACK_URL;
export const backPort = process.env.REACT_APP_BACK_PORT;

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
