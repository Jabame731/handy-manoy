import React from 'react';
import { form } from '../assets';

const Hero = () => {
  return (
    <section className='mt-5 mb-10 flex items-center flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
      <div className='w-full lg:w-1/2 p-8 flex-wrap'>
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-8 text-customOrange flex justify-center items-center'>
          From A to Z, we've got you covered
        </h1>
        <p className='text-dimWhite text-lg mb-8 items-center flex justify-center'>
          We offer a wide range of services to help you achieve your goals.
          Whether you're looking to start a new business, grow your existing
          one, or simply need some expert advice, we're here to help.
        </p>

        <span className='cursor-pointer py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg $mt-10'>
          Book Now
        </span>
      </div>

      <div className='w-full lg:w-1/2'>
        <img
          className='hidden lg:block w-full h-[600px]'
          src={form}
          alt='hero'
        />
      </div>
    </section>
  );
};

export default Hero;
