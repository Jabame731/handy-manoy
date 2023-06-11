import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Slide, toast } from 'react-toastify';
import { reset } from '../store/auth/reducer';
import { editUser } from '../store/auth/action';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();

  const { user, isSuccess, isError } = useAppSelector((state) => state.auth);

  const [editData, setEditData] = useState({
    username: user ? user.username : '',
    email: user ? user.email : '',
    first_name: user ? user.first_name : '',
    middle_name: user ? user.middle_name : '',
    last_name: user ? user.last_name : '',
    address: user ? user.address : '',
    birth_date: user ? user.birth_date : '',
    phone_number: user ? user.phone_number : '',
    telephone_number: user ? user.telephone_number : '',
  });

  const {
    username,
    email,
    first_name,
    middle_name,
    last_name,
    address,
    birth_date,
    phone_number,
    telephone_number,
  } = editData;

  const getUserId = () => {
    const urlParams = new URLSearchParams(location.search);
    const userId = urlParams.get('userId');

    return userId;
  };

  useEffect(() => {
    if (isError) {
      toast.error('something is wrong ', {
        transition: Slide,
        theme: 'colored',
      });
    }

    if (isSuccess) {
      toast.success('User is Edited Successfully');
      navigate('/profile');
    }

    dispatch(reset());
  }, [user, isSuccess, isError, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userId: string | null = getUserId();

    const userData = {
      username: username,
      email: email,
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      birth_date: birth_date,
      address: address,
      phone_number: phone_number,
      telephone_number: telephone_number,
    };
    dispatch(editUser({ userId: userId as string, userData }));
  };

  return (
    <div className='bg-primary font-poppins '>
      <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md h-screen'>
        <h2 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
          Edit Your Account Here
        </h2>

        <form>
          {/* username, password, confirm password */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Username</label>
              <input
                data-cy='edit-username'
                id='username'
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Email Address</label>
              <input
                id='email'
                type='email'
                name='email'
                disabled
                value={email}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* firstname, middlename, lastname */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3'>
            <div>
              <label className='text-dimWhite '>First Name</label>
              <input
                data-cy='edit-first_name'
                id='first_name'
                type='text'
                name='first_name'
                value={first_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Middle Name</label>
              <input
                data-cy='edit-middle_name'
                id='middle_name'
                type='text'
                name='middle_name'
                value={middle_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Last Name</label>
              <input
                data-cy='edit-last_name'
                id='last_name'
                type='text'
                name='last_name'
                value={last_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* address, birth_date */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Address</label>
              <input
                data-cy='edit-address'
                id='address'
                type='text'
                name='address'
                value={address}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
            <div>
              <label className='text-dimWhite dark:text-gray-200'>
                Birth Date
              </label>
              <input
                data-cy='edit-birth_date'
                id='birth_date'
                type='date'
                name='birth_date'
                value={birth_date}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* phone number, telephone number, image */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Phone Number</label>
              <input
                data-cy='edit-phone_number'
                id='phone_number'
                type='text'
                name='phone_number'
                value={phone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Telephone Number</label>
              <input
                data-cy='edit-telephone_number'
                id='telephone_number'
                type='text'
                name='telephone_number'
                value={telephone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* footer edit form */}
          <div className='flex justify-between font-poppins mt-10'>
            <p className='text-sm sm:text-sm text-center text-white cursor-pointer'>
              <Link to='/profile'>
                <span className='underline hover:text-dimWhite'>Go Back</span>
              </Link>
            </p>

            <button
              data-cy='submit'
              className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
              type='submit'
              onClick={handleEditBtn}
            >
              Submit
            </button>
          </div>

          <div className='flex justify-end mt-10'></div>
        </form>
      </section>
    </div>
  );
};

export default EditUser;
