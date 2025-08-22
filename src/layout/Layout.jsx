import React from 'react'
import { Outlet } from 'react-router-dom'
import FloatingNavbar from '../components/navBar'
const Layout = () => {
  return (
    <>
        <header>
            <FloatingNavbar />
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </>
  )
}

export default Layout