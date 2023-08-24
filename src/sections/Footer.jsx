import React from 'react';
import ig1 from '../assets/IG-1.svg';
import ig2 from '../assets/IG-2.svg';
import ig3 from '../assets/IG-3.svg';
import ig4 from '../assets/IG-4.svg';
const Footer = () => {
  return (
    <section className='flex flex-col gap-10 xl:flex-row items-center justify-around bg-primary-blue py-16 text-white'>
      <div className='flex flex-col gap-5'>
        <h4 className='font-bold text-2xl'>Beauty Care</h4>
        <p className='text-base max-w-sm'>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h4 className='font-bold text-2xl'> Follow Us</h4>
      </div>
      <div className='flex flex-col items-center gap-5 '>
        <h4 className='font-bold text-2xl'>Instagram Shop</h4>
        <div className='grid grid-cols-1 md:grid-cols-4  gap-5'>
          <img src={ig1} alt='' />
          <img src={ig2} alt='' />
          <img src={ig3} alt='' />
          <img src={ig4} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
