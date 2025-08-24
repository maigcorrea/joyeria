import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import FloatingNavbar from '../components/navBar'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { usePageTracking } from '../hooks/usePageTracking'

const GA_ID = import.meta.env.VITE_GA_ID;

const Layout = () => {
  usePageTracking(GA_ID);
  
  useEffect(() => {
    if (!GA_ID) return;

    // Inyectar script de Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  }, []);
  return (
    <>
        <header>
            <FloatingNavbar />
        </header>
        <main>
            <SpeedInsights />
            <Outlet></Outlet>
        </main>
    </>
  )
}

export default Layout