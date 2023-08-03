import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EditForm from "./Components/EditForm";
import FormBuilder from "./Components/FormBuilder";
import ShowForms from "./Components/ShowForms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <EditForm />
  },
  {
    path: "/formbuilder",
    element: <FormBuilder />
  },
  {
    path: "/showforms",
    element: <ShowForms />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
