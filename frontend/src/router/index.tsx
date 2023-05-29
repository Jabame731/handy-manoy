import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { UserDashboard } from "../pages/UsersDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import BookService from "../pages/BookService";
import EditUser from "../pages/EditUser";
import UserServices from "../pages/user/UserServices";
import UsersList from "../pages/admin/UsersList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <UserDashboard />,
  },

  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/book-service",
    element: <BookService />,
  },
  {
    path: "/profile/:userId",
    element: <EditUser />,
  },
  {
    path: "/user-services",
    element: <UserServices />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
]);
