import { useState } from 'react';
import logo from '../../public/logo.jpeg'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);

    const dropStyle = {
        display: dropDown ? "flex" : "none",
    }

    const dropStyle2 = {
        display: dropDown2 ? "flex" : "none",
    }

    function drop() {
        setDropDown((prev) => {
            return true;
        })
    }

    function drop2() {
        setDropDown2((prev) => {
            return true;
        })
    }

    function undrop() {
        setDropDown(false)
    }

    function undrop2() {
        setDropDown2(false)
    }

    const logoStyle = {
        background: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <div className="navbar">
            <div className="phone-logo" style={logoStyle}>

            </div>
            <div className='nav-links'>
                <NavLink to="." className="link"> <p>HOME</p> </NavLink>
                <NavLink to="about" className="link">  <p>ABOUT US</p> </NavLink>
                <NavLink to="team" className="link">  <p>OUR TEAM</p> </NavLink>
               
                    <p onMouseOver={drop2} onMouseOut={undrop2}><span>TSEF PROGRAMS </span>
                    <div className='drop-down' style={dropStyle2} >
                        <NavLink to="tsef" className="link2">  <h5 >Tech4Teens Bootcamp</h5> </NavLink>
                        <NavLink to="tsef2" className="link2"> <h5 >Girls Techsters</h5></NavLink>
                        <NavLink to="tsef3" className="link2"> <h5 >Basic Digital Literacy For <br />Vunerable Teens</h5> </NavLink>
                        <NavLink to="tsef4" className="link2"><h5>Block Chain Innovation <br /> For Young Africans</h5></NavLink>
                        <NavLink to="tsef5" className="link2"><h5>Future Coders Africa</h5></NavLink>
                    </div></p>
                <NavLink to="foundersLetter" className="link"><p>FOUNDERS LETTER</p> </NavLink>
                <NavLink to="contact" className="link">  <p>CONTACT US</p> </NavLink>
                <p className='link-btn'>DONATE</p>
            </div>
        </div>
    )
}

export default Navbar;