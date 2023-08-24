import React from 'react';
import { works } from '../data';

const HowItWorks = () => {
  return (
    <section className='py-16 flex flex-col gap-5 items-center justify-center text-center'>
      <h5 className='font-bold text-4xl text-primary-blue'>How It Works</h5>
      <p className='font-normal text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className=' flex flex-col space-y-8 xl:flex-row items-center justify-around gap-8 py-10'>
        {works.map((work) => (
          <div key={work.label} className='flex flex-col gap-4'>
            <img src={work.picture} alt={work.label} />
            <h5 className='text-2xl font-semibold'>{work.label}</h5>
            <p>{work.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
