import React from 'react';
import ReactDOM from 'react-dom/client';

function Comp() {
  return ( <h1> As usual we can call the function using component call</h1>);
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<Comp/>);

