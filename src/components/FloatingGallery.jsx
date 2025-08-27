import { useRef } from "react";
import styles from "./floatingGallery.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

// Si usas Vite/CRA y tienes las imágenes en /public, referencia con string:
const images = ["/images/GoldenTouchSerenity.png", "/images/main2.png", "/images/ElegantHands.png", "/images/BlueNecklace.png", "/images/HandWater.png","/images/ElegantGemstoneEarrings.png", "/images/ringsCloseUp.png"];

const word = "Encuentra algo único";

function Letter({ char, progress }) {
  // offset aleatorio estable por letra (no cambia entre renders)
  // Cada letra obtiene un offset aleatorio estable (guardado en useRef).
  // Mapear progress a top desplaza cada letra distinto → micro-parallax divertido.
  // En CSS, el span es position: relative para que top surta efecto.
  const offsetRef = useRef(Math.floor(Math.random() * -75) - 25);
  const y = useTransform(progress, [0, 1], [0, offsetRef.current]);
  return <motion.span className="text-[4vw] sm:text-[2vw]" style={{ top: y }}>{char}</motion.span>;
}

function FMImage({ src, y, enlace }) {
  // Si en tu entorno 'src' fuese un import (objeto), usar src.src
  const url = typeof src === "string" ? src : src?.src;
  return (
    // .imageContainer es absolute y tiene alto/ancho definidos (por :nth-of-type).
    // Dentro, el <img> es absolute con inset: 0; width/height: 100%; object-fit: cover;
    // → equivalente a un “fill + cover” en nextjs.
    <motion.div style={{ y }} className={styles.imageContainer}>
      {enlace ?
        (
          <a href={enlace}>
            <img
              src={url}
              alt="image"
              className={styles.blurUp} //Empieza con desenfoque y un pelín de escala; al cargar, se quita la clase → transición suave.
              onLoad={(e) => e.currentTarget.classList.remove(styles.blurUp)}
            />
          </a>
          
        )
      : (
        <img
          src={url}
          alt="image"
          className={styles.blurUp} //Empieza con desenfoque y un pelín de escala; al cargar, se quita la clase → transición suave.
          onLoad={(e) => e.currentTarget.classList.remove(styles.blurUp)}
        />
      )}
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
  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]); //50
  const md = useTransform(scrollYProgress, [0, 1], [0, -450]); //150
  const lg = useTransform(scrollYProgress, [0, 1], [0, -650]); //250

  // // SCALE: cercano ~1.06→0.98, medio ~1.03→0.95, lejano ~1.0→0.92
  // const smScale = useTransform(scrollYProgress, [0, 1], [1.00, 0.98]);
  // const mdScale = useTransform(scrollYProgress, [0, 1], [1.03, 0.95]);
  // const lgScale = useTransform(scrollYProgress, [0, 1], [1.06, 0.92]);

  // // OPACITY: cercano ~1→0.9, medio ~0.95→0.75, lejano ~0.9→0.6
  // const smOpacity = useTransform(scrollYProgress, [0, 1], [1.0, 0.9]);
  // const mdOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 0.5]);
  // const lgOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.6]);


  const data = [
    { src: images[0], y: 0 }, // fija, no hay enlace
    { src: images[1], y: lg, enlace:"#e1" }, //Se mueve más en y → sensación de que está “más cerca” pero se “va lejos”: menos escala y menos opaco
    { src: images[2], y: md, enlace:"#e2" }, // intermedia
    { src: images[3], y: md, enlace:"#e3" },
    { src: images[4], y: md, enlace:"#e4" }, 
    { src: images[5], y: sm}, // Sensacióin de que está más lejos al moverse menos, menos escala y menos opaco
    { src: images[6], y:sm}
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 className="font-extralight tracking-wider text-gray-400 text-[20vw] leading-[18vw] md:text-[10vw] md:leading-[5vw]" style={{ y: lg }}>Explora</motion.h1> {/*Se mueve poco → sensación de que está “más lejos”.*/}
        <h1 className="font-extralight tracking-wider text-gray-400 text-[7vw] md:text-[5vw]">nuestras categorías</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((ch, i) => (
              <Letter key={i} char={ch} progress={scrollYProgress} />
            ))}
          </p>
        </div>
      </div>

      <div className={styles.images}>
        {data.map(({ src, y, enlace }, i) => (
          <FMImage key={i} src={src} y={y} enlace={enlace} />
        ))}
      </div>
    </div>
  );
}
