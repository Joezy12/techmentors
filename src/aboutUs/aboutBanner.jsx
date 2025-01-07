import group from '../../public/group.jpg'

function AboutBanner() {

    const banner = {
        background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${group})`,
        backgroundSize: `cover`,
        
    }

    return (
        <div className="about-banner" style={banner}>
            <div className="about-inner">
                <h1>About Us</h1>
                <p>Welcome to Techmentors Skills Empowerment Foundation, a revolutionary Nonprofit Organization (NPO), that is committed to providing Technology Education, Artificial Intelligence,  Information and Communications Technologies (ICT) skills development for the African teenagers especially the girl child. </p>
            </div>
        </div>
    )
}

export default AboutBanner;