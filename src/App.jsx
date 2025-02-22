import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import authLoader from "./loaders/unit/authLoader";
import Logout from "./pages/Logout";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>
  },
  {
    path: "/logout",
    element: <Logout />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
  }
});

const App = () => {

  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />;
}

export default App;