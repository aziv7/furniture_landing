import React from 'react';
import Input from '../components/Input';

const Contact = () => {
  return (
    <section
      className='bg-primary-bluish flex flex-col  py-16
    gap-5
    items-center justify-center text-center'
    >
      <h4 className='font-bold text-3xl text-primary-blue'>
        Join Our Mailing List
      </h4>
      <p className=' text-xl font-normal text-slate-500 max-w-lg'>
        Sign up to receive inspiration, product updates, and special offers from
        our team.
      </p>
      <Input />
    </section>
  );
};

export default Contact;
