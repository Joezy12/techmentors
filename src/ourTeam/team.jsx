import trustee1 from '../../public/trustee1.jpeg'
import trustee2 from '../../public/trustee2.jpeg'
import trustee3 from '../../public/trustee3.jpeg'
import trustee4 from '../../public/trustee4.jpeg'
import trustee5 from '../../public/trustee5.jpeg'



function Team() {

    const teamPic1 = {
        background: `url(${trustee1})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic2 = {
        background: `url(${trustee2})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic3 = {
        background: `url(${trustee3})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic4 = {
        background: `url(${trustee4})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic5 = {
        background: `url(${trustee5})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }





    return (
        <div className="team">
            <div className="team-top">
                <div className="t-top-left">
                    <p>MEET</p>
                    <h1>
                    OUR TEAM OF TRUSTEES
                    </h1>
                </div>
                <div className="t-top-right">
                    <p>Our team of experienced professionals is dedicated to providing you with the highest level of service. From property management to maintenance, we are here to assist you every step of the way. Our goal is to make your rental experience as smooth and stress-free as possible.</p>
                </div>
            </div>

            <div className="team-bottom">
                <div className="team-box">
                    <div className="team-pic" style={teamPic1}></div>
                    <div className="team-info">
                        <h2>John Smith</h2>
                        <p>Property Manager</p>
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
                </div>

                <div className="team-box">
                    <div className="team-pic t-pic2" style={teamPic2}></div>
                    <div className="team-info">
                        <h2>Emily Jones</h2>
                        <p>Property Manager</p>
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
                </div>

                <div className="team-box">
                    <div className="team-pic t-pic3"style={teamPic3}></div>
                    <div className="team-info">
                        <h2>David Brown</h2>
                        <p>Property Manager</p>
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
                </div>
            </div>


            <div className="team-bottom">
                <div className="team-box">
                    <div className="team-pic" style={teamPic4}></div>
                    <div className="team-info">
                        <h2>John Smith</h2>
                        <p>Property Manager</p>
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
                </div>

                <div className="team-box">
                    <div className="team-pic t-pic2" style={teamPic5}></div>
                    <div className="team-info">
                        <h2>Emily Jones</h2>
                        <p>Property Manager</p>
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
                </div>

                <div className="team-box">
                    <div className="team-pic t-pic3"style={teamPic3}></div>
                    <div className="team-info">
                        <h2>David Brown</h2>
                        <p>Property Manager</p>
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
                </div>
            </div>
        </div>
    )
}

export default Team;