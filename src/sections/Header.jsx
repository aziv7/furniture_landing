import React from 'react';
import { links } from '../data';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-6'>
      <nav>
        <a
          className='no-underline text-primary-blue font-bold text-2xl'
          href='/'
        >
          Furniture
        </a>
      </nav>
      <nav>
        <ul className='flex justify-around items-center gap-10 '>
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
    </header>
  );
};

export default Header;
