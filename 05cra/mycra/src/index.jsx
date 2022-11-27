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
// Normally EditContact would import its own editLoader, but for this demo, contactLoader is re-used.
import EditContact, { action as editAction } from './routes/edit.jsx';
import { action as destroyAction } from './routes/destroy.jsx';
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
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
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
    <RouterProvider router={ router } />
  </React.StrictMode>
);

