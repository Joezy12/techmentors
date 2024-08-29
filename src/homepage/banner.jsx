


function Banner(props) {

    return (
        <div className="banner">
            <div className="top-banner">
                <div className="t-b-left">
                    <h1>EMPOWERING THE NEXT AFRICAN TECH LEADERS ACROSS THE CONTINENT</h1>
                    <p></p>
                </div>
                <div className="t-b-right">
                  <p>watch what we can do</p>
                  <div className="play" onClick={props.openVideo}>
                    <i className="bi-caret-right-fill"></i>
                  </div>
                </div>
            </div>

            <div className="bottom-banner">
              <div className="b-banner">
                <h1>1,000+</h1>
                <p>african youth funded</p>
              </div>
              <div className="b-banner">
                <h1>2,500</h1>
                <p>Young Africans empowered with <br  />
access to training</p>
              </div>
              <div className="b-banner">
                <h1>4</h1>
                <p>african countries <br />touched</p>
              </div>
            </div>
            
        </div>
    )
}

export default Banner;