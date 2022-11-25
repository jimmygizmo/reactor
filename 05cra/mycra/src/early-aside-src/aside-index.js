import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// import './index.css';
import './routerex/contacts.css';  // For react-router experiment


// PLAN: Follow react-router quick start, which is a bit different from the CRA
// I am starting with. But I will adapt all code. They use Vite and some other stuff.
// I want to just add minimal React Router to this standard CRA format. Their
// entrypoint is main.jsx. I want to try a slightly different approach just to try it.
// https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

