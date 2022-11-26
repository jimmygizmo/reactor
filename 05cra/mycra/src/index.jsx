// https://reactrouter.com/en/main/start/tutorial
// NOTE: This tut has a discrepancy; main.jsx did not work as an entrypoint as in the tut, but
// naming it to index.jsx did work. (The original index.js had to be moved aside.)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root.jsx';
import './routerex/contacts.css';
import ErrorPage from './routes/error-page.jsx';
import Contact, { loader as contactLoader } from './routes/contact.jsx';
import Map from './fccamp/Map.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
  {
    path: '/map',
    element: <Map />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

