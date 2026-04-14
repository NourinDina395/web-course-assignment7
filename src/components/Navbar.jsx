import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Logo Left */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="KeenKeeper" className="h-9" />
            
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Home size={18} />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock size={18} />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BarChart3 size={18} />
              Stats
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t pt-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Home size={20} /> Home
            </NavLink>
            <NavLink
              to="/timeline"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock size={20} /> Timeline
            </NavLink>
            <NavLink
              to="/stats"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BarChart3 size={20} /> Stats
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;