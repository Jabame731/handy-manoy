import React from 'react';
import { services } from '../constant';

const Services = () => {
  return (
    <div className='p-8 mt-8'>
      <h2 className='text-3xl font-bold mb-8 flex justify-center items-center text-dimWhite'>
        Services Offered
      </h2>
      <div className='flex flex-wrap justify-center'>
        {services.map((item, index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/3 p-4'>
            <div className='max-w-sm mx-auto  rounded-md shadow-md overflow-hidden'>
              <div className='flex justify-center'>
                <img
                  className='object-cover object-center h-48 w-full'
                  src={item.imageSrc}
                  alt={item.title}
                />
              </div>
              <div className='p-4'>
                <h3 className='font-poppins font-semibold text-white text=[18px] leading-[23px] mb-1'>
                  {item.title}
                </h3>
                <p className='font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px]'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
