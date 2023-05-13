import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/auth/action';
import { reset } from '../store/auth/reducer';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  console.log(user);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=''>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='bg-gray-900 text-white p-2 rounded-md'
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 6H20M4 12H20M4 18H20'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`${isOpen ? 'hidden' : 'infline-flex'} `}
                />
                <path
                  d='M6 18L18 6M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`${!isOpen ? 'hidden' : 'inline-flex'}`}
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='text-white font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3   block lg:hidden h-8 w-auto'>
                HandyManoy.
              </span>
              <span className='text-white font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 hidden lg:block h-8 w-auto'>
                HandyManoy.
              </span>
            </div>
            <div className='font-poppins hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <span className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Home
                </span>
                <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  About
                </span>
                <span className='text-center flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Services
                </span>
                <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Contact Us
                </span>
                {user ? (
                  <>
                    <Link to='/book-service'>
                      <span className='flex text-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                        Book Service
                      </span>
                    </Link>
                    <Link
                      to={`${
                        user.user_role === 'user'
                          ? '/user-dashboard'
                          : '/admin-dashboard'
                      }`}
                    >
                      <span className='text-center flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Welcome {user.first_name}
                      </span>
                    </Link>
                    <button
                      onClick={onLogout}
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      <FiLogOut />
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to='/login'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Login
                    </Link>
                    <Link
                      to='/register'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='sm:hidden'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 font-poppins'>
              <span className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
                Home
              </span>

              <span className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                About
              </span>

              <span className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Services
              </span>
              <span className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Contact Us
              </span>

              {user ? (
                <>
                  {' '}
                  <span className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                    Book Service
                  </span>
                  <Link
                    to={`${
                      user.user_role === 'user'
                        ? '/user-dashboard'
                        : '/admin-dashboard'
                    }`}
                  >
                    <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                      Welcome {user.first_name}
                    </span>
                  </Link>
                  <button
                    onClick={onLogout}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <FiLogOut />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to='/login'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Login
                  </Link>
                  <Link
                    to='/register'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
