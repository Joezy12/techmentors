import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.css'
import './homepage.css'
import './about.css'
import './media.css'
import './tsef.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './general/navbar'
import Homepage from './homepage/homepage'
import Footer from './general/footer'
import About from './aboutUs/about'
import Media from './media/media'
import Team from './ourTeam/team'
import PhoneNav from './general/phoneNav'
import Tsef from './tsefPrograms/tsef'
import techVideo from '../public/techmentorvideo.mp4'

function App() {

  const [videoState,  setVideoState] = useState(false);

  function openVideo() {
    setVideoState(!videoState)
  }

  return (
    <div className='app'>
      {videoState ? <div className='video-box'>
        <div className='cancelBtn'>
          <h1 onClick={openVideo}>X</h1>
        </div>
        <div className='videor'>
          <video width={"100%"} height={500} controls autoPlay={"autoplay"} preload='auto'>
            <source src={techVideo} type='video/mp4' />
          </video>
        </div>
      </div>: ""}
      <PhoneNav />
      <Navbar />
      <Routes>
        <Route index element={<Homepage openVideo={openVideo}/>} />
        <Route path='about' element={<About />} />
        <Route path='media' element={<Media />} />
        <Route path='team' element={<Team />} />
        <Route path='tsef' element={<Tsef />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
