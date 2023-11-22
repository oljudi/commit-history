import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
        path: "/details",
        Component: Details,
      },
  ]);

  export default router