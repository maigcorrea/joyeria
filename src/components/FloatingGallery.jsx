// 'use client';
// import { useLayoutEffect, useRef } from "react";
// import styles from './page.module.css';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Picture1 from '../../public/images/main1.png';
// import Picture2 from '../../public/images/main1.png';
// import Picture3 from '../../public/images/main1.png';

// gsap.registerPlugin(ScrollTrigger)

// const word = "with gsap";
// const images = [Picture1, Picture2, Picture3];

// export default function Index() {
//     const container = useRef(null);
//     const title1 = useRef(null);
//     const lettersRef = useRef([])
//     const imagesRef = useRef([])

//     useLayoutEffect( () => {
//         const context = gsap.context( () => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: container.current,
//                     start: "top bottom",
//                     end: "bottom top",
//                     scrub: true,
//                 },
//             })
//             .to(title1.current, {y: -50}, 0)
//             .to(imagesRef.current[1], {y: -150}, 0)
//             .to(imagesRef.current[2], {y: -255}, 0)
//             lettersRef.current.forEach((letter, i) => {
//                 tl.to(letter, {
//                     top: Math.floor(Math.random() * -75) - 25,
//                 }, 0)
//             })
            
//         })
//         return () => context.revert();
//     }, [])

//     return (
//         <div ref={container} className={styles.container}>
//             <div className={styles.body}>
//                 <h1 ref={title1}>Parallax</h1>
//                 <h1>Scroll</h1>
//                 <div className={styles.word}>
//                     <p>
//                         {
//                             word.split("").map((letter, i) => {
//                                 return <span key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>
//                             })
//                         }
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.images}>
//                 {
//                     images.map( (image, i) => {
//                         return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={styles.imageContainer}>
//                             <img
//                                 src={typeof image === 'string' ? image : image.src} // si usas imports de Next, .src trae la URL
//                                 alt="image"
//                                 className={`${styles.imageFill} ${styles.blurUp}`}
//                                 onLoad={(e) => e.currentTarget.classList.remove(styles.blurUp)}
//                             />
//                         </div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

import { useRef } from "react";
import styles from "./floatingGallery.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

// Si usas Vite/CRA y tienes las imágenes en /public, referencia con string:
const images = ["/images/GoldenTouchSerenity.png", "/images/main2.png", "/images/main2.png"];

const word = "with framer-motion";

function Letter({ char, progress }) {
  // offset aleatorio estable por letra (no cambia entre renders)
  // Cada letra obtiene un offset aleatorio estable (guardado en useRef).
  // Mapear progress a top desplaza cada letra distinto → micro-parallax divertido.
  // En CSS, el span es position: relative para que top surta efecto.
  const offsetRef = useRef(Math.floor(Math.random() * -75) - 25);
  const y = useTransform(progress, [0, 1], [0, offsetRef.current]);
  return <motion.span style={{ top: y }}>{char}</motion.span>;
}

function FMImage({ src, y }) {
  // Si en tu entorno 'src' fuese un import (objeto), usar src.src
  const url = typeof src === "string" ? src : src?.src;
  return (
    // .imageContainer es absolute y tiene alto/ancho definidos (por :nth-of-type).
    // Dentro, el <img> es absolute con inset: 0; width/height: 100%; object-fit: cover;
    // → equivalente a un “fill + cover” en nextjs.
    <motion.div style={{ y }} className={styles.imageContainer}>
      <img
        src={url}
        alt="image"
        className={styles.blurUp} //Empieza con desenfoque y un pelín de escala; al cargar, se quita la clase → transición suave.
        onLoad={(e) => e.currentTarget.classList.remove(styles.blurUp)}
      />
    </motion.div>
  );
}

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container, // el área de la que sacas el progreso es tu sección (ref={container})
    // offset: define cuándo es 0 y cuándo es 1.
    // "start end" → progreso = 0 cuando el top del contenedor toca el bottom del viewport.
    // "end start" → progreso = 1 cuando el bottom del contenedor toca el top del viewport.
    offset: ["start end", "end start"], // el movimiento empieza cuando el elemento está por debajo de la sección (start) y termina cuando está por encima (end)

    // Resultado: scrollYProgress es un MotionValue que va de 0 → 1 mientras esa sección “cruza” la ventana.
  });

  // valores para el movimiento de las imágenes, los números negativos suben el elemento (translateY(-px)).
  // useTransform mapea 0..1 a píxeles de y (traducción vertical).
  // Capas “cercanas” se mueven más (p. ej. lg = -250) y “lejanas” menos (sm = -50). Esa diferencia de velocidades es el parallax.
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]); //50
  const md = useTransform(scrollYProgress, [0, 1], [0, -450]); //150
  const lg = useTransform(scrollYProgress, [0, 1], [0, -650]); //250

  const data = [
    { src: images[0], y: 0 }, // fija
    { src: images[1], y: lg }, //Se mueve más → sensación de que está “más cerca”.
    { src: images[2], y: md }, // intermedia
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1> {/*Se mueve poco → sensación de que está “más lejos”.*/}
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((ch, i) => (
              <Letter key={i} char={ch} progress={scrollYProgress} />
            ))}
          </p>
        </div>
      </div>

      <div className={styles.images}>
        {data.map(({ src, y }, i) => (
          <FMImage key={i} src={src} y={y} />
        ))}
      </div>
    </div>
  );
}
