import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/WhatsApp Image 2025-06-28 at 23.51.12_11829941.jpg" 
              alt="JJ Tech Solutions" 
              className="h-10 w-10 object-contain"
            />
            <span className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              JJ Tech Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors hover:scale-105 transform duration-200 ${
                  location.pathname === item.path
                    ? scrolled ? 'text-black font-semibold' : 'text-gray-200 font-semibold'
                    : scrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 border border-black"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 mx-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'text-black bg-gray-100 font-semibold'
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 bg-black text-white rounded-md text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;