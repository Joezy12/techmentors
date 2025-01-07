import { useState } from "react"
import whatPic from "../../public/whatBanner.jpeg"

function WhatWeDo2() {

    const [moreState, setMoreState] = useState(false);

    const moreText = moreState ? "view less" : "view more"

    const whatBanner = {
        background: `url(${whatPic})`,
        backgroundSize: "cover",
        transition: `1s linear`
    }

    const MoreContent = {
          height: moreState ? "initial" : "0px",
          overflow: "hidden"
    }

    function changeMore() {
        setMoreState((prev)=> {
            return !prev;
        })
    }
    return (
        <div className="what-we-do-2">
            <div className="what-heading">
                <h1><span>What</span> We Do</h1>
            </div>
            <div className="what-content">
                <p>Welcome to Techmentors Skills Empowerment Foundation, a revolutionary Nonprofit Organization (NPO), that is committed to providing Technology Education, Artificial Intelligence,  Information and Communications Technologies (ICT) skills development for the African teenagers especially the girl child.
                    We believe that every African teenager deserves access to quality technology education and chances for professional development in the rapidly changing digital environment. Our mission is to bridge the digital gap by empowering African teenagers, especially the girl child, underserved and marginalized communities with knowledge they need to succeed in the technologically driven world of today.</p>

                <div className="what-banner-container">
                    <div className="what-banner" style={whatBanner}></div>
                </div>

                <p className="need-top">
                Since founded in 2024, Techmentors Skills Empowerment Foundation has been at the center of stimulating positive impacts through significant programs and activities such as Tech4teens Bootcamp (T4TB), Girls Techsters(GTS), Emerging Blockchain Initiative for African Teenagers(EBIAT), Basic Digital Literacy for Vulnerable African Teenagers(BDLVAT), Future Coders Africa (FCA), African Marathon Digital Challenge (AMDC) . 
                </p>


                <p className="more-content" style={MoreContent}>
                With these therefore, we aim to empower African teenagers to reach their full potential and pursue rewarding careers in Technology and Innovation, Mentorship opportunities, and community engagement projects.
                Excellence, Innovation, Inclusivity, and Collaboration are our guiding principles in all that we do. We are dedicated to providing excellence in all facets of our training and empowerment programs, encouraging innovation to tackle new problems and prospects, advancing inclusivity by guaranteeing fair access to opportunities and education, while encouraging teamwork with partners, stakeholders, and communities to optimize our impacts.
                </p>

                <button className="view-more" onClick={changeMore}>{moreText}</button>
            </div>
        </div>
    )
}

export default WhatWeDo2;