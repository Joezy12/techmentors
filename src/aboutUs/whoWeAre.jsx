import who1 from "../../public/who1.jpg"
import who2 from "../../public/who2.jpg"

function WhoWeAre() {

    const whoPic1 = {
        width: "100%",
        height: "300px",
        background: `url(${who1})`,
        backgroundSize: "cover",
    }

    const whoPic2 = {
        width: window.innerWidth < 900 ? "100%": "400px",
        height: "200px",
        background: `url(${who2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <div className="who-we-are">
            <div className="who-head">
               <h1> <span>Who</span> We Are</h1>
            </div>

            <div className="who-content">
                <div className="who-left">
                    <div className="who-left-content">
                        <h1>MISSION</h1>
                        <p>The foundation’s mission is to empower African teenagers within the ages of 13 to 18 years with cutting-edge information and communications technology, artificial intelligence and blockchain skills while encouraging creativity, teamwork, and moral tech Leadership across the continent through tech education, mentorship, and networking that cultivate excellence and contribute to the advancement of Africa's tech landscape</p>
                    </div>
                    <div className="who-left-content vision">
                        <h1>VISION</h1>
                        <p>To equip African teenagers with the right technological knowledge and skills which is not only required to succeed in the tech industry, but to lead, innovate and positively impact their communities.</p>
                    </div>
                </div>
                <div className="who-right">
                    <div className="who-pic1" style={whoPic1}></div>
                    <div className="who-pic2" style={whoPic2}></div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;