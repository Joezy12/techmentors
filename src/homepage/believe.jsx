import group from '../../public/group.jpg';

function Believe() {

    const believeStyle = {
        background: `url(${group})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
    }


    return (
        <div className="believe">
           <div className="believe-left">
               
               <p>The Techmentors Skills Empowerment Foundation is a revolutionary nonprofit organization (NPO), that is committed to providing general Technology Education, Artificial Intelligence,  Information and Communications Technologies (ICT) skills development for the African teenagers especially the girl child. 
We believe that every African teenager deserves access to quality technology education and chances for professional development in the rapidly changing digital environment. Our mission is to bridge the digital gap by empowering African teenagers, especially the girl child, underserved and marginalized communities with knowledge they need to succeed in the technologically driven world of today.</p>
           </div>
           <div className="believe-right" style={believeStyle}>
 
           </div>
        </div>
    )
}

export default Believe;