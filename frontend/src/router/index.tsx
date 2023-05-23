import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { UserDashboard } from '../pages/user/UserDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import BookService from '../pages/BookService';
import EditUser from '../pages/EditUser';
import UserServices from '../pages/user/UserServices';
import UsersList from '../pages/admin/UsersList';
import AdminProfile from '../pages/admin/AdminProfile';
import Dashboard from '../pages/admin/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />,
  },

  {
    path: '/admin-dashboard',
    element: <AdminDashboard />,
  },
  {
    path: '/book-service',
    element: <BookService />,
  },
  {
    path: '/user-dashboard/:userId',
    element: <EditUser />,
  },
  {
    path: '/user-services',
    element: <UserServices />,
  },
  {
    path: '/admin-dashboard/users',
    element: <UsersList />,
  },
  {
    path: '/admin-dashboard/profile',
    element: <AdminProfile />,
  },
]);
