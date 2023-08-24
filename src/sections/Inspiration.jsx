import React from 'react';
import item1 from '../assets/Mask Group.svg';
import item2 from '../assets/Mask Group (1).svg';
import item3 from '../assets/Mask Group (2).svg';
const Inspiration = () => {
  return (
    <section className='py-16 flex flex-col gap-5 items-center justify-center text-center'>
      <h5 className='font-bold text-4xl text-primary-blue'>
        Inspiration Collection
      </h5>
      <p className='font-normal text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className=' flex flex-col space-y-8 xl:flex-row items-center justify-around gap-8 py-10'>
        <img className='xl:translate-y-10 ' src={item1} alt='' />
        <img className='' src={item2} alt='' />
        <img className='xl:translate-y-10 ' src={item3} alt='' />
      </div>
    </section>
  );
};

export default Inspiration;
