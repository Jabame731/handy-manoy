import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';
import Navbar from '../../components/Navbar';

export const UserDashboard = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    if (!user) {
      toast.error('Opps Error Occurred', {
        transition: Slide,
        theme: 'colored',
      });
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <>
      <div className='bg-primary '>
        <Navbar />
        <div className='mt-4 max-w-7xl mx-auto font-poppins rounded-md shadow-md overflow-hidden h-fit'>
          <div className='px-4 py-5 sm:px-6 '>
            <h1 className=' text-lg font-medium leading-6 text-white'>
              User Profile
            </h1>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              Personal details and contact information.
            </p>
          </div>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col items-center'>
              <img
                className='h-32 w-32 rounded-full object-cover'
                src='user_image.jpg'
                alt='UserImage'
              />
              <h2 className='mt-4 font-medium text-lg text-white'>
                {}
                {user?.first_name}
                {user?.middle_name}
                {user?.last_name}
              </h2>
              <p className='text-sm text-dimWhite'>{user?.username}</p>
            </div>
            <div className='mt-5'>
              <dl>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-dimWhite'>Email</dt>
                  <dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2'>
                    {user?.email}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-dimWhite'>Address</dt>
                  <dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2'>
                    {user?.address}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-dimWhite'>
                    Phone Number
                  </dt>
                  <dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2'>
                    {user?.phone_number}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-dimWhite'>
                    Telephone Number
                  </dt>
                  <dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2'>
                    {user?.telephone_number}
                  </dd>
                </div>
              </dl>
            </div>
            <div className='flex justify-between  mt-5'>
              <Link to={`edit-profile/?userId=${user?.id}`}>
                <button
                  className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
                  type='submit'
                >
                  Edit
                </button>
              </Link>
              <Link to={`/user-services`}>
                <button
                  className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
                  type='submit'
                >
                  View Your Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
