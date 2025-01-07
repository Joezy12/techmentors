import excellence from '../../public/excellence.jpg'
import innovation from '../../public/innovation.jpg'


function OurValues() {

    const ourValues = [
        {
            pic: excellence,
            heading: "EXCELLENCE",
            write: "We strive for excellence in all our programs and initiatives, ensuring that our educational offerings and mentorship are of the highest quality. Our commitment to excellence helps us empower our participants to reach their full potential. "
        },
        {
            pic: innovation,
            heading: "INNOVATION",
            write: "Innovation is at the forefront of our Foundation. We encourage creativity and forward-thinking approaches, equipping African teenagers with the latest skills in ICT, AI, and blockchain. Our goal is to foster a culture of innovation that can address the unique Technological challenges of our Continent."
        },
        {
            pic: excellence,
            heading: "INCLUSIVITY",
            write: "We believe in the power of inclusivity. Our programs are designed to be accessible to teenagers across the continent through online and onsite, regardless of background or culture. By promoting equal opportunities, we aim to bridge the digital divide and ensure everyone has the chance to benefit from technology education."
        },
    ]

    const showValues = ourValues.map((each)=> {
        const styler = {
            background: `url(${each.pic})`,
            backgroundSize: `200px`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
        }

        return  <div className="values-box">
        <div className="values-icon" style={styler}></div>
        <h1>{each.heading}</h1>
        <p>{each.write}</p>
        
    </div>  
    })

    return (
        <div className="our-values">
            <div className="values-head">
                <h1>OUR VALUES</h1>
                <p>Our values guide everything we do.
                    They demonstrate our dedication to empowering African teenagers throughout the continent and transforming communities through technology education and skill development.</p>
            </div>
            <div className="values-container">
              {showValues}
            </div>
        </div>
    )
}

export default OurValues;