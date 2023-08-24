import React, { useState } from 'react';
import { links } from '../data';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className='flex  items-center 
    justify-center flex-col  rounded-sm  
      '
    >
      <div
        className='w-full flex  items-center 
      justify-between px-4 py-6'
      >
        <nav className='mx-0 sm:mx-5 md:mx-16'>
          <a
            className='no-underline text-primary-blue font-bold text-2xl'
            href='/'
          >
            Furniture
          </a>
        </nav>
        <nav
          className='hidden sm:inline-block
         mx-0 sm:mx-5 md:mx-8 '
        >
          <ul
            className='flex sm:flex-row 
          flex-col justify-around items-center gap-10 '
          >
            {links.map((link) => (
              <a
                className='no-underline font-semibold text-sm'
                href={link.path}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
            <li></li>
          </ul>
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className='sm:hidden inline-block'
        >
          <RxHamburgerMenu
            className={`transition-all duration-200 ease-in-out  ${
              open === true ? 'opacity-0 hidden' : 'opacity-100  '
            } `}
            size={25}
          />
          <IoClose
            className={`transition-all duration-200 ease-in-out hover:scale-125 text-red-400  ${
              open === false ? 'opacity-0 hidden' : 'opacity-100 '
            } `}
            size={25}
          />
        </button>
      </div>

      <div className={`${open == true ? 'inline-block ' : 'hidden'}`}>
        <nav className='sm:hidden inline-block '>
          <ul className='flex  flex-col justify-around items-center gap-10 '>
            {links.map((link) => (
              <a
                className='no-underline font-semibold text-sm'
                href={link.path}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
