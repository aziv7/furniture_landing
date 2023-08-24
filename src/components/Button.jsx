import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      className='text-white hover:bg-primary-blue/80 transition-all duration-200 
    ease-in-out  tracking-normal leading-6
     rounded-full max-w-[12rem] capitalize 
     font-bold text-base bg-primary-blue
      px-2 py-4'
    >
      {label}
    </button>
  );
};

export default Button;
