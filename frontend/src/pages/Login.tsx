import React from 'react';
import image from '../assets/signin-image.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='font-poppins flex flex-row bg-primary'>
      <div className='basis-full sm:basis-3/4'>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-lg mx-auto'>
            <form className='p-8 mt-6 mb-0 space-y-4 '>
              <h1 className='text-white text-[30px] font-bold mt-5 mb-10 flex justify-center'>
                Signin to Your Account
              </h1>
              <div>
                <label className='text-dimWhite text-sm font-medium'>
                  Email
                </label>
                <div className='relative mt-1'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm  '
                    placeholder='Enter email'
                  />
                </div>
              </div>
              <div>
                <label className='text-dimWhite text-sm font-medium'>
                  Password
                </label>
                <div className='relative mt-1'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm'
                    placeholder='Enter password'
                  />
                </div>
              </div>
              <Link to='/'>
                <button
                  type='submit'
                  className=' font-poppins block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-5 '
                >
                  Sign in
                </button>
              </Link>
              <div className='flex justify-between font-poppins'>
                <p className='text-xs sm:text-sm text-center text-gray-500 cursor-pointer'>
                  <span className='undeline'>Forgot password?</span>
                </p>
                <p className='text-xs sm:text-sm text-center text-gray-500'>
                  No account?
                  <Link to='/register'>
                    <span className='hover:text-dimWhite underline cursor'>
                      Register Here
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='basis-0 sm:basis-1/2'>
        <img
          src={image}
          alt='image_signin'
          className='hidden lg:block h-screen w-screen sm:hidden'
        />
      </div>
    </div>
  );
};

export default Login;
