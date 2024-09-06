import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.css'
import './homepage.css'
import './about.css'
import './media.css'
import './tsef.css'
import './founders.css'
import './trustee.css'
import './contact.css'
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
import FoundersLetter from './foundersLetter/foundersLetter'
import Tsef2 from './tsefPrograms/tsef2'
import Tsef3 from './tsefPrograms/tsef3'
import Tsef4 from './tsefPrograms/tsef4'
import Tsef5 from './tsefPrograms/tsef5'
import TrusteeProfile1 from './ourTeam/trusteeProfile1'
import TrusteeProfile2 from './ourTeam/trusteeProfile2'
import TrusteeProfile3 from './ourTeam/trusteeprofile3'
import Contact from './contact/contact'

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
        <Route path='contact' element={<Contact />} />
        <Route path='tsef' element={<Tsef />} />
        <Route path='tsef2' element={<Tsef2 />} />
        <Route path='tsef3' element={<Tsef3 />} />
        <Route path='tsef4' element={<Tsef4 />} />
        <Route path='tsef5' element={<Tsef5 />} />
        <Route path='tProfile1' element={<TrusteeProfile1 />} />
        <Route path='tProfile2' element={<TrusteeProfile2 />} />
        <Route path='tProfile3' element={<TrusteeProfile3 />} />
        <Route path='foundersLetter' element={<FoundersLetter />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
