import React, { useState } from 'react';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Contact Us'];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="bg-gray-100 w-full h-16 flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="text-lg font-bold">
        <img src="" alt="Logo" />
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex justify-center flex-1 space-x-8">
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Hamburger Menu Toggle */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <IoCloseOutline size={30} /> : <IoReorderThreeOutline size={30} />}
      </div>

      {/* Overlay and Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-200 w-64 shadow-lg z-20 flex flex-col items-start pt-16 px-6 space-y-4 transition-transform duration-[600ms] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
          
        }`}
      >
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
            onClick={closeMenu}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Overlay for closing the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
