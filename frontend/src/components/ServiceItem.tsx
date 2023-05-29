import React from 'react';
import { colorFunction, trimStringToLength } from '../helper';
import { ServiceProps } from '../utilities/enums';


const ServiceItem = ({ service }: ServiceProps) => {
  return (
    <>
      <tr className=' border-gray-200 hover:bg-gray-800 h-f9t'>
        <div className='flex justify-center items-center'>
          <span className='mt-[15px]'> {service.s_name}</span>
        </div>

        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {service.s_type}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {service.note === '' ? (
                  <span className='text-rose-500'>
                    No Note Provided By The User
                  </span>
                ) : (
                  trimStringToLength(service.note, 20)
                )}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {`₱ ${service.s_price}`}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div
              className={`flex justify-center items-center p-1 rounded-lg  ${colorFunction(
                service.status
              )}`}
            >
              <span>{service.status}</span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div
              className='flex justify-center items-center p-1 rounded-lg'
            >
              <span>Pay Now</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ServiceItem;
