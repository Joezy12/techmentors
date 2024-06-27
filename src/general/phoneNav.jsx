import { useState } from 'react';
import logo from '../../public/logo.jpeg'
import { NavLink } from 'react-router-dom';


function PhoneNav() {
    const [drpState, setDrpState] = useState(false);

    const drpStyle = drpState ? {
       transform: "translate(0px,0px)",
       opacity: "1"
    }:
    {
     transform: "translate(0px, -700px)",
     opacity: "0",
    }

    function drp() {
        setDrpState((prev)=> {
            return !prev;
        })
    }

   
    return (
        <div className="phone-nav">
            <div className="top-phone-nav">
                <div className="phone-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="side-nav" onClick={drp}>
                    <i className="bi-list"></i>
                </div>
            </div>
            <div className='p-drop-down' style={drpStyle}>
            <NavLink to="." className="link" onClick={drp}>  <div className='drp-container'>
                   <h3>HOME</h3>
                   <p>+</p>
                 </div>  </NavLink>
                 <NavLink to="about" className="link" onClick={drp}>  <div className='drp-container'>
                   <h3>ABOUT</h3>
                   <p>+</p>
                 </div>  </NavLink>
                 <div className='drp-container'>
                   <h3>OUR TEAM</h3>
                   <p>+</p>
                 </div> 
                 <div className='drp-container'>
                   <h3>MEDIA</h3>
                   <p>+</p>
                 </div> 
                 <div className='drp-container'>
                   <h3>TSEF PROGRAMS</h3>
                   <p>+</p>
                 </div> 
                 <div className='drp-container'>
                   <h3>DONATE</h3>
                   <p>+</p>
                 </div> 
                 <div className='drp-container'>
                   <h3>CONTACT US</h3>
                   <p>+</p>
                 </div> 
                 <div className='drp-container'>
                   <h3>TSEF NETWORK</h3>
                   <p>+</p>
                 </div> 
            </div>
        </div>
    )
}

export default PhoneNav;