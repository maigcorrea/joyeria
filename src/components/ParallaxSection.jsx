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

  const [activeSection, setActiveSection] = useState(null);
  const targetSectionRef = useRef(null); // Esta es la sección que queremos monitorear
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calcular el progreso del scroll (0 a 1)
      const progress = Math.min(scrollY / (windowHeight * 1.5), 1);
      setScrollProgress(progress);
      
      // Revelar contenido oculto cuando el scroll supera el 20%
      if (progress > 0 && !isRevealed) {
        setIsRevealed(true);
      } else if (progress <= 0 && isRevealed) {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Calculamos si la mitad del contenedor ha llegado al top de la ventana
          const rect = entry.boundingClientRect;
          const containerHeight = rect.height;
          const containerTop = rect.top;
          
          // La mitad del contenedor está en el top cuando:
          // containerTop + (containerHeight / 2) <= 0
          // Simplificado: containerTop <= -(containerHeight / 2)
          const halfReachedTop = containerTop <= -(containerHeight / 12);
          
          if (entry.target === targetSectionRef.current) {
            if (halfReachedTop && containerTop > -containerHeight) {
              // La mitad ha llegado al top y el contenedor aún es visible
              setActiveSection('target');
            } else if (activeSection === 'target' && !halfReachedTop) {
              // Ya no cumple la condición, resetear
              setActiveSection(null);
            }
          }
        });
      },
      {
        // Observamos intersecciones en múltiples puntos para mayor precisión
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Sin margen para que sea exacto con el top de la ventana
        rootMargin: '0px'
      }
    );

    if (targetSectionRef.current) {
      observer.observe(targetSectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeSection]);

  // Alternativa más precisa usando scroll event (comentada abajo)
  useEffect(() => {
    const handleScroll = () => {
      if (!targetSectionRef.current) return;
      
      const rect = targetSectionRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const containerTop = rect.top;
      
      // La mitad del contenedor ha llegado al top de la ventana
      const halfReachedTop = containerTop <= -(containerHeight / 2);
      // El contenedor aún es visible (no ha salido completamente)
      const stillVisible = containerTop > -containerHeight;
      
      if (halfReachedTop && stillVisible) {
        setActiveSection('target');
      } else if (activeSection === 'target') {
        setActiveSection(null);
      }
    };

    // Descomenta estas líneas si prefieres usar scroll event en lugar de Intersection Observer
    // window.addEventListener('scroll', handleScroll, { passive: true });
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const getBackgroundColor = (sectionName) => {
    if (activeSection === 'target') {
      // Cuando se activa, todos cambian de color
      switch (sectionName) {
        case 'section1': return 'bg-red-500';
        case 'section2': return 'transition-[background-color] duration-700 bg-black';
        case 'section3': return 'bg-blue-500';
        case 'target': return 'transition-[background-color] duration-700 bg-black';
        default: return 'transition-[background-color] duration-700 bg-white';
      }
    }
    // Colores por defecto
    return 'transition-[background-color] duration-700 bg-white';
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
        ref={targetSectionRef} /*Sección que se monitoreará para el cambio de color*/
        className={`h-fit md:h-screen flex items-center justify-center py-20 relative z-10 ${getBackgroundColor('target')}`}
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
        ref={section2Ref}
        className={`min-h-screen overflow-x-hidden py-20 relative z-10 ${getBackgroundColor('section2')}`}
        style={{
          transform: `translateY(-${scrollProgress * ALTURA_FOOTER}vh)`,
          // transition: 'transform 0.3s ease-out'
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