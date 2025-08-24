# Resumen del proyecto - Èlisèe Jewerly

Proyecto desarrollado con tecnologías modernas para crear una experiencia premium en joyería digital. Combina diseño elegante, animaciones sofisticadas y rendimiento optimizado.

---

## 📋 Información General

- Nombre del proyecto: Èlisèe Jewelry
- URL: https://joyeria-two.vercel.app/
- Tipo: Sitio web de joyería / Landing page
- Plataforma de deploy: Vercel

---

## 🛠️ Tecnologías Utilizadas

### Arquitectura

- Single Page Application (SPA) - Navegación fluida sin recargas
- Responsive Design - Mobile-first con breakpoints adaptativos
- Component-based - Arquitectura modular reutilizable

### Frontend Framework

- React + Vite
- SPA con React Router

### Estilos

- Tailwind CSS - Framework utility-first con clases personalizadas
- CSS Modules - Estilos encapsulados (floatingGallery.module.css)
- CSS Personalizado - Efectos blur, transiciones

### Animaciones

- Framer-motion

---

## 🎨 Paleta de Colores y tipografía

### Colores Principales

- Blanco Principal: bg-white - Base limpia y elegante
- Gris Claro: bg-gray-50 - Fondo neutro y suave
- Gris Medio: bg-gray-200 - Secciones del footer
- Negro Profundo: bg-black - Botones y elementos de contraste

### Colores de Texto

- Texto Principal: text-gray-800, text-zinc-800 - Títulos y texto importante
- Texto Secundario: text-gray-700, text-gray-600 - Enlaces y texto informativo
- Texto Sutil: text-gray-400 - Elementos decorativos, subtítulos y texto informativo
- Texto Claro: text-white - Botones con fondo oscuro

### Colores de Acento

- Transparencias: Uso extensivo de opacidades (0.6, 0.85, 0.9)
- Gradientes Dinámicos: Animación de gradiente de opacidad en 4 direcciones
- Efectos Blur: filter: blur(5px) para profundidad visual

### Tipografía

- Texto extralight con tracking amplio
- Tamaño de texto adaptado a cada sección, con tipografía masiva para crear impacto en la sección principal

---

## 🎯 Características del Diseño

### Estilo Visual

- Minimalismo Elegante: Diseño limpio apropiado para joyería premium
- Tipografía Sofisticada: Texto extralight con tracking amplio
- Efectos Parallax: Múltiples capas de movimiento para profundidad
- Blur-up Loading: Transiciones suaves de carga de imágenes

### Componentes Principales

#### Navegación

- Navbar flotante con bordes redondeados
- Menú móvil fullscreen con animaciones suaves
- Transiciones fluidas con delays escalonados

#### MainSection

- Grid responsivo de 12 columnas
- Tipografía masiva (90px-310px) para impacto visual
- Imágenes de fondo con overlay sutil
- Animaciones de entrada escalonadas

#### ParallaxSection

#### FloatingGallery

- 7 imágenes flotantes con posicionamiento absoluto
- Parallax multinivel: 3 velocidades diferentes (sm, md, lg)
- Texto animado: Cada letra con movimiento independiente
- Efectos de profundidad: Z-index y blur para capas

#### ParallaxFooter

- Sección revelable activada por scroll
- Newsletter integrada con formulario estilizado
- Footer informativo con múltiples secciones
- Scroll indicator animado con bounce

---

## 👩‍💻 Funcionalidades Avanzadas

- Intersection Observer para detección de secciones
- Scroll Progress Tracking para animaciones precisas
- Mobile Menu con bloqueo de scroll del body
- Responsive Breakpoints: Mobile, tablet y desktop
- Performance Optimized: will-change para GPU acceleration

## 📱 Responsive Design

- Mobile First
- Navegación adaptativa: Hamburger menu en móvil, navbar horizontal en desktop
- Tipografía fluida: text-[20vw] escalable por viewport
- Grid responsivo: 12 columnas que se adaptan por dispositivo
- Imágenes optimizadas: object-fit: cover para mantener proporciones

---

## ⚡ Rendimiento y Optimización

- Vite para hot reload y builds ultra rápidos
- CSS Modules para evitar conflictos de estilos
- will-change: transform para aceleration GPU
- Framer Motion con useTransform optimizado
- Lazy loading con blur-up effect en imágenes
- Intersection Observer para detección eficiente de scroll

---

## 🖌️ Efectos Visuales Destacados

### Animaciones

- Gradiente animado: Keyframes con background-position shifting
- Parallax multicapa: 3 velocidades diferentes (0-100px, 0-450px, 0-650px)
- Letter animation: Cada letra con offset aleatorio y movimiento independiente
- Blur effects: Transición suave de blur(20px) a nítido
- Scale transitions: Hover effects con transform scale

### Transiciones

- Duration: 300ms, 600ms, 700ms para diferentes elementos
- Easing: ease, ease-out, cubic-bezier personalizado
- Transform: translateY, scale, opacity combinados
- Stagger: Delays escalonados (0.2s, 0.4s, 0.6s)

---

🚀 Deploy y Hosting

- Plataforma: Vercel
- URL de producción: https://joyeria-two.vercel.app/
- CI/CD: Integración automática desde repositorio

---

## 🖼️ Galería de Imágenes
El proyecto incluye una colección curada de imágenes de alta calidad:

- GoldenTouchSerenity.png - Imagen principal fija
- main1.png, main2.png - Secciones principales
- ElegantHands.png, HandWater.png - Elementos de lifestyle
- BlueNecklace.png, ElegantGemstoneEarrings.png - Productos destacados
- ringsCloseUp.png - Detalles de producto
- MonochromePearl.png, ElegantBeach.png - Imágenes de ambiente    

---

## 🎭 Experiencia de Usuario

- Storytelling visual: Cada sección cuenta una historia diferente
- Interacciones suaves: Sin transiciones bruscas o saltos
- Feedback inmediato: Hover effects y estados de carga
- Accesibilidad: Controles de navegación claros
- Progressive enhancement: Funciona sin JavaScript para contenido básico

---

## Autores
- Ana Maite García Correa ([@maigcorrea](https://www.github.com/maigcorrea))

- © 2025 Ana Maite García Correa. Todos los derechos reservados. No se permite el uso, copia, modificación o distribución de este software sin permiso explícito por escrito al correo anamaitegarciacorrea@gmail.com.
