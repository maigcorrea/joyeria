import React from 'react';

const FloatingNavbar = () => {
  return (
    <div className=" bg-gray-50">
      {/* Navbar flotante */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-8">
          {/* Logo */}
          <div className="font-bold text-xl text-gray-800">
            Jitter
          </div>
          
          {/* Enlaces de navegación */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Product
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Customers
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Templates
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Pricing
            </a>
          </div>
          
          {/* Botón My files */}
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
            My files
          </button>
          
          {/* Menú hamburguesa para móvil */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
    </div>
  );
};

export default FloatingNavbar;