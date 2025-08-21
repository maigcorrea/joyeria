import { useState, useEffect, useRef } from 'react';

const ParallaxSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const topSectionRef = useRef(null);
  const hiddenSectionRef = useRef(null);
  const [contador, setContador] = useState(0);
  const [vissibility, setVissibility] = useState(false);
  const ALTURA_FOOTER = 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calcular el progreso del scroll (0 a 1)
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
      
      // Revelar contenido oculto cuando el scroll supera el 20%
      if (progress > 0.2 && !isRevealed) {
        setIsRevealed(true);
      } else if (progress <= 0.2 && isRevealed) {
        setIsRevealed(false);
      }
      
      // Mostrar/ocultar indicador de scroll
      setShowScrollIndicator(scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRevealed]);

  const handleScrollIndicatorClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };


  return (
    <div className="relative">
      {/* Container con altura fija para mantener el espacio durante el scroll */}
      <div className="relative h-screen ">


      {/* Sección superior que se superpone */}
      <div 
        ref={topSectionRef}
        className="h-screen rounded-b-[65px] bg-gradient-to-br flex relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${scrollProgress * -ALTURA_FOOTER}vh)`
        }}
      >
        <div 
          className="bg-[url('../images/main1.png')] rounded-bl-[65px] bg-cover bg-center w-[50%] text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`
          }}
        >

        </div>
        <div 
          className="bg-[url('../images/OrnateJewelry.png')] rounded-br-[65px] bg-cover w-[50%] text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`
          }}
        >

        </div>
      </div>

      {/* Contenido que se revela debajo */}
      <div 
          className="absolute inset-0 bg-white z-5"
          style={{
            transform: `translateY(${100 - (scrollProgress * ALTURA_FOOTER)}vh)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Nueva Sección</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Esta sección aparece conforme la anterior se desplaza hacia arriba. 
                Ya no hay espacio vacío, sino contenido continuo.
              </p>
            </div>
          </div>
        </div>
      </div>


{/* Contenido adicional después del efecto parallax */}
<div className="bg-white">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contenido Normal</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Aquí continúa el resto de tu página de forma normal. Este contenido 
              aparece después del efecto parallax y se comporta como una sección 
              estándar de la página.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Característica 1</h3>
                <p className="text-gray-600">Descripción de la primera característica o servicio.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Característica 2</h3>
                <p className="text-gray-600">Descripción de la segunda característica o servicio.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Característica 3</h3>
                <p className="text-gray-600">Descripción de la tercera característica o servicio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        

      {/* Indicador de scroll */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center z-50 cursor-pointer transition-opacity duration-300 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleScrollIndicatorClick}
      >
        <p className="mb-2">Scroll</p>
        <div className="w-8 h-8 border-r-2 border-b-2 border-gray-500 transform rotate-45 mx-auto animate-bounce"></div>
      </div>
    </div>
  );
};

export default ParallaxSection;