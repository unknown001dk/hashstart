import React from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">#start academy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Portfolio</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}