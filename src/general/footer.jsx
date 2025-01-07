import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className="footer">
            <div className="foot">
               <h1 className="logo-here">Techmentors</h1>
               <p>
                <br />
               </p>
               <p>info@tsefoundation.org</p>
               <p>Tel: +234 905 911 7629</p>
               <p>+234 903 522 6847</p>
               <p>2 Adolf Casia Estate, Abijo GRA, Lekki, Lagos</p>
            </div>
            <div className="foot">
               <h1>Techmentors</h1>
             <NavLink to=".." className="lin" onClick={scrollToTop}>  <p>Home</p> </NavLink>
             <NavLink to="about" className="lin" onClick={scrollToTop}>   <p>About Us</p> </NavLink>
               <p>Donate</p>
               <NavLink to="contact" className="lin" onClick={scrollToTop}>   <p>Contact us</p> </NavLink>
            </div>
            
            <div className="foot">
               <h1>Events</h1>
               <Link to="tsef" className="lin" onClick={scrollToTop}>   <p>Tech4teens Bootcamp</p></Link>
               <NavLink to="tsef2" className="lin" onClick={scrollToTop}>  <p>Girls Techsters</p></NavLink>
               <NavLink to="tsef3" className="lin" onClick={scrollToTop}> <p>Basic Digital Literacy For Vunerable African Teens</p></NavLink>
               <NavLink to="tsef4" className="lin" onClick={scrollToTop}> <p>Blockchain Innovation For Young Africans</p></NavLink>
               <NavLink to="tsef5" className="lin" onClick={scrollToTop}>  <p>Future Coders Africa</p></NavLink>
              

            </div>

            <div className="foot socials-icon">
                <h1>Follow</h1>
               <div className="social-split">
               <a href="https://www.facebook.com/groups/513455866917677/permalink/826848162245111/?mibextid=K35XfP"><i className="bi-facebook"></i> </a>
              <a href="https://www.instagram.com/techmentorsfoundation?igsh=b3IwamtkbWt0NWRo"><i className="bi-instagram"></i></a> 
               </div>
            </div>
        </div>
    )
}

export default Footer;