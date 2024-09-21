import { useState } from 'react';
import logo from '../../public/logo.jpeg'
import { NavLink } from 'react-router-dom';


function PhoneNav() {

  const [subdrop, setSubDrop] = useState(false)
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

    const logoStyle = {
      background: `url(${logo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }

    function undrop() {
      setSubDrop((prev)=> {
        return !prev;
      })
    }

   
    return (
        <div className="phone-nav">
            <div className="top-phone-nav">
                <div className="phone-logo" style={logoStyle}>
                    
                </div>
                <div className="side-nav" onClick={drp}>
                    <i className="bi-list"></i>
                </div>
            </div>
            <div className='p-drop-down' style={drpStyle}>
            <NavLink to="." className="link" onClick={drp}>  <div className='drp-container'>
                   <h3>HOME</h3>
                   
                 </div>  </NavLink>
                 <NavLink to="about" className="link" onClick={drp}>  <div className='drp-container'>
                   <h3>ABOUT</h3>
                   
                 </div>  </NavLink>
                 <NavLink to="team" className="link" onClick={drp}>  <div className='drp-container'>
                   <h3>OUR TEAM</h3>
                  
                 </div> </NavLink>
               
                 
                 <div className='drp-container' onClick={undrop}>
                   <h3>TSEF PROGRAMS</h3>
                   <p>+</p>
                 </div> 
                 {subdrop ? <NavLink to="tsef" className="link" onClick={drp}><div className='drp-container green'>
                   <h3>Tech4Teens Bootcamp</h3>
                  
                 </div></NavLink> : ""}
                 {subdrop ? <NavLink to="tsef2" className="link" onClick={drp}><div className='drp-container green'>
                   <h3>Girls Techsters</h3>
                   
                 </div></NavLink> : ""}
                 {subdrop ? <NavLink to="tsef3" className="link" onClick={drp}><div className='drp-container green'>
                   <h3>Basic Digital Literacy For  <br />Vunerable Teens</h3>
                   
                 </div></NavLink> : ""}
                 {subdrop ? <NavLink to="tsef4" className="link" onClick={drp}><div className='drp-container green'>
                   <h3>Block Chain Innovation <br /> For Young Africans</h3>
                   
                 </div></NavLink> : ""}
                 {subdrop ? <NavLink to="tsef5" className="link" onClick={drp}><div className='drp-container green'>
                   <h3>Future Coders Africa</h3>
                   
                 </div></NavLink> : ""}

               
               
                 <NavLink to="contact         " className="link" onClick={drp}><div className='drp-container'>
                   <h3>CONTACT US</h3>
                   
                 </div> </NavLink>
              
                 <NavLink to="foundersLetter" className="link" onClick={drp}><div className='drp-container'>
                   <h3>FOUNDERS LETTER</h3>
                 
                 </div> </NavLink>
                 <div className='drp-container'>
                   <h3>DONATE</h3>
                   
                 </div> 
            </div>
        </div>
    )
}

export default PhoneNav;