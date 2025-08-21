import { useState, useEffect, useRef } from 'react';
import ParallaxFooter from './ParallaxFooter';

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
        className="h-screen bg-white flex relative z-12 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollProgress * -ALTURA_FOOTER}vh)`,
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

      {/* Sección de contenido normal después del efecto */}
      <div 
        className="min-h-screen bg-white flex items-center justify-center py-20 relative z-10"
        style={{
          transform: `translateY(-${scrollProgress * ALTURA_FOOTER}vh)`,
         
        }}
      >
        <div className="text-center max-w-4xl px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Contenido Normal
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Aquí continúa el contenido normal de tu página web. El efecto parallax ya ha terminado 
            y ahora puedes seguir con el resto de tu contenido.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Efecto Suave", desc: "Transición fluida y natural" },
              { title: "Responsivo", desc: "Funciona en todos los dispositivos" },
              { title: "Optimizado", desc: "Rendimiento y experiencia perfecta" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

            {/* Otra sección para más contenido */}
      <div 
        className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-20 relative z-10"
        style={{
          transform: `translateY(-${scrollProgress * ALTURA_FOOTER}vh)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="text-center max-w-4xl px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-6">
            Más Contenido
          </h2>
          <p className="text-lg md:text-xl text-indigo-600 leading-relaxed">
            Puedes seguir agregando más secciones y contenido después del efecto parallax. 
            El scroll funcionará de manera normal en estas secciones.
          </p>
        </div>
      </div>

      <div 
        
      >
        <ParallaxFooter />
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