import React from 'react';

const Input = () => {
  return (
    <div className='border flex justify-between  rounded-sm border-primary-blue  bg-white pl-5'>
      <input
        type='email'
        className='py-4 outline-none w-[320px]'
        placeholder='example@gmail.com'
      />
      <button
        className='p-4 bg-primary-blue  rounded-sm
      text-white font-bold 
      text-base'
      >
        submit
      </button>
    </div>
  );
};

export default Input;
