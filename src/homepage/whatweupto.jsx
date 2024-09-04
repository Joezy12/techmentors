import { NavLink } from "react-router-dom";

function WhatWeUpTo() {
    return (
        <div className="what-we-up-to">
            <div className="up-to-head">
                <h1>What We Are Up To</h1>
              <NavLink to="tsef"> <button>Show More</button> </NavLink> 
            </div>
            <div className="up-to-boxes">
                <div className="u-box">
                    <div className="u-box-pic"></div>
                    <div className="u-box-write">
                        <h1>TECH 4 TEENS BOOTCAMP </h1>
                        <p>The Tech4Teens Boothcamp is our flagship program, designed to empower teenagers with an immersive, comprehensive learning experience in various tech disciplines over the course of three months. </p>
                        <NavLink to="tsef"> <button>learn more</button> </NavLink>
                    </div>
                </div>

                <div className="u-box">
                    <div className="u-box-pic u-box-pic2"></div>
                    <div className="u-box-write">
                        <h1>GIRLS TECHSTERS </h1>
                        <p>Girls Techsters is a dedicated program designed to bridge the gender gap in the tech industry by empowering young girls with essential STEM (Science, Technology, Engineering, and Mathematics) skills and the confidence to pursue careers in technology.  </p>
                        <NavLink to="tsef2">  <button>learn more</button> </NavLink>
                    </div>
                </div>

                <div className="u-box">
                    <div className="u-box-pic u-box-pic3"></div>
                    <div className="u-box-write">
                        <h1>BLOCK CHAIN INNOVATION FOR YOUNG AFRICANS </h1>
                        <p>Blockchain Innovation for Young African is designed to introduce African teenagers to the transformative technology of blockchain and its myriad applications across various industries.</p>
                        <NavLink to="tsef4">   <button>learn more</button> </NavLink>
                    </div>
                </div>
            </div>

            <div className="up-to-boxes">
                <div className="u-box">
                    <div className="u-box-pic u-box-pic4"></div>
                    <div className="u-box-write">
                        <h1>BASIC DIGITAL LITERACY FOR VULNERABLE AFRICAN TEENAGERS </h1>
                        <p>The Basic Digital Literacy for Vulnerable African Teenagers program is designed to equip underserved and vulnerable teenagers across Africa with essential digital literacy skills. </p>
                        <NavLink to="tsef3">  <button>learn more</button> </NavLink>
                    </div>
                </div>

                <div className="u-box">
                    <div className="u-box-pic u-box-pic5"></div>
                    <div className="u-box-write">
                        <h1>FUTURE CODERS AFRICA </h1>
                        <p>Future Coders Africa is an ambitious and transformative program by Techmentors Skills Empowerment Foundation, dedicated to nurturing the next generation of coding prodigies across the African continent.  </p>
                        <NavLink to="tsef5">  <button>learn more</button> </NavLink>
                    </div>
                </div>

                <div className="u-box">
                    <div className="u-box-pic u-box-pic6"></div>
                    <div className="u-box-write">
                        <h1>AFRICA MARATHON DIGITAL CHALLENGE </h1>
                        <p>The African Marathon Digital Challenge is an exciting and dynamic virtual competition designed to inspire and empower teenagers across Africa to showcase their coding skills and creativity.</p>
                        <NavLink to="tsef5">  <button>learn more</button> </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeUpTo;