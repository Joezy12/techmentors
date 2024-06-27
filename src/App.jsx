import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.css'
import './homepage.css'
import './about.css'
import './media.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './general/navbar'
import Homepage from './homepage/homepage'
import Footer from './general/footer'
import About from './aboutUs/about'
import Media from './media/media'
import Team from './ourTeam/team'
import PhoneNav from './general/phoneNav'

function App() {

  return (
    <div className='app'>
      <PhoneNav />
      <Navbar />
     <Routes>
       <Route index element={<Homepage />} />
       <Route path='about' element={<About />} />
       <Route path='media' element={<Media />} />
       <Route path='team' element={<Team />} />
     </Routes>

     <Footer />
    </div>
  )
}

export default App
