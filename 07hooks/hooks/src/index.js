import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import UseStateBasic from './UseStateBasic';
// import UseEffectBasic from './UseEffectBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UseStateBasic />
    {/* <UseEffectBasic /> */}
  </React.StrictMode>
);

