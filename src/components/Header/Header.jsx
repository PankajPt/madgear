import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { Logo } from '../index.js';

export default function Header({ isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-gradient-to-r from-blue-900 to-indigo-900">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <Logo className="h-12 w-48" />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 ml-1 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:order-2 w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300`}
          >
            <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 font-medium">
              {['/', '/game-catalogue', '/events', '/contact', '/pricing'].map((path) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `relative text-white px-3 py-2 hover:text-orange-300 transition-colors duration-300
                      ${isActive ? 'font-bold text-orange-400' : ''}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                      after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full`
                    }
                  >
                    {path === '/' ? 'Home' : path.slice(1).replace('-', ' ')}
                  </NavLink>
                </li>
              ))}

              {/* Auth Buttons */}
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:ml-8 mt-4 lg:mt-0">
                {!isLoggedIn ? (
                  <>
                    <li>
                      <NavLink
                        to="/login"
                        onClick={closeMenu}
                        className="px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-indigo-900 transition-colors duration-300"
                      >
                        Log in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        onClick={closeMenu}
                        className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={() => {
                        onLogout();
                        closeMenu();
                      }}
                      className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}