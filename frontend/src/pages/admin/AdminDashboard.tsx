import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import NotAvailable from '../../components/NotAvailable';
import Sidebar from '../../components/Sidebar';
import Dashboard from './Dashboard';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);
  const getCurrentRole = user?.user_role;
  if (getCurrentRole !== 'admin') {
    return <NotAvailable />;
  }

  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
};

export default AdminDashboard;
