import React from 'react'
import { Outlet } from 'react-router-dom'
import FloatingNavbar from '../components/navBar'
import { SpeedInsights } from "@vercel/speed-insights/next"
const Layout = () => {
  return (
    <>
    <SpeedInsights >
        <header>
            <FloatingNavbar />
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        </SpeedInsights>
    </>
  )
}

export default Layout