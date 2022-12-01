import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseStateBasic from './UseStateBasic';
// import UseStateObject from './UseStateObject';
// import UseStateMulti from './UseStateMulti';
// import UseEffectBasic from './UseEffectBasic';
import UseEffectRestBasic from './UseEffectRestBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<UseStateBasic />*/}
    {/*<UseStateObject />*/}
    {/*<UseStateMulti />*/}
    {/*<UseEffectBasic />*/}
    <UseEffectRestBasic />
  </React.StrictMode>
);

