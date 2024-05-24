import React, { useState } from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <nav className="p-4 text-black relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SwitchFur</div>
        <div className="hidden md:flex space-x-6">
          <Link to={""} className="hover:text-[#B98E2F]">Home</Link>
          <Link to={""} className="hover:text-[#B98E2F]">Shop</Link>
          <Link to={""} className="hover:text-[#B98E2F]">About</Link>
          <Link to={""} className="hover:text-[#B98E2F]">Contact</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <FaUser className="hover:text-[#B98E2F] cursor-pointer" />
          <FaSearch className="hover:text-[#B98E2F] cursor-pointer" onClick={toggleSearch} />
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md p-1 text-black"
            />
          )}
          <FaShoppingCart className="hover:text-[#B98E2F] cursor-pointer" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
      {navOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleNav}></div>
          <div className="fixed inset-y-0 right-0 bg-white w-64 p-4 z-50 transition-transform transform translate-x-0">
            <Link to={""} className="block p-2 hover:text-[#B98E2F]">Home</Link>
            <Link to={""} className="block p-2 hover:text-[#B98E2F]">Shop</Link>
            <Link to={""} className="block p-2 hover:text-[#B98E2F]">About</Link>
            <Link to={""} className="block p-2 hover:text-[#B98E2F]">Contact</Link>
            <div className="flex space-x-4 p-2">
              <FaUser className="hover:text-[#B98E2F] cursor-pointer" />
              <FaSearch className="hover:text-[#B98E2F] cursor-pointer" onClick={toggleSearch} />
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-md p-1 text-black"
                />
              )}
              <FaShoppingCart className="hover:text-[#B98E2F] cursor-pointer" />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
