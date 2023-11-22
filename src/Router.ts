import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./views/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
  ]);

  export default router