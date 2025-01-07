import AboutBanner from "./aboutBanner";
import WhatWeDo2 from "./whatWeDo2";
import WhoWeAre from "./whoWeAre";
import OurValues from "../homepage/ourValues";


function About() {

    return (
        <div className="about">
              <AboutBanner />
              <WhatWeDo2 />
              <WhoWeAre />
              <OurValues />
        </div>
    )
}

export default About;