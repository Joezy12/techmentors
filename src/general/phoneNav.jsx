import logo from '../../public/logo.jpeg'

function PhoneNav() {
    return (
        <div className="phone-nav">
            <div className="top-phone-nav">
                <div className="phone-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="side-nav">
                    <i className="bi-list"></i>
                </div>
            </div>
        </div>
    )
}

export default PhoneNav;