import { useState } from 'react';
import logo from '../../public/logo.jpeg'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [dropDown, setDropDown] = useState(false);

    const dropStyle = {
        display: dropDown ? "flex" : "none",
    }

    function drop() {
        setDropDown((prev)=> {
            return true;
        })
    }

    function undrop() {
        setDropDown(false)
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='nav-links'>
             <NavLink to="." className="link"> <p>HOME</p> </NavLink>  
             <NavLink to="about" className="link">  <p>ABOUT US</p> </NavLink>  
             <NavLink to="team" className="link">  <p>OUR TEAM</p> </NavLink>
                <NavLink to="media" className="link2">  <p onMouseOver={drop} onMouseOut={undrop}><span>MEDIA </span>
                    <div className='drop-down' style={dropStyle} >
                        <h5 >News and Stories</h5>
                        <h5 >Gallery</h5>
                    </div></p> </NavLink> 
                <p>TSEF PROGRAMS</p>
                <p>DONATE</p>
                <p>CONTACT US</p>
                <p className='link-btn'>TSEF NETWORK</p>
            </div>
        </div>
    )
}

export default Navbar;