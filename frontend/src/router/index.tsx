import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { UserDashboard } from '../pages/user/UserDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import BookService from '../pages/BookService';

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
]);
