import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { serviceName, serviceType } from '../utilities/information';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { reset } from '../store/book-service/reducer';
import { createServiceBook } from '../store/book-service/action';

const BookService = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { isSuccess } = useAppSelector((state) => state.service);

  const [selectedServiceName, setselectedServiceName] = useState<
    { value: string; label: string } | undefined
  >(undefined);

  const [selectedServiceType, setSelectedServiceType] = useState<
    { value: string; label: string } | undefined
  >(undefined);

  const [serviceNamePrice, setServiceNamePrice] = useState<number>(0);
  const [serviceTypePrice, setServiceTypeNamePrice] = useState<number>(0);

  const [noteText, setNoteText] = useState({
    note: '',
  });

  const { note } = noteText;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(reset());
  }, [user, dispatch, navigate, isSuccess]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText({ note: e.target.value });
  };

  const handleSNameChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = e.target.value;
    const selectedServiceName = serviceName.find(
      (option) => option.value === value
    );
    setselectedServiceName(selectedServiceName);
    setServiceNamePrice(selectedServiceName ? selectedServiceName.price : 0);
  };

  const handleSTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = e.target.value;
    const selectedServiceType = serviceType.find(
      (option) => option.value === value
    );
    setSelectedServiceType(selectedServiceType);
    setServiceTypeNamePrice(
      selectedServiceType ? selectedServiceType.price : 0
    );
  };

  const s_price = serviceNamePrice + serviceTypePrice;
  const s_name = selectedServiceName?.label;
  const s_type = selectedServiceType?.label;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const serviceData = {
      s_name,
      s_type,
      s_price,
      note,
    };

    dispatch(createServiceBook(serviceData));
    navigate('/user-services');
  };

  return (
    <>
      <div className='bg-primary h-fit'>
        <Navbar />

        <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md'>
          <h2 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
            Book A Service Now
          </h2>

          <form>
            {/* Service Name */}
            <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-1'>
              <div>
                <label className='text-dimWhite font-poppins '>
                  Service Name
                </label>
                <select
                  value={selectedServiceName?.value}
                  onChange={handleSNameChange}
                  className='font-poppins mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                >
                  {serviceName.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      id='serviceName'
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/*  Service Type */}
            <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
              <div>
                <label className='font-poppins text-dimWhite'>
                  Service Type
                </label>
                <select
                  id='selectService'
                  value={selectedServiceType?.value}
                  onChange={handleSTypeChange}
                  className='font-poppins mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                >
                  {serviceType.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      id={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='font-poppins text-dimWhite'>
                  Service Price Total:
                </label>
                <p className='font-poppins mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm'>
                  ₱ {s_price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-1'>
              <div>
                <label className='text-dimWhite font-poppins '>Note</label>
                <textarea
                  name=''
                  id=''
                  data-cy='serviceNote'
                  value={note}
                  onChange={handleNoteChange}
                  cols={30}
                  rows={10}
                  className='font-poppins mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm'
                ></textarea>
              </div>
            </div>

            {/* footer service form */}
            <div className='flex justify-between font-poppins mt-10'>
              <button
                className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
                type='submit'
                data-cy='submit'
                onClick={handleSubmit}
              >
                Book Now
              </button>
            </div>

            <div className='flex justify-end mt-10'></div>
          </form>
        </section>
      </div>
    </>
  );
};

export default BookService;
