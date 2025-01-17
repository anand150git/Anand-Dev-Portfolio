import React, { useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const NavItems = () => {
    return (
      <ul className='nav-ul'>
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className='nav-li'>
            <a href={href} onClick={() => { }} className='nav-li_a'>
              {name}
            </a>
          </li>
        ))}
      </ul>
    )
  }
  const toggleMenu = () => setIsOpen((pervIsOpen) => !pervIsOpen)

  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/70'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href="/" className='text-neutral-400 font-bold text-xl flex gap-2 justify-center items-center'>
          <img src="icon.png" alt="logo" className='rounded-full w-10 h-10' />
            <span className=' hover:text-white transition-colors'>Anand</span>
          </a>

          <button
            onClick={toggleMenu}
            className='text-neutral-500 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className='w-6 h-6'
            />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar