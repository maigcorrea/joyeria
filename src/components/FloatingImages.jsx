import { useState, useEffect, useRef } from 'react';

const FloatingImages = () => {
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

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  const dotRevealVissibility = () => {
    vissibility ?
    setVissibility(false) : setVissibility(true);
  }


  return (
    <div className="relative">

      {/* Sección superior que se superpone */}
      <div 
        ref={topSectionRef}
        className="h-screen rounded-b-[65px] bg-gradient-to-br flex items-center justify-center relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${scrollProgress * -ALTURA_FOOTER}vh)`
        }}
      >
        <div 
          className="bg-[url('../images/ElegantPortrait.png')] bg-cover w-[50%] h-[50%] text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`,
            opacity: 1 - scrollProgress * 0.5
          }}
        >
          
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

export default FloatingImages;