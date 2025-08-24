import React from 'react'
import { Outlet } from 'react-router-dom'
import FloatingNavbar from '../components/navBar'
import { SpeedInsights } from "@vercel/speed-insights/react"
const Layout = () => {
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