import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseStateBasic from './UseStateBasic';
import UseStateObject from './UseStateObject';
// import UseEffectBasic from './UseEffectBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateBasic /> */}
    <UseStateObject />
    {/* <UseEffectBasic /> */}
  </React.StrictMode>
);

