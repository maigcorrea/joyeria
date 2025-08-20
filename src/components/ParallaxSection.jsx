import { useState, useEffect, useRef } from 'react';

const ParallaxSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const topSectionRef = useRef(null);
  const hiddenSectionRef = useRef(null);
  const [contador, setContador] = useState(0);

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

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <div className="relative">
        {/* Sección inicial */}
      <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative z-5">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Efecto Completado
          </h3>
          <p className="text-lg md:text-xl opacity-80">
            Has experimentado el efecto parallax de revelación con scroll
          </p>
        </div>
      </div>

      {/* Sección superior que se superpone */}
      <div 
        ref={topSectionRef}
        className="h-screen rounded-b-[65px] bg-gradient-to-br bg-white flex items-center justify-center relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${scrollProgress * -100}vh)`
        }}
      >
        <div 
          className="text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`,
            opacity: 1 - scrollProgress * 0.5
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Bienvenido
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl px-4">
            Haz scroll hacia abajo para revelar contenido oculto con un efecto parallax impresionante
          </p>
        </div>
      </div>

      {/* Sección oculta que se revela */}
      <div 
        ref={hiddenSectionRef}
        className="hiddenParallaxSection h-screen fixed top-0 left-0 w-full z-0 flex items-center bg-gray-400">
        <div 
          className={`text-black transition-all duration-600 ease-out ml-6 ${
            isRevealed ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-7xl md:text-5xl font-black mb-8 drop-shadow-xl tracking-tight">
            Únete a nuestra newsletter
          </h2>
          <div className="flex items-center justify-start">
            <input type="text" placeholder="Tu correo" className='absolute w-64 lg:w-full md:w-full p-4 rounded-r-4xl bg-white bg-opacity-20 outline-none' />
            <div className="flex justify-end w-64 lg:w-full md:w-full ">
                <button className="relative inline-block bg-black text-white box-border px-6 py-4 rounded-4xl cursor-pointer" onClick={handleClick}>Suscribirse</button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-20 cursor-pointer transition-opacity duration-300 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleScrollIndicatorClick}
      >
        <p className="mb-2">Scroll</p>
        <div className="w-8 h-8 border-r-2 border-b-2 border-white transform rotate-45 mx-auto animate-bounce"></div>
      </div>

      {/* CSS personalizado para las animaciones */}
      {/* <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rotate-x-90 {
          transform: rotateX(90deg) translateY(100px);
        }
        
        .rotate-x-0 {
          transform: rotateX(0deg) translateY(0px);
        }
        
        @media (max-width: 768px) {
          .letter-mobile {
            font-size: 2rem !important;
            padding: 15px 20px !important;
          }
        }
      `}</style> */}
    </div>
  );
};

export default ParallaxSection;