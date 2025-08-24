import { useState, useEffect, useRef } from 'react';

const ParallaxFooter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const topFooterSectionRef = useRef(null);
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
        ref={topFooterSectionRef}
        className="h-fit rounded-b-[65px] bg-white flex items-center justify-center text-center relative z-10 transition-transform duration-300 ease-out py-6 will-change-transform "
        style={{
          transform: `translateY(${scrollProgress * -ALTURA_FOOTER}vh)`
        }}
      >
        <div 
          className=" text-gray-400 transition-all duration-300 will-change-transform md:py-20 "
          style={{
            // transform: `translateY(-${scrollProgress * 30}px)`,
            // opacity: 1 - scrollProgress * 0.5
          }}
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 drop-shadow-lg">
            ¿Quieres saber más sobre nuestras marcas?
          </h1>
          {/* <button className="text-lg font-semibold text-gray-50 md:text-xl bg-black rounded-full border-none p-4 cursor-pointer">
            Más info
          </button> */}
        </div>
      </div>

      {/* Sección oculta que se revela */}
      <div 
        ref={hiddenSectionRef}
        className="hiddenParallaxSection h-[60dvh] pb-25 pt-55 fixed bottom-0 left-0 w-full z-0 flex flex-col items-start justify-center bg-gray-200 px-6">
        {/* <div className="flex flex-wrap justify-between md:w-full"> */}
            <div 
            className={`text-black transition-all duration-600 ease-out ml-6 ${
                isRevealed ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-12 opacity-0'
            }`}
            >
                <h2 className="text-3xl lg:text-7xl md:text-5xl font-black mb-8 drop-shadow-xl tracking-tight">
                    Únete a nuestra newsletter
                </h2>
                <div className="flex items-center justify-start">
                    <input type="text" placeholder="Tu correo" className='absolute w-full lg:w-full md:w-full p-4 rounded-r-4xl bg-white bg-opacity-20 outline-none' />
                    <div className="flex justify-end w-full lg:w-full md:w-full">
                        <button className="relative inline-block bg-black text-white font-semibold box-border px-6 py-4 rounded-4xl cursor-pointer transition-all hover:scale-110" onClick={handleClick}>Suscribirse</button>
                    </div>
                </div>
            </div>           
        {/* </div> */}

        {/* Línea decorativa */}
        <div className="w-full h-[1px] bg-black flex-shrink-0 my-6"></div>

        <div className='flex flex-wrap w-full justify-between items-end gap-6 px-6'>
            <div className='flex lg:w-[40%] w-full justify-between mx-6'>
                <div className='flex flex-col'>
                    <h3 className="text-md md:text-xl font-bold">Atención al cliente</h3>
                    <a href="">Tallas</a>
                    <a href="">Devoluciones</a>
                    <a href="">Garantía</a>
                    <a href="">FAQs</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className="text-md md:text-xl font-bold">Sobre nosotros</h3>
                    <a href="">Historia</a>
                    <a href="">Contacto</a>
                    <a href="">Solidaridad</a>
                    <a href="">Ubicación</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className="text-md md:text-xl font-bold">Legal</h3>
                    <a href="">Privacidad</a>
                    <a href="">Cookies</a>
                    <a href="">Aviso legal</a>
                    <a href="">Blog</a>
                </div>
            </div>
            <div className={`hoverTop flex items-center gap-4 mx-6`}>
                <div className={`oculto transition-all ${vissibility ? 'opacity-100' : 'opacity-0'}`} >
                    <div className="top">
                        <p>TOP</p>
                    </div>
                </div>
                <div className="punto cursor-pointer opacity-0 md:opacity-100" onMouseEnter={dotRevealVissibility} onMouseLeave={dotRevealVissibility}>
                  <a href="#top">
                    <svg className="w-3 h-3 text-black" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="50" fill="black" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </a>
                </div>
            </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div 
        className={`indicador fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center z-20 cursor-pointer transition-opacity duration-300 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleScrollIndicatorClick}
      >
        <p className="mb-6">Scroll</p>
        <div className="w-8 h-8 border-r-2 border-b-2 border-gray-500 transform rotate-45 mx-auto animate-bounce"></div>
      </div>
    </div>
  );
};

export default ParallaxFooter;