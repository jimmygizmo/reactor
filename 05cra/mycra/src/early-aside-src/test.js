import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './Map';


const testroot = ReactDOM.createRoot(document.getElementById('testroot'));
testroot.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>
);

