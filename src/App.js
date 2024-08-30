import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.css";
import Chats from "./pages/Chats";
import Prologue from "./pages/Prologue";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Chats />,
        },
        {
          path: "/prologue",
          element: <Prologue />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
