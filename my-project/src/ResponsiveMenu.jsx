import React from 'react';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'top-0 opacity-100' : '-top-full opacity-0'
      } h-screen w-full bg-white/40 backdrop-blur-md fixed top-0 z-40 transition-all duration-300 ease-in-out`}
    >
      <nav className="my-10 text-2xl font-semibold text-center">
        <ul className="space-y-10">
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-200">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-200">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-200">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
