import React, { useState, useEffect } from 'react';

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Bloquear/desbloquear scroll del body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-gray-50">
      {/* Navbar flotante */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-8">
          {/* Logo */}
          <div className="font-bold text-xl text-gray-800">
            Élisée
          </div>
          
          {/* Enlaces de navegación */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Marcas
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Relojería
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Novedades
            </a>
          </div>
          
          {/* Botón My files */}
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
            Más vendidos
          </button>
          
          {/* Menú hamburguesa para móvil */}
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Menú móvil de pantalla completa */}
      <div className={`fixed inset-0 z-50 bg-white md:hidden transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header del menú móvil */}
        <div className={`flex justify-between items-center p-6 transition-opacity duration-300 delay-100 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="font-bold text-xl text-gray-800">
            Élisée
          </div>
          <button 
            onClick={toggleMobileMenu}
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Enlaces del menú móvil */}
        <div className={`px-6 pt-8 transition-opacity duration-300 delay-200 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-44 text-6xl">
            <a 
              href="#" 
              className="block font-bold text-gray-800 hover:text-gray-600 transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Marcas
            </a>
            <a 
              href="#" 
              className="block font-bold text-gray-800 hover:text-gray-600 transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Relojería
            </a>
            <a 
              href="#" 
              className="block font-bold text-gray-800 hover:text-gray-600 transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Novedades
            </a>
          </div>
        </div>
        
        {/* Botón flotante de ayuda */}
        <div className={`fixed bottom-6 right-6 transition-opacity duration-300 delay-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200">
            <span className="text-white font-bold text-lg">?</span>
          </button>
        </div>
      </div>
      
      {/* Overlay para bloquear scroll cuando el menú está abierto */}
      <div className={`${isMobileMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      
    </div>
    </div>
  );
};

export default FloatingNavbar;