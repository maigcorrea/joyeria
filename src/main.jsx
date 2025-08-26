import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from '@studio-freight/lenis'

// Inicializa Lenis
const lenis = new Lenis({
    duration: 1.8, // más alto = scroll más lento
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // curva de easing
    smoothWheel: true,
    smoothTouch: false,
  })
  
  // Animación en cada frame
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
