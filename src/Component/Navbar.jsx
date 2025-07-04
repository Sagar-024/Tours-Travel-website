import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../Asset/logo.png';
import Contact from '../Component/Contact.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full left-1/2 -translate-x-1/2 z-50 text-white flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-black shadow-md border-lime-500 border-b-4'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold">
        <img className="w-44 rounded-xl" src={logo} alt="Logo" />
      </NavLink>

<ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `p-3 relative transition-all duration-300 ease-in-out 
      hover:opacity-50 hover:rounded-full hover:text-black hover:bg-lime-500
        ${isActive ? 'bg-lime-400 rounded-full text-black ' : 'text-white'}`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/packages"
      className={({ isActive }) =>
        `p-3 relative transition-all duration-300 ease-in-out 
      hover:opacity-50 hover:rounded-full hover:text-black hover:bg-lime-500
        ${isActive ? 'bg-lime-400 rounded-full text-black ' : 'text-white'}`
      }
    >
      Packages
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/gallery"
       className={({ isActive }) =>
        `p-3 relative transition-all duration-300 ease-in-out 
      hover:opacity-50 hover:rounded-full hover:text-black hover:bg-lime-500
        ${isActive ? 'bg-lime-400 rounded-full text-black ' : 'text-white'}`
      }
    >
      Gallery
    </NavLink>
  </li>
</ul>

<div className="hidden md:flex">
  <NavLink
    to="/contact"
    className={({ isActive }) =>
        `p-3 relative transition-all duration-300 ease-in-out 
      hover:opacity-50 hover:rounded-full hover:text-black hover:bg-lime-500
        ${isActive ? 'bg-lime-400 rounded-full text-black ' : 'text-white'}`
      }
  >
    Contact Us
  </NavLink>
</div>

      {/* Hamburger Button */}
      <div className="md:hidden z-50 ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none bg-lime-500 h-10 p-2 rounded"
        >
          <div className="w-7 h-1 bg-black mb-1 rounded"></div>
          <div className="w-7 h-1 bg-black mb-1 rounded"></div>
          <div className="w-7 h-1 bg-black rounded"></div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[94%] bg-black rounded-2xl border-2 border-lime-500 shadow-xl transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 scale-100 translate-y-1'
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
        style={{ fontFamily: 'Lobster, cursive', minHeight: '48vh' }}
      >
        <ul className="flex flex-col items-center justify-center py-6 px-4 gap-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                ` hover:text-lime-400 text-3xl  transition-all ${
                  isActive ? 'text-lime-500' : 'text-white'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className='mt-4'>
            <NavLink
              to="/packages"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-3xl mt-2 hover:text-lime-400 transition-all ${
                  isActive ? 'text-lime-500' : 'text-white'
                }`
              }
            >
              Packages
            </NavLink>
          </li>
          <li className='mt-4'>
            <NavLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-6xl  hover:text-lime-400 transition-all ${
                  isActive ? 'text-lime-500' : 'text-white'
                }`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className='mt-6'>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4  bg-gradient-to-r from-orange-400 to-red-400 px-6 py-2 text-white rounded-full shadow hover:scale-105 transition-all text-4xl"
            >
              Contact Us
            </NavLink>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
