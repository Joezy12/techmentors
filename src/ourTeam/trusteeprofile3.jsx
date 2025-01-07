import trustee2 from '../../public/trustee2.jpeg'


function TrusteeProfile3() {
    const pStyle = {
        background: `url(${trustee2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
     return (
        <section className="trustee-profiles">
            <div className="p-content">
                <div className="p-pic" style={pStyle}>

                </div>
                <div className="p-name">
                    <h1>Nwaeke Chioma</h1>
                </div>
            </div>
            <div className="p-write-up">
                <p>Nwaeke Chioma Augustina is a visionary leader with a passion for transforming lives through education and technology. With a background in media and legal matters, she brings a wealth of experience to our foundation. Throughout her career, she has championed initiatives that bridge the digital divide and empower young minds in Africa.<br /><br /> She has served and held various positions in both media and law enforcement agency, including Don Pedro mediator or the Nigeria local content program under the Nigerian Content Development and Monitoring Board (NCDMB), the National Agency for the Prohibition of Trafficking in Persons and Other Related Matters (NAPTIP) and NEXPORTRADE Houses.Her inspiration to collaborate and empower African teenagers stems from her belief in their potential to shape a brighter future with the help of technology using her experience in education. <br /><br />She is dedicated to providing the necessary skills, support, mentorship, and opportunities to help teenagers realize their full potential and become positive change agents in their communities. Her commitment to this cause reflects her passion for creating a more empowered and enlightened future for the next generation in Africa. As the Executive Director of Legal Compliance, Brand Management, and Communication at Techmentors Skills Empowerment Foundation, she ensures that the foundation's operations comply with all relevant laws, regulations, and ethical standards. She is also responsible for developing and implementing a comprehensive brand strategy that aligns with the foundation's mission and values.</p>
            </div>
            <div className="team-socials">
                <div className="social-1">
                    <i className="bi-twitter"></i>
                </div>
                <div className="social-2">
                    <i className="bi-instagram"></i>
                </div>
                <div className="social-3">
                    <i className="bi-envelope"></i>
                </div>
            </div>

        </section>
     )
}


export default TrusteeProfile3;