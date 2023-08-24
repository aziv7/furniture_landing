import React from 'react';
import { ranges } from '../data';

const BrowseRange = () => {
  return (
    <section className='py-16 flex flex-col gap-5 items-center justify-center text-center  border-b'>
      <h5 className='font-bold text-4xl text-primary-blue'>Browse The Range</h5>
      <p className='font-normal text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className=' flex flex-col  xl:flex-row items-center justify-around gap-8 py-10'>
        {ranges.map((range) => (
          <div key={range.label} className='flex flex-col gap-5'>
            <img src={range.picture} alt={range.label} />
            <h5 className='text-2xl font-semibold'>{range.label}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRange;
