import trustee1 from '../../public/trustee1.jpeg'


function TrusteeProfile2() {
    const pStyle = {
        background: `url(${trustee1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
     return (
        <section className="trustee-profiles">
            <div className="p-content">
                <div className="p-pic" style={pStyle}>

                </div>
                <div className="p-name">
                    <h1>Isreal Akpan</h1>
                </div>
            </div>
            <div className="p-write-up">
                <p>Israel Akpan is a dynamic Business Manager and Turnaround Specialist with over two decades of extensive experience in Human Resource and General Logistics Consulting. Throughout his illustrious career, he has held various leadership positions in both national and multinational organizations, including Carlson Wagonlit Travel, Federal Express, and Shell Petroleum Development Company (SPDC). In these roles, he has significantly contributed to strategic growth and profitability through his commitment to team collaboration, goal orientation, and results driven strategies. Motivation to support and empower African teenagers stems from his profound belief in the potential of young people to transform their communities and the world through technology. <br /><br />He is dedicated to providing the necessary skills, mentorship, and opportunities that enable teenagers to realize their full potential and become catalysts for positive change in Africa. His commitment to this cause is a testament to his passion for creating a brighter, more empowered future for the next generation. His expertise spans Training, Learning, Coaching, Mentoring, and Human Resource Management, reflecting a comprehensive understanding of business operations and personnel development. As the Executive Director of Operations, Human Resources, General Administration, and Quality Assurance at Techmentor Skills Empowerment Foundation, he drives operational excellence, oversees human resource functions, manages general administration, and ensures quality assurance across all aspects of the organization.</p>
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


export default TrusteeProfile2;