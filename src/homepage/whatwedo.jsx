import { NavLink } from "react-router-dom";

function WhatWeDo() {

    return (
        <div className="what-we-do">
             <div className="we-do">
             <h1>What We Do</h1>
             <p>Welcome to Techmentors Skills Empowerment Foundation, a revolutionary Nonprofit Organization (NPO), that is committed to providing Technology Education, Artificial Intelligence,  Information and Communications Technologies (ICT) skills development for the African teenagers especially the girl child. </p>
           <NavLink to="about"> <button>Learn more</button> </NavLink> 
             </div>
        </div>
    )
}

export default WhatWeDo;