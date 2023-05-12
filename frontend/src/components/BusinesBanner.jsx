import React from 'react';
import { features } from '../utilities/information';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text=[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text=[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
);

const BusinessBanner = () => {
  return (
    <section
      id='features'
      className='w-full p-8  flex md:flex-row flex-col   sm:px-16 px-6 '
    >
      <div className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          Your One-Stop Shop, <br className='sm:block hidden' /> for All Your
          Handyman Needs!
        </h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
          At HandyManoy, we pride ourselves on offering a comprehensive range of
          services to help you with all your home improvement and repair needs.
          From plumbing and electrical work to painting and carpentry, our team
          of skilled professionals is here to tackle any project you have in
          mind.
        </p>
        b
        <button
          type='button'
          className='py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg $mt-10'
        >
          Get Started
        </button>
      </div>
      <div className=' flex-1 justify-center items-center  md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default BusinessBanner;
