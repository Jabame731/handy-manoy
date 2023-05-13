import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';

export const UserDashboard = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.error('Opps Error Occurred', {
        transition: Slide,
        theme: 'colored',
      });
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>User Information</h1>

      <p>{user?.image}</p>
      <p>{user?.first_name}</p>
      <p>{user?.middle_name}</p>
      <p>{user?.last_name}</p>
      <p>{user?.address}</p>
      <p>{user?.phone_number}</p>
      <p>{user?.telephone_number}</p>

      <button>edit</button>
      <button></button>
    </div>
  );
};
