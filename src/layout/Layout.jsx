import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <header>

        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </>
  )
}

export default Layout