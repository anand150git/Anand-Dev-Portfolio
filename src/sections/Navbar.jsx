import React, { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <ul className="flex flex-col sm:flex-row sm:items-center gap-5">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="text-neutral-400 hover:text-white transition-colors">
          <a href={href} onClick={() => setIsOpen(false)} className="text-lg">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="text-white fixed top-0 left-0 right-0 z-50 bg-black/70">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex justify-between items-center py-3 px-5 sm:px-10">
          {/* Logo */}
          <a href="/" className="text-neutral-400 font-bold text-xl flex gap-3 items-center">
            <img src="icon.png" alt="logo" className="rounded-full w-12 h-12" />
            <span className="hover:text-white transition-colors">Anand</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-neutral-500 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`sm:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col items-start bg-black p-5 border-t border-neutral-700">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
