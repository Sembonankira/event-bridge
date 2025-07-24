import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  // Smooth scroll to section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection('Home')}
        >
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-lg font-bold text-blue-600">Event Bridge</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection('Home')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('Services')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('Team')}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Contacts
          </button>
          <button
            onClick={() => scrollToSection('ContactUs')}
            className="text-blue-700 hover:text-green-600 transition font-medium"
          >
            Send Email
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;