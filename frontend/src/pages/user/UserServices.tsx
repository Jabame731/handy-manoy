import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { getServicesByUser } from '../../store/book-service/action';
import { reset } from '../../store/auth/reducer';
import Loading from '../../components/Loading';
import ServiceItem from '../../components/ServiceItem';

const UserServices = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  console.log(user?.token);

  const { services, isLoading, isError } = useAppSelector(
    (state) => state.service
  );

  useEffect(() => {
    if (isError) {
      console.log('server error');
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getServicesByUser());

    dispatch(reset());
  }, [user, navigate, isError, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className='bg-primary'>
        <Navbar />

        <div className='container mx-auto my-10 font-poppins h-fit'>
          <div className='min-w-full bg-primary border-gray-300 '>
            <div className='bg-primary shadow-md rounded my-6'>
              {services.length > 0 ? (
                <table className='w-full table-auto'>
                  <thead>
                    <tr className='bg-gray-700 text-dimWhite uppercase text-sm leading-normal'>
                      <th className='py-3 px-6 text-center'>Service Name</th>
                      <th className='py-3 px-6 text-center'>Service Type</th>
                      <th className='py-3 px-6 text-center'>Service Note</th>
                      <th className='py-3 px-6 text-center'>Total Price</th>
                      <th className='py-3 px-6 text-center'>Status</th>
                      <th className='py-3 px-6 text-center'>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='text-white text-sm font-light'>
                    {services.map((service) => (
                      <ServiceItem key={service.id} service={service} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h3 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
                  You Have No Service Added
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserServices;
