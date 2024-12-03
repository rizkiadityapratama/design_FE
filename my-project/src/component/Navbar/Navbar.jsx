import React, { useState } from 'react';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { GiGoat } from 'react-icons/gi'; // Use the goat icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-primary text-white py-4 relative z-50'> {/* Reduced py-6 to py-4 */}
      <div className='container flex flex-col items-center'>
        {/* Logo section */}
        <h1 className='text-2xl font-semibold flex items-center gap-2'>
          <GiGoat /> Composure. {/* Replaced the rocket icon with the goat icon */}
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-4 text-lg mt-4'>
          {['Home', 'Features', 'Contact Us'].map(item => ( // Removed 'Pricing'
            <li key={item}>
              <a href="#" className='px-3 py-2 hover:text-yellow-400 transition-colors duration-200'>{item}</a>
            </li>
          ))}
          <li>
            <button className='border border-white px-4 py-2 rounded-full hover:shadow-custom-inset hover:bg-secondary hover:border-transparent transition-all duration-200'>
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden mt-4'>
          <HiMiniSquares2X2 className='text-2xl' />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden flex flex-col items-center gap-4 text-lg mt-4'>
          {['Home', 'Features', 'Contact Us'].map(item => ( // Removed 'Pricing'
            <li key={item}>
              <a href="#" className='px-3 py-2 hover:text-yellow-400 transition-colors duration-200'>{item}</a>
            </li>
          ))}
          <li>
            <button className='border border-white px-4 py-2 rounded-full hover:shadow-custom-inset hover:bg-secondary hover:border-transparent transition-all duration-200'>
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
