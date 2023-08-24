import React from 'react';
import bg from '../assets/bg.svg';
import Button from '../components/Button';
const Hero = () => {
  return (
    <section className=''>
      <div className='relative '>
        <img src={bg} alt='background image' />

        <div
          className='sm:w-[643px] w-[450px]  rounded-xl 
        bg-secondary-blue flex flex-col gap-5 
        sm:px-8 sm:py-8 absolute
        left-6 sm:left-auto
        p-4 
         lg:right-10 right-[10%] -bottom-96 
         lg:bottom-auto lg:top-[24%] 
         hover:border-primary-blue transition-all
          duration-200 ease-in-out border-2 border-transparent'
        >
          <h5 className='font-semibold'>New Arrival</h5>
          <h1 className='text-5xl sm:text-6xl tracking-wide  font-bold text-primary-blue'>
            Discover Our <br /> New Collection
          </h1>
          <p className='max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button label={'Buy Now'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
