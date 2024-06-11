import logo from '../../public/logo.jpeg'
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='nav-links'>
             <NavLink to="." className="link"> <p>HOME</p> </NavLink>  
             <NavLink to="about" className="link">  <p>ABOUT US</p> </NavLink>  
                <p>GOVERNANCE</p>
                <p>MEDIA</p>
                <p>TSEF PROGRAMS</p>
                <p>DONATE</p>
                <p>CONTACT US</p>
                <p className='link-btn'>TSEF NETWORK</p>
            </div>
        </div>
    )
}

export default Navbar;