

function Contact() {
  return (
    <div className="contact">
      <div className="contact-banner">
        <h1>CONTACT US</h1>
      </div>

      <div className="touch">
        <div className="touch-head">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="touch-container">
          <div className="touch-box">
            <div className="touch-icon"><i className="bi-geo-alt-fill"></i></div>
            <h1>ADDRESS</h1>
            <h3>Techmentors Foundation</h3>
            <p>41, nowhere Road,<br />Centennial, CO 80112</p>
          </div>

          <div className="touch-box">
            <div className="touch-icon"><i className="bi-telephone"></i></div>
            <h1>PHONE</h1>
            <h3>Techmentors Foundation</h3>
            <p>+234 905 911 7629<br />+234 903 522 6847</p>
          </div>

          <div className="touch-box">
            <div className="touch-icon"><i className="bi-chat-left-dots-fill"></i></div>
            <h1>CHAT</h1>
            <h3>Techmentors Foundation</h3>
            <p>E-mail: info@techmentorsskills<br />
            empowermentfoundation.org</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;