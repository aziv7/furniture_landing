import React from 'react';

import { services } from '../data';
const Services = () => {
  return (
    <section className='bg-primary-bluish flex sm:flex-row gap-8 flex-col items-center justify-between px-28 py-10 mt-10 lg:mt-0'>
      {services.map((service) => (
        <div key={service.label} className='flex items-center gap-5'>
          <div>
            <img src={service.icon} alt={service.label} />
          </div>
          <div className='flex flex-col gap-1'>
            <h6 className='font-semibold text-2xl'>{service.label}</h6>
            <p className='text-base'>{service.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
