import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../App'
import { Login } from "../pages/login/login";
import { CreateAccount } from "../pages/sign-up/sign-up";
import { Jobs } from "../pages/jobs/job";
import { Dashboard } from "../pages/home/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "sign-up",
    element: <CreateAccount/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },

  {
    path: "jobs",
    element: <Jobs/>,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );