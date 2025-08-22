import React, { useState } from 'react';

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50">
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
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Menú móvil de pantalla completa */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden overflow-hidden">
          {/* Header del menú móvil */}
          <div className="flex justify-between items-center p-6">
            <div className="font-bold text-xl text-gray-800">
              Jitter
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Enlaces del menú móvil */}
          <div className="px-6 pt-8">
            <div className="space-y-8">
              <a 
                href="#" 
                className="block text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Product
              </a>
              <a 
                href="#" 
                className="block text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Customers
              </a>
              <a 
                href="#" 
                className="block text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Templates
              </a>
              <a 
                href="#" 
                className="block text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
            </div>
          </div>
          
          {/* Botón flotante de ayuda */}
          <div className="fixed bottom-6 right-6">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">?</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Overlay para bloquear scroll cuando el menú está abierto */}
      <div className={`${isMobileMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      
      
    </div>
    </div>
  );
};

export default FloatingNavbar;