import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import MainPage from './pages/Main'
import BestSellers from './pages/BestSellers'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path='best' element={<BestSellers />}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
