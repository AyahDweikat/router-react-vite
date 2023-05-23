import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Contact, {loader as contactLoader} from './routes/Contact.jsx';
import Root from './routes/root.jsx';
import { action as rootAction, loader as rootLoader } from './routes/utils.js';
import EditContact, { action as editAction} from './routes/Edit.jsx';
import {action as destroyAction } from './routes/Destroy.jsx'
import Index from './routes/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index:true, element:<Index />},
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
        errorElement:<div>Oops! There was an error.</div>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
