import React from 'react';
import Button from '../components/Button';
import info from '../assets/info.svg';

const LearnMore = () => {
  return (
    <section className='bg-primary-bluish flex flex-col gap-7 lg:flex-row items-center justify-around py-16 '>
      <div className='felx flex-col space-y-5 '>
        <h5 className='font-bold text-3xl '>Beautify Your Space</h5>
        <p className='max-w-md text-slate-500'>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <Button label={'Learn More'} />
      </div>
      <div className='relative '>
        <img className='relative z-20' src={info} alt='' />
        <div className='bg-[#09513B] absolute rounded-full w-96 h-96 left-40 top-[25%]'></div>
      </div>
    </section>
  );
};

export default LearnMore;
