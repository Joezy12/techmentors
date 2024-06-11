import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.css'
import './homepage.css'
import './about.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './general/navbar'
import Homepage from './homepage/homepage'
import Footer from './general/footer'
import About from './aboutUs/about'

function App() {

  return (
    <div className='app'>
      <Navbar />
     
     <Routes>
       <Route index element={<Homepage />} />
       <Route path='about' element={<About />} />
     </Routes>

     <Footer />
    </div>
  )
}

export default App
