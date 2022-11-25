// https://reactrouter.com/en/main/start/tutorial
// NOTE: This tut has a dsicrepancy; main.jsx did not work as an entrypoint as in the tut, but
// naming it to index.jsx did work. (The original index.js had to be moved aside.)

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
// import './index.css';
import './routerex/contacts.css';  // For react-router experiment
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Map from './fccamp/Map';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/map',
    element: <Map />,
    // errorElement: <ErrorPage />,
  },
]);
// TODO: See if it is possible for errorElement to be defined on the root path alone?
//   If it is simply a 404, then it has a global context and should only be defined once, ideally.
//   NOTE: The ErrorPage component show one of two possible error messages so in fact, it is custom.
//     This further supports that only one is needed.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

