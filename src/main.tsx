
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "./Login";
import App from "./App";
import "./styles.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AuthenticatedRoute />,
      children: [
        {
          path: "/",
          element: <App />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/auth/callback",
      element: <AuthCallback />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);