import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='bg-primary font-poppins'>
      <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md'>
        <h2 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
          Register Your Account Here
        </h2>

        <form>
          {/* username, password, confirm password */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Username</label>
              <input
                id='username'
                type='text'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Email Address</label>
              <input
                id='emailAddress'
                type='email'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Password</label>
              <input
                id='password'
                type='password'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Password Confirmation</label>
              <input
                id='passwordConfirmation'
                type='password'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* firstname, middlename, lastname */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3'>
            <div>
              <label className='text-dimWhite '>First Name</label>
              <input
                id='first_name'
                type='text'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Middle Name</label>
              <input
                id='middle_name'
                type='email'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Last Name</label>
              <input
                id='last_name'
                type='last_name'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* address, birth_date */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Address</label>
              <input
                id='first_name'
                type='text'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
            <div>
              <label className='text-dimWhite dark:text-gray-200'>
                Birth Date
              </label>
              <input
                id='date'
                type='date'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* phone number, telephone number, image */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-dimWhite '>Phone Number</label>
              <input
                id='phone_number'
                type='text'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-dimWhite'>Telephone Number</label>
              <input
                id='telephone_number'
                type='text'
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* image */}
          <div>
            <label className='mt-10 block text-sm font-medium text-dimWhite'>
              Image
            </label>
            <div className='mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-dimWhite'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label className='relative cursor-pointer bg-primary rounded-md font-medium text-indigo-600 hover:text-indigo-500'>
                    <span className=''>Upload a file</span>
                    <input
                      id='file-upload'
                      name='file-upload'
                      type='file'
                      className='sr-only'
                    />
                  </label>
                  <p className='pl-1 text-white'>or drag and drop</p>
                </div>
                <p className='text-xs text-dimWhite'>
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* footer register form */}
          <div className='flex justify-between font-poppins mt-10'>
            <p className='text-sm sm:text-sm text-center text-white cursor-pointer'>
              <Link to='/login'>
                <span>
                  Got an account?{' '}
                  <span className='underline hover:text-dimWhite'>
                    Login Here
                  </span>{' '}
                </span>
              </Link>
            </p>

            <button className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'>
              Register
            </button>
          </div>

          <div className='flex justify-end mt-10'></div>
        </form>
      </section>
    </div>
  );
};

export default Register;
