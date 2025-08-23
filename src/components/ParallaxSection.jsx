import { useState, useEffect, useRef } from 'react';
import ParallaxFooter from './ParallaxFooter';
import FloatingImages from './FloatingImages';
import Index from './FloatingGallery';

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
      const progress = Math.min(scrollY / (windowHeight * 1.5), 1);
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
      <div className="relative h-screen bg-white ">


      {/* Sección superior que se superpone */}
      <div 
        ref={topSectionRef}
        className="h-screen bg-white flex flex-wrap relative z-12 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollProgress * -ALTURA_FOOTER}vh)`,
        }}
      >
        <div 
          className="bg-[url('../images/main1.png')] rounded-t-[65px] md:rounded-t-[0px] md:rounded-bl-[65px] bg-cover bg-center md:w-[50%] w-full text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`
          }}
        >

        </div>
        <div 
          className="bg-[url('../images/OrnateJewelry.png')] rounded-b-[65px] md:rounded-b-[0px] md:rounded-br-[65px] bg-cover md:w-[50%] w-full text-center text-black transition-all duration-300"
          style={{
            transform: `translateY(-${scrollProgress * 30}px)`
          }}
        >

        </div>
      </div>

      {/* Sección de contenido normal después del efecto */}
      <div 
        className="h-fit md:h-screen bg-white flex items-center justify-center py-20 relative z-10"
        style={{
          transform: `translateY(-${scrollProgress * ALTURA_FOOTER}vh)`,
         
        }}
      >
        <div className='w-[50%]'>
          <h2 className='text-center text-xl md:text-5xl lg:text-6xl text-gray-400 font-light tracking-wider italic'>Cada joya guarda una historia única:
                la de un instante, un sentimiento, un recuerdo eterno.
                transformamos la belleza en símbolos
                que acompañan tu vida,
                porque una joya no es solo un accesorio,
                es un reflejo de lo que amas y de lo que eres.</h2>
        </div>
      </div>

            {/* Otra sección para más contenido */}
      <div 
        className="min-h-screen bg-white overflow-x-hidden py-20 relative z-10"
        style={{
          transform: `translateY(-${scrollProgress * ALTURA_FOOTER}vh)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Index></Index>
        
      </div>

      
      <div 
        
      >
        <ParallaxFooter />
      </div>

      </div>
        

      {/* Indicador de scroll */}
      {/* <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center z-50 cursor-pointer transition-opacity duration-300 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleScrollIndicatorClick}
      >
        <p className="mb-2">Scroll</p>
        <div className="w-8 h-8 border-r-2 border-b-2 border-gray-500 transform rotate-45 mx-auto animate-bounce"></div>
      </div> */}
    </div>
  );
};

export default ParallaxSection;