// https://reactrouter.com/en/main/start/tutorial
// NOTE: This tut has a discrepancy; main.jsx did not work as an entrypoint as in the tut, but
// naming it to index.jsx did work. (The original index.js had to be moved aside.)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root.jsx';
import './routerex/contacts.css';
import ErrorPage from './routes/error-page.jsx';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact.jsx';
import EditContact, { action as editAction } from './routes/edit.jsx';  // no loader since it re-uses contactLoader
import { action as destroyAction } from './routes/destroy.jsx';
import Index from './routes/index.jsx';
import Map from './fccamp/Map.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Root />}
        loader={rootLoader}
        action={rootAction}
        errorElement={<ErrorPage />}
      >
        <Route
          errorElement={<ErrorPage />}
        >
          <Route
            index="true"
            element={<Index />}
          />
          <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={contactLoader}
            action={editAction}
          />
          <Route
            path="contacts/:contactId/destroy"
            action={destroyAction}
            errorElement={<div>Oops! There was an error deleting the contact.</div>}
          />
        </Route>
      </Route>
      <Route
        path="/map"
        element={<Map />}
      />
    </>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);


// ROUTER JS OBJECT CONFIG METHOD. This is the exact same configuration as above, done with JSX.
// This requires 2 less imports. The above JSX method requires imports of: createRoutesFromElements and Route.
// NOTE: We have two Routes at the top level here, so in JSX we need to wrap them with <></> in the typical manner.
// const router2 = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     loader: rootLoader,
//     action: rootAction,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error deleting the contact.</div>,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/map',
//     element: <Map />,
//   },
// ]);

