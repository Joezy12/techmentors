import Banner from "./banner";
import Believe from "./believe";
import WhatWeDo from "./whatwedo";
import WhatWeUpTo from "./whatweupto";
import OurValues from "./ourValues";

function Homepage(prop) {
    return (
        <div className="homepage">
          <Banner openVideo={prop.openVideo}/>
          <Believe />
          <WhatWeDo />
          <WhatWeUpTo />
          <OurValues />
        </div>
    )
}

export default Homepage;