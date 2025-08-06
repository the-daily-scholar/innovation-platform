import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { colors } from '../assets/constants/colors';

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsmenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="bg-warmGray border-b border-gray-400 top-0 w-full shadow-md z-10"
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/" className="hover:text-brandSecondary">
              MyLogo
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className="md:hidden">
            <FaBars className="h-6 w-6" />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 mx-auto">
            <li>
              <Link to="/" className="text-deepGray hover:text-brandSecondary transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-deepGray hover:text-brandSecondary transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-deepGray hover:text-brandSecondary transition duration-300">Projects</Link>
            </li>
            <li>
              <Link to="/blogs" className="text-deepGray hover:text-brandSecondary transition duration-300">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="text-deepGray hover:text-brandSecondary transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-warmGray z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-lg`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button onClick={closeMenu}>
              <FaTimes className="h-6 w-6 text-gray-600 hover:text-pureBlack" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/" className="text-deepGray hover:text-brandSecondary text-lg" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-deepGray hover:text-brandSecondary text-lg" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-deepGray hover:text-brandSecondary text-lg" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/blogs" className="text-deepGray hover:text-brandSecondary text-lg" onClick={closeMenu}>Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="text-deepGray hover:text-brandSecondary text-lg" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
