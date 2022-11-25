// https://reactrouter.com/en/main/start/tutorial
// UPDATE: This tut has an error. main.jsx did not work as an entrypoint but
// naming it to index.jsx did work. (The original index.js had to be moved aside.)

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
// import "./index.css";
import './routerex/contacts.css';  // For react-router experiment
import Root from './routes/root'
import ErrorPage from './routes/error-page'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

