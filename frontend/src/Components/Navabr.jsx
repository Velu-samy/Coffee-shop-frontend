import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
    }
    
  }, []);

  console.log(localStorage)
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setUsername('');
    window.location.href = '/login';
  };

  return (
    <div className="text-orange-50 font-custom">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex px-10 justify-between items-center py-5 bg-nav">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          initial={{ y: 0, opacity: 0 }}
        >
          <ul className="flex gap-7 items-center">
            <a href="/cart">
              <FaShoppingCart size={24} className="text-orange-50 icon" />
            </a>
            <FaSearch size={24} className="text-orange-50 icon" />
                {username ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Hi, {username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-col border border-black text-white px-3 py-1 rounded text-sm hover:bg-black"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/login">
                <FaUserCircle size={24} className="text-orange-50 icon" />
              </a>
            )}
          </ul>
        </motion.div>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          initial={{ y: 0, opacity: 0 }}
          className="flex items-center gap-6"
        >
          <ul className="flex text-xl gap-x-14 font-extralight navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/product">Product</a></li>
          </ul>

          <ul className="flex items-center gap-4">
            <a href="/">
              <img src={logo} className="w-10 lg:ml-10" alt="Logo" />
            </a>
        
          </ul>
        </motion.div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden px-6 py-4 flex justify-between items-center bg-nav">
        <div className="flex gap-4 items-center">
          <a href="/cart"><FaShoppingCart size={24} /></a>
          {username ? (
            <span className="text-sm">Hi, {username}</span>
          ) : (
            <a href="/login"><FaUserCircle size={24} /></a>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Slide-In */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-slate-500 text-orange-50 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-10 mt-10 text-xl font-extralight">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/product">Product</a>
          {username ? (
            <div className="mt-6">
              <p className="text-sm mb-2">Hi, {username}</p>
              <button
                onClick={handleLogout}
                className="bg-col text-white px-3 py-1 rounded text-sm hover:bg-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="mt-6 text-sm underline">Login</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;